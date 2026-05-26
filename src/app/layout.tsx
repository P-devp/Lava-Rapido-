import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookingProvider } from "@/context/BookingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LavaRápido - Agende sua lavagem online",
  description:
    "Agende sua lavagem de carro online em segundos. Serviço profissional com produtos de alta qualidade. Lavagem simples, completa e detalhamento automotivo.",
  keywords: ["lava rápido", "lavagem de carro", "agendamento online", "detalhamento automotivo", "SP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <BookingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
