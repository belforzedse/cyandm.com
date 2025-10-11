import type {
  ContactDetails,
  FooterContent,
  HomePageContent,
  NavigationItem,
  Project,
  Service,
  BlogPost,
  TeamMember,
  Testimonial,
  FAQ,
  LandingPageSection,
} from "./types";

// NOTE: All content in this file is mocked so that we can showcase the Next.js
// port without touching the production database. In WordPress these values are
// sourced from ACF option pages and custom post types defined inside
// `website12.14/inc` and rendered by the templates under `website12.14/templates`.

export const navigation: NavigationItem[] = [
  {
    label: "خانه",
    href: "/",
  },
  {
    label: "طراحی و توسعه وبسایت",
    href: "/web-develope",
  },
  {
    label: "سئو",
    href: "/seo",
  },
  {
    label: "مشاوره کسب و کار",
    href: "/branding",
  },
  {
    label: "درباره سایان",
    href: "/about-cyandm",
  },
  {
    label: "پروژه ها",
    href: "/projects",
  },
  {
    label: "مقالات",
    href: "/blog",
  },
  {
    label: "تماس با ما",
    href: "/contact",
  },
];

// Projects typically come from the `project` custom post type and use ACF
// fields such as `main_color`, `project_stats` and flexible content blocks for
// the body. Here we mock a handful of projects with similar structure.
export const projects: Project[] = [
  {
    slug: "azaran-banking-platform",
    title: "پلتفرم بانکی آذران",
    excerpt:
      "طراحی و توسعه تجربه کاربری برای بانکداری دیجیتال با تمرکز بر سادگی و اعتماد.",
    coverImage: "/images/projects/project-1.jpg",
    archiveImage: "/images/projects/project-1.jpg",
    backgroundImageDesktop: "/images/projects/project-1.jpg",
    backgroundImageMobile: "/images/projects/project-1.jpg",
    accentColor: "#15EDED",
    categories: ["web", "branding"],
    industries: ["فین‌تک", "بانکداری"],
    services: ["طراحی UX", "هویت برند", "توسعه Front-end"],
    stats: [
      { label: "افزایش رضایت مشتری", value: "+37%" },
      { label: "رشد کاربران فعال", value: "+120k" },
    ],
    body: [
      "برای نسخه اصلی، محتوا از فیلدهای انعطاف‌پذیر ACF خوانده می‌شود که در WordPress توسط تیم محتوا مدیریت می‌شود.",
      "در این دموی Next.js از داده‌های ثابت استفاده کرده‌ایم تا ساختار صفحه پروژه را نشان دهیم.",
    ],
  },
  {
    slug: "sayan-commerce",
    title: "سایان کامرس",
    excerpt:
      "یک تجربه خرید امن و شخصی‌سازی شده برای برندهای لوکس ایرانی.",
    coverImage: "/images/projects/project-2.jpg",
    archiveImage: "/images/projects/project-2.jpg",
    backgroundImageDesktop: "/images/projects/project-2.jpg",
    backgroundImageMobile: "/images/projects/project-2.jpg",
    accentColor: "#04B2E9",
    categories: ["web", "branding"],
    industries: ["ای-کامرس", "لوکس"],
    services: ["تحقیقات کاربر", "طراحی UI", "تحلیل داده"],
    stats: [
      { label: "میانگین زمان ماندگاری", value: "3.2x" },
      { label: "رشد تبدیل", value: "+64%" },
    ],
    body: [
      "اطلاعات پروژه واقعی از فیلدهای 'project_modules' در WordPress بارگذاری می‌شود.",
      "برای دموی فعلی متن‌ها ثابت هستند و تنها ساختار را نمایش می‌دهند.",
    ],
  },
  {
    slug: "tejarat-super-app",
    title: "سوپر اپ تجارت",
    excerpt:
      "همکاری استراتژیک برای بازطراحی سوپر اپ و بهبود قیف ثبت‌نام.",
    coverImage: "/images/projects/project-3.jpg",
    archiveImage: "/images/projects/project-3.jpg",
    backgroundImageDesktop: "/images/projects/project-3.jpg",
    backgroundImageMobile: "/images/projects/project-3.jpg",
    accentColor: "#9333EA",
    categories: ["app", "branding"],
    industries: ["اپلیکیشن", "بانکداری"],
    services: ["طراحی سرویس", "طراحی UI", "طراحی تعامل"],
    stats: [
      { label: "نرخ تبدیل ثبت‌نام", value: "+52%" },
      { label: "NPS", value: "+18" },
    ],
    body: [
      "در نسخه وردپرس، این بخش‌ها توسط بلوک‌های ACF مدیریت می‌شوند.",
      "ما در این نمونه از متن‌های ثابت استفاده کردیم و مسیر داده در کامنت‌ها توضیح داده شده است.",
    ],
  },
];

