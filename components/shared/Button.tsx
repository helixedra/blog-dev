import React, { forwardRef } from "react";
import { Theme } from "./Theme";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  name?: string;
  value?: string;
  [key: string]: any; // Allow any other props
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = "button",
      onClick,
      disabled = false,
      className,
      variant = "default",
      size = "md",
      name,
      value,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: Theme.button.default,
      outline: Theme.button.outline,
      ghost: Theme.button.ghost,
    };
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        name={name}
        value={value}
        className={`${variants[variant as keyof typeof variants]} ${
          Theme.ButtonSize[size as keyof typeof Theme.ButtonSize]
        } inline-flex items-center justify-center cursor-pointer ${
          Theme.borderRadius
        } ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
