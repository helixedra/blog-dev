import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import { User } from "@/generated/prisma";

export const getAuthenticatedUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = (await prisma.user.findFirst({
    where: {
      id: String(userId),
    },
    select: {
      id: true,
      isAdmin: true,
      isActive: true,
      name: true,
      username: true,
    },
  })) as User | null;

  if (!user) {
    throw new Error("User not found");
  }

  return {
    user,
    userId: user.id,
    isAdmin: user.isAdmin,
    isActive: user.isActive,
  };
};
