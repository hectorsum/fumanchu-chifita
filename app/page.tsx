import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import Reveal from "./components/Reveal";
import NewsletterForm from "./components/NewsletterForm";

const WHATSAPP_RESERVE_URL =
  "https://wa.me/51999999999?text=Hola%20Fu%20Man%20Chu%2C%20quiero%20reservar%20una%20mesa";

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="17.2" cy="6.8" r="1"></circle>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.1c-.7-.6-1.1-1.5-1.1-2.5h-3.1v13.4c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1v-3.2c-.3 0-.5-.1-.8-.1-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6V9.1c1.1.8 2.5 1.3 4 1.3V7.3c-1 0-1.9-.4-2.9-2.2z" />
    </svg>
  );
}

const eyebrow = "font-display text-[11px] sm:text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.28em] text-[#DD0522]/90";
const sectionLabel = "font-mono text-[11px] tracking-[0.14em] uppercase text-[#FCF52B]";

const CARTA_CARDS = [
  {
    href: "https://drive.google.com/file/d/1iVa2N3WUr9aTEerCw-jq23Q16FZVJ5Yv/view",
    img: "/assets/carta.jpg",
    alt: "Wantanes y dim sum servidos con salsa de tamarindo",
    eyebrow: "Menú completo",
    title: "La Calta",
  },
  {
    href: "https://drive.google.com/file/d/1APchWTmoofN1hD-Bm9tbj9pHaRUfqm2L/view",
    img: "/assets/yankenpo.jpg",
    alt: "Cócteles en vasos tiki sobre la barra del Yan Ken Po Bar",
    eyebrow: "Submarca de bar",
    title: "Yan Ken Po Bar",
  },
];

