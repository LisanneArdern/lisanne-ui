import type { ElementType, HTMLAttributes, ReactNode } from "react";
import "./typography.css";

export type TypographyVariant =
  | "display"
  | "headline"
  | "title"
  | "eyebrow"
  | "lead"
  | "body"
  | "caption";

const defaultElement: Record<TypographyVariant, ElementType> = {
  display: "h1",
  headline: "h2",
  title: "h3",
  eyebrow: "p",
  lead: "p",
  body: "p",
  caption: "p"
};

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: TypographyVariant;
  as?: ElementType;
  children: ReactNode;
};

export function Typography({
  variant = "body",
  as,
  className,
  children,
  ...rest
}: TypographyProps) {
  const Element = as ?? defaultElement[variant];
  const classes = ["lsn-type", `lsn-type--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
}
