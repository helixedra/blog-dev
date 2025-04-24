import { auth } from "@clerk/nextjs/server";
import { getUserIdentity } from "@/lib/getUserIdentity";

export const getAuthenticatedUser = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await getUserIdentity(userId);
  if (!user?.id) {
    throw new Error("User not found");
  }

  return { user, userId: user.id };
};
