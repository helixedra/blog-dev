import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

// Update notification status
export async function PATCH(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await getAuthenticatedUser();
    // Get notification data from request
    const { ids } = await request.json();

    // Update notification in database
    const notification = await prisma.notification.updateMany({
      where: {
        id: {
          in: ids.map(Number),
        },
        userId: String(userId),
      },
      data: {
        read: true,
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
