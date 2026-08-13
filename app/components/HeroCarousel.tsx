"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    mobileSrc: "/assets/banner-1-mobile.jpg",
    desktopSrc: "/assets/banner-dimsum-nights.png",
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
    <section id="top" className="min-h-0 flex-1 bg-[#0D0906]">
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
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-black/35 text-cream backdrop-blur-sm transition-[transform,color,background-color] duration-150 ease-out [filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.5))] hover:-translate-x-1 hover:-translate-y-1/2 hover:text-gold active:scale-95 sm:left-3 sm:h-20 sm:w-20 sm:rounded-none sm:border-0 sm:bg-transparent sm:backdrop-blur-none lg:left-6 lg:h-24 lg:w-24"
        >
          <svg
            className="h-5 w-5 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
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
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 bg-black/35 text-cream backdrop-blur-sm transition-[transform,color,background-color] duration-150 ease-out [filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.5))] hover:-translate-y-1/2 hover:translate-x-1 hover:text-gold active:scale-95 sm:right-3 sm:h-20 sm:w-20 sm:rounded-none sm:border-0 sm:bg-transparent sm:backdrop-blur-none lg:right-6 lg:h-24 lg:w-24"
        >
          <svg
            className="h-5 w-5 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
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
