import ScrollReveal from "@/components/shared/ScrollReveal";
import { services } from "@/constants/home";

const iconPaths: Record<string, string> = {
  clipboard: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  image: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  "trending-up": "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
};

export default function ServicesSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden bg-white dark:bg-dark-bg"
      aria-label="Servicios"
    >
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-10 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/images/bone2.avif')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/90 dark:bg-dark-bg/90 pointer-events-none" aria-hidden="true" />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-sm font-semibold text-primary font-body mb-4">
              {services.badge}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary dark:text-white mb-4">
              {services.title}
            </h2>
            <p className="text-text-muted dark:text-slate-400 max-w-2xl mx-auto font-body">
              {services.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.list.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1} direction="up">
              <div className="group flex gap-5 p-7 rounded-2xl bg-surface dark:bg-dark-card border border-border dark:border-dark-border hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[service.icon] ?? iconPaths.clipboard} />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-semibold text-secondary dark:text-white">
                      {service.title}
                    </h3>
                    <span className="flex-shrink-0 text-xs text-text-muted dark:text-slate-500 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border px-2 py-1 rounded-full font-body whitespace-nowrap">
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted dark:text-slate-400 leading-relaxed font-body">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="/contacto"
              id="services-cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-primary font-body text-sm"
            >
              Solicitar una consulta
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
