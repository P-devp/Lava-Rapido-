import type { Service, TimeSlot, Testimonial } from "@/types";

export const services: Service[] = [
  {
    id: "simple-wash",
    name: "Lavagem Simples",
    description: "Lavagem externa completa, incluindo shampoo neutro, enxágue e secagem.",
    price: 49.90,
    duration: "30 min",
    category: "wash",
  },
  {
    id: "complete-wash",
    name: "Lavagem Completa",
    description: "Lavagem externa e interna completa, com aspiração, limpeza de painel e vidros.",
    price: 89.90,
    duration: "60 min",
    category: "wash",
  },
  {
    id: "detailing",
    name: "Detalhamento Premium",
    description: "Limpeza técnica completa interna e externa, com higienização de bancos e teto.",
    price: 179.90,
    duration: "120 min",
    category: "detailing",
  },
  {
    id: "wax-polishing",
    name: "Enceramento & Polimento",
    description: "Enceramento profissional com cera de carnaúba e polimento de pintura.",
    price: 129.90,
    duration: "90 min",
    category: "wax",
  },
  {
    id: "motorcycle-wash",
    name: "Lavagem Moto",
    description: "Lavagem completa para motocicletas, incluindo carenagem, rodas e corrente.",
    price: 29.90,
    duration: "20 min",
    category: "wash",
  },
];

export function getServicesByVehicle(size: string): Service[] {
  if (size === "motorcycle") {
    return services.filter((s) => s.id === "motorcycle-wash" || s.id === "detailing");
  }
  return services.filter((s) => s.id !== "motorcycle-wash");
}

function generateTimeSlots(): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const startHour = 8;
  const endHour = 18;

  for (let hour = startHour; hour < endHour; hour++) {
    for (const minute of [0, 30]) {
      const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      // Simula alguns horários indisponíveis
      const available = !(hour === 12 || (hour === 14 && minute === 0));
      slots.push({ time, available });
    }
  }

  return slots;
}

export const timeSlots: TimeSlot[] = generateTimeSlots();

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Silva",
    rating: 5,
    text: "Serviço impecável! Meu carro saiu como novo. A equipe é muito profissional e o atendimento foi rápido. Super recomendo!",
  },
  {
    id: "2",
    name: "Ana Oliveira",
    rating: 5,
    text: "Agendei pela primeira vez e fiquei impressionada. A lavagem completa deixou o interior do meu carro realmente limpo. Preço justo!",
  },
  {
    id: "3",
    name: "Rafael Santos",
    rating: 4,
    text: "Ótimo custo-benefício. Faço a lavagem simples toda semana e nunca me decepcionei. Agendar online é muito prático.",
  },
  {
    id: "4",
    name: "Juliana Costa",
    rating: 5,
    text: "O detalhamento premium vale cada centavo. Meu carro estava há meses sem uma limpeza profunda e ficou perfeito!",
  },
];

export const vehicleOptions = [
  { value: "motorcycle" as const, label: "Moto", icon: "Bike" },
  { value: "hatch-sedan" as const, label: "Hatch / Sedan", icon: "Car" },
  { value: "suv-pickup" as const, label: "SUV / Pick-up", icon: "Truck" },
];
