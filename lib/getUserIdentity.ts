import prisma from "@/lib/prisma";

export const getUserIdentity = async (authUserId: string) => {
  // Get user id from clerk

  let response = null;

  if (authUserId) {
    try {
      response = await prisma.user.findUnique({
        where: { userId: String(authUserId) },
        select: {
          id: true,
          isAdmin: true,
          isActive: true,
          fullName: true,
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
    fullName: response?.fullName,
    username: response?.username,
    userId: authUserId,
  };
};
