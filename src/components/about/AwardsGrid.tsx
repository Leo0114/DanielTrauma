import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  awards,
  philosophy,
  specialtyAreas,
  insurances,
} from "@/constants/about";

// Awards Grid
export function AwardsGrid() {
  return (
    <section
      className="py-20 md:py-24 bg-surface dark:bg-dark-surface"
      aria-label="Reconocimientos y certificaciones"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 dark:bg-accent/20 border border-accent/20 text-sm font-semibold text-accent font-body mb-4">
              {awards.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary dark:text-white mb-4">
              {awards.title}
            </h2>
            <p className="text-text-muted dark:text-slate-400 max-w-2xl mx-auto font-body mb-2">
              {awards.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Note about placeholders */}
        {/* <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12 px-5 py-3 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/15 text-center">
            <p className="text-sm text-primary font-body">
              📋 {awards.note}
            </p>
          </div>
        </ScrollReveal> */}

        {/* Awards list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {awards.list.map((award, index) => (
            <ScrollReveal key={award.title} delay={index * 0.1} direction="up">
              <div className="group flex gap-5 p-6 rounded-2xl bg-white dark:bg-dark-card border border-border dark:border-dark-border hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Icon / placeholder for diploma */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 border-2 border-dashed border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-secondary dark:text-white mb-1 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs text-primary font-semibold font-body mb-0.5">
                    {award.institution}
                  </p>
                  <p className="text-xs text-text-muted dark:text-slate-500 font-body">
                    {award.year}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Philosophy Section
export function PhilosophySection() {
  return (
    <section
      className="py-20 md:py-24 bg-white dark:bg-dark-bg"
      aria-label="Filosofía de atención"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary dark:text-white mb-16 text-center">
            {philosophy.title}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.1} direction="up">
              <div className="group text-center p-7 rounded-2xl bg-surface dark:bg-dark-card border border-border dark:border-dark-border hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-5 mx-auto group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-secondary dark:text-white mb-3 text-sm">
                  {pillar.title}
                </h3>
                <p className="text-sm text-text-muted dark:text-slate-400 leading-relaxed font-body">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Specialty Areas Section
export function SpecialtyAreasSection() {
  return (
    <section
      className="py-20 md:py-24 bg-surface dark:bg-dark-surface"
      aria-label="Áreas de especialidad"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-sm font-semibold text-primary font-body mb-4">
              {specialtyAreas.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary dark:text-white mb-4">
              {specialtyAreas.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialtyAreas.list.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 0.08} direction="up">
              <div
                className={`p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full ${
                  area.isHighlighted
                    ? "bg-gradient-to-br from-secondary to-primary/70 border-transparent text-white"
                    : "bg-white dark:bg-dark-card border-border dark:border-dark-border hover:border-primary/30"
                }`}
              >
                {area.isHighlighted && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/30 border border-primary/40 text-xs font-bold text-primary-light mb-4">
                    ⭐ Especialidad principal
                  </span>
                )}
                <h3
                  className={`font-display font-bold text-lg mb-4 ${area.isHighlighted ? "text-white" : "text-secondary dark:text-white"}`}
                >
                  {area.title}
                </h3>
                <ul className="space-y-2">
                  {area.conditions.map((condition) => (
                    <li
                      key={condition}
                      className={`flex items-start gap-2 text-sm font-body ${
                        area.isHighlighted
                          ? "text-slate-200"
                          : "text-text-muted dark:text-slate-400"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${area.isHighlighted ? "text-primary-light" : "text-primary"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Insurances Section
export function InsurancesSection() {
  return (
    <section
      className="relative py-16 md:py-20 bg-white dark:bg-dark-bg overflow-hidden"
      aria-label="Aseguradoras aceptadas"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-5 dark:opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('/images/bone1.avif')" }}
        aria-hidden="true"
      />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-sm font-semibold text-primary font-body mb-4">
              {insurances.badge}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary dark:text-white mb-3">
              {insurances.title}
            </h2>
            <p className="text-text-muted dark:text-slate-400 max-w-xl mx-auto font-body text-sm">
              {insurances.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-6">
            {insurances.list.map((ins) => (
              <span
                key={ins}
                className="px-4 py-2 bg-surface dark:bg-dark-card border border-border dark:border-dark-border rounded-full text-sm font-body text-text dark:text-slate-300 hover:border-primary/40 hover:text-primary transition-colors duration-200"
              >
                {ins}
              </span>
            ))}
          </div>
          <p className="text-center text-xs text-text-muted dark:text-slate-500 font-body mt-4">
            {insurances.note}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
