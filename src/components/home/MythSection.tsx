import ScrollReveal from "@/components/shared/ScrollReveal";
import { mythSection } from "@/constants/home";

const iconMap: Record<string, string> = {
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  leaf: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  message: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
  heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
};

export default function MythSection() {
  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-dark-bg relative overflow-hidden"
      aria-label="Desmitificando la traumatología"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent dark:from-primary/8" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main message */}
          <div>
            <ScrollReveal direction="left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 dark:bg-accent/20 border border-accent/20 text-sm font-semibold text-accent font-body mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {mythSection.badge}
              </span>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary dark:text-white leading-tight mb-6">
                {mythSection.title}
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15}>
              <p className="text-text-muted dark:text-slate-400 text-lg leading-relaxed mb-6 font-body">
                {mythSection.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-text dark:text-slate-300 leading-relaxed mb-8 font-body">
                {mythSection.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.25}>
              <a
                href={mythSection.cta.href}
                id="myth-cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-primary font-body text-sm"
              >
                {mythSection.cta.label}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {mythSection.points.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 0.1} direction="up">
                <div className="group p-6 rounded-2xl bg-surface dark:bg-dark-card border border-border dark:border-dark-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconMap[point.icon]} />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-sm text-secondary dark:text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-slate-400 leading-relaxed font-body">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
