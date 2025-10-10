"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { EmployeeCard } from "../components/EmployeeCard";
import { ScrollDown } from "../components/ScrollDown";
import { BottomFire } from "../components/BottomFire";
import { homePage } from "../data/global";
import { useEffect, useRef } from "react";

const planets = [
  { title: "خدمات سئو", href: "/seo", className: "red" },
  { title: "طراحی وبسایت شخصی", href: "/ui-design", className: "yellow" },
  { title: "همه خدمات", href: "/marketing", className: "cyan" },
];

const starIcons = Array.from({ length: 5 });

export default function Home() {
  const { hero, projects, testimonials, brands, services, team, posts, faqs } = homePage;
  const clockRef = useRef<HTMLDivElement>(null);

  // Clock rotation animation
  useEffect(() => {
    let rotation = 0;
    const clockElement = clockRef.current;
    if (!clockElement) return;

    const interval = setInterval(() => {
      rotation = (rotation + 6) % 360;
      clockElement.style.setProperty("--rotate", `${rotation}deg`);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Service cards mouse follow effect
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".single-service-card");

    const handleMouseMove = (e: MouseEvent, card: Element) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      const ball = card.querySelector(".ball") as HTMLElement;
      if (ball) {
        ball.style.setProperty("--left", `${x}%`);
        ball.style.setProperty("--top", `${y}%`);
      }
    };

    serviceCards.forEach((card) => {
      const handler = (e: Event) => handleMouseMove(e as MouseEvent, card);
      card.addEventListener("mousemove", handler);
    });

    return () => {
      serviceCards.forEach((card) => {
        card.removeEventListener("mousemove", () => {});
      });
    };
  }, []);

  return (
    <>
      <section className="mobile-header justify-center" style={{ backgroundImage: `url(${hero.backgroundImage})` }}>
        <div className="mobile-title">
          <p>{hero.title}</p>
          <Link href={hero.cta.href}>{hero.cta.label}</Link>
        </div>
      </section>

      <div className="container preloader">
        <section className="pre-clock">
          <div className="content">
            <p className="h1">حواست باشه</p>
            <h1>
              زمــــان داره به سرعـــــــــــــــــــــت می‌گذره
              <div ref={clockRef} className="clock" />
            </h1>
            <p className="h1">از کسب و کار عقب نمونی</p>
          </div>
          <ScrollDown />
        </section>

        <section className="clock-section container">
          <div className="content">
            <div className="mask-wrapper">
              <p className="h1">همین الان</p>
            </div>
            <div className="mask-wrapper">
              <h2>وقتشه قدم اول رو برداری</h2>
            </div>
            <div className="mask-wrapper">
              <p className="h1">اگه می‌خوای بدونی از کجا باید شروع کنی...</p>
            </div>
            <div className="mask-wrapper">
              <span id="letsGo" className="secondary-btn cursor-pointer">
                بزن بریم
              </span>
            </div>
          </div>
        </section>

        <section className="multi-planet">
          {planets.map((planet) => (
            <div key={planet.className} className={`planet-con planet-${planet.className}`}>
              <div className="cta">
                <Link href={planet.href}>{planet.title}</Link>
              </div>
            </div>
          ))}
          <ScrollDown />
          <div className="light-planet" />
        </section>

        <BottomFire variant="cyan" />
      </div>

      <main className="front-page">
        <section className="projects-con">
          <div className="section-title container">
            <h2 className="h1">گوشه‌ای از پروژه‌های موفق سایان</h2>
            <Link href="/projects" className="primary-btn">
              مشاهده همه
            </Link>
          </div>
          <div className="projects-wrapper swiper">
            <div className="swiper-wrapper">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="single-project-card swiper-slide"
                  data-post-id={project.slug}
                  style={{ "--project-color": project.accentColor } as CSSProperties}
                >
                  <div className="image-wrapper">
                    <img src={project.coverImage} alt={project.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
          <div className="customer-wrapper swiper">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="single-customer-card swiper-slide">
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
                </div>
              ))}
            </div>
          </div>

          <div className="customer-thumbs swiper">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div key={`thumb-${index}`} className="swiper-slide">
                  <img src={testimonial.logo} alt={testimonial.author} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container brands-con">
          <h2 className="h1">برندهایی که افتخار همکاری باهاشون را داشتیم</h2>
          <div className="brands-wrapper swiper" id="brandsSwiper">
            <div className="swiper-wrapper">
              {brands.map((brand, index) => (
                <div key={index} className="img-wrapper swiper-slide">
                  <img src={brand.logo} alt={brand.name} />
                </div>
              ))}
            </div>
          </div>
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
