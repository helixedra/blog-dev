"use client";
import { useEffect } from "react";
import { api } from "@/lib/api";
import Spinner from "@/components/shared/Spinner";
export default function RegisterPage() {
  useEffect(() => {
    api.post("register", {}).then(async (res) => {
      const data = await res.json();
      if (data.success) {
        window.location.href = "/";
      }
    });
  }, []);
  return <Spinner />;
}
