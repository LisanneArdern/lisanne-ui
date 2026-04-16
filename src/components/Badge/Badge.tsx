import type { HTMLAttributes, PropsWithChildren } from "react";
import "./badge.css";

type BadgeVariant = "new" | "beta" | "live" | "deprecated" | "draft";

export type BadgeProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    variant?: BadgeVariant;
  }
>;

export function Badge({
  children,
  variant = "new",
  className,
  ...rest
}: BadgeProps) {
  const classes = ["lsn-badge", `lsn-badge--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
