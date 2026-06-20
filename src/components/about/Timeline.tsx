import ScrollReveal from "@/components/shared/ScrollReveal";
import { bio, education } from "@/constants/about";

const typeStyles: Record<string, string> = {
  degree: "bg-primary/10 text-primary dark:bg-primary/20 border-primary/30",
  specialty: "bg-accent/10 text-accent dark:bg-accent/20 border-accent/30",
  subspecialty: "bg-secondary/10 text-secondary dark:bg-white/10 dark:text-white border-secondary/20 dark:border-white/20",
  certification: "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-700",
};

const typeLabels: Record<string, string> = {
  degree: "Licenciatura",
  specialty: "Especialidad",
  subspecialty: "Subespecialidad",
  certification: "Certificación",
};

export default function BioAndTimeline() {
  return (
    <>
      {/* Bio Section */}
      <section
        className="py-20 md:py-24 bg-surface dark:bg-dark-surface"
        aria-label="Biografía del doctor"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <ScrollReveal direction="left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-sm font-semibold text-primary font-body mb-6">
                  {bio.badge}
                </span>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.1}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary dark:text-white mb-8 leading-tight">
                  {bio.title}
                </h2>
              </ScrollReveal>
              <div className="space-y-5">
                {bio.paragraphs.slice(0, 2).map((paragraph, i) => (
                  <ScrollReveal key={i} direction="left" delay={0.1 + i * 0.08}>
                    <p className="text-text dark:text-slate-300 leading-relaxed font-body">
                      {paragraph}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {bio.paragraphs.slice(2).map((paragraph, i) => (
                <ScrollReveal key={i} direction="right" delay={0.1 + i * 0.08}>
                  <p className="text-text dark:text-slate-300 leading-relaxed font-body">
                    {paragraph}
                  </p>
                </ScrollReveal>
              ))}

              {/* Quote */}
              <ScrollReveal direction="right" delay={0.3}>
                <blockquote className="mt-8 pl-6 border-l-4 border-primary">
                  <p className="text-text-muted dark:text-slate-400 italic leading-relaxed font-body text-lg">
                    "{bio.quote.text}"
                  </p>
                  <footer className="mt-3 text-sm font-semibold text-primary font-body">
                    — {bio.quote.author}
                  </footer>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="py-20 md:py-24 bg-white dark:bg-dark-bg"
        aria-label="Formación académica"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-sm font-semibold text-primary font-body mb-4">
                {education.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary dark:text-white mb-4">
                {education.title}
              </h2>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent dark:from-primary/40 dark:via-dark-border md:-translate-x-px"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {education.timeline.map((item, index) => (
                <ScrollReveal key={item.period} delay={index * 0.12} direction="up">
                  <div className={`relative flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start`}>
                    {/* Dot */}
                    <div
                      className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-white dark:border-dark-bg md:-translate-x-1.5 mt-6 z-10 flex-shrink-0 shadow-sm"
                      aria-hidden="true"
                    />

                    {/* Card */}
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                      <div className="p-6 rounded-2xl bg-surface dark:bg-dark-card border border-border dark:border-dark-border hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border font-body ${typeStyles[item.type]}`}>
                            {typeLabels[item.type]}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-secondary dark:text-white mb-1">
                          {item.period}
                        </h3>
                        <p className="text-primary text-sm font-semibold font-body mb-1">
                          {item.institution}
                        </p>
                        <p className="text-xs text-text-muted dark:text-slate-500 font-body mb-3 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {item.location}
                        </p>
                        <p className="text-sm text-text-muted dark:text-slate-400 leading-relaxed font-body">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
