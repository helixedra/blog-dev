import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export default async function UserRegistration() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) return;

    // Check if user exists in database
    const existingUser = await prisma.user.findUnique({
      where: { userId },
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
      return NextResponse.redirect(
        new URL("/", process.env.NEXT_PUBLIC_APP_URL)
      );
    }
  } catch (error) {
    console.error("Error registering user:", error);
  }

  return null; // This component only handles registration, no UI needed
}
