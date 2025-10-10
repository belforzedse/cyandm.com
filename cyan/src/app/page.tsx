"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { MotionStyle } from "framer-motion";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

import { EmployeeCard } from "../components/EmployeeCard";
import { ScrollDown } from "../components/ScrollDown";
import { BottomFire } from "../components/BottomFire";
import { homePage } from "../data/global";

const planets = [
  { title: "خدمات سئو", href: "/seo", className: "red" },
  { title: "طراحی وبسایت شخصی", href: "/ui-design", className: "yellow" },
  { title: "همه خدمات", href: "/marketing", className: "cyan" },
];

const starIcons = Array.from({ length: 5 });

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

export default function Home() {
  const { hero, projects, testimonials, brands, services, team, posts, faqs } = homePage;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const preloaderWrapperRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: preloaderWrapperRef,
    offset: ["start start", "end end"],
  });

  const fallbackProgress = useMotionValue(0);
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
  const activeProgress = isDesktop ? springProgress : fallbackProgress;

  useEffect(() => {
    if (!isDesktop) {
      fallbackProgress.set(0);
    }
  }, [fallbackProgress, isDesktop]);

  const [progressValue, setProgressValue] = useState(0);
  useMotionValueEvent(activeProgress, "change", (value) => {
    setProgressValue(value);
  });

  const clockScale = useTransform(activeProgress, [0, 0.2], [1, 18]);
  const clockBorderRadius = useTransform(activeProgress, [0.24, 0.35], ["50%", "0%"]);
  const preClockY = useTransform(activeProgress, [0.32, 0.48], ["0%", "-120%"]);
  const preClockOpacity = useTransform(activeProgress, [0.28, 0.38], [1, 0]);

  const clockSectionY = useTransform(activeProgress, [0.26, 0.38], ["30%", "0%"]);
  const clockSectionOpacity = useTransform(activeProgress, [0.25, 0.36], [0, 1]);

  const multiPlanetOpacity = useTransform(activeProgress, [0.58, 0.75], [0, 1]);
  const multiPlanetY = useTransform(activeProgress, [0.58, 0.75], ["12%", "0%"]);
  const lightPlanetOpacity = useTransform(activeProgress, [0.6, 0.8], [0, 1]);

  const showClockSection = isDesktop ? progressValue >= 0.26 : true;
  const showMultiPlanet = isDesktop ? progressValue >= 0.58 : true;
  const fadeBottomFire = isDesktop ? progressValue >= 0.26 : false;

  const scrollToProgress = useCallback(
    (target: number) => {
      if (!isDesktop || !preloaderWrapperRef.current) return;

      const element = preloaderWrapperRef.current;
      const rect = element.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const height = element.offsetHeight;

      window.scrollTo({
        top: start + height * target,
        behavior: "smooth",
      });
    },
    [isDesktop],
  );

  const handlePreClockScroll = useCallback(() => scrollToProgress(0.35), [scrollToProgress]);
  const handleLetsGo = useCallback(() => scrollToProgress(0.62), [scrollToProgress]);
  const handleMultiPlanetScroll = useCallback(() => scrollToProgress(0.95), [scrollToProgress]);

  // Service cards mouse follow effect
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".single-service-card");
    const handlers = new Map<Element, (event: MouseEvent) => void>();

    const handleMouseMove = (event: MouseEvent, card: Element) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      const ball = card.querySelector<HTMLElement>(".ball");
      if (ball) {
        ball.style.setProperty("--left", `${x}%`);
        ball.style.setProperty("--top", `${y}%`);
      }
    };

    serviceCards.forEach((card) => {
      const handler = (event: MouseEvent) => handleMouseMove(event, card);
      handlers.set(card, handler);
      card.addEventListener("mousemove", handler);
    });

    return () => {
      handlers.forEach((handler, card) => {
        card.removeEventListener("mousemove", handler);
      });
    };
  }, []);

  const preClockMotionStyle: MotionStyle | undefined = isDesktop
    ? { y: preClockY, opacity: preClockOpacity }
    : undefined;
  const clockSectionMotionStyle: MotionStyle | undefined = isDesktop
    ? { y: clockSectionY, opacity: clockSectionOpacity }
    : undefined;
  const multiPlanetMotionStyle: MotionStyle | undefined = isDesktop
    ? { y: multiPlanetY, opacity: multiPlanetOpacity }
    : undefined;
  const lightPlanetMotionStyle: MotionStyle | undefined = isDesktop
    ? { opacity: lightPlanetOpacity }
    : undefined;
  const clockMotionStyle: MotionStyle = isDesktop
    ? {
        scale: clockScale,
        borderRadius: clockBorderRadius,
        animationDuration: showClockSection ? "100s" : "5s",
      }
    : { animationDuration: "5s" };

  return (
    <>
      <section className="mobile-header justify-center" style={{ backgroundImage: `url(${hero.backgroundImage})` }}>
        <div className="mobile-title">
          <p>{hero.title}</p>
          <Link href={hero.cta.href}>{hero.cta.label}</Link>
        </div>
      </section>

      <div ref={preloaderWrapperRef} className="preloader-wrapper">
        <div className="container preloader">
          <motion.section className="pre-clock" style={preClockMotionStyle} initial={false}>
            <div className="content">
              <p className="h1">حواست باشه</p>
              <h1>
                زمــــان داره به سرعـــــــــــــــــــــت می‌گذره
                <motion.div className="clock" style={clockMotionStyle} aria-hidden />
              </h1>
              <p className="h1">از کسب و کار عقب نمونی</p>
            </div>
            <ScrollDown onClick={isDesktop ? handlePreClockScroll : undefined} />
          </motion.section>

          <motion.section
            className={`clock-section container${showClockSection ? " visible pointer-all" : ""}`}
            style={clockSectionMotionStyle}
            initial={false}
          >
            <div className="content">
              <div className="mask-wrapper">
                <motion.p
                  className="h1"
                  initial={false}
                  animate={showClockSection ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: showClockSection ? 0 : 0 }}
                >
                  همین الان
                </motion.p>
              </div>
              <div className="mask-wrapper">
                <motion.h2
                  initial={false}
                  animate={showClockSection ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: showClockSection ? 0.25 : 0 }}
                >
                  وقتشه قدم اول رو برداری
                </motion.h2>
              </div>
              <div className="mask-wrapper">
                <motion.p
                  className="h1"
                  initial={false}
                  animate={showClockSection ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: showClockSection ? 0.5 : 0 }}
                >
                  اگه می‌خوای بدونی از کجا باید شروع کنی...
                </motion.p>
              </div>
              <div className="mask-wrapper">
                <motion.span
                  id="letsGo"
                  className="secondary-btn cursor-pointer"
                  initial={false}
                  animate={showClockSection ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: showClockSection ? 0.75 : 0 }}
                  onClick={isDesktop ? handleLetsGo : undefined}
                  onKeyDown={(event) => {
                    if (!isDesktop) return;
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handleLetsGo();
                    }
                  }}
                  role={isDesktop ? "button" : undefined}
                  tabIndex={isDesktop ? 0 : undefined}
                >
                  بزن بریم
                </motion.span>
              </div>
            </div>
          </motion.section>

          <motion.section
            className={`multi-planet${showMultiPlanet ? " visible pointer-all" : ""}`}
            style={multiPlanetMotionStyle}
            initial={false}
          >
            {planets.map((planet, index) => (
              <motion.div
                key={planet.className}
                className={`planet-con planet-${planet.className}`}
                initial={false}
                animate={showMultiPlanet ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: showMultiPlanet ? index * 0.2 : 0,
                }}
              >
                <div className="cta">
                  <Link href={planet.href}>{planet.title}</Link>
                </div>
              </motion.div>
            ))}
            <ScrollDown onClick={isDesktop ? handleMultiPlanetScroll : undefined} />
            <motion.div className="light-planet" style={lightPlanetMotionStyle} initial={false} />
          </motion.section>

          <BottomFire variant="cyan" className={fadeBottomFire ? "fade-off" : ""} />
        </div>
      </div>

      <main className="front-page">
        <section className="projects-con">
          <div className="section-title container">
            <h2 className="h1">گوشه‌ای از پروژه‌های موفق سایان</h2>
            <Link href="/projects" className="primary-btn">
              مشاهده همه
            </Link>
          </div>
          <Swiper
            className="projects-wrapper"
            modules={[Autoplay]}
            slidesPerView={3}
            centeredSlides
            spaceBetween={16}
            speed={800}
            autoplay={{ delay: 1800 }}
            breakpoints={{
              1390: {
                slidesPerView: 4.2,
                centeredSlides: false,
              },
              1200: {
                slidesPerView: 3.2,
                centeredSlides: false,
              },
              370: {
                slidesPerView: 2,
                centeredSlides: false,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.slug}
                className="single-project-card"
                data-post-id={project.slug}
                style={{ "--project-color": project.accentColor } as CSSProperties}
              >
                <div className="image-wrapper">
                  <img src={project.coverImage} alt={project.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="section-view-all">
            <Link href="/projects" className="primary-btn full-width">
              مشاهده همه
            </Link>
          </div>
        </section>

        <section className="customer-con container">
          <div className="section-title">
            <h2 className="h1">نظرات همراهان ما</h2>
          </div>
          <Swiper
            className="customer-wrapper"
            modules={[EffectFade, Autoplay, Thumbs]}
            slidesPerView={1}
            effect="fade"
            speed={800}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="single-customer-card">
                <div className="feature-img">
                  <img src={testimonial.logo} alt={testimonial.author} />
                </div>
                <div className="content">
                  <div className="name-wrapper">
                    <p className="name">{testimonial.author}</p>
                    <p className="project-name">{testimonial.role}</p>
                  </div>
                  <div className="stars-wrapper">
                    <span className="counter">5 / 5</span>
                    <div className="stars">
                      {starIcons.map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.92463 14.3747C4.54449 14.5731 4.08459 14.5382 3.73879 14.2846C3.39298 14.031 3.22141 13.6029 3.29638 13.1807L3.90313 9.70294L1.34863 7.25494C1.03639 6.95717 0.921956 6.50705 1.05408 6.09631C1.1862 5.68557 1.54159 5.38658 1.96888 5.32669L5.51563 4.81969L7.11688 1.62544C7.30674 1.24236 7.69733 1 8.12488 1C8.55243 1 8.94303 1.24236 9.13288 1.62544L10.7341 4.81969L14.2809 5.32669C14.7082 5.38658 15.0636 5.68557 15.1957 6.09631C15.3278 6.50705 15.2134 6.95717 14.9011 7.25494L12.3466 9.70294L12.9534 13.1814C13.0284 13.6037 12.8568 14.0318 12.511 14.2853C12.1652 14.5389 11.7053 14.5739 11.3251 14.3754L8.12488 12.7217L4.92463 14.3747Z"
                            fill="#F5BE31"
                            stroke="#F5BE31"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="desc-wrapper">
                    <p>{testimonial.quote}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            className="customer-thumbs"
            modules={[Autoplay]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4.2}
            spaceBetween={16}
            watchSlidesProgress
            speed={800}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={`thumb-${index}`}>
                <img src={testimonial.logo} alt={testimonial.author} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="container brands-con">
          <h2 className="h1">برندهایی که افتخار همکاری باهاشون را داشتیم</h2>
          <Swiper
            id="brandsSwiper"
            className="brands-wrapper"
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={24}
            autoplay
            breakpoints={{
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 7,
              },
              1440: {
                slidesPerView: 9,
              },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index} className="img-wrapper">
                <img src={brand.logo} alt={brand.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="services-con container">
          <div className="section-title">
            <h2 className="h1">چیکار می‌تونم برات بکنم؟</h2>
            <Link href="/services" className="primary-btn">
              مشاهده همه
            </Link>
          </div>
          <div className="services-wrapper">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="single-service-card"
                style={
                  {
                    "--ball-first-color": service.ballFirstColor || "#00fff0",
                    "--ball-second-color": service.ballSecondColor || "#0b8aff",
                  } as CSSProperties
                }
              >
                <span className="ball" />
                <div className="img-wrapper">
                  <img src={service.heroImage} alt={service.title} />
                </div>
                <h3 className="h2">{service.title}</h3>
                <span className="h3">اطلاعات بیشتر</span>
              </Link>
            ))}
            <span className="all-service">به کم قانع نشو...</span>
          </div>
          <div className="section-view-all">
            <Link href="/services" className="primary-btn full-width">
              مشاهده همه
            </Link>
          </div>
        </section>

        <section className="team-con container">
          <div className="section-title">
            <h2 className="h1">کارای حرفه‌ای یه تیم حرفه‌ای می‌خواد</h2>
            <Link href="/team" className="primary-btn">
              مشاهده همه
            </Link>
          </div>
          <div className="team-wrapper w-full">
            <div className="profile-wrapper gap-4">
              {team.slice(0, 4).map((member) => (
                <EmployeeCard key={member.slug} member={member} />
              ))}
            </div>
          </div>
        </section>

        <section className="blog-con container">
          <div className="section-title">
            <h2 className="h1">با سایان همیشه به روز باشید</h2>
            <Link href="/blog" className="primary-btn">
              مشاهده همه
            </Link>
          </div>
          <div className="content">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card" rel="nofollow">
                <div className="post-card__thumbnail">
                  <img src={post.coverImage} alt={post.title} />
                </div>
                <div className="post-card__content">
                  <div className="post-card__title-wrapper">
                    <h3 className="post-card__title">{post.title}</h3>
                    <p className="post-card__author">نویسنده: {post.author}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-view-all">
            <Link href="/blog" className="primary-btn full-width">
              مشاهده همه
            </Link>
          </div>
        </section>

        <section className="faq-con container">
          <div className="section-title">
            <h2 className="h1">سوالات متداول</h2>
            <Link href="/faq" className="primary-btn">
              مشاهده همه
            </Link>
          </div>
          <div className="faq-content">
            <div className="faq-posts">
              {faqs.slice(0, 5).map((faq, index) => (
                <details key={`${faq.question}-${index}`} className="faq-card">
                  <summary>{faq.question}</summary>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
            <div className="faq-image">
              <img src="/wp-assets/imgs/faq.png" alt="سوالات متداول" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
