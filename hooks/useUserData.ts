"use client";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useAuth } from "@clerk/nextjs";

export const useUserData = () => {
  const { userId } = useAuth();
  // query to get user data by userId
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await api.get(`/user/${userId}`);
      return response.json();
    },
    enabled: !!userId,
    refetchOnWindowFocus: false,
  });

  return {
    registeredUserId: data?.id,
    isRegisteredUser: !!data?.id,
    data,
    isLoading,
    error,
  };
};