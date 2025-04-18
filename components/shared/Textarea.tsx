import React, { forwardRef } from "react";
import { Theme } from "./Theme";

interface AccessibleTextareaProps {
  label?: string;
  error?: string | boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
}

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  AccessibleTextareaProps
>(
  (
    {
      label,
      error,
      helperText,
      required = false,
      disabled = false,
      name,
      value,
      onChange,
      onBlur,
      rows = 4,
      className,
      ...props
    },
    ref
  ) => {
    const hasError = typeof error === "string" ? error : Boolean(error);
    const ariaInvalid = hasError ? "true" : "false";
    const ariaDescribedBy = [];

    if (helperText) {
      ariaDescribedBy.push(`textarea-helper-${name}`);
    }
    if (hasError) {
      ariaDescribedBy.push(`textarea-error-${name}`);
    }

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          rows={rows}
          aria-invalid={ariaInvalid}
          aria-describedby={
            ariaDescribedBy.length > 0 ? ariaDescribedBy.join(" ") : undefined
          }
          className={`${Theme.border} ${Theme.px} ${Theme.py} block w-full ${
            Theme.borderRadius
          } ${
            Theme.textSize
          } focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            hasError
              ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
              : ""
          } ${disabled ? "bg-gray-50 cursor-not-allowed" : ""}`}
          {...props}
        />
        {helperText && (
          <p
            id={`textarea-helper-${name}`}
            className="mt-1 text-sm text-gray-500"
          >
            {helperText}
          </p>
        )}
        {typeof error === "string" && (
          <p
            id={`textarea-error-${name}`}
            className="mt-1 text-sm text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
