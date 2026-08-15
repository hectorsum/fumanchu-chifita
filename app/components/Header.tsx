"use client";

import { useState } from "react";

const WHATSAPP_ORDER_URL =
  "https://wa.me/51999999999?text=Hola%20Fu%20Man%20Chu%2C%20quiero%20hacer%20un%20pedido";

const NAV_LINKS = [
  { href: "#top", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#carta", label: "Carta" },
  { href: "#reservas", label: "Reservas" },
  { href: "#contacto", label: "Contacto" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.17 8.17 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.2-8.24 8.2zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.96-.14.17-.29.19-.54.06a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.36-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.17 1.68 2.56 4.06 3.59.57.24 1.01.39 1.36.5.57.18 1.09.15 1.5.9.44-.06 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
      ) : (
        <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
      )}
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 shrink-0 border-b border-cream/8 bg-ink-header/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-4 px-5 py-0 sm:px-8 lg:px-12 lg:py-[0px]">
        <a href="#top" className="flex items-center text-cream">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/fumanchu-logo.png"
            alt="Logo Fu Man Chu Chifita"
            className="block h-14 w-auto sm:h-16 lg:h-[92px]"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[13px] font-medium uppercase tracking-[0.18em] text-cream transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_ORDER_URL}
            target="_blank"
            rel="noopener"
            className="stamp-btn group inline-block"
          >
            <span className="relative z-10 flex items-center gap-2.5 whitespace-nowrap bg-reserva/80 px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.24em] text-cream transition-[background-color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:bg-reserva">
              <WhatsAppIcon className="text-cream" />
              Haz tu pedido
            </span>
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-cream transition-colors hover:text-gold"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-cream/8 bg-ink-header px-5 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm font-medium uppercase tracking-[0.18em] text-cream py-3 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>

    <a
      href={WHATSAPP_ORDER_URL}
      target="_blank"
      rel="noopener"
      aria-label="Haz tu pedido por WhatsApp"
      className="animate-fade-up fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_4px_14px_rgba(0,0,0,0.45)] transition-colors duration-300 ease-in-out hover:bg-whatsapp-hover lg:hidden"
      style={{ animationDelay: "600ms" }}
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
    </>
  );
}
