"use client";

import { useEffect, useRef, useState } from "react";

type Drink = {
  img: string;
  alt: string;
  tag: string;
  title: string;
  notes: string;
  desc: string;
};

function DrinkCard({ drink }: { drink: Drink }) {
  return (
    <article className="group relative w-[82%] flex-none snap-center overflow-hidden border-[1.5px] border-bronze bg-ink-card transition-colors duration-[400ms] ease-out hover:border-gold sm:w-auto sm:flex-1 sm:snap-align-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={drink.img}
        alt={drink.alt}
        className="block aspect-[3/4] w-full object-cover [filter:saturate(0.95)_brightness(0.78)] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:[filter:saturate(1)_brightness(0.9)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,6,4,0.94)_0%,rgba(9,6,4,0.35)_42%,rgba(9,6,4,0.05)_100%)]"></div>
      <div className="absolute inset-x-0 bottom-0 px-6 pb-7">
        <h3 className="mb-3 font-display text-[32px] font-bold uppercase leading-none text-cream sm:text-[40px]">
          {drink.title}
        </h3>
        <div className="mb-3.5 h-px w-11 bg-gold"></div>
        <p className="mb-2.5 font-display text-[11px] font-medium uppercase tracking-[0.24em] text-gold/90">
          {drink.notes}
        </p>
        <p className="font-serif text-[17px] leading-[1.5] text-cream/70 sm:text-[18px]">
          {drink.desc}
        </p>
      </div>
    </article>
  );
}

export default function BarCarousel({ drinks }: { drinks: Drink[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const item = child as HTMLElement;
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const dist = Math.abs(itemCenter - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const item = scrollerRef.current?.children[i] as HTMLElement | undefined;
    item?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0"
      >
        {drinks.map((drink) => (
          <DrinkCard key={drink.title} drink={drink} />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2 sm:hidden">
        {drinks.map((drink, i) => (
          <button
            key={drink.title}
            type="button"
            aria-label={`Ver ${drink.title}`}
            onClick={() => goTo(i)}
            className="h-1.5 w-1.5 rounded-full transition-colors"
            style={{ background: active === i ? "#C8965A" : "rgba(240,237,230,0.3)" }}
          />
        ))}
      </div>
    </div>
  );
}
