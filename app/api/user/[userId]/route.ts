import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

const userSchema = z.object({
  username: z.string().min(2).max(100),
  name: z.string().min(2).max(100),
  bio: z.string().max(1000).optional(),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  // const { userId } = await getAuthenticatedUser();
  const { userId } = await params;

  const validatedUserId = z.string().safeParse(userId);

  if (!validatedUserId.success) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: String(userId),
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", (error as any).message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const { userId } = await getAuthenticatedUser();

  const { userId: targetUserId, username, name, bio } = await request.json();

  if (!userId || userId !== targetUserId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const validatedData = userSchema.safeParse({
    username,
    name,
    bio,
  });

  if (!validatedData.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    const user = await prisma.user.update({
      where: {
        id: String(userId),
      },
      data: {
        username,
        name,
        bio,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
