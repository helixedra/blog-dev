import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  const { userId } = await auth();
  const { followId, byUserId } = await request.json();

  // Check authentication
  const authUser = await prisma.user.findUnique({
    where: { userId: userId! },
    select: { id: true },
  });
  if (!authUser || authUser.id !== byUserId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (!followId || !byUserId) {
    return new NextResponse("Missing followId or byUserId", { status: 400 });
  }

  // Get the initiator and target users
  const user = await prisma.user.findUnique({
    where: { id: byUserId },
  });
  const targetUser = await prisma.user.findUnique({
    where: { id: Number(followId) },
  });

  if (!user || !targetUser) {
    return new NextResponse("User not found", { status: 404 });
  }

  // User follow records for both users
  const userFollow = await prisma.follow.findUnique({
    where: { userId: user.id },
  });
  const targetFollow = await prisma.follow.findUnique({
    where: { userId: targetUser.id },
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
              ? { set: userFollow.userFollows.filter(id => id !== Number(followId)) }
              : { push: Number(followId) },
          },
        })
      : prisma.follow.create({
          data: {
            user: { connect: { id: user.id } },
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
              ? { set: targetFollow.userFollowers.filter(id => id !== user.id) }
              : { push: user.id },
          },
        })
      : prisma.follow.create({
          data: {
            user: { connect: { id: targetUser.id } },
            userFollows: [],
            userFollowers: [user.id],
          },
        }),

    // 3. Update counters
    prisma.user.update({
      where: { id: user.id },
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

  return NextResponse.json({ success: true });
}