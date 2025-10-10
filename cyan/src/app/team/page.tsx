import { PageHero } from "../../components/PageHero";
import { Breadcrumb } from "../../components/Breadcrumb";
import { teamMembers } from "../../data/global";

export default function TeamPage() {
  return (
    <div className="team-page">
      <div className="border-gray-3 border-y-[1px] bg-black-2 p-4 mb-8 [&_p]:flex">\r\n        <Breadcrumb items={[{ label: "خانه", href: "/" }, { label: "تیم سایان" }]} />\r\n      </div>
      <PageHero
        eyebrow="TEAM"
        title="تیم سایان"
        description="در وردپرس این صفحه به کمک قالب `templates/team.php` و اسلایدهای Swiper ساخته می‌شود."
      />
      <div className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.slug} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-slate-100">
                  <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-cyan-600">{member.role}</p>
                <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-3 text-xs font-semibold text-cyan-600">
                  {member.socials.map((social) => (
                    <a key={social.label} href={social.url} className="rounded-full border border-cyan-200 px-3 py-1">
                      {social.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
