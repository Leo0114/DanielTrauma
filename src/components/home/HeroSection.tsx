import { motion } from "framer-motion";
import { hero } from "@/constants/home";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-dark-bg"
      aria-label="Sección principal"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary font-body">
                {hero.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary dark:text-white leading-[1.1] mb-6"
            >
              Su salud{" "}
              <span className="relative">
                <span className="text-gradient-primary">musculoesquelética</span>
              </span>
              <br />
              en las mejores{" "}
              <span className="relative inline-block">
                manos
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="4"
                  viewBox="0 0 200 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 2C50 2 80 2 200 2"
                    stroke="#06b6d4"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-text-muted dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-xl font-body"
            >
              {hero.subtitle}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 text-sm text-text-muted dark:text-slate-500 mb-8 font-body"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {hero.location}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={hero.cta.primary.href}
                id="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 font-body text-sm"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {hero.cta.primary.label}
              </a>
              <a
                href={hero.cta.secondary.href}
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-border dark:border-dark-border text-text dark:text-white font-semibold rounded-full transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-1 font-body text-sm"
              >
                {hero.cta.secondary.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border dark:border-dark-border"
            >
              {[
                { icon: "✓", text: "Certificado CMOT" },
                { icon: "✓", text: "Sin compromiso quirúrgico" },
                { icon: "✓", text: "Segunda opinión bienvenida" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-text-muted dark:text-slate-400 font-body">
                  <span className="text-primary font-bold">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            {/* Doctor photo placeholder */}
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 dark:from-primary/20 dark:to-accent/20" />
              <div className="relative w-full h-full rounded-3xl bg-surface dark:bg-dark-card border border-border dark:border-dark-border overflow-hidden flex flex-col items-center justify-center gap-4">
                <img
                  src="/images/draw.avif"
                  alt="Dr. Daniel Hernández Coronado"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white dark:bg-dark-surface rounded-2xl p-4 shadow-lg border border-border dark:border-dark-border">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-1">
                        {["MG", "CM", "RV"].map((init) => (
                          <div
                            key={init}
                            className="w-7 h-7 rounded-full bg-primary/20 border-2 border-white dark:border-dark-surface flex items-center justify-center text-xs font-bold text-primary"
                          >
                            {init[0]}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <svg key={s} className="w-3 h-3 text-accent fill-accent" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-xs text-text-muted dark:text-slate-400 font-body">
                          +2,500 pacientes satisfechos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-dark-surface rounded-2xl p-3 shadow-lg border border-border dark:border-dark-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-text dark:text-white font-body">Certificado CMOT</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-surface rounded-2xl p-3 shadow-lg border border-border dark:border-dark-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-text dark:text-white font-body">9.8 / 10</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
