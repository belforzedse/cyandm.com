"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Breadcrumb } from "../../components/Breadcrumb";
import { useModal } from "../../components/ModalProvider";
import { ServiceContactSlide } from "../../components/services/ServiceContactSlide";
import { ServiceFAQSlide } from "../../components/services/ServiceFAQSlide";
import { ServiceFooterNav } from "../../components/services/ServiceFooterNav";
import { ServiceHeroSlide } from "../../components/services/ServiceHeroSlide";
import { ServicePortfolioSlide } from "../../components/services/ServicePortfolioSlide";
import { contact, faqs, projects, services } from "../../data/global";

const breadcrumbItems = [
  { label: "خانه", href: "/" },
  { label: "خدمات", href: "/services" },
  { label: "سئو و بهینه‌سازی" },
];

const workSteps = [
  {
    title: "تحلیل تکنیکال",
    description: "بررسی کامل وضعیت فنی سایت و شناسایی موانع رشد ارگانیک.",
    image: "/images/services/seo-step-1.jpg",
  },
  {
    title: "تحقیق کلمات کلیدی",
    description: "شناخت دقیق نیاز مخاطب و ساخت نقشهٔ کلمات هوشمند.",
    image: "/images/services/seo-step-2.jpg",
  },
  {
    title: "بهینه‌سازی محتوا",
    description: "تدوین ساختار محتوا، بهبود صفحات کلیدی و تولید محتوای تازه.",
    image: "/images/services/seo-step-3.jpg",
  },
  {
    title: "لینک‌سازی هدفمند",
    description: "ساخت پروفایل لینک سالم و مانیتورینگ اعتبارات دامنه.",
    image: "/images/services/seo-step-4.jpg",
  },
  {
    title: "گزارش و مانیتورینگ",
    description: "گزارش‌دهی شفاف با داشبورد لحظه‌ای و تحلیل مسیر رشد.",
    image: "/images/services/seo-step-5.jpg",
  },
];

const service = services.find((item) => item.slug === "seo");

export default function SEOPage() {
  const { open } = useModal();
  const swiperRef = useRef<SwiperType>();

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const workStepsStartIndex = 1;
  const portfolioIndex = workStepsStartIndex + workSteps.length;
  const faqIndex = portfolioIndex + 1;
  const contactIndex = faqIndex + 1;

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
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <ServiceHeroSlide
          eyebrow="سرویس سئو"
          title="بیشتر دیده شو؛ با سئوی حرفه‌ای سایان"
          description={
            service?.description ??
            "استراتژی سئوی ما از تحلیل تکنیکال تا محتوا و لینک‌سازی طراحی می‌شود تا در نتایج طبیعی گوگل پیشتاز باشی."
          }
          gradient="radial-gradient(circle at bottom, rgba(255,0,0,0.18), transparent 70%)"
          bubbleVariant="sunset"
          bottomFireVariant={["redPrimary", "redSecondary"]}
          primaryAction={{ label: "جلسه استراتژی", onClick: () => open("make-project") }}
          secondaryAction={{ label: "ثبت درخواست تحلیل", href: "/contact" }}
          scrollLabel="مشاهده مراحل"
          onScrollClick={() => goToSlide(workStepsStartIndex)}
        />

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

        <ServicePortfolioSlide
          title="دستاوردهای تیم سئو سایان"
          description="در وردپرس پروژه‌ها از Custom Post Type بارگذاری می‌شوند؛ در این دموی هدلس داده‌ها ثابت هستند."
          projects={projects}
        />

        <ServiceFAQSlide
          title="سوالاتی که قبل از همکاری در سئو می‌پرسند"
          faqs={faqs}
          accentImage="/images/services/seo-faq.jpg"
        />

        <ServiceContactSlide
          title="چکاپ رایگان وضعیت سایت"
          slogan="اگر می‌خواهی بدانی چرا جایگاه ارگانیک رشد نکرده، جلسه تشخیصی رایگان ما را از دست نده."
          contact={contact}
          primaryCta={{ label: "تماس با تیم سئو", href: "tel:+982128428248" }}
        />
      </Swiper>

      <ServiceFooterNav
        onWorkStepsClick={() => goToSlide(workStepsStartIndex)}
        onPortfolioClick={() => goToSlide(portfolioIndex)}
        onFaqClick={() => goToSlide(faqIndex)}
        onContactClick={() => goToSlide(contactIndex)}
      />
    </main>
  );
}
