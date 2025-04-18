import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export default async function UserRegistration() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) return null;

    // Check if user exists in database
    const existingUser = await prisma.users.findUnique({
      where: { user_id: userId },
    });

    if (!existingUser) {
      // Get the base username from user data
      let baseUsername = user.username;

      // If username is empty or null, generate from email
      if (!baseUsername) {
        const generatedUsername = user.id.toString().replace("user_", "");
        baseUsername = `${generatedUsername}`;
      }

      // Generate a unique username
      let username = baseUsername;
      let counter = 1;

      // Check if username exists and generate a unique one
      while (await prisma.users.findUnique({ where: { username } })) {
        username = `${baseUsername}_${counter++}`;
      }

      // Create new user in database
      await prisma.users.create({
        data: {
          user_id: userId,
          full_name: `${user.firstName || ""} ${user.lastName || ""}`,
          username,
          email: user.emailAddresses[0]?.emailAddress || "",
          password_hash: "",
          is_active: true,
          is_admin: false,
          avatar_url: user.imageUrl || "",
          bio: "",
          created_at: new Date(),
          updated_at: new Date(),
        },
      });
    }
  } catch (error) {
    console.error("Error registering user:", error);
  }

  return null; // This component only handles registration, no UI needed
}
