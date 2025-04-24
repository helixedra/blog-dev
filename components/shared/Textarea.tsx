"use client";
import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  useCallback,
} from "react";
import { Theme } from "./Theme";
import { twMerge } from "tailwind-merge";

interface AccessibleTextareaProps {
  label?: string;
  error?: string | boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
  placeholder?: string;
  maxLength?: number;
}

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  AccessibleTextareaProps
>(
  (
    {
      label,
      helperText,
      required = false,
      disabled = false,
      name,
      value,
      onChange,
      onBlur,
      rows = 1,
      className,
      placeholder,
      maxLength,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);

    // Auto resize
    const autoResize = useCallback(() => {
      const el = internalRef.current;
      if (el) {
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
      }
    }, []);

    useEffect(() => {
      autoResize(); // call on mount + on value change (controlled)
    }, [value, autoResize]);

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      autoResize(); // works for uncontrolled
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
    };

    return (
      <div className="space-y-1 w-full">
        {label && <Label label={label} required={required} name={name} />}
        <textarea
          ref={internalRef}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onInput={handleInput}
          onBlur={onBlur}
          disabled={disabled}
          rows={rows}
          placeholder={placeholder}
          maxLength={maxLength}
          className={twMerge(
            className,
            Theme.border,
            Theme.px,
            Theme.py,
            "text-black resize-none overflow-hidden block w-full",
            Theme.borderRadius,
            Theme.textSize,
            disabled ? "bg-gray-50 cursor-not-allowed" : ""
          )}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export function Label({
  label,
  required,
  name,
}: {
  label: string;
  required?: boolean;
  name: string;
}) {
  return (
    <label htmlFor={name} className="block text-sm font-medium text-zinc-400">
      {label}
      {/* {required && <span className="text-red-500">*</span>} */}
    </label>
  );
}
