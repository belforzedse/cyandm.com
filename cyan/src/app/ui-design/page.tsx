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
  { label: "طراحی UI" },
];

const workSteps = [
  {
    title: "تحقیقات کاربر",
    description: "مصاحبه، نقشه سفر و تحلیل رقبا برای فهم عمیق نیاز کاربر.",
    image: "/images/services/ui-step-1.jpg",
  },
  {
    title: "طراحی تجربه",
    description: "طراحی فلوها، وایرفریم و تست سناریوهای کلیدی.",
    image: "/images/services/ui-step-2.jpg",
  },
  {
    title: "پروتوتایپ و تست",
    description: "نمونه‌های تعاملی و تست با کاربران واقعی برای کاهش ریسک.",
    image: "/images/services/ui-step-3.jpg",
  },
  {
    title: "سیستم طراحی",
    description: "ساخت کتابخانهٔ اجزای مقیاس‌پذیر و مستندسازی برای تیم توسعه.",
    image: "/images/services/ui-step-4.jpg",
  },
  {
    title: "تحویل و پشتیبانی",
    description: "همراهی تا مرحله توسعه و نظارت بر اجرای دقیق جزئیات.",
    image: "/images/services/ui-step-5.jpg",
  },
];

const service = services.find((item) => item.slug === "ui-design");

export default function UIDesignPage() {
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
          eyebrow="سرویس طراحی رابط کاربری"
          title="تجربه‌ای که کاربر عاشقش می‌شود"
          description={
            service?.description ??
            "طراحی UI در سایان یعنی ترکیب زیبایی، دسترسی‌پذیری و تحقق اهداف کسب‌وکار در هر پیکسل."
          }
          gradient="radial-gradient(circle at bottom, rgba(255,200,6,0.16), transparent 70%)"
          bubbleVariant="violet"
          bottomFireVariant={["orange", "redSecondary"]}
          primaryAction={{ label: "شروع طراحی", onClick: () => open("make-project") }}
          secondaryAction={{ label: "ارسال شرح پروژه", href: "/contact" }}
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
          title="نگاهی به پروژه‌های طراحی UI سایان"
          description="این نمونه‌ها در نسخه اصلی از پست تایپ پروژه‌ها بارگذاری می‌شوند. در نسخه هدلس، داده‌های ثابت `global.ts` آن را پر می‌کند."
          projects={projects}
        />

        <ServiceFAQSlide
          title="پرسش‌های پرتکرار مشتریان طراحی UI"
          faqs={faqs}
          accentImage="/images/services/ui-faq.jpg"
        />

        <ServiceContactSlide
          title="برای بازطراحی رابط کاربری آماده‌ایم"
          slogan="گفتگو را شروع کن تا درباره جریان کاربری، سیستم دیزاین و تحویل به تیم توسعه صحبت کنیم."
          contact={contact}
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
