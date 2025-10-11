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
  { label: "مارکتینگ دیجیتال" },
];

const workSteps = [
  {
    title: "تحلیل و استراتژی",
    description: "بررسی دقیق بازار، رقبا و شناخت نقطهٔ تمایز برند تو.",
    image: "/images/services/marketing-step-1.jpg",
  },
  {
    title: "برنامه‌ریزی کمپین",
    description: "چینش قیف بازاریابی و طرح رسانه‌ای روی کانال‌های پر بازده.",
    image: "/images/services/marketing-step-2.jpg",
  },
  {
    title: "تولید محتوا",
    description: "ساخت محتوای تاثیرگذار متناسب با پرسونای مخاطب.",
    image: "/images/services/marketing-step-3.jpg",
  },
  {
    title: "اجرا و مانیتورینگ",
    description: "پیاده‌سازی کمپین و پایش لحظه‌ای برای بهبود نرخ تبدیل.",
    image: "/images/services/marketing-step-4.jpg",
  },
  {
    title: "گزارش‌گیری و رشد پیوسته",
    description: "دریافت داشبوردهای شفاف و مسیر بهبود برای دوره بعدی.",
    image: "/images/services/marketing-step-5.jpg",
  },
];

const service = services.find((item) => item.slug === "marketing");

export default function MarketingPage() {
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
          eyebrow="سرویس مارکتینگ"
          title={
            <>
              برندت را با کمپین‌های دقیق زنده کنیم
              <br className="hidden sm:block" />
            </>
          }
          description={
            service?.description ??
            "از استراتژی تا اجرا و بهینه‌سازی، تیم مارکتینگ سایان کنار توست تا مخاطب درست را در زمان مناسب درگیر کند."
          }
          gradient="radial-gradient(circle at bottom, rgba(35,241,68,0.16), transparent 70%)"
          bubbleVariant="cyan"
          bottomFireVariant="green"
          primaryAction={{ label: "مشاوره استراتژی", onClick: () => open("make-project") }}
          secondaryAction={{ label: "دریافت پروپوزال", href: "/contact" }}
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
          title="پرونده‌هایی که رشد برند را رقم زدند"
          description="این نمونه‌ها از پست‌های پروژه وردپرس می‌آیند. نسخه هدلس برای نمایش از داده‌های ثابت بهره می‌برد."
          projects={projects}
        />

        <ServiceFAQSlide
          title="پرسش‌های پرتکرار همکاری‌های مارکتینگ"
          faqs={faqs}
          accentImage="/images/services/marketing-faq.jpg"
        />

        <ServiceContactSlide
          title="کمپین بعدی را با هم می‌سازیم"
          slogan="برای تدوین قیف بازاریابی، پیام و تخصیص بودجه کنار تو هستیم."
          contact={contact}
          primaryCta={{ label: "گفت‌وگوی سریع", href: "tel:+982128428248" }}
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
