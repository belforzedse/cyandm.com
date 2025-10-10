import { PageHero } from "../../components/PageHero";

export default function UnderConstructionPage() {
  return (
    <div>
      <PageHero
        eyebrow="NOTICE"
        title="وب‌سایت در حال به‌روزرسانی است"
        description="در تم وردپرس متد `cyn_under_construction()` وضعیت سایت را بررسی می‌کند. در Next.js می‌توانیم همین منطق را با feature flag پیاده‌سازی کنیم."
      />
      <div className="bg-white py-24">
        <div className="container mx-auto max-w-2xl px-4 text-center text-sm text-slate-600">
          <p>
            اگر زیرساخت وردپرس هدلس وارد حالت نگهداری شود، می‌توانیم این صفحه را به صورت موقت نمایش دهیم و همچنان API را فعال نگه
            داریم.
          </p>
        </div>
      </div>
    </div>
  );
}
