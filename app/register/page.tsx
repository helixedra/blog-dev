"use client";
import { useEffect } from "react";
import { api } from "@/lib/api";
import { RiLoader4Line } from "react-icons/ri";
export default function RegisterPage() {
  useEffect(() => {
    api.post("register", {}).then(async (res) => {
      const data = await res.json();
      if (data.success) {
        window.location.href = "/";
      }
    });
  }, []);
  return (
    <div className="flex items-center justify-center h-screen -mt-16">
      <div className="animate-spin">
        <RiLoader4Line size={48} />
      </div>
    </div>
  );
}
