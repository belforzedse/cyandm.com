import Link from "next/link";
import { teamMembers } from "../data/global";

export function TeamGrid() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">TEAM</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">تیم سایان</h2>
          </div>
          <Link href="/team" className="rounded-full border border-cyan-500 px-5 py-2 text-sm font-semibold text-cyan-600">
            مشاهده همه اعضا
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.slug} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-slate-100">
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
    </section>
  );
}
