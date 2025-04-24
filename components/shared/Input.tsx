import React, { forwardRef } from "react";
import { Theme } from "./Theme";
import { twMerge } from "tailwind-merge";

interface AccessibleInputProps {
  label?: string;
  error?: string | boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  size?: "xs" | "sm" | "md" | "lg";
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  defaultValue?: string;
  iconBefore?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, AccessibleInputProps>(
  (
    {
      label,
      error,
      helperText,
      size = "md",
      required = false,
      disabled = false,
      name,
      type = "text",
      placeholder,
      onChange,
      onBlur,
      iconBefore,
      ...props
    },
    ref
  ) => {
    const hasError = typeof error === "string" ? error : Boolean(error);
    const ariaInvalid = hasError ? "true" : "false";
    const ariaDescribedBy = [];

    if (hasError) {
      ariaDescribedBy.push(`input-error-${name}`);
    }

    return (
      <div className="space-y-1 relative w-full">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-zinc-600"
          >
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}
        {iconBefore && (
          <div className="absolute inset-y-0 top-1 left-0 pl-3 flex items-center pointer-events-none">
            {iconBefore}
          </div>
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          aria-invalid={ariaInvalid}
          {...props}
          aria-describedby={
            ariaDescribedBy.length > 0 ? ariaDescribedBy.join(" ") : undefined
          }
          className={`${Theme.border} ${
            Theme.InputSize[size as keyof typeof Theme.InputSize]
          } text-black w-full ${Theme.borderRadius} ${
            iconBefore ? "pl-9" : ""
          } ${disabled ? "bg-gray-50 cursor-not-allowed" : ""} ${
            props.className
          }`}
        />
        {typeof error === "string" && (
          <p id={`input-error-${name}`} className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
