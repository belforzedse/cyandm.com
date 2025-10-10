import Link from "next/link";
import { contact } from "../data/global";

const servicesMenu = [
  { label: "طراحی UI", href: "/ui-design" },
  { label: "بازاریابی", href: "/marketing" },
  { label: "سئو", href: "/seo" },
  { label: "کمپین", href: "/landing" },
];

const blogMenu = [
  { label: "طراحی", href: "/blog?category=design" },
  { label: "رشد", href: "/blog?category=growth" },
  { label: "توسعه", href: "/blog?category=development" },
  { label: "تحلیل", href: "/blog?category=analytics" },
];

type SocialIconProps = {
  label: string;
};

function SocialIcon({ label }: SocialIconProps) {
  const common = "h-5 w-5";
  switch (label) {
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </svg>
      );
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 11v7" />
          <path d="M8 6v1" />
          <path d="M12 11v7" />
          <path d="M16 11.5c0-1.38-1.12-2.5-2.5-2.5S11 10.12 11 11.5V18" />
        </svg>
      );
    case "telegram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 3 3 11l6 2 2 6 10-16Z" />
          <path d="m10 13 4-4" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
        </svg>
      );
  }
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {children}
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const footerImage = "/wp-assets/imgs/logo.png";
  const { address, mapEmbed, phoneNumbers, email, socials } = contact;

  return (
    <footer className="relative border-t border-[color:var(--border)]/40 bg-[color:var(--surface)]/70 py-16">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-4">
          <FooterColumn title="خدمات">
            <ul className="flex flex-col gap-3 text-sm text-[color:var(--text-muted)]">
              {servicesMenu.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="دسته‌بندی مقالات">
            <ul className="flex flex-col gap-3 text-sm text-[color:var(--text-muted)]">
              {blogMenu.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="دفتر مرکزی">
            <p className="text-sm leading-7 text-[color:var(--text-muted)]">{address}</p>
            <div
              className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-black/20 shadow-[0_18px_80px_rgba(10,8,30,0.45)]"
              dangerouslySetInnerHTML={{ __html: mapEmbed }}
            />
          </FooterColumn>

          <FooterColumn title="ارتباط مستقیم">
            <div className="flex flex-col gap-3 text-sm text-[color:var(--text-muted)]">
              <a href={`mailto:${email}`} className="transition hover:text-white">
                {email}
              </a>
              <div className="flex flex-col gap-2">
                {phoneNumbers.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="transition hover:text-white">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-[color:var(--border)]/40 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]/80">
              <img src={footerImage} alt="Cyan Digital" className="h-full w-full object-cover" />
            </div>
            <p className="text-xs text-[color:var(--text-muted)]">
              {year} © تمامی حقوق برای سایان دیجیتال محفوظ است.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--text-muted)] transition hover:text-white"
              >
                <SocialIcon label={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
