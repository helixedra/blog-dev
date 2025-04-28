import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = await getAuthenticatedUser();

    // Get notification count from database
    const notification = await prisma.notification.count({
      where: {
        read: false,
        userId: String(userId),
      },
    });
    // Return notification count
    return NextResponse.json(notification);
  } catch (error) {
    console.error("Error updating notification:", (error as any).message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
