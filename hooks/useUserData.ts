"use client";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import prisma from "@/lib/prisma";

export const useUserData = (userId: string) => {
  const { userId: authUserId } = useAuth();

  const { data } = useQuery({
    queryKey: ["user", authUserId],
    queryFn: async () => {
      const response = await prisma.user.findUnique({
        where: {
          userId: authUserId ?? undefined,
        },
        select: {
          id: true,
        },
      });
      return response;
    },
    enabled: !!authUserId,
  });

  const registeredUserId = Number(data?.id) === Number(userId);
  const isRegisteredUser = !!data?.id;

  return { registeredUserId, isRegisteredUser };
};
