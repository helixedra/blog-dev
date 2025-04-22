import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function handleAuth() {
  const { userId } = await auth();

  if (!userId) return { status: "not_authenticated" };

  const user = await currentUser();
  if (!user) return { status: "user_not_found" };

  const existingUser = await prisma.user.findUnique({ where: { userId } });
  if (existingUser) return { status: "already_registered" };

  try {
    let baseUsername =
    user.username || user.firstName
      ? `${(user.firstName || "").toLowerCase()}${(
          user.lastName || ""
        ).toLowerCase()}`
      : `user-${new Date().getTime()}`;
  let username = baseUsername;
  let counter = 1;

  while (await prisma.user.findUnique({ where: { username } })) {
    username = `${baseUsername}_${counter++}`;
  }

  await prisma.user.create({
    data: {
      userId,
      fullName: `${user.firstName || ""} ${user.lastName || ""}`,
      username,
      email: user.emailAddresses[0]?.emailAddress || "",
      isActive: true,
      isAdmin: false,
      avatarUrl: user.imageUrl || "",
      bio: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  } catch (error) {
    throw new Error((error as Error).message);
  }
  

  return { status: "created" };
}
