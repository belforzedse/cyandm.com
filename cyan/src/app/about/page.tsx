"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Breadcrumb } from "../../components/Breadcrumb";
import { Bubbles } from "../../components/Bubbles";
import { EmployeeCard } from "../../components/EmployeeCard";
import { ScrollDown } from "../../components/ScrollDown";
import { useModal } from "../../components/ModalProvider";
import { aboutSlides, teamMembers } from "../../data/global";

const breadcrumbItems = [
  { label: "خانه", href: "/" },
  { label: "درباره ما" },
];

const heroCopy = {
  title: "می‌خوای با سایان بیشتر آشنا شی؟",
  subtitle: "پس کمربندتو ببند و آماده شو",
  description: "ما تیمی هستیم که با ترکیب استراتژی، طراحی و فناوری تجربه‌هایی خلق می‌کنیم که رشد کسب‌وکار را تضمین کند.",
};

export default function AboutPage() {
  const { open } = useModal();

  return (
    <main className="relative min-h-screen pb-16">
      <div className="container py-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <Swiper
        className="about-swiper"
        direction="vertical"
        slidesPerView={1}
        spaceBetween={32}
        mousewheel
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
      >
        <SwiperSlide>
          <section className="relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden py-24">
            <Bubbles variant="cyan" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--background)]" aria-hidden />
            <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
              <span className="badge">سایان دیجیتال</span>
              <h1 className="text-4xl font-bold leading-snug text-white sm:text-5xl">
                {heroCopy.title}
              </h1>
              <p className="text-xl text-[color:var(--text)]/80">{heroCopy.subtitle}</p>
              <p className="max-w-2xl text-sm leading-7 text-[color:var(--text-muted)]">
                {heroCopy.description}
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <button type="button" className="primary-btn" onClick={() => open("make-project")}>یه پروژه بساز</button>
                <ScrollDown label="ورق بزن" />
              </div>
            </div>
          </section>
        </SwiperSlide>

        {aboutSlides
          .filter((slide) => slide.id !== "team")
          .map((slide) => (
            <SwiperSlide key={slide.id}>
              <section
                className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden py-20"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(21,237,237,0.08),transparent_70%)]" aria-hidden />
                <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
                  <div className="space-y-6">
                    <span className="badge">درباره سایان</span>
                    <h2 className="text-3xl font-semibold text-white lg:text-4xl">{slide.title}</h2>
                    <p className="max-w-xl text-sm leading-8 text-[color:var(--text-muted)]">
                      {slide.description}
                    </p>
                    {slide.bullets && (
                      <ul className="grid gap-3 text-sm text-[color:var(--text-muted)]">
                        {slide.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-3">
                            <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--primary)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {slide.media ? (
                    <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/60">
                      <img src={slide.media.src} alt={slide.media.alt} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--background)]/30" aria-hidden />
                    </div>
                  ) : (
                    <div className="rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/60 p-6">
                      <p className="text-sm leading-7 text-[color:var(--text-muted)]">
                        هر آنچه در WordPress مدیریت می‌کنیم اینجاست: ماژول‌های انعطاف‌پذیر، محتوای پویا و تیمی که هر روز آن را به‌روز می‌کند.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </SwiperSlide>
          ))}

        <SwiperSlide>
          <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.12),transparent_70%)]" aria-hidden />
            <div className="container flex flex-col items-center gap-6 text-center">
              <img
                src="/wp-assets/imgs/puzzle-image.png"
                alt="پازل همکاری"
                className="h-48 w-auto object-contain"
              />
              <h3 className="text-3xl font-semibold text-white">مشاوره و پشتیبانی ۲۴ ساعته</h3>
              <p className="max-w-2xl text-sm leading-7 text-[color:var(--text-muted)]">
                تیم پشتیبانی ما در تمام مراحل همراه توست؛ از جلسه ایده‌پردازی تا لانچ و بهینه‌سازی محصول.
              </p>
              <ScrollDown label="آشنایی با تیم" />
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="flex flex-col gap-10 py-24">
            <div className="container space-y-4 text-center">
              <span className="badge">تیم سایان</span>
              <h2 className="text-3xl font-semibold text-white lg:text-4xl">کارای حرفه‌ای، تیم حرفه‌ای می‌خواد</h2>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-[color:var(--text-muted)]">
                این اعضای اصلی تیم ما هستند. در نسخه وردپرس، لیست از ACF مدیریت می‌شود. اینجا از دادهٔ ثابت استفاده کردیم.
              </p>
            </div>
            <div className="container">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {teamMembers.map((member) => (
                  <EmployeeCard key={member.slug} member={member} />
                ))}
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden py-24">
            <Bubbles variant="violet" />
            <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--surface)]/70 shadow-[0_50px_120px_rgba(12,10,32,0.5)]">
              <div className="aspect-video w-full overflow-hidden">
                <img src="/wp-assets/imgs/projects/project-3.jpg" alt="کالبدشکافی پروژه" className="h-full w-full object-cover" />
              </div>
              <div className="flex items-center justify-between px-6 py-5 text-sm text-[color:var(--text-muted)]">
                <span>آماده‌ایم پروژه بعدی‌ت رو بسازیم</span>
                <button type="button" className="secondary-btn" onClick={() => open("make-project")}>شروع همکاری</button>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
