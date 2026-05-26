import Link from "next/link";
import { Droplets, Sparkles, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-24">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300">
          <Sparkles className="h-3.5 w-3.5" />
          Agendamento online fácil e rápido
        </div>

        {/* Heading */}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
          Seu carro limpo e{" "}
          <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
            brilhando como novo
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          Agende sua lavagem em segundos sem sair de casa. Atendimento premium com produtos
          profissionais e equipe especializada.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link href="/#agendar">
            <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-400">
              Agendar Horário
              <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="#servicos">
            <Button
              variant="outline"
              size="lg"
              className="border-zinc-500 text-zinc-200 hover:border-zinc-400 hover:bg-white/10"
            >
              Ver Serviços
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 sm:gap-12">
          <div>
            <p className="text-2xl font-bold text-white sm:text-3xl">+500</p>
            <p className="mt-1 text-xs text-zinc-400 sm:text-sm">Carros lavados</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white sm:text-3xl">4.9</p>
            <p className="mt-1 text-xs text-zinc-400 sm:text-sm">Avaliação média</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white sm:text-3xl">98%</p>
            <p className="mt-1 text-xs text-zinc-400 sm:text-sm">Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
}
