import { services } from "@/data/mock";
import { Clock, CircleDollarSign } from "lucide-react";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default function Services() {
  return (
    <section id="servicos" className="bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
            Do básico ao detalhamento completo. Temos a solução ideal para o seu veículo.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="group flex flex-col transition-shadow hover:shadow-md">
              {/* Category badge */}
              <div className="mb-3">
                <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                  {service.category === "wash"
                    ? "Lavagem"
                    : service.category === "detailing"
                      ? "Detalhamento"
                      : "Enceramento"}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-secondary">{service.name}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>

              {/* Meta */}
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {service.duration}
                </span>
              </div>

              {/* Price & CTA */}
              <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                <span className="text-xl font-bold text-teal-600">
                  R$ {service.price.toFixed(2).replace(".", ",")}
                </span>
                <Link
                  href={`/#agendar`}
                  className="text-sm font-medium text-teal-600 transition-colors hover:text-teal-700"
                >
                  Agendar
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
