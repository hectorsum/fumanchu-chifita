"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    mobileSrc: "/assets/banner-1-mobile.jpg",
    desktopSrc: "/assets/banner-1.png",
    alt: "Dim Sum Nights en Fu Man Chu: viernes de 7pm a 11pm, música de DJ Good Boy",
    desktopObjectClass: "sm:object-[center_42%]",
  },
  {
    mobileSrc: "/assets/banner-2-mobile.jpg",
    desktopSrc: "/assets/banner-lunes-abiertos.png",
    alt: "Seguimos con lunes abiertos: ven, come y disfruta",
    desktopObjectClass: "",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 7000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const jump = (n: number) => {
    setIndex((n + SLIDES.length) % SLIDES.length);
    startTimer();
  };

  return (
    <section id="top" className="h-dvh bg-[#0D0906]">
      <div className="relative h-full w-full overflow-hidden bg-ink-card">
        {SLIDES.map((slide, i) => (
          <a
            key={slide.mobileSrc}
            href="#reservas"
            className="absolute inset-0 block transition-opacity duration-700 ease-out"
            style={{
              opacity: index === i ? 1 : 0,
              pointerEvents: index === i ? "auto" : "none",
            }}
          >
            <picture>
              <source media="(min-width: 640px)" srcSet={slide.desktopSrc} />
              <img
                src={slide.mobileSrc}
                alt={slide.alt}
                className={`block h-full w-full object-cover object-center ${slide.desktopObjectClass}`}
              />
            </picture>
          </a>
        ))}

        <button
          type="button"
          onClick={() => jump(index - 1)}
          aria-label="Promoción anterior"
          className="absolute cursor left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink-header/80 text-cream shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-colors duration-150 ease-out hover:bg-ink-header hover:text-gold active:scale-95 sm:left-5 sm:h-12 sm:w-12 lg:left-6 lg:h-14 lg:w-14"
        >
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => jump(index + 1)}
          aria-label="Promoción siguiente"
          className="absolute cursor right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink-header/80 text-cream shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-colors duration-150 ease-out hover:bg-ink-header hover:text-gold active:scale-95 sm:right-5 sm:h-12 sm:w-12 lg:right-6 lg:h-14 lg:w-14"
        >
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
