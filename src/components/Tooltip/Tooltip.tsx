import {
  cloneElement,
  isValidElement,
  useId,
  useState
} from "react";
import type { ReactElement, ReactNode } from "react";
import "./tooltip.css";

type TooltipPlacement = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  content: ReactNode;
  children: ReactElement;
  placement?: TooltipPlacement;
  className?: string;
};

export function Tooltip({
  content,
  children,
  placement = "top",
  className
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  if (!isValidElement(children)) {
    throw new Error("Tooltip expects a single React element as children.");
  }

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const trigger = cloneElement(
    children as ReactElement<Record<string, unknown>>,
    {
      "aria-describedby": visible ? tooltipId : undefined,
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide
    }
  );

  const wrapperClasses = ["lsn-tooltip", className].filter(Boolean).join(" ");

  return (
    <span className={wrapperClasses}>
      {trigger}
      <span
        id={tooltipId}
        role="tooltip"
        className={`lsn-tooltip__bubble lsn-tooltip__bubble--${placement}`}
        data-visible={visible || undefined}
      >
        {content}
      </span>
    </span>
  );
}
