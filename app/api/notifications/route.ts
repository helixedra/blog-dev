import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await getAuthenticatedUser();
    // Return 401 if user is not authenticated
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get notifications from database
    const notifications = await prisma.notification.findMany({
      where: { userId: Number(userId) },
      include: {
        relatedPost: true,
        relatedUser: {
          select: {
            id: true,
            username: true,
            avatarUrl: true,
            fullName: true,
          },
        },
        relatedComment: true,
      },
      orderBy: { createdAt: "desc" },
    });
    // Return notifications
    return NextResponse.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", (error as any).message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

const notificationScheme = z.object({
  title: z.string(),
  message: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await getAuthenticatedUser();
    // Return 401 if user is not authenticated
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get notification data from request
    const { title, message } = await request.json();

    // Validate notification data
    const validatedData = notificationScheme.parse({
      title,
      message,
    });

    // Return 400 if data is invalid
    if (!validatedData.title || !validatedData.message) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    // Create notification in database

    const notification = await prisma.notification.create({
      data: {
        userId: Number(userId),
        title: validatedData.title,
        message: validatedData.message,
      },
    });
    // Return notification
    return NextResponse.json(notification);
  } catch (error) {
    console.error("Error creating notification:", (error as any).message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

const notificationStatusScheme = z.object({
  read: z.boolean(),
});
// Update notification status
export async function PUT(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await getAuthenticatedUser();
    // Return 401 if user is not authenticated
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get notification data from request
    const { read } = await request.json();

    // Validate notification data
    const validatedData = notificationStatusScheme.parse({
      read,
    });

    // Return 400 if data is invalid
    if (!validatedData.read) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    // Update notification in database

    const notification = await prisma.notification.update({
      where: { id: Number(userId) },
      data: {
        read: validatedData.read,
      },
    });
    // Return notification
    return NextResponse.json(notification);
  } catch (error) {
    console.error("Error updating notification:", (error as any).message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
