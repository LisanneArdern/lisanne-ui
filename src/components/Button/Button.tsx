import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./button.css";

type ButtonVariant = "primary" | "secondary";

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  const classes = ["lsn-button", `lsn-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
}
