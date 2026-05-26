"use client";

import { useState } from "react";
import { services, timeSlots, vehicleOptions, getServicesByVehicle } from "@/data/mock";
import { useBooking } from "@/context/BookingContext";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Bike,
  Car,
  Truck,
  CalendarDays,
  Clock,
  User,
  Phone,
  CreditCard,
  QrCode,
  Banknote,
} from "lucide-react";

const steps = [
  "Veículo",
  "Serviço",
  "Data & Horário",
  "Dados",
  "Confirmação",
];

const vehicleIcons: Record<string, React.ReactNode> = {
  Bike: <Bike className="h-8 w-8" />,
  Car: <Car className="h-8 w-8" />,
  Truck: <Truck className="h-8 w-8" />,
};

function formatPrice(value: number): string {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

export default function BookingWizardWrapper() {
  const { formData, updateVehicleSize, updateService, updateDateTime, updateCustomer, resetForm } =
    useBooking();

  const [step, setStep] = useState(0);
  const [name, setName] = useState(formData.customerName);
  const [phone, setPhone] = useState(formData.customerPhone);
  const [plate, setPlate] = useState(formData.licensePlate);
  const [selectedDate, setSelectedDate] = useState(formData.date ?? "");
  const [selectedTime, setSelectedTime] = useState(formData.timeSlot ?? "");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "location" | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const availableServices = formData.vehicleSize
    ? getServicesByVehicle(formData.vehicleSize)
    : [];

  // Gera dates para os próximos 7 dias
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const weekday = weekdays[date.getDay()];
    return {
      value: `${year}-${String(date.getMonth() + 1).padStart(2, "0")}-${day}`,
      label: `${weekday}, ${day}/${month}`,
      full: `${weekday}, ${day}/${month}/${year}`,
    };
  });

  const canProceed = (): boolean => {
    switch (step) {
      case 0:
        return !!formData.vehicleSize;
      case 1:
        return !!formData.service;
      case 2:
        return !!selectedDate && !!selectedTime;
      case 3:
        return name.trim().length >= 3 && phone.trim().length >= 10 && plate.trim().length >= 6;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (step === 2) {
      updateDateTime(selectedDate, selectedTime);
    }
    if (step === 3) {
      updateCustomer(name, phone, plate.toUpperCase());
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handleNewBooking = () => {
    resetForm();
    setName("");
    setPhone("");
    setPlate("");
    setSelectedDate("");
    setSelectedTime("");
    setPaymentMethod(null);
    setConfirmed(false);
    setStep(0);
  };

  if (confirmed) {
    return (
      <section id="agendar" className="bg-surface px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-lg">
          <Card className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Check className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-secondary">Agendamento Confirmado!</h3>
            <p className="mt-2 text-sm text-slate-500">
              Seu horário foi reservado com sucesso.
            </p>

            <div className="mt-6 space-y-2 rounded-xl bg-zinc-50 p-4 text-left text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Serviço</span>
                <span className="font-medium text-secondary">{formData.service?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Data</span>
                <span className="font-medium text-secondary">
                  {selectedDate
                    ? new Date(selectedDate + "T12:00:00").toLocaleDateString("pt-BR")
                    : ""}{" "}
                  às {selectedTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Veículo</span>
                <span className="font-medium text-secondary">{plate.toUpperCase()}</span>
              </div>
              <div className="flex justify-between border-t border-zinc-200 pt-2">
                <span className="text-slate-500">Valor</span>
                <span className="font-bold text-teal-600">
                  {formData.service ? formatPrice(formData.service.price) : ""}
                </span>
              </div>
              {paymentMethod === "location" && (
                <div className="mt-3 rounded-lg bg-amber-50 p-3 text-center text-xs text-amber-700">
                  Pague na chegada ao lava-rápido. Aceitamos dinheiro, cartão e Pix.
                </div>
              )}
            </div>

            <Button className="mt-6" variant="outline" onClick={handleNewBooking}>
              Novo Agendamento
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="agendar" className="bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Agende seu Horário
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
            Preencha as etapas abaixo e garanta sua vaga.
          </p>
        </div>

        {/* Steps indicator */}
        <div className="mt-8 flex items-center justify-center gap-1 sm:gap-2">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-1 sm:gap-2">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-colors sm:h-8 sm:w-8 ${
                  i <= step
                    ? "bg-teal-600 text-white"
                    : "bg-zinc-200 text-zinc-400"
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span
                className={`hidden text-xs font-medium sm:inline ${
                  i <= step ? "text-teal-600" : "text-zinc-400"
                }`}
              >
                {label}
              </span>
              {i < steps.length - 1 && (
                <div className={`h-0.5 w-4 sm:w-8 ${i < step ? "bg-teal-600" : "bg-zinc-200"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <Card className="mt-8">
          {/* Step 0: Vehicle Size */}
          {step === 0 && (
            <div>
              <h3 className="text-lg font-semibold text-secondary">
                Selecione o tipo do veículo
              </h3>
              <div className="mt-4 grid gap-3">
                {vehicleOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => updateVehicleSize(opt.value)}
                    className={`flex items-center gap-4 rounded-xl border-2 p-4 transition-all ${
                      formData.vehicleSize === opt.value
                        ? "border-teal-500 bg-teal-50"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                        formData.vehicleSize === opt.value
                          ? "bg-teal-600 text-white"
                          : "bg-zinc-100 text-zinc-400"
                      }`}
                    >
                      {vehicleIcons[opt.icon]}
                    </div>
                    <span className="text-base font-medium text-secondary">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Service */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold text-secondary">Escolha o serviço</h3>
              <div className="mt-4 space-y-3">
                {availableServices.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => updateService(svc)}
                    className={`flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all ${
                      formData.service?.id === svc.id
                        ? "border-teal-500 bg-teal-50"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div>
                      <p className="font-medium text-secondary">{svc.name}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{svc.description}</p>
                      <span className="mt-1 inline-block text-xs text-slate-400">
                        Duração: {svc.duration}
                      </span>
                    </div>
                    <span className="ml-4 text-lg font-bold text-teal-600">
                      {formatPrice(svc.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-semibold text-secondary">Selecione data e horário</h3>

              {/* Date */}
              <div className="mt-4">
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                  <CalendarDays className="h-4 w-4" />
                  Data
                </label>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {dateOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSelectedDate(opt.value)}
                      className={`flex-shrink-0 rounded-xl border-2 px-4 py-3 text-center text-sm transition-all ${
                        selectedDate === opt.value
                          ? "border-teal-500 bg-teal-50 font-medium text-teal-700"
                          : "border-zinc-200 text-slate-600 hover:border-zinc-300"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time */}
              <div className="mt-5">
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
                  <Clock className="h-4 w-4" />
                  Horário
                </label>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
                  {timeSlots.map((slot) => {
                    const isPast =
                      selectedDate === dateOptions[0]?.value &&
                      slot.time <=
                        `${String(new Date().getHours()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}`;
                    const disabled = !slot.available || isPast;
                    return (
                      <button
                        key={slot.time}
                        disabled={disabled}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`rounded-lg border-2 py-2 text-sm transition-all ${
                          selectedTime === slot.time
                            ? "border-teal-500 bg-teal-50 font-medium text-teal-700"
                            : disabled
                              ? "cursor-not-allowed border-zinc-100 text-zinc-300"
                              : "border-zinc-200 text-slate-600 hover:border-zinc-300"
                        }`}
                      >
                        {slot.time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Customer Details */}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-semibold text-secondary">Seus dados</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-600">
                    <User className="h-4 w-4" />
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-xl border-2 border-zinc-200 px-4 py-2.5 text-sm text-secondary outline-none transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-600">
                    <Phone className="h-4 w-4" />
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-8888"
                    className="w-full rounded-xl border-2 border-zinc-200 px-4 py-2.5 text-sm text-secondary outline-none transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-600">
                    <CreditCard className="h-4 w-4" />
                    Placa do veículo
                  </label>
                  <input
                    type="text"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value.toUpperCase())}
                    placeholder="ABC-1234"
                    maxLength={8}
                    className="w-full rounded-xl border-2 border-zinc-200 px-4 py-2.5 text-sm text-secondary uppercase outline-none transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Summary & Checkout */}
          {step === 4 && (
            <div>
              <h3 className="text-lg font-semibold text-secondary">Resumo do pedido</h3>

              <div className="mt-4 space-y-3 rounded-xl bg-zinc-50 p-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Veículo</span>
                  <span className="font-medium text-secondary">
                    {vehicleOptions.find((v) => v.value === formData.vehicleSize)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Serviço</span>
                  <span className="font-medium text-secondary">{formData.service?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Data</span>
                  <span className="font-medium text-secondary">
                    {selectedDate
                      ? new Date(selectedDate + "T12:00:00").toLocaleDateString("pt-BR")
                      : ""}{" "}
                    às {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Cliente</span>
                  <span className="font-medium text-secondary">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Placa</span>
                  <span className="font-medium text-secondary">{plate.toUpperCase()}</span>
                </div>
                <div className="flex justify-between border-t border-zinc-200 pt-3">
                  <span className="font-medium text-secondary">Total</span>
                  <span className="text-xl font-bold text-teal-600">
                    {formData.service ? formatPrice(formData.service.price) : ""}
                  </span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-secondary">
                  Forma de pagamento
                </h4>

                <div className="grid gap-3">
                  <button
                    onClick={() => setPaymentMethod("pix")}
                    className={`flex items-center gap-4 rounded-xl border-2 p-4 transition-all ${
                      paymentMethod === "pix"
                        ? "border-teal-500 bg-teal-50"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
                      <QrCode className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-secondary">Pix</p>
                      <p className="text-xs text-slate-400">Pague com QR Code</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("location")}
                    className={`flex items-center gap-4 rounded-xl border-2 p-4 transition-all ${
                      paymentMethod === "location"
                        ? "border-teal-500 bg-teal-50"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50">
                      <Banknote className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-secondary">Pagar no Local</p>
                      <p className="text-xs text-slate-400">Dinheiro, cartão ou Pix na chegada</p>
                    </div>
                  </button>
                </div>

                {paymentMethod === "pix" && (
                  <div className="mt-4 rounded-xl border-2 border-dashed border-zinc-200 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-40 w-40 items-center justify-center rounded-lg bg-white">
                      <QrCode className="h-full w-full p-2 text-zinc-800" />
                    </div>
                    <p className="text-xs text-slate-500">
                      Escaneie o QR Code acima com seu aplicativo bancário para pagar.
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Após a confirmação do pagamento, seu agendamento será validado.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 0}
              className={step === 0 ? "invisible" : ""}
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar
            </Button>

            {step < 4 ? (
              <Button onClick={handleNext} disabled={!canProceed()}>
                Avançar
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleConfirm} disabled={!paymentMethod}>
                Confirmar Agendamento
                <Check className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
