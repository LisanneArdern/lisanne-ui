import { useEffect, useId, useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import "./modal.css";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  dismissible?: boolean;
  className?: string;
};

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  dismissible = true,
  className
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      if (!dismissible) {
        event.preventDefault();
        return;
      }
      event.preventDefault();
      onClose();
    };

    const handleClose = () => {
      if (open) onClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", handleClose);
    };
  }, [dismissible, onClose, open]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (!dismissible) return;
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  const classes = ["lsn-modal", className].filter(Boolean).join(" ");

  return (
    <dialog
      ref={dialogRef}
      className={classes}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClick={handleBackdropClick}
    >
      <div className="lsn-modal__panel">
        <header className="lsn-modal__header">
          <p className="lsn-modal__eyebrow">Dialog</p>
          <h2 id={titleId} className="lsn-modal__title">
            {title}
          </h2>
          {description ? (
            <p id={descriptionId} className="lsn-modal__description">
              {description}
            </p>
          ) : null}
          {dismissible ? (
            <button
              type="button"
              className="lsn-modal__close"
              aria-label="Close dialog"
              onClick={onClose}
            >
              ×
            </button>
          ) : null}
        </header>
        {children ? <div className="lsn-modal__body">{children}</div> : null}
        {footer ? (
          <footer className="lsn-modal__footer">{footer}</footer>
        ) : null}
      </div>
    </dialog>
  );
}
