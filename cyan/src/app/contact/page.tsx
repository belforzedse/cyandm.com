import { PageHero } from "../../components/PageHero";
import { Breadcrumb } from "../../components/Breadcrumb";
import { contact } from "../../data/global";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">
        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "ارتباط با ما" }]} />
      </div>
      <PageHero
        eyebrow="CONTACT"
        title="ارتباط با سایان"
        description="در وردپرس این صفحه از قالب `templates/contact-us.php` استفاده می‌کند و فرم با HubSpot/Telegram ادغام شده است."
      />
      <div className="bg-white py-16">
        <div className="container mx-auto max-w-4xl space-y-12 px-4">
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">اطلاعات تماس</h2>
            <p className="mt-4 text-sm text-slate-600">{contact.address}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {contact.phoneNumbers.map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="block text-cyan-600">
                  {phone}
                </a>
              ))}
              <a href={`mailto:${contact.email}`} className="block text-cyan-600">
                {contact.email}
              </a>
            </div>
            <div
              className="mt-6 overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_18px_80px_rgba(10,8,30,0.08)] [&_iframe]:h-[360px] [&_iframe]:w-full"
              dangerouslySetInnerHTML={{ __html: contact.mapEmbed }}
            />
          </section>

          <section className="rounded-3xl border border-dashed border-cyan-200 bg-cyan-50/80 p-6 text-sm text-cyan-900">
            فرم تماس در وردپرس از طریق AJAX به کلاس `Cyn_Contact_Form` متصل می‌شود و داده‌ها را به پایگاه داده و Telegram ارسال
            می‌کند. در Next.js می‌توانیم همین جریان را با API Route و فراخوانی webhook پیاده‌سازی کنیم.
          </section>
        </div>
      </div>
    </div>
  );
}
