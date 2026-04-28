import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Portfolio Clément LACHIZE",
  description:
    "Portfolio de Clément Lachize — Développeur informatique passionné par l'intelligence artificielle et la robotique. Découvrez mes projets, compétences et parcours.",
  keywords: [
    "Clément Lachize",
    "développeur",
    "informatique",
    "IA",
    "robotique",
    "portfolio",
    "Flutter",
    "Next.js",
  ],
  authors: [{ name: "Clément Lachize" }],
  openGraph: {
    title: "Portfolio Clément LACHIZE",
    description: "Concevoir des solutions intelligentes pour faire le pont entre le code et le réel.",
    type: "website",
  },
  icons: {
    icon: "/icone/image/logoCL.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`dark ${cinzel.variable} ${lora.variable}`}>
      <body className="min-h-full flex flex-col bg-black dark:bg-black font-lora">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
