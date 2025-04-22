import React from "react";
import { SignIn } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export default async function SignInPage() {
  const { userId } = await auth();
  if (userId) {
    const user = await currentUser();

    if (!userId || !user) {
      return (
        <div className="flex items-center justify-center mt-16">
          User not found
        </div>
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { userId } });

    if (existingUser) {
      return (
        <div className="flex items-center justify-center mt-16">
          User already registered
        </div>
      );
    }

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
  return (
    <div className="flex items-center justify-center mt-16">
      <SignIn />
    </div>
  );
}
