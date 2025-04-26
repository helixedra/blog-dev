import prisma from "@/lib/prisma";

export const getUserIdentity = async (authUserId: string) => {
  let response = null;

  if (authUserId) {
    try {
      response = await prisma.user.findUnique({
        where: { id: String(authUserId) },
        select: {
          id: true,
          isAdmin: true,
          isActive: true,
          name: true,
          username: true,
        },
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      throw new Error("Failed to fetch user");
    }
  }

  return {
    id: response?.id,
    isAdmin: response?.isAdmin,
    isActive: response?.isActive,
    name: response?.name,
    username: response?.username,
    userId: authUserId,
  };
};
