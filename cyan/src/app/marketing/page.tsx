"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Breadcrumb } from "../../components/Breadcrumb";
import { Bubbles } from "../../components/Bubbles";
import { ScrollDown } from "../../components/ScrollDown";
import { useModal } from "../../components/ModalProvider";
import { landingSections } from "../../data/global";

const breadcrumbItems = [
  { label: "خانه", href: "/" },
  { label: "خدمات", href: "/services" },
  { label: "مارکتینگ دیجیتال" },
];

const workSteps = [
  {
    title: "تحلیل و استراتژی",
    description: "بررسی دقیق بازار، رقبا و شناخت نقطهٔ تمایز برند تو.",
    image: "/wp-assets/imgs/services/marketing-step-1.jpg",
  },
  {
    title: "برنامه‌ریزی کمپین",
    description: "چینش قیف بازاریابی و طرح رسانه‌ای روی کانال‌های پر بازده.",
    image: "/wp-assets/imgs/services/marketing-step-2.jpg",
  },
  {
    title: "تولید محتوا",
    description: "ساخت محتوای تاثیرگذار متناسب با پرسونای مخاطب.",
    image: "/wp-assets/imgs/services/marketing-step-3.jpg",
  },
  {
    title: "اجرا و مانیتورینگ",
    description: "پیاده‌سازی کمپین و پایش لحظه‌ای برای بهبود نرخ تبدیل.",
    image: "/wp-assets/imgs/services/marketing-step-4.jpg",
  },
  {
    title: "گزارش‌گیری و رشد پیوسته",
    description: "دریافت داشبوردهای شفاف و مسیر بهبود برای دوره بعدی.",
    image: "/wp-assets/imgs/services/marketing-step-5.jpg",
  },
];

const marketingSections = landingSections.marketing ?? [];

export default function MarketingPage() {
  const { open } = useModal();

  return (
    <main className="relative min-h-screen pb-20">
      <div className="container py-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <Swiper
        className="service-swiper"
        direction="vertical"
        slidesPerView={1}
        spaceBetween={24}
        mousewheel
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
      >
        <SwiperSlide>
          <section className="relative isolate flex min-h-[75vh] flex-col items-center justify-center overflow-hidden py-24 text-center">
            <Bubbles variant="cyan" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(35,241,68,0.16),transparent_70%)]" aria-hidden />
            <div className="relative z-10 flex flex-col items-center gap-6 px-6">
              <span className="badge">سرویس مارکتینگ</span>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                برندت را با کمپین‌های دقیق زنده کنیم
              </h1>
              <p className="max-w-2xl text-sm leading-8 text-[color:var(--text-muted)]">
                از استراتژی تا اجرا و بهینه‌سازی، تیم مارکتینگ سایان کنار توست تا مخاطب درست را در زمان مناسب درگیر کند.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <button type="button" className="primary-btn" onClick={() => open("make-project")}>مشاوره استراتژی</button>
                <ScrollDown label="مشاهده مراحل" />
              </div>
            </div>
          </section>
        </SwiperSlide>

        {workSteps.map((step, index) => (
          <SwiperSlide key={step.title}>
            <section className="relative flex min-h-[70vh] flex-col justify-center py-20">
              <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
                <div className="space-y-4">
                  <span className="badge">گام {index + 1}</span>
                  <h2 className="text-3xl font-semibold text-white lg:text-4xl">{step.title}</h2>
                  <p className="max-w-xl text-sm leading-7 text-[color:var(--text-muted)]">{step.description}</p>
                </div>
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/70">
                  <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}

        {marketingSections.map((section) => (
          <SwiperSlide key={section.id}>
            <section className="flex min-h-[60vh] flex-col justify-center py-20">
              <div className="container grid gap-10 lg:grid-cols-[1.1fr_1fr]">
                <div className="space-y-4">
                  <span className="badge">مزیت رقابتی</span>
                  <h3 className="text-2xl font-semibold text-white lg:text-3xl">{section.title}</h3>
                  <p className="text-sm leading-7 text-[color:var(--text-muted)]">{section.description}</p>
                  {section.bullets && (
                    <ul className="grid gap-2 text-sm text-[color:var(--text-muted)]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3">
                          <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--primary)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {section.media && (
                  <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/60">
                    <img src={section.media.src} alt={section.media.alt ?? section.title} className="h-full w-full object-cover" />
                  </div>
                )}
              </div>
            </section>
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden py-24 text-center">
            <Bubbles variant="violet" />
            <div className="relative z-10 flex flex-col items-center gap-6 px-6">
              <span className="badge">کمپین بعدی تو</span>
              <h2 className="text-3xl font-semibold text-white lg:text-4xl">جلسه رایگان برنامه‌ریزی کمپین</h2>
              <p className="max-w-xl text-sm leading-7 text-[color:var(--text-muted)]">
                با هم قیف مارکتینگ را طراحی می‌کنیم، پیام مناسب را می‌سازیم و کانال‌های برنده را انتخاب می‌کنیم.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <a href="tel:+982128428248" className="primary-btn">گفت‌وگوی سریع</a>
                <Link href="/contact" className="secondary-btn">
                  دریافت پروپوزال
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
