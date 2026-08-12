import HeroCarousel from "./components/HeroCarousel";

const WHATSAPP_ORDER_URL =
  "https://wa.me/51999999999?text=Hola%20Fu%20Man%20Chu%2C%20quiero%20hacer%20un%20pedido";
const WHATSAPP_RESERVE_URL =
  "https://wa.me/51999999999?text=Hola%20Fu%20Man%20Chu%2C%20quiero%20reservar%20una%20mesa";

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.17 8.17 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.2-8.24 8.2zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.96-.14.17-.29.19-.54.06a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.36-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.17 1.68 2.56 4.06 3.59.57.24 1.01.39 1.36.5.57.18 1.09.15 1.5.9.44-.06 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
    </svg>
  );
}

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

const navLinkStyle: React.CSSProperties = {
  fontFamily: "var(--font-oswald), sans-serif",
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0D0D0D" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(13,9,6,0.95)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(240,237,230,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1560,
            margin: "0 auto",
            padding: "22px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <a href="#top" style={{ display: "flex", alignItems: "center", color: "#F0EDE6" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-fumanchu.png"
              alt="Logo Fu Man Chu Chifita"
              style={{ height: 54, width: "auto", display: "block" }}
            />
          </a>
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="#top" className="navLink" style={navLinkStyle}>Inicio</a>
            <a href="#nosotros" className="navLink" style={navLinkStyle}>Nosotros</a>
            <a href="#carta" className="navLink" style={navLinkStyle}>Carta</a>
            <a href="#reservas" className="navLink" style={navLinkStyle}>Reservas</a>
            <a href="#contacto" className="navLink" style={navLinkStyle}>Contacto</a>
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener"
              className="whatsappBtn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-oswald), sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                border: 0,
                padding: "14px 28px",
                whiteSpace: "nowrap",
              }}
            >
              <WhatsAppIcon />
              Haz tu pedido
            </a>
          </nav>
        </div>
      </header>

      <HeroCarousel />

      <section
        id="nosotros"
        style={{ position: "relative", background: "#1A120D", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.5,
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(200,150,90,0.13) 0 1px, transparent 1px 46px), repeating-linear-gradient(-45deg, rgba(200,150,90,0.13) 0 1px, transparent 1px 46px)",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            maxWidth: 1360,
            margin: "0 auto",
            padding: "96px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1.02fr",
            gap: 96,
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <p
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C8965A",
                margin: "0 0 24px",
              }}
            >
              La casa
            </p>
            <h2
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 700,
                fontSize: 58,
                lineHeight: 1.02,
                letterSpacing: "0.005em",
                textTransform: "uppercase",
                color: "#F0EDE6",
                margin: 0,
              }}
            >
              Sabor de chifa, alma de barrio
            </h2>
            <div style={{ width: 96, height: 1, background: "#C8965A", margin: "32px 0 40px" }}></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <p
                style={{
                  fontFamily: "var(--font-eb-garamond), serif",
                  fontSize: 22,
                  lineHeight: 1.65,
                  color: "rgba(240,237,230,0.7)",
                  margin: 0,
                }}
              >
                Nacimos de la costumbre peruana más querida: pedir chifa. Cocinamos con wok de
                acero, sillao fermentado y kion fresco, pero servimos en mesa larga, con luz de
                farol y música alta.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-eb-garamond), serif",
                  fontSize: 22,
                  lineHeight: 1.65,
                  color: "rgba(240,237,230,0.7)",
                  margin: 0,
                }}
              >
                Cada plato lleva el humo del wok —ese <em style={{ fontStyle: "italic" }}>wok hei</em>{" "}
                que no se improvisa— y cada trago del Yan Ken Po Bar lleva un poco de juego.
              </p>
            </div>
          </div>
          <div style={{ border: "2px solid #8A6A3B" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/interior.png"
              alt="Interior del chifa con faroles rojos y celosías de madera"
              style={{ width: "100%", aspectRatio: "1408/1008", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      <section id="carta" style={{ background: "#150F0C", padding: "96px 0 112px" }}>
        <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 48px" }}>
          <p
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#C8965A",
              margin: "0 0 24px",
            }}
          >
            Carta
          </p>
          <h2
            style={{
              fontFamily: "var(--font-oswald), sans-serif",
              fontWeight: 700,
              fontSize: 58,
              lineHeight: 1.02,
              textTransform: "uppercase",
              color: "#F0EDE6",
              margin: 0,
            }}
          >
            Para compartir al centro
          </h2>
          <div style={{ width: 96, height: 1, background: "#C8965A", margin: "32px 0 64px" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              {
                href: "https://drive.google.com/file/d/1iVa2N3WUr9aTEerCw-jq23Q16FZVJ5Yv/view",
                img: "/assets/dimsum.png",
                alt: "Wantanes y dim sum servidos con salsa de tamarindo",
                eyebrow: "Menú completo",
                title: "La Carta",
              },
              {
                href: "https://drive.google.com/file/d/1APchWTmoofN1hD-Bm9tbj9pHaRUfqm2L/view",
                img: "/assets/tiki.png",
                alt: "Cócteles en vasos tiki sobre la barra del Yan Ken Po Bar",
                eyebrow: "Submarca de bar",
                title: "Yan Ken Po Bar",
              },
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cartaCard"
                style={{
                  position: "relative",
                  display: "block",
                  border: "2px solid #8A6A3B",
                  overflow: "hidden",
                  color: "#F0EDE6",
                  aspectRatio: "1090/830",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.img}
                  alt={card.alt}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(13,9,7,0.92) 0%, rgba(13,9,7,0.6) 38%, rgba(13,9,7,0.25) 70%, rgba(13,9,7,0.35) 100%)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 20,
                    padding: "0 32px 48px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      color: "#C8965A",
                      margin: 0,
                    }}
                  >
                    {card.eyebrow}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontWeight: 700,
                      fontSize: 44,
                      lineHeight: 1,
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: 12,
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "#F0EDE6",
                      border: "2px solid rgba(200,150,90,0.55)",
                      padding: "18px 42px",
                    }}
                  >
                    Ver carta <span style={{ fontSize: 15 }}>↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="bar"
        style={{
          position: "relative",
          background: "#0B0705",
          borderTop: "1px solid rgba(200,150,90,0.2)",
          borderBottom: "1px solid rgba(200,150,90,0.2)",
          padding: "120px 0",
        }}
      >
        <div style={{ position: "relative", maxWidth: 1560, margin: "0 auto", padding: "0 48px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 48,
              flexWrap: "wrap",
              marginBottom: 56,
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "#C8965A",
                  margin: "0 0 18px",
                }}
              >
                Yan Ken Po Bar
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-oswald), sans-serif",
                  fontWeight: 700,
                  fontSize: 68,
                  lineHeight: 0.98,
                  textTransform: "uppercase",
                  margin: 0,
                  maxWidth: "18ch",
                }}
              >
                Piedra, papel
                <br />o tijera
              </h2>
            </div>
            <p
              style={{
                fontFamily: "var(--font-eb-garamond), serif",
                fontSize: 21,
                lineHeight: 1.6,
                color: "rgba(240,237,230,0.68)",
                maxWidth: "44ch",
                margin: 0,
              }}
            >
              Destilados peruanos, infusiones de té y fruta del mercado. Tres tragos insignia y
              una sola regla: quien pierde, invita la siguiente ronda.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
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
            ].map((drink) => (
              <article
                key={drink.title}
                className="barArticle"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  border: "2px solid #8A6A3B",
                  background: "#120C08",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={drink.img}
                  alt={drink.alt}
                  className="barArticleImg"
                  style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(9,6,4,0.94) 0%, rgba(9,6,4,0.35) 42%, rgba(9,6,4,0.05) 100%)",
                  }}
                ></div>
                {/* <span
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 22,
                    fontFamily: "var(--font-oswald), sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.28em",
                    color: "rgba(200,150,90,0.85)",
                  }}
                >
                  {drink.tag}
                </span> */}
                <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 26px 30px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontWeight: 700,
                      fontSize: 40,
                      lineHeight: 1,
                      textTransform: "uppercase",
                      margin: "0 0 12px",
                      color: "#F0EDE6",
                    }}
                  >
                    {drink.title}
                  </h3>
                  <div style={{ width: 44, height: 1, background: "#C8965A", margin: "0 0 14px" }}></div>
                  <p
                    style={{
                      fontFamily: "var(--font-oswald), sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "rgba(200,150,90,0.9)",
                      margin: "0 0 10px",
                    }}
                  >
                    {drink.notes}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-eb-garamond), serif",
                      fontSize: 18,
                      lineHeight: 1.5,
                      color: "rgba(240,237,230,0.7)",
                      margin: 0,
                    }}
                  >
                    {drink.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 44, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 120, height: 1, background: "rgba(200,150,90,0.25)" }}></div>
            <p
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(240,237,230,0.5)",
                margin: 0,
              }}
            >
              Quien pierde, invita la ronda
            </p>
            <a
              href="#carta"
              className="barFooterLink"
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                border: "2px solid rgba(200,150,90,0.55)",
                padding: "16px 30px",
              }}
            >
              Carta del bar
            </a>
          </div>
        </div>
      </section>

      <section id="reservas" style={{ maxWidth: 1200, margin: "0 auto", padding: "128px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/dimsum.png"
            alt="Dim sum y wantanes servidos en platos oscuros con ají"
            style={{
              width: "100%",
              aspectRatio: "1/1",
              objectFit: "cover",
              display: "block",
              border: "2px solid #8A6A3B",
            }}
          />
          <div>
            <h2
              style={{
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 700,
                fontSize: 52,
                lineHeight: 1.05,
                textTransform: "uppercase",
                margin: "0 0 24px",
                maxWidth: "20ch",
              }}
            >
              Mesa larga, sobremesa larga
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(240,237,230,0.68)",
                maxWidth: "52ch",
                margin: "0 0 40px",
              }}
            >
              Venimos preparados para grupos, cumpleaños y esas cenas que empiezan con té y
              terminan con la última ronda del bar. Reserva y te guardamos el sitio.
            </p>
            <a
              href={WHATSAPP_RESERVE_URL}
              target="_blank"
              rel="noopener"
              className="reservaBtn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                fontFamily: "var(--font-oswald), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#F0EDE6",
                border: 0,
                padding: "20px 40px",
                whiteSpace: "nowrap",
              }}
            >
              Reserva tu mesa
            </a>
          </div>
        </div>
      </section>

      <footer id="contacto" style={{ borderTop: "1px solid rgba(240,237,230,0.1)", background: "#111111" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "96px 32px 40px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
            gap: 48,
          }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-fumanchu.png"
              alt="Logo Fu Man Chu Chifita"
              style={{ height: 62, width: "auto", display: "block", marginBottom: 20 }}
            />
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(240,237,230,0.6)", margin: 0, maxWidth: "34ch" }}>
              Chifita de barrio: wok, brasa y tragos. Cocina chino-peruana servida con cariño.
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C8965A",
                margin: "0 0 20px",
              }}
            >
              Visítanos
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, color: "rgba(240,237,230,0.68)" }}>
              <span>Lima, Perú</span>
              <span>+51 999 999 999</span>
              <a
                href="https://www.instagram.com/fumanchuchifita/"
                target="_blank"
                rel="noreferrer"
                className="footerSocialLink"
                style={{ color: "#F0EDE6" }}
              >
                @fumanchuchifita
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
                <a
                  href="https://www.instagram.com/fumanchuchifita/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="footerSocialLink"
                  style={{ color: "#F0EDE6" }}
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@fumanchuchifita"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="footerSocialLink"
                  style={{ color: "#F0EDE6" }}
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C8965A",
                margin: "0 0 20px",
              }}
            >
              Horario
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, color: "rgba(240,237,230,0.68)" }}>
              <span>Mar – Jue · 12:30 – 23:00</span>
              <span>Vie – Sáb · 12:30 – 00:30</span>
              <span>Dom · 12:30 – 17:00</span>
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C8965A",
                margin: "0 0 20px",
              }}
            >
              Reservas
            </p>
            <a
              href="#reservas"
              className="footerReservarLink"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-oswald), sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                padding: "16px 30px",
                border: "1.5px solid rgba(200,150,90,0.55)",
              }}
            >
              Reservar mesa
            </a>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 48px" }}>
          <div style={{ height: 1, background: "rgba(240,237,230,0.08)", marginBottom: 24 }}></div>
          <p style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, color: "#6B6B6B", margin: 0 }}>
            © 2026 Fu Man Chu Chifita · 秘鲁中国菜
          </p>
        </div>
      </footer>
    </div>
  );
}