// Services originate from the `service` post type and often share FAQ entries
// defined via ACF repeaters.
export const services: Service[] = [
  {
    slug: "ui-design",
    title: "طراحی UI",
    description:
      "طراحی رابط‌های دیجیتال انسانی و دقیق برای افزایش نرخ تبدیل و رضایت کاربر.",
    heroImage: "/images/services/ui-design-hero.jpg",
    ballFirstColor: "#ff6b6b",
    ballSecondColor: "#ee5a6f",
    highlights: [
      "طراحی سیستم دیزاین مقیاس‌پذیر",
      "تحویل فایل‌های Figma و مستندات تعامل",
      "همراهی در پیاده‌سازی با تیم فنی",
    ],
    processSteps: [
      {
        title: "تحلیل و کشف",
        description:
          "در وردپرس، این مرحله از گروه فیلد `service_process` خوانده می‌شود. در نسخه دمو ثابت است.",
      },
      {
        title: "ایده‌پردازی و طراحی",
        description: "نمونه‌های بصری، پروتوتایپ و تست کاربری آماده می‌شود.",
      },
      {
        title: "تحویل و بهبود",
        description: "راهنمای سبک، دارایی‌ها و جلسات انتقال دانش ارائه می‌گردد.",
      },
    ],
    faqs: [],
  },
  {
    slug: "marketing",
    title: "مارکتینگ دیجیتال",
    description:
      "استراتژی‌های رشد محور شامل کمپین، اتوماسیون و تحلیل داده.",
    heroImage: "/images/services/marketing-hero.jpg",
    ballFirstColor: "#4ecdc4",
    ballSecondColor: "#44a3f7",
    highlights: [
      "طراحی قیف بازاریابی",
      "اتوماسیون ایمیل",
      "گزارش‌گیری داشبوردی",
    ],
    processSteps: [
      {
        title: "پژوهش بازار",
        description: "بر اساس داده‌های CRM و تحقیقات کاربر",
      },
      {
        title: "برنامه‌ریزی کمپین",
        description: "تقویم محتوا و بودجه‌بندی رسانه",
      },
      {
        title: "تحلیل مستمر",
        description: "بهینه‌سازی هفتگی بر پایه KPI",
      },
    ],
    faqs: [],
  },
  {
    slug: "seo",
    title: "سئو و بهینه‌سازی",
    description: "بهبود جایگاه ارگانیک با استراتژی سئو تکنیکال و محتوایی.",
    heroImage: "/images/services/seo-hero.jpg",
    ballFirstColor: "#ffd93d",
    ballSecondColor: "#ff9a3d",
    highlights: [
      "ممیزی تکنیکال",
      "استراتژی محتوایی",
      "لینک‌بیلدینگ هوشمند",
    ],
    processSteps: [
      {
        title: "تحلیل اولیه",
        description: "خزش سایت، ارزیابی Core Web Vitals و رقبا",
      },
      {
        title: "برنامه‌ریزی کلمات کلیدی",
        description: "در وردپرس از فیلدهای ACF مربوط به `seo_keywords` پر می‌شود.",
      },
      {
        title: "پیاده‌سازی و مانیتورینگ",
        description: "همکاری نزدیک با تیم فنی برای اجرای توصیه‌ها",
      },
    ],
    faqs: [],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "growth-design-foundations",
    title: "پایه‌های طراحی رشد محور",
    excerpt:
      "چگونه تیم طراحی و مارکتینگ می‌توانند برای ایجاد تجربه‌های درآمدزا هم‌افزا شوند.",
    coverImage: "/images/blog/blog-1.jpg",
    categories: ["طراحی", "رشد"],
    publishedAt: "2024-09-01",
    author: "تیم محتوا",
    body: [
      "در سایت اصلی، متن مقاله از محتوای پست وردپرس (گوتنبرگ) بارگیری می‌شود.",
      "این نسخه دمو صرفاً چند پاراگراف نمونه دارد.",
    ],
  },
  {
    slug: "headless-wordpress-stack",
    title: "راه‌اندازی وردپرس هدلس برای سازمان‌های چابک",
    excerpt: "معماری، ابزارها و روال‌های انتشار در پیاده‌سازی headless.",
    coverImage: "/images/blog/blog-2.jpg",
    categories: ["توسعه", "WordPress"],
    publishedAt: "2024-08-10",
    author: "واحد فنی",
    body: [
      "وردپرس هدلس از REST API برای ارسال داده به Next.js استفاده خواهد کرد.",
      "در اینجا داده ثابت است تا مسیر نمایش مشخص باشد.",
    ],
  },
  {
    slug: "product-analytics-playbook",
    title: "دفترچه تحلیل محصول",
    excerpt: "متریک‌های کلیدی برای پایش عملکرد محصول دیجیتال.",
    coverImage: "/images/blog/blog-3.jpg",
    categories: ["تحلیل", "محصول"],
    publishedAt: "2024-07-22",
    author: "تیم دیتا",
    body: [
      "در نسخه اصلی محتوا از گوتنبرگ و بلاک‌های ACF مربوط به این پست می‌آید.",
      "ما با داده‌های ثابت مسیر رندر را مشخص کرده‌ایم.",
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: "چطور پروژه جدید را شروع کنیم؟",
    answer:
      "در سایت اصلی فرم `Make a project` داده‌ها را به کلاس AJAX در `inc/classes` ارسال می‌کند. در دمو لینک به فرم ساده می‌دهد.",
  },
  {
    question: "مدت زمان اجرای پروژه چقدر است؟",
    answer:
      "این پاسخ در وردپرس از تکرار کننده ACF بخش FAQ خوانده می‌شود. در اینجا متن ثابت داریم.",
  },
  {
    question: "آیا خدمات پشتیبانی ارائه می‌دهید؟",
    answer:
      "بله، اما جزییات در وردپرس داخل فیلد `support_description` نگهداری می‌شود.",
  },
];

export const testimonials: Testimonial[] = [
  {
    author: "مهدی بهرامی",
    role: "مدیر بازاریابی، آذران",
    quote:
      "همکاری با سایان باعث شد فرآیند جذب مشتری دیجیتال ما سرعت بگیرد.",
    logo: "/images/brands/brand-1.svg",
  },
  {
    author: "سمیه توکلی",
    role: "مدیر محصول، ابرپرداز",
    quote: "تیم سایان فراتر از انتظار ما در طراحی سیستم دیزاین ظاهر شد.",
    logo: "/images/brands/brand-2.svg",
  },
  {
    author: "پویان لطفی",
    role: "CEO، تک‌رشد",
    quote: "داده‌محوری و اجرای دقیق، دو نقطه قوت اصلی تیم بود.",
    logo: "/images/brands/brand-3.svg",
  },
];

export const brands: Array<{ name: string; logo: string }> = [
  { name: "آذران", logo: "/images/brands/brand-1.svg" },
  { name: "ابرپرداز", logo: "/images/brands/brand-2.svg" },
  { name: "تجارت", logo: "/images/brands/brand-3.svg" },
  { name: "تک‌رشد", logo: "/images/brands/brand-4.svg" },
];

export const teamMembers: TeamMember[] = [
  {
    slug: "mahdi-bahrami",
    name: "مهدی بهرامی",
    role: "رهبر تیم طراحی",
    bio: "بر روی تجربه‌های بانکی و فین‌تک تمرکز دارد.",
    avatar: "/images/team/member-1.jpg",
    socials: [
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "Dribbble", url: "https://dribbble.com" },
    ],
  },
  {
    slug: "somayeh-tavakoli",
    name: "سمیه توکلی",
    role: "استراتژیست بازاریابی",
    bio: "روی قیف‌های رشد و اتوماسیون تمرکز دارد.",
    avatar: "/images/team/member-2.jpg",
    socials: [{ label: "LinkedIn", url: "https://linkedin.com" }],
  },
  {
    slug: "pooyan-lotfi",
    name: "پویان لطفی",
    role: "تحلیل‌گر ارشد داده",
    bio: "متخصص طراحی داشبورد و تحلیل رویدادها.",
    avatar: "/images/team/member-3.jpg",
    socials: [{ label: "LinkedIn", url: "https://linkedin.com" }],
  },
];

