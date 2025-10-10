import Link from "next/link";
import { contact, footerContent } from "../data/global";

export function Footer() {
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
            <div className="footer-address-map" dangerouslySetInnerHTML={{ __html: mapEmbed }} />
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
            <a key={social.label} href={social.url}>
              <img src={social.logo} alt={social.label} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-image absolute left-0 bottom-0 z-[-2] h-[50vh] max-lg:relative max-lg:max-h-[300px] max-md:max-h-[200px]">
        <img src={footerImage} alt="تصویر فوتر" />
      </div>
    </footer>
  );
}
