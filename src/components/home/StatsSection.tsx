import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { stats } from "@/constants/home";

function StatCard({
  value,
  suffix,
  label,
  description,
  icon,
  index,
}: (typeof stats)[0] & { index: number }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    const isDecimal = value !== Math.floor(value);
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, value);
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  const IconSvg = () => {
    const iconMap: Record<string, JSX.Element> = {
      calendar: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      users: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
      "check-circle": (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      star: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      ),
    };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        {iconMap[icon]}
      </svg>
    );
  };

  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <div
        ref={ref}
        className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-dark-card border border-border dark:border-dark-border hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          <IconSvg />
        </div>
        <div className="font-display font-bold text-4xl text-secondary dark:text-white mb-1 tabular-nums">
          {count}
          <span className="text-primary">{suffix}</span>
        </div>
        <p className="font-display font-semibold text-sm text-text dark:text-white mb-2">
          {label}
        </p>
        <p className="text-xs text-text-muted dark:text-slate-400 font-body leading-relaxed">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-16 md:py-24 bg-surface dark:bg-dark-surface"
      aria-label="Estadísticas del doctor"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
