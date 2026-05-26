export type VehicleSize = "motorcycle" | "hatch-sedan" | "suv-pickup";

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: "wash" | "detailing" | "wax";
  image?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingFormData {
  vehicleSize: VehicleSize | null;
  service: Service | null;
  date: string | null;
  timeSlot: string | null;
  customerName: string;
  customerPhone: string;
  licensePlate: string;
}

export type BookingStatus = "confirmed" | "completed" | "cancelled";

export interface Appointment {
  id: string;
  vehicleSize: VehicleSize;
  service: Service;
  date: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  licensePlate: string;
  status: BookingStatus;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar?: string;
}
