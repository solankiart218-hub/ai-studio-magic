import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  script,
  title,
  subtitle,
}: {
  script?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal className="text-center">
      <div className="mx-auto max-w-2xl">
        {script && (
          <p className="font-script text-2xl text-gold">{script}</p>
        )}
        <h2 className="mt-1 text-4xl font-semibold md:text-5xl">{title}</h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-3">
          <span className="gold-line w-16" />
          <span className="size-1.5 rotate-45 bg-gold" />
          <span className="gold-line w-16" />
        </div>
        {subtitle && (
          <p className="mt-4 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
