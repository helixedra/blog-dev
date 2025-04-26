import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import { User } from "@/generated/prisma";

export async function getUser() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id || null;

  if (!userId) {
    return { user: null, userId: null, isAdmin: false, isActive: false };
  }

  const user = (await prisma.user.findUnique({
    where: {
      id: String(userId),
    },
    select: {
      id: true,
      isAdmin: true,
      isActive: true,
      name: true,
      username: true,
      email: true,
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
}
