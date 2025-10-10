"use client";

type PopupPayload = {
  title?: string;
  message?: string;
  actionLabel?: string;
  actionHref?: string;
};

type PopupModalProps = {
  onClose: () => void;
  payload?: PopupPayload;
};

export function PopupModal({ onClose, payload }: PopupModalProps) {
  const { title, message, actionHref, actionLabel } = payload ?? {};

  return (
    <article className="surface-panel relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/95 px-8 py-10 text-center shadow-[0_40px_120px_rgba(12,10,32,0.48)]">
      <button
        type="button"
        onClick={onClose}
        className="absolute left-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)] transition hover:text-[color:var(--primary)]"
        aria-label="بستن"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--primary)]/30 to-[color:var(--primary-strong)]/40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 22c5 0 9-4 9-9" />
          <path d="M12 2C7 2 3 6 3 11" />
          <path d="m3 3 3 3" />
          <path d="m21 21-3-3" />
        </svg>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="text-2xl font-semibold">{title ?? "به‌روزرسانی جدید"}</h3>
        <p className="text-sm leading-7 text-[color:var(--text-muted)]">
          {message ?? "ویژگی‌های تازه‌ای به نسخه‌ی Next.js اضافه شد."}
        </p>
      </div>

      {(actionHref ?? actionLabel) && (
        <div className="mt-8 flex justify-center">
          <a
            href={actionHref ?? "#"}
            className="primary-btn"
            onClick={(event) => {
              if (!actionHref) {
                event.preventDefault();
                onClose();
              }
            }}
          >
            {actionLabel ?? "باشه"}
          </a>
        </div>
      )}
    </article>
  );
}

export type { PopupPayload };
