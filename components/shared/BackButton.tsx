"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
  name?: string;
};

export default function BackButton({
  children,
  variant,
  className,
  size,
  ...rest
}: ButtonProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      variant="outline"
      className={className}
      size={size}
      {...rest}
    >
      {children}
    </Button>
  );
}
