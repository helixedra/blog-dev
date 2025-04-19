import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 401 });
    }

    const existingUser = await prisma.user.findUnique({ where: { userId } });

    if (existingUser) {
      return NextResponse.json({ success: true, message: "User already registered" });
    }

    let baseUsername = user.username || user.id.toString().replace("user_", "");
    let username = baseUsername;
    let counter = 1;

    while (await prisma.user.findUnique({ where: { username } })) {
      username = `${baseUsername}_${counter++}`;
    }

    await prisma.user.create({
      data: {
        userId,
        fullName: `${user.firstName || ""} ${user.lastName || ""}`,
        username,
        email: user.emailAddresses[0]?.emailAddress || "",
        passwordHash: "",
        isActive: true,
        isAdmin: false,
        avatarUrl: user.imageUrl || "",
        bio: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, message: "User successfully registered" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error registering user", error: error?.toString() }, { status: 500 });
  }
}