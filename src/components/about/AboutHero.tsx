import { motion } from "framer-motion";
import { aboutHero } from "@/constants/about";

export default function AboutHero() {
  return (
    <section
      className="relative py-20 md:py-28 bg-white dark:bg-dark-bg overflow-hidden"
      aria-label="Presentación del doctor"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent dark:from-primary/10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-primary/10 dark:border-primary/20" aria-hidden="true" />
              {/* Photo area */}
              <div className="relative aspect-[3/4] rounded-3xl bg-surface dark:bg-dark-card border border-border dark:border-dark-border overflow-hidden flex flex-col items-center justify-center gap-5">
                <img
                  src="/images/draw.avif"
                  alt="Dr. Daniel Hernández Coronado"
                  className="w-full h-full object-cover object-center"
                />
                {/* Cedula badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white dark:bg-dark-surface rounded-xl p-3 shadow-md border border-border dark:border-dark-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-xs font-body text-text-muted dark:text-slate-400">{aboutHero.cedula}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-sm font-semibold text-primary tracking-widest uppercase font-body mb-3">
                Acerca del Doctor
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary dark:text-white leading-tight mb-3">
                {aboutHero.name}
              </h1>
              <p className="font-display text-xl text-primary font-medium mb-2">
                {aboutHero.title}
              </p>
              <p className="text-text-muted dark:text-slate-400 font-body mb-6">
                {aboutHero.subtitle}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {aboutHero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-surface dark:bg-dark-card border border-border dark:border-dark-border text-xs font-medium text-text dark:text-slate-300 rounded-full font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-text-muted dark:text-slate-400 font-body mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {aboutHero.location}
              </div>

              <a
                href="/contacto"
                id="about-hero-cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-primary font-body text-sm"
              >
                Agendar Consulta
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
