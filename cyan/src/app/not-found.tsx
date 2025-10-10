import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-4xl font-bold text-slate-900">صفحه یافت نشد</h1>
      <p className="mt-4 max-w-lg text-sm text-slate-600">
        در وردپرس، فایل `404.php` این پیام را نمایش می‌دهد. در Next.js همین تجربه را به صورت component ارائه دادیم.
      </p>
      <Link href="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white">
        بازگشت به خانه
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
