import Link from "next/link";
import { contact, footerContent } from "../data/global";

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

export function Footer() {
  const year = new Date().getFullYear();
  const { servicesMenu, blogMenu } = footerContent;
  const { address, mapEmbed, phoneNumbers, socials, footerImage } = contact;

  return (
    <footer className="footer relative z-40 my-8">
      <div className="container">
        <div className="columns flex items-start gap-24 relative max-lg:gap-8 max-md:w-full max-md:flex-col">
          <div className="flex gap-12 justify-between [&_div]:min-w-28 max-md:w-full">
            <div className="column-1 max-md:w-2/4">
              <span className="footer-title h4">خدمات</span>
              <div className="footer-menu">
                <ul>
                  {servicesMenu.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="column-2 max-md:w-2/4">
              <span className="footer-title h4">دسته بندی مقالات</span>
              <div className="footer-menu">
                <ul>
                  {blogMenu.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="column-3 flex max-w-60 flex-col gap-8">
            <span className="footer-title h4">آدرس</span>
            <p className="footer-address-text leading-[2.5]">{address}</p>
            <div
              className="footer-address-map"
              dangerouslySetInnerHTML={{ __html: mapEmbed }}
            />
          </div>
          <div className="column-4">
            <span className="footer-title h4">شماره تماس</span>
            <div className="footer-phones">
              {phoneNumbers.map((phone) => (
                <a key={phone} href={`tel:${phone}`}>
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="social-media">
          {socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">
              <SocialIcon label={social.icon} />
            </a>
          ))}
        </div>
        <p className="footer-meta text-xs text-[color:var(--text-muted)]">
          {year} © تمامی حقوق برای سایان دیجیتال محفوظ است.
        </p>
      </div>
      <div className="footer-image absolute left-0 bottom-0 z-[-2] h-[50vh] max-lg:relative max-lg:max-h-[300px] max-md:max-h-[200px]">
        <img src={footerImage} alt="تصویر پس‌زمینه فوتر" />
      </div>
    </footer>
  );
}
