"use client";

import { useState } from "react";
import Link from "next/link";
import { Droplets, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "/dashboard", label: "Meus Agendamentos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-secondary">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white">
            <Droplets className="h-5 w-5" />
          </div>
          <span>
            Lava<span className="text-teal-600">Rápido</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#agendar">
            <Button size="sm">Agendar Horário</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-zinc-100 md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-zinc-50 hover:text-teal-600"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#agendar" onClick={() => setIsOpen(false)}>
              <Button fullWidth size="sm">
                Agendar Horário
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
