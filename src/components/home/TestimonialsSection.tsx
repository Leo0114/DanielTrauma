import ScrollReveal from "@/components/shared/ScrollReveal";
import { testimonials, ctaSection } from "@/constants/home";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 ${s <= rating ? "text-accent fill-accent" : "text-border fill-border"}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <>
      {/* Testimonials */}
      {/* <section
        className="py-20 md:py-28 bg-surface dark:bg-dark-surface"
        aria-label="Testimonios de pacientes"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 dark:bg-accent/20 border border-accent/20 text-sm font-semibold text-accent font-body mb-4">
                {testimonials.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary dark:text-white mb-4">
                {testimonials.title}
              </h2>
              <p className="text-text-muted dark:text-slate-400 max-w-xl mx-auto font-body">
                {testimonials.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.list.map((testimonial, index) => (
              <ScrollReveal
                key={testimonial.name}
                delay={index * 0.1}
                direction="up"
              >
                <figure className="h-full p-7 rounded-2xl bg-white dark:bg-dark-card border border-border dark:border-dark-border hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
                  <div
                    className="text-primary/20 text-6xl font-serif leading-none mb-2 select-none"
                    aria-hidden="true"
                  >
                    "
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-text dark:text-slate-300 leading-relaxed font-body italic mb-5">
                      "{testimonial.text}"
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-4 pt-4 border-t border-border dark:border-dark-border">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center font-bold text-primary text-sm font-display"
                        aria-hidden="true"
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-secondary dark:text-white font-display">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-text-muted dark:text-slate-500 font-body">
                          {testimonial.condition}
                        </p>
                      </div>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
        className="py-20 md:py-28 bg-gradient-to-br from-secondary via-secondary to-primary/70 text-white relative overflow-hidden"
        aria-label="Llamado a la acción"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {ctaSection.title}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 font-body">
                {ctaSection.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={ctaSection.cta.primary.href}
                  id="final-cta-primary"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-1 shadow-xl shadow-primary/30 font-body text-sm"
                >
                  {ctaSection.cta.primary.label}
                </a>
                <a
                  href={ctaSection.cta.secondary.href}
                  id="final-cta-phone"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-full transition-all duration-200 hover:-translate-y-1 font-body text-sm backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {ctaSection.cta.secondary.label}
                </a>
              </div>
              <p className="mt-8 text-sm text-slate-400 font-body">
                {ctaSection.note}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
