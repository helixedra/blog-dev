"use client";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useUserData = () => {
  // query to get user data by userId
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await api.get(`user`);
      return response.json();
    },
    enabled: !!userId,
    staleTime: 0,
  });

  return {
    registeredUserId: data?.id,
    isRegisteredUser: !!data?.id,
    data,
    isLoading,
    error,
  };
};
