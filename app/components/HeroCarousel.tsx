"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    src: "/assets/banner-dimsum-nights.png",
    alt: "Dim Sum Nights en Fu Man Chu: viernes de 7pm a 11pm, música de DJ Good Boy",
    objectPosition: "center 42%",
  },
  {
    src: "/assets/banner-lunes-abiertos.png",
    alt: "Seguimos con lunes abiertos: ven, come y disfruta",
    objectPosition: "center",
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
    <section id="top" style={{ background: "#0D0906" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          overflow: "hidden",
          background: "#120C08",
        }}
      >
        {SLIDES.map((slide, i) => (
          <a
            key={slide.src}
            href="#reservas"
            style={{
              position: "absolute",
              inset: 0,
              display: "block",
              transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1)",
              opacity: index === i ? 1 : 0,
              pointerEvents: index === i ? "auto" : "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: slide.objectPosition,
                display: "block",
              }}
            />
          </a>
        ))}

        <button
          type="button"
          onClick={() => jump(index - 1)}
          aria-label="Promoción anterior"
          className="navArrow navArrow--prev"
          style={{
            position: "absolute",
            left: 24,
            top: "50%",
            transform: "translateY(-50%)",
            width: 96,
            height: 96,
            border: 0,
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.7))",
          }}
        >
          <svg
            width="64"
            height="40"
            viewBox="0 0 64 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="M62 20H3"></path>
            <path d="M20 4 3 20l17 16"></path>
          </svg>
        </button>
        <button
          type="button"
          onClick={() => jump(index + 1)}
          aria-label="Promoción siguiente"
          className="navArrow navArrow--next"
          style={{
            position: "absolute",
            right: 24,
            top: "50%",
            transform: "translateY(-50%)",
            width: 96,
            height: 96,
            border: 0,
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.7))",
          }}
        >
          <svg
            width="64"
            height="40"
            viewBox="0 0 64 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="M2 20h59"></path>
            <path d="M44 4l17 16-17 16"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
