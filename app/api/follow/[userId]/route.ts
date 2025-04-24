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
    const { followId, byUserId } = await request.json();

    if (!followId || !byUserId) {
      return new NextResponse("Missing followId or byUserId", { status: 400 });
    }

    // Get the initiator and target users
    const targetUser = await prisma.user.findUnique({
      where: { id: Number(followId) },
    });

    if (!targetUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    // User follow records for both users
    const userFollow = await prisma.follow.findUnique({
      where: { userId: Number(userId) },
    });
    const targetFollow = await prisma.follow.findUnique({
      where: { userId: Number(followId) },
    });

    const isFollowing = userFollow?.userFollows.includes(Number(followId));

    // Transaction: update userFollows of initiator, userFollowers of target, and counters
    await prisma.$transaction([
      // 1. Update initiator (userFollows)
      userFollow
        ? prisma.follow.update({
            where: { id: userFollow.id },
            data: {
              userFollows: isFollowing
                ? {
                    set: userFollow.userFollows.filter(
                      (id) => id !== Number(followId)
                    ),
                  }
                : { push: Number(followId) },
            },
          })
        : prisma.follow.create({
            data: {
              user: { connect: { id: Number(userId) } },
              userFollows: [Number(followId)],
              userFollowers: [],
            },
          }),

      // 2. Update target (userFollowers)
      targetFollow
        ? prisma.follow.update({
            where: { id: targetFollow.id },
            data: {
              userFollowers: isFollowing
                ? {
                    set: targetFollow.userFollowers.filter(
                      (id) => id !== Number(userId)
                    ),
                  }
                : { push: Number(userId) },
            },
          })
        : prisma.follow.create({
            data: {
              user: { connect: { id: targetUser.id } },
              userFollows: [],
              userFollowers: [Number(userId)],
            },
          }),

      // 3. Update counters
      prisma.user.update({
        where: { id: Number(userId) },
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
        userId: Number(followId),
        title: "New Follower",
        relatedUserId: Number(userId),
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
