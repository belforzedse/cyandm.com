import { testimonials } from "../data/global";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-slate-900">آنچه مشتریان درباره سایان می‌گویند</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <img src={testimonial.logo} alt={testimonial.author} className="h-10 w-10 rounded-full bg-white object-contain p-1" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">{testimonial.quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
