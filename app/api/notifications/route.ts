import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Notification as NotificationType } from "@/generated/prisma";

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    const userId = session?.user?.id;
    // Return 401 if user is not authenticated
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get notifications from database
    const notifications = await prisma.notification.findMany({
      where: { userId: String(userId) },
      include: {
        relatedPost: true,
        relatedUser: {
          select: {
            id: true,
            username: true,
            image: true,
            name: true,
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
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    const userId = session?.user?.id;
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
        userId: String(userId),
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
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    const userId = session?.user?.id;
    // Return 401 if user is not authenticated
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get notification data from request
    const { notificationId, read } = await request.json();

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
      where: { id: Number(notificationId) },
      data: {
        read: Boolean(validatedData.read),
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