export const footerContent: FooterContent = {
  servicesMenu: [
    { label: "طراحی UI", href: "/ui-design" },
    { label: "بازاریابی", href: "/marketing" },
    { label: "سئو", href: "/seo" },
    { label: "کمپین", href: "/landing" },
  ],
  blogMenu: [
    { label: "طراحی", href: "/blog?category=design" },
    { label: "رشد", href: "/blog?category=growth" },
    { label: "توسعه", href: "/blog?category=development" },
    { label: "تحلیل", href: "/blog?category=analytics" },
  ],
};

export const contact: ContactDetails = {
  address: "تهران، خیابان ولیعصر، پلاک ۱۲۰، واحد ۷",
  mapEmbed: `
    <iframe
      title="موقعیت سایان دیجیتال مارکتینگ"
      src="https://maps.google.com/maps?width=600&height=450&hl=fa&q=Tehran%20Valiasr%20Street%20120%20Unit%207%20(Cyan%20Digital%20Marketing)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
      style="border:0; width:100%; height:100%; min-height:320px;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  `.trim(),
  phoneNumbers: ["021-12345678", "021-87654321", "021-28428248"],
  email: "hello@cyandm.com",
  socials: [
    {
      label: "اینستاگرام",
      url: "https://instagram.com/cyandm",
      logo: "/images/socials/instagram.svg",
    },
    {
      label: "لینکدین",
      url: "https://linkedin.com/company/cyandm",
      logo: "/images/socials/linkedin.svg",
    },
    {
      label: "تلگرام",
      url: "https://t.me/cyandm",
      logo: "/images/socials/telegram.svg",
    },
  ],
  footerImage: "/images/puzzle-image.png",
};

