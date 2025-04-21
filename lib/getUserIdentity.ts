import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export const getUserIdentity = async (userId: string) => {
  // Get user id from clerk
  const { userId: AuthUserId } = await auth();

  // Get user id from prisma
  const user = AuthUserId
    ? await prisma.user.findUnique({
        where: { userId: AuthUserId },
        select: { id: true, isAdmin: true, isActive: true },
      })
    : null;

  // Check if the user is the same as the one in the request
  const status = user ? user?.id === Number(userId) : false;

  return {
    authStatus: status,
    id: user?.id,
    isAdmin: user?.isAdmin,
    isActive: user?.isActive,
    userId: AuthUserId,
  };
};
