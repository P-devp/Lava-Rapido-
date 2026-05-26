"use client";

import { useBooking } from "@/context/BookingContext";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { CalendarClock, CalendarCheck, History, ChevronRight, Calendar } from "lucide-react";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("pt-BR");
}

const statusStyles: Record<string, string> = {
  confirmed: "bg-teal-50 text-teal-700 border-teal-200",
  completed: "bg-zinc-50 text-zinc-500 border-zinc-200",
  cancelled: "bg-red-50 text-red-600 border-red-200",
};

const statusLabels: Record<string, string> = {
  confirmed: "Confirmado",
  completed: "Concluído",
  cancelled: "Cancelado",
};

export default function DashboardPage() {
  const { appointments } = useBooking();

  const confirmedAppointments = appointments.filter((a) => a.status === "confirmed");
  const historyAppointments = appointments.filter(
    (a) => a.status === "completed" || a.status === "cancelled"
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-secondary sm:text-3xl">Meus Agendamentos</h1>
        <p className="mt-1 text-sm text-slate-500">
          Acompanhe seus agendamentos e histórico de serviços.
        </p>
      </div>

      {appointments.length === 0 ? (
        /* Empty state */
        <Card className="mt-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100">
            <Calendar className="h-8 w-8 text-zinc-400" />
          </div>
          <h2 className="text-lg font-semibold text-secondary">Nenhum agendamento ainda</h2>
          <p className="mt-1 text-sm text-slate-500">
            Você ainda não possui agendamentos. Agende seu horário agora!
          </p>
          <Link href="/#agendar">
            <Button className="mt-6">
              Agendar Horário
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="mt-8 space-y-8">
          {/* Active bookings */}
          {confirmedAppointments.length > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-2">
                <CalendarClock className="h-5 w-5 text-teal-600" />
                <h2 className="text-lg font-semibold text-secondary">Próximos Agendamentos</h2>
              </div>
              <div className="space-y-3">
                {confirmedAppointments.map((apt) => (
                  <Card key={apt.id} className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-semibold text-secondary">{apt.service.name}</p>
                      <p className="mt-0.5 text-sm text-slate-500">
                        {formatDate(apt.date)} às {apt.timeSlot}
                      </p>
                      <p className="text-xs text-slate-400">{apt.licensePlate}</p>
                    </div>
                    <span
                      className={`flex-shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
                        statusStyles[apt.status]
                      }`}
                    >
                      {statusLabels[apt.status]}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* History */}
          {historyAppointments.length > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-2">
                <History className="h-5 w-5 text-zinc-400" />
                <h2 className="text-lg font-semibold text-secondary">Histórico</h2>
              </div>
              <div className="space-y-3">
                {historyAppointments.map((apt) => (
                  <Card key={apt.id} className="flex items-center justify-between gap-4 opacity-70">
                    <div className="min-w-0">
                      <p className="font-medium text-secondary">{apt.service.name}</p>
                      <p className="mt-0.5 text-sm text-slate-500">
                        {formatDate(apt.date)} às {apt.timeSlot}
                      </p>
                      <p className="text-xs text-slate-400">{apt.licensePlate}</p>
                    </div>
                    <span
                      className={`flex-shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
                        statusStyles[apt.status]
                      }`}
                    >
                      {statusLabels[apt.status]}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* New booking CTA */}
          <div className="text-center">
            <Link href="/#agendar">
              <Button variant="outline">
                Novo Agendamento
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
