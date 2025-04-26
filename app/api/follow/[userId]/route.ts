import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/getAuthenticatedUser";

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const { userId, user } = await getAuthenticatedUser();
    // Return 401 if user is not authenticated
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // Get follow data from request
    const { followId: targetUserId, byUserId: initiatorUserId } =
      await request.json();

    if (!targetUserId || !initiatorUserId) {
      return new NextResponse("Missing targetUserId or initiatorUserId", {
        status: 400,
      });
    }

    // Get the initiator and target users
    const targetUser = await prisma.user.findUnique({
      where: { id: String(targetUserId) },
    });

    if (!targetUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    // User follow records for both users
    //Initiator
    const initiator = await prisma.follow.findUnique({
      where: { userId: String(initiatorUserId) },
    });
    //Target
    const target = await prisma.follow.findUnique({
      where: { userId: String(targetUserId) },
    });

    const isFollowing = initiator?.userFollows.includes(String(targetUserId));

    // Transaction: update userFollows of initiator, userFollowers of target, and counters
    await prisma.$transaction([
      // 1. Update initiator (userFollows)
      initiator
        ? prisma.follow.update({
            where: { id: initiator.id },
            data: {
              userFollows: isFollowing
                ? {
                    set: initiator.userFollows.filter(
                      (id) => id !== String(targetUserId)
                    ),
                  }
                : { push: String(targetUserId) },
            },
          })
        : prisma.follow.create({
            data: {
              user: { connect: { id: String(initiatorUserId) } },
              userFollows: [String(targetUserId)],
              userFollowers: [],
            },
          }),

      // 2. Update target (userFollowers)
      target
        ? prisma.follow.update({
            where: { id: target.id },
            data: {
              userFollowers: isFollowing
                ? {
                    set: target.userFollowers.filter(
                      (id) => id !== String(userId)
                    ),
                  }
                : { push: String(userId) },
            },
          })
        : prisma.follow.create({
            data: {
              user: { connect: { id: targetUser.id } },
              userFollows: [],
              userFollowers: [String(userId)],
            },
          }),

      // 3. Update counters
      prisma.user.update({
        where: { id: String(userId) },
        data: {
          followingCount: { increment: isFollowing ? -1 : 1 },
        },
      }),
      prisma.user.update({
        where: { id: targetUser.id },
        data: {
          followersCount: { increment: isFollowing ? -1 : 1 },
        },
      }),
    ]);

    // 4. Add notification for target user
    await prisma.notification.create({
      data: {
        userId: String(targetUserId),
        title: "New Follower",
        relatedUserId: String(initiatorUserId),
        message: `started following you`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error following user:", (error as any).message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
