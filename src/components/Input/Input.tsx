import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import "./input.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
  error?: string;
};

export function Input({
  label,
  helperText,
  error,
  className,
  id,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  const inputClasses = ["lsn-input", error ? "lsn-input--error" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="lsn-field">
      <label className="lsn-field__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={inputClasses}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        {...rest}
      />
      {helperText ? (
        <p id={helperId} className="lsn-field__helper">
          {helperText}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="lsn-field__error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
