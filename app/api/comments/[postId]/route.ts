import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;

  const comments = await prisma.comment.findMany({
    where: {
      postId: Number(postId), // Use Number only if postId is an integer in your Prisma schema
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json({ comments });
}
