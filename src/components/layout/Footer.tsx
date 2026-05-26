import { Droplets, MapPinned, Clock, Phone, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-lg font-bold">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600 text-white">
                <Droplets className="h-5 w-5" />
              </div>
              <span>
                Lava<span className="text-teal-400">Rápido</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              Seu carro merece o melhor cuidado. Agende online e tenha prioridade no atendimento.
            </p>
          </div>

          {/* Horários */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Horários
            </h3>
            <div className="space-y-2 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-teal-400" />
                <span>Seg - Sex: 08:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-teal-400" />
                <span>Sáb: 08:00 - 16:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-teal-400" />
                <span>Dom: Fechado</span>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Contato
            </h3>
            <div className="space-y-2 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span>(11) 99999-8888</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinned className="h-4 w-4 text-teal-400" />
                <span>Rua Exemplo, 123 - Centro, São Paulo - SP</span>
              </div>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700 transition-colors hover:bg-teal-600"
                aria-label="Instagram"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700 transition-colors hover:bg-teal-600"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} LavaRápido. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
