import type { HTMLAttributes, ReactNode } from "react";
import "./card.css";

type CardVariant = "default" | "inverted";

export type CardProps = HTMLAttributes<HTMLElement> & {
  variant?: CardVariant;
  eyebrow?: string;
  title?: string;
  description?: string;
  tags?: string[];
  children?: ReactNode;
};

export function Card({
  variant = "default",
  eyebrow,
  title,
  description,
  tags,
  className,
  children,
  ...rest
}: CardProps) {
  const classes = ["lsn-card", `lsn-card--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes} {...rest}>
      {eyebrow ? <p className="lsn-card__eyebrow">{eyebrow}</p> : null}
      {title ? <h3 className="lsn-card__title">{title}</h3> : null}
      {description ? <p className="lsn-card__description">{description}</p> : null}
      {tags?.length ? (
        <div className="lsn-card__tags" aria-label="Card tags">
          {tags.map((tag) => (
            <span key={tag} className="lsn-card__tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      {children}
    </article>
  );
}
