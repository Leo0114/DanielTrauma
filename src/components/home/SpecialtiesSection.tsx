import ScrollReveal from "@/components/shared/ScrollReveal";
import { specialties } from "@/constants/home";

export default function SpecialtiesSection() {
  return (
    <section
      className="py-20 md:py-28 bg-surface dark:bg-dark-surface"
      aria-label="Especialidades médicas"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-sm font-semibold text-primary font-body mb-4">
              {specialties.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary dark:text-white mb-4">
              {specialties.title}
            </h2>
            <p className="text-text-muted dark:text-slate-400 max-w-2xl mx-auto font-body leading-relaxed">
              {specialties.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Featured: Columna Vertebral */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary via-secondary to-primary/80 p-8 md:p-12 text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white" />
              <div className="absolute -left-8 -bottom-8 w-48 h-48 rounded-full bg-primary" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/30 border border-primary/40 text-xs font-bold text-primary-light tracking-widest uppercase mb-5">
                  ⭐ {specialties.featured.badge}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  {specialties.featured.title}
                </h3>
                <p className="text-slate-300 leading-relaxed font-body">
                  {specialties.featured.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.featured.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-body text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Other specialties grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialties.list.map((spec, index) => (
            <ScrollReveal key={spec.title} delay={index * 0.08} direction="up">
              <div className="group p-6 rounded-2xl bg-white dark:bg-dark-card border border-border dark:border-dark-border hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-secondary dark:text-white mb-2">
                  {spec.title}
                </h3>
                <p className="text-sm text-text-muted dark:text-slate-400 leading-relaxed font-body">
                  {spec.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
