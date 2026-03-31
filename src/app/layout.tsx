import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Clément Lachize | Développeur Informatique & Futur Ingénieur IA/Robotique",
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
    title: "Clément Lachize | Développeur Informatique",
    description: "Concevoir des solutions intelligentes pour faire le pont entre le code et le réel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-full flex flex-col bg-grid dark:bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
