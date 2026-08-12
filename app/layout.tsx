import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Oswald, EB_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-oswald",
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "Fu Man Chu Chifita",
  description:
    "Chifita de barrio: wok, brasa y tragos. Cocina chino-peruana servida con cariño en Lima, Perú.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${jetBrainsMono.variable} ${oswald.variable} ${ebGaramond.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
