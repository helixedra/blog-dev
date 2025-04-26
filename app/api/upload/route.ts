import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";
import { randomUUID } from "crypto";
import sharp from "sharp";
import prisma from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await getAuthenticatedUser();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const inputBuffer = Buffer.from(await file.arrayBuffer());

    // Resize and optimize the image
    const processedImage = await sharp(inputBuffer)
      .resize({ width: 500 })
      .jpeg({ quality: 80 })
      .toBuffer();

    const key = `avatars/${randomUUID()}.jpg`;

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET!,
        Key: key,
        Body: processedImage,
        ContentType: "image/jpeg",
      })
    );

    const publicUrl = `${process.env.R2_PUBLIC_URL}/${key}`;

    await prisma.user.update({
      where: { id: userId },
      data: { image: publicUrl },
    });

    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
