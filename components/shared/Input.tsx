import React, { forwardRef } from "react";
import { Theme } from "./Theme";

interface AccessibleInputProps {
  label?: string;
  error?: string | boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, AccessibleInputProps>(
  (
    {
      label,
      error,
      helperText,
      required = false,
      disabled = false,
      name,
      type = "text",
      placeholder,
      value,
      onChange,
      onBlur,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const hasError = typeof error === "string" ? error : Boolean(error);
    const ariaInvalid = hasError ? "true" : "false";
    const ariaDescribedBy = [];

    if (helperText) {
      ariaDescribedBy.push(`input-helper-${name}`);
    }
    if (hasError) {
      ariaDescribedBy.push(`input-error-${name}`);
    }

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-zinc-600"
          >
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          aria-invalid={ariaInvalid}
          defaultValue={defaultValue}
          aria-describedby={
            ariaDescribedBy.length > 0 ? ariaDescribedBy.join(" ") : undefined
          }
          className={`${Theme.border} ${Theme.px} ${
            Theme.py
          } text-black block w-full ${Theme.borderRadius} ${
            Theme.textSize
          } focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            hasError
              ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
              : ""
          } ${disabled ? "bg-gray-50 cursor-not-allowed" : ""}`}
          {...props}
        />
        {helperText && (
          <p id={`input-helper-${name}`} className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
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
