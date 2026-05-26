"use client";

import { testimonials } from "@/data/mock";
import { Star } from "lucide-react";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "fill-zinc-200 text-zinc-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
            A satisfação dos nossos clientes é o nosso maior orgulho.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Stars rating={testimonial.rating} />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-zinc-100 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-secondary">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