export const homePage: HomePageContent = {
  hero: {
    eyebrow: "سایان دیجیتال",
    title: "تجربه دیجیتال رشد محور",
    description:
      "در وردپرس، این متن از فیلد `mobile_hero_title` و `mobile_hero_description` صفحه اصلی خوانده می‌شود. در اینجا داده ثابت است.",
    cta: { label: "شروع پروژه", href: "/contact" },
    secondaryCta: { label: "مشاهده پروژه‌ها", href: "/projects" },
    backgroundImage: "/images/hero/mobile-hero.jpg",
  },
  metrics: [
    { label: "پروژه موفق", value: "+120" },
    { label: "متخصص", value: "35" },
    { label: "سال تجربه", value: "10" },
  ],
  projects,
  services,
  testimonials,
  brands,
  posts: blogPosts,
  faqs,
  team: teamMembers,
};

export const aboutSlides: LandingPageSection[] = [
  {
    id: "mission",
    title: "ماموریت ما",
    theme: "light",
    description:
      "داده‌های این اسلاید در وردپرس از فیلد `about_us_section > mission` تأمین می‌شود. در دمو متن ثابت دارد.",
    media: {
      type: "image",
      src: "/images/about/mission.jpg",
      alt: "ماموریت سایان",
    },
  },
  {
    id: "vision",
    title: "چشم‌انداز",
    theme: "dark",
    description:
      "چشم‌انداز ما خلق تجربه‌هایی است که رشد پایدار را تضمین کند.",
    media: {
      type: "image",
      src: "/images/about/vision.jpg",
      alt: "چشم‌انداز",
    },
    bullets: [
      "توسعه محصولات بانکداری دیجیتال",
      "توانمندسازی تیم‌های داخلی",
      "تمرکز بر داده و تجربه",
    ],
  },
  {
    id: "team",
    title: "تیم ما",
    theme: "light",
    description:
      "در وردپرس لیست اعضا با ACF repeater `team_members` پر می‌شود. اینجا داده ثابت از `teamMembers` استفاده می‌کند.",
  },
  {
    id: "culture",
    title: "فرهنگ کاری",
    theme: "dark",
    description:
      "فرهنگ همکاری، یادگیری مداوم و اندازه‌گیری نتیجه.",
    bullets: [
      "جلسات بازطراحی هفتگی",
      "آزمایش‌های مستمر UX",
      "انجمن یادگیری درون‌تیمی",
    ],
  },
];