const DRINKS = [
  {
    img: "/assets/trago-piedra.png",
    alt: "Cóctel de pisco con maracuyá y kion en vaso bajo",
    tag: "01 · Piedra",
    title: "Piedra",
    notes: "Pisco · Maracuyá · Kion",
    desc: "Espumoso y cítrico. El puño cerrado que abre la noche.",
  },
  {
    img: "/assets/trago-papel.jpg",
    alt: "Cóctel de gin con té de jazmín, pepino y limón",
    tag: "02 · Papel",
    title: "Papel",
    notes: "Gin · Té jazmín · Pepino",
    desc: "Limpio y floral. Se toma despacio, como quien lee la jugada.",
  },
  {
    img: "/assets/trago-tijera.jpg",
    alt: "Cóctel de ron oscuro con lychee y anís estrella",
    tag: "03 · Tijera",
    title: "Tijera",
    notes: "Ron oscuro · Lychee · Anís",
    desc: "Oscuro y especiado. Corta parejo y no perdona.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <HeroCarousel />

      <section id="nosotros" className="relative diagonal-pattern overflow-hidden bg-nosotros">
        <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 px-10 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.02fr] lg:gap-24 lg:px-12 lg:py-24">
          <Reveal className="max-w-[620px]">
            <p className={`${eyebrow} mb-5 lg:mb-6`}>La casa</p>
            <h2 className="text-stroke-ink font-display text-[32px] font-bold uppercase leading-[1.08] tracking-[0.005em] text-[#ECC711] sm:text-[42px] lg:text-[58px] lg:leading-[1.02]">
              Sabor de chifa, alma de barrio
            </h2>
            <div className="my-8 h-px w-24 bg-[#ECC711] lg:my-10"></div>
            <div className="flex flex-col gap-6 lg:gap-7">
              <p className="font-serif text-[17px] leading-[1.65] text-cream/80 sm:text-[19px] lg:text-[22px]">
                Nacimos de la costumbre peruana más querida: pedir chifa. Cocinamos con wok de
                acero, sillao fermentado y kion fresco, pero servimos en mesa larga, con luz de
                farol y música alta.
              </p>
              <p className="font-serif text-[17px] leading-[1.65] text-cream/80 sm:text-[19px] lg:text-[22px]">
                Cada plato lleva el humo del wok, ese <em className="italic">wok hei</em> que no
                se improvisa, y cada trago del Yan Ken Po Bar lleva un poco de juego.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} className="frame-stroke-ink border-[1.5px] border-[#ECC711]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/foto-local.jpg"
              alt="Interior del chifa con faroles rojos y celosías de madera"
              className="block aspect-[650/808] w-fit object-contain"
            />
          </Reveal>
        </div>
      </section>

      <section id="carta" className="bg-carta py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-10 sm:px-8 lg:px-12">
          <Reveal as="p" className={`${eyebrow} mb-5 lg:mb-6`}>Carta</Reveal>
          <Reveal
            as="h2"
            className="text-stroke-ink font-display text-[32px] font-bold uppercase leading-[1.05] text-[#ECC711] sm:text-[42px] lg:text-[58px] lg:leading-[1.02]"
          >
            Para compartir al centro
          </Reveal>
          <div className="my-8 h-px w-24 bg-[#ECC711] lg:mb-16 lg:mt-10"></div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {CARTA_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 150} as="a"
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[1090/830] frame-stroke-ink overflow-hidden border-[1.5px] border-[#ECC711] text-cream transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#FCF52B]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.img}
                  alt={card.alt}
                  className="absolute inset-0 block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 ease-out group-hover:opacity-0"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,9,7,0.92)_0%,rgba(13,9,7,0.6)_38%,rgba(13,9,7,0.25)_70%,rgba(13,9,7,0.35)_100%)] transition-opacity duration-500 ease-out group-hover:opacity-80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 px-6 pb-8 text-center sm:gap-5 sm:pb-12">
                  <p className={eyebrow}>{card.eyebrow}</p>
                  <h3 className="text-stroke-ink font-display text-[28px] font-bold uppercase leading-none sm:text-[36px] lg:text-[44px]">
                    {card.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-3 border-[1.5px] border-[#ECC711] px-6 py-3.5 font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-cream transition-colors duration-300 ease-out sm:px-10 sm:py-4.5 lg:text-[13px] group-hover:border-[#FCF52B] group-hover:bg-[#FCF52B]/10">
                    Ver carta{" "}
                    <span className="inline-block text-[15px] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="bar"
        className="relative border-y border-[#ECC711]/25 bg-bar py-16 sm:py-20 lg:py-[120px]"
      >
        <div className="relative mx-auto max-w-[1560px] px-10 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:flex-wrap lg:items-end lg:justify-between lg:gap-12">
            <Reveal>
              <p className="mb-3 font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-[#DD0522]/90 lg:mb-4.5 lg:text-[12px]">
                Yan Ken Po Bar
              </p>
              <h2 className="text-stroke-ink max-w-[18ch] font-display text-[38px] font-bold uppercase leading-[1] text-[#ECC711] sm:text-[52px] lg:text-[68px] lg:leading-[0.98]">
                Piedra, papel
                <br />o tijera
              </h2>
            </Reveal>
            <Reveal
              as="p"
              delay={150}
              className="max-w-[44ch] font-serif text-[17px] leading-[1.6] text-cream/80 sm:text-[19px] lg:text-[21px]"
            >
              Destilados peruanos, infusiones de té y fruta del mercado. Tres tragos insignia y
              una sola regla: quien pierde, invita la siguiente ronda.
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {DRINKS.map((drink, i) => (
              <Reveal
                key={drink.title}
                as="article"
                delay={i * 150}
                className="group relative overflow-hidden border-[1.5px] frame-stroke-ink border-[#FCF52B]/70 bg-ink-card transition-[transform,border-color] duration-[400ms] ease-out hover:-translate-y-1 hover:border-[#FCF52B]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={drink.img}
                  alt={drink.alt}
                  className="block aspect-[3/4] w-full object-cover [filter:saturate(0.95)_brightness(0.78)] transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:[filter:saturate(1)_brightness(0.9)]"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 ease-out group-hover:opacity-0"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,6,4,0.94)_0%,rgba(9,6,4,0.35)_42%,rgba(9,6,4,0.05)_100%)]"></div>
                {/* <span className="absolute left-5 top-5 font-display text-[12px] font-semibold tracking-[0.28em] text-[#FCF52B]/85">
                  {drink.tag}
                </span> */}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-7">
                  <h3 className="text-stroke-ink mb-3 font-display text-[32px] font-bold uppercase leading-none text-cream sm:text-[40px]">
                    {drink.title}
                  </h3>
                  <div className="mb-3.5 h-px w-11 bg-[#FCF52B]/80"></div>
                  <p className="mb-2.5 font-display text-[11px] font-medium uppercase tracking-[0.24em] text-[#FCF52B]/80">
                    {drink.notes}
                  </p>
                  <p className="font-serif text-[17px] leading-[1.5] text-cream/70 sm:text-[18px]">
                    {drink.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-col items-center gap-5 sm:flex-row lg:mt-11 lg:gap-6">
            <div className="hidden h-px flex-1 bg-[#FCF52B]/50 sm:block"></div>
            <p className="text-center font-display text-[12px] font-medium uppercase tracking-[0.28em] text-cream/50">
              Quien pierde, invita la ronda
            </p>
            <a
              href="#carta"
              className="whitespace-nowrap border-[1.5px] border-[#ECC711]/55 px-7 py-4 font-display text-[12px] font-semibold uppercase tracking-[0.24em] text-[#ECC711] transition-colors duration-150 ease-out hover:bg-[#FCF52B]/12 hover:text-[#FCF52B]-light"
            >
              Carta del bar
            </a>
          </Reveal>
        </div>
      </section>

      <section id="reservas" className="mx-auto max-w-[1200px] px-10 py-20 sm:px-8 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Reveal<"img">
            as="img"
            src="/assets/mesa.jpg"
            alt="Dim sum y wantanes servidos en platos oscuros con ají"
            className="frame-stroke-ink block aspect-square w-full border-[1.5px] border-[#ECC711] object-cover"
          />
          <Reveal delay={150}>
            <h2 className="text-stroke-ink mb-5 max-w-[20ch] font-display text-[30px] font-bold uppercase leading-[1.1] text-[#ECC711] sm:text-[40px] lg:mb-6 lg:text-[52px] lg:leading-[1.05]">
              Mesa larga, sobremesa larga
            </h2>
            <p className="mb-8 max-w-[52ch] text-[16px] leading-[1.7] text-cream/80 sm:text-[17px] lg:mb-10">
              Venimos preparados para grupos, cumpleaños y esas cenas que empiezan con té y
              terminan con la última ronda del bar. Reserva y te guardamos el sitio.
            </p>
            <a
              href={WHATSAPP_RESERVE_URL}
              target="_blank"
              rel="noopener"
              className="stamp-btn group inline-block"
            >
              <span className="relative z-10 flex items-center gap-3.5 whitespace-nowrap bg-reserva/80 px-9 py-5 font-display text-[13px] font-semibold uppercase tracking-[0.24em] text-cream transition-[background-color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:bg-reserva group-active:scale-[0.98]">
                Reserva tu mesa
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <footer id="contacto" className="border-t border-cream/10 bg-footer">
        <Reveal
          as="div"
          className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-10 pb-10 pt-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1fr_0.8fr_0.8fr_1.3fr] lg:gap-12 lg:px-8 lg:pt-24"
        >
          <div className="col-span-full sm:col-span-2 lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/fumanchu-logo.png"
              alt="Logo Fu Man Chu Chifita"
              className="mb-5 block h-14 w-auto lg:h-[82px]"
            />
            <p className="max-w-[34ch] text-[15px] leading-[1.7] text-cream/60">
              Chifita de barrio: wok, brasa y tragos. Cocina chino-peruana servida con cariño.
            </p>
          </div>
          <div>
            <p className={`${sectionLabel} mb-5`}>Visítanos</p>
            <div className="flex flex-col gap-2.5 text-[15px] text-cream/68">
              <span>Lima, Perú</span>
              <span>+51 999 999 999</span>
              <a
                href="https://www.instagram.com/fumanchuchifita/"
                target="_blank"
                rel="noreferrer"
                className="text-cream transition-colors hover:text-[#FCF52B]"
              >
                @fumanchuchifita
              </a>
              <div className="mt-2 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/fumanchuchifita/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-cream transition-colors hover:text-[#FCF52B]"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@fumanchu_chifita"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="text-cream transition-colors hover:text-[#FCF52B]"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className={`${sectionLabel} mb-5`}>Horario</p>
            <div className="flex flex-col gap-2.5 text-[15px] text-cream/68">
              <span>Mar – Jue · 12:30 – 23:00</span>
              <span>Vie – Sáb · 12:30 – 00:30</span>
              <span>Dom · 12:30 – 17:00</span>
            </div>
          </div>
          <div className="col-span-full sm:col-span-2 lg:col-span-1">
            <NewsletterForm />
          </div>
        </Reveal>
        <div className="mx-auto max-w-[1200px] px-5 pb-10 sm:px-8 lg:px-8">
          <div className="mb-6 h-px bg-cream/8"></div>
          <p className="font-mono text-xs text-[#6B6B6B]">
            © 2026 Fu Man Chu Chifita · 秘鲁中国菜
          </p>
        </div>
      </footer>
    </div>
  );
}
