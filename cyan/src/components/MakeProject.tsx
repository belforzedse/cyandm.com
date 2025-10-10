"use client";

import { useMemo, useState } from "react";

const initialFormState = {
  name: "",
  phone: "",
  project: "",
  budget: "",
  description: "",
};

type FormState = typeof initialFormState;

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) {
    errors.name = "لطفاً نام خود را بنویس";
  }
  if (!form.phone.trim()) {
    errors.phone = "شماره تماس را وارد کن";
  }
  if (!form.project.trim()) {
    errors.project = "عنوان پروژه را وارد کن";
  }
  return errors;
}

type MakeProjectModalProps = {
  onClose: () => void;
};

export function MakeProjectModal({ onClose }: MakeProjectModalProps) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    phone: false,
    project: false,
    budget: false,
    description: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const errors = useMemo(() => validate(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleBlur = (field: keyof FormState) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({
      name: true,
      phone: true,
      project: true,
      budget: true,
      description: true,
    });

    if (!isValid) {
      return;
    }

    try {
      setStatus("submitting");
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setForm(initialFormState);
      setTimeout(onClose, 1400);
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  return (
    <div className="surface-panel relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/95 p-8 backdrop-blur">
      <button
        type="button"
        onClick={onClose}
        className="absolute left-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text)] transition-colors hover:text-[color:var(--primary)]"
        aria-label="بستن"
      >
        <span className="sr-only">بستن</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <div className="flex flex-col gap-2 pb-6 text-center">
        <span className="badge self-center">فرم ثبت پروژه</span>
        <h2 className="text-3xl font-semibold">برای پروژه‌ت آماده‌ای؟</h2>
        <p className="text-sm text-[color:var(--text-muted)]">
          فرم زیر را پر کن تا در کمتر از ۲۴ ساعت با تو تماس بگیریم.
        </p>
      </div>

      <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-[color:var(--text)]">
            نام و نام خانوادگی
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            placeholder="مثال: علی رضایی"
            className="h-12 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 text-[color:var(--text)] outline-none transition focus:border-[color:var(--primary)]"
            autoComplete="name"
          />
          {touched.name && errors.name && <span className="text-xs text-[color:var(--danger)]">{errors.name}</span>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-[color:var(--text)]">
            شماره تماس
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange("phone")}
            onBlur={handleBlur("phone")}
            placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
            className="h-12 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 text-[color:var(--text)] outline-none transition focus:border-[color:var(--primary)]"
            autoComplete="tel"
          />
          {touched.phone && errors.phone && <span className="text-xs text-[color:var(--danger)]">{errors.phone}</span>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="project" className="text-sm font-medium text-[color:var(--text)]">
            عنوان پروژه
          </label>
          <input
            id="project"
            name="project"
            value={form.project}
            onChange={handleChange("project")}
            onBlur={handleBlur("project")}
            placeholder="مثال: طراحی وب‌سایت فروشگاهی"
            className="h-12 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 text-[color:var(--text)] outline-none transition focus:border-[color:var(--primary)]"
          />
          {touched.project && errors.project && <span className="text-xs text-[color:var(--danger)]">{errors.project}</span>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="budget" className="text-sm font-medium text-[color:var(--text)]">
            بودجه‌ی مورد نظر
          </label>
          <input
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange("budget")}
            onBlur={handleBlur("budget")}
            placeholder="مثال: بین ۵۰۰ تا ۷۰۰ میلیون"
            className="h-12 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 text-[color:var(--text)] outline-none transition focus:border-[color:var(--primary)]"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="description" className="text-sm font-medium text-[color:var(--text)]">
            توضیح پروژه
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange("description")}
            onBlur={handleBlur("description")}
            placeholder="چالش اصلی پروژه چیست؟"
            rows={4}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--primary)]"
          />
        </div>

        <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="primary-btn w-full sm:w-auto"
          >
            {status === "submitting" ? "در حال ارسال..." : status === "success" ? "ارسال شد" : "ارسال درخواست"}
          </button>
          <p className="text-xs text-[color:var(--text-muted)]">
            با ارسال فرم با شرایط استفاده سایت موافقم.
          </p>
        </div>
      </form>
    </div>
  );
}