export const landingSections: Record<string, LandingPageSection[]> = {
  marketing: [
    {
      id: "growth",
      title: "رشد مقیاس‌پذیر",
      theme: "light",
      description:
        "این داده در وردپرس از گروه فیلد `marketing_sections` بارگذاری می‌شود.",
      bullets: ["اتوماسیون", "قیف فروش", "بازاریابی عملکردی"],
    },
    {
      id: "measurement",
      title: "اندازه‌گیری دقیق",
      theme: "dark",
      description: "داشبوردهای زنده برای تصمیم‌گیری سریع.",
      media: {
        type: "image",
        src: "/images/landing/marketing-analytics.jpg",
        alt: "داشبورد مارکتینگ",
      },
    },
  ],
  seo: [
    {
      id: "technical",
      title: "سئو تکنیکال",
      theme: "light",
      description:
        "در وردپرس بخش سئو از ACF flexible content `seo_sections` پر می‌شود.",
      bullets: ["ساختار سایت", "سرعت", "اسکیما"],
    },
    {
      id: "content",
      title: "استراتژی محتوا",
      theme: "dark",
      description: "تحلیل رقبا، خوشه‌بندی، پلن تولید محتوا.",
    },
  ],
  "ui-design": [
    {
      id: "research",
      title: "تحقیقات کاربر",
      theme: "light",
      description:
        "این دیتا در وردپرس از فیلد `ui_sections` تأمین می‌شود؛ فعلاً ثابت است.",
      bullets: ["مصاحبه", "پرسونا", "ژورنال سفر"],
    },
    {
      id: "delivery",
      title: "تحویل و مستندسازی",
      theme: "dark",
      description: "سیستم دیزاین و Component Library آماده بهره‌برداری.",
    },
  ],
  landing: [
    {
      id: "campaign",
      title: "کمپین‌های هدفمند",
      theme: "light",
      description: "صفحات فرود سفارشی برای جذب لید.",
    },
    {
      id: "experimentation",
      title: "آزمایش A/B",
      theme: "dark",
      description:
        "در وردپرس این بخش با فیلد `landing_builder` مدیریت می‌شود.",
    },
  ],
};
