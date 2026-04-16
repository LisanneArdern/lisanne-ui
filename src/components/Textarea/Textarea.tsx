import { useId } from "react";
import type { TextareaHTMLAttributes } from "react";
import "./textarea.css";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  helperText?: string;
  error?: string;
};

export function Textarea({
  label,
  helperText,
  error,
  className,
  id,
  rows = 4,
  ...rest
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const helperId = helperText ? `${textareaId}-helper` : undefined;
  const errorId = error ? `${textareaId}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  const textareaClasses = [
    "lsn-textarea",
    error ? "lsn-textarea--error" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="lsn-field">
      <label className="lsn-field__label" htmlFor={textareaId}>
        {label}
      </label>
      <textarea
        id={textareaId}
        rows={rows}
        className={textareaClasses}
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
