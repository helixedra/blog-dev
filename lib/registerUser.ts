import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function registerUserIfNeeded() {
  const { userId } = await auth();
  if (!userId) return;
    try {
      // Check if user exists in database
      const existingUser = await prisma.user.findUnique({
        where: { userId },
      });
  
      if (!existingUser) {
        // Get user data from Clerk
        const user = await currentUser();
  
        if (!user) return;
  
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
        while (await prisma.user.findUnique({ where: { username } })) {
          username = `${baseUsername}_${counter++}`;
        }
  
        // Create new user in database
        await prisma.user.create({
          data: {
            userId,
            fullName: `${user.firstName || ""} ${user.lastName || ""}`,
            username,
            email: user.emailAddresses[0]?.emailAddress || "",
            passwordHash: "",
            isActive: true,
            isAdmin: false,
            avatarUrl: user.imageUrl || "",
            bio: "",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }