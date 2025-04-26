import prisma from "@/lib/prisma";

export const generateUsername = (email: string) => {
  return email.split("@")[0] + new Date().getTime();
};

export const insertUsername = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        username: generateUsername(user.email),
      },
    });
  } catch (error) {
    throw error;
  }
};
