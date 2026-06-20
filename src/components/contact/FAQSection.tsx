import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { faq, offices, contactInfo, contactHero } from "@/constants/contact";

// FAQ Accordion
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-16 md:py-20 bg-surface dark:bg-dark-surface"
      aria-label="Preguntas frecuentes"
    >

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary dark:text-white mb-3">
              Preguntas frecuentes
            </h2>
            <p className="text-text-muted dark:text-slate-400 font-body max-w-xl mx-auto">
              Resolvemos las dudas más comunes antes de su primera visita.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="max-w-3xl mx-auto space-y-3"
          role="list"
          aria-label="Lista de preguntas frecuentes"
        >
          {faq.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.05} direction="up">
              <div
                className="rounded-xl border border-border dark:border-dark-border bg-white dark:bg-dark-card overflow-hidden transition-all duration-200 hover:border-primary/30 dark:hover:border-primary/30"
                role="listitem"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-surface dark:hover:bg-dark-surface transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                >
                  <span className="font-semibold text-sm text-text dark:text-white font-body pr-2">
                    {item.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-sm text-text-muted dark:text-slate-400 leading-relaxed font-body">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Office Cards
export function OfficesSection() {
  return (
    <section
      className="py-16 md:py-20 bg-white dark:bg-dark-bg"
      aria-label="Ubicación de consultorios"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary dark:text-white mb-3">
              ¿Dónde encontrarnos?
            </h2>
            <p className="text-text-muted dark:text-slate-400 font-body max-w-xl mx-auto">
              Consultorios ubicados en Monterrey, Nuevo León, con fácil acceso y
              estacionamiento.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {offices.map((office, index) => (
            <ScrollReveal key={office.id} delay={index * 0.1} direction="up">
              <div
                className={`p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full ${
                  office.isPrimary
                    ? "border-primary/30 bg-primary/3 dark:bg-primary/10 hover:border-primary/50"
                    : "border-border dark:border-dark-border bg-surface dark:bg-dark-card hover:border-primary/30"
                }`}
              >
                {office.isPrimary && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 text-xs font-bold text-primary mb-4 font-body">
                    ★ Consultorio principal
                  </span>
                )}
                <h3 className="font-display font-bold text-secondary dark:text-white mb-3">
                  {office.name}
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
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
                  <p className="text-sm text-text-muted dark:text-slate-400 font-body leading-relaxed">
                    {office.address}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-primary flex-shrink-0"
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
                  <a
                    href={`tel:${office.phone}`}
                    className="text-sm font-semibold text-primary hover:underline underline-offset-2 font-body transition-colors duration-200"
                  >
                    {office.phone}
                  </a>
                </div>

                {/* Schedule */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold text-text-subtle dark:text-slate-500 uppercase tracking-wider font-body">
                    Horarios
                  </p>
                  {office.schedule.map((slot) => (
                    <div
                      key={slot.days}
                      className="flex justify-between gap-3 text-sm font-body"
                    >
                      <span className="text-text dark:text-slate-300">
                        {slot.days}
                      </span>
                      <span className="text-text-muted dark:text-slate-400 text-right">
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`https://wa.me/${office.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 font-body"
                    aria-label="Contactar por WhatsApp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-white"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border dark:border-dark-border hover:border-primary/50 text-text dark:text-white text-xs font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 font-body"
                    aria-label="Ver en Google Maps"
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
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    Ver en mapa
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Hero
export function ContactHero() {
  return (
    <section
      className="py-16 md:py-24 bg-secondary text-white relative overflow-hidden"
      aria-label="Encabezado de contacto"
    >
      {/* Background Image */}
      <img
        src="/images/contacto.avif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-overlay pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/80 to-primary/80 pointer-events-none"
        aria-hidden="true"
      />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-bold text-primary-light tracking-widest uppercase mb-6 font-body">
            {contactHero.badge}
          </span>
          <h1 className="font-display text-white text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            {contactHero.title}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 font-body max-w-2xl">
            {contactHero.subtitle}
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap gap-3">
            {contactHero.trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary"
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
                <span className="text-sm text-white font-body">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
