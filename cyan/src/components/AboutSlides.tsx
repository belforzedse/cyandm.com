import { aboutSlides, teamMembers } from "../data/global";

export function AboutSlides() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto max-w-4xl space-y-12 px-4">
        {aboutSlides.map((slide) => (
          <section key={slide.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">{slide.title}</h2>
            <p className="mt-4 text-sm text-slate-600">{slide.description}</p>
            {slide.media && (
              <div className="mt-6 overflow-hidden rounded-2xl">
                <img src={slide.media.src} alt={slide.media.alt} className="h-full w-full object-cover" />
              </div>
            )}
            {slide.bullets && (
              <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                {slide.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {slide.id === "team" && (
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {teamMembers.map((member) => (
                  <article key={member.slug} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                    <div className="mx-auto h-20 w-20 overflow-hidden rounded-full bg-slate-100">
                      <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-xs text-cyan-600">{member.role}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
