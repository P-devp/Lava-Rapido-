"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { BookingFormData, Appointment, Service, VehicleSize } from "@/types";

interface BookingContextType {
  formData: BookingFormData;
  appointments: Appointment[];
  updateVehicleSize: (size: VehicleSize) => void;
  updateService: (service: Service) => void;
  updateDateTime: (date: string, timeSlot: string) => void;
  updateCustomer: (name: string, phone: string, licensePlate: string) => void;
  resetForm: () => void;
  addAppointment: (appointment: Appointment) => void;
}

const initialFormData: BookingFormData = {
  vehicleSize: null,
  service: null,
  date: null,
  timeSlot: null,
  customerName: "",
  customerPhone: "",
  licensePlate: "",
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const updateVehicleSize = useCallback((size: VehicleSize) => {
    setFormData((prev) => ({ ...prev, vehicleSize: size, service: null }));
  }, []);

  const updateService = useCallback((service: Service) => {
    setFormData((prev) => ({ ...prev, service }));
  }, []);

  const updateDateTime = useCallback((date: string, timeSlot: string) => {
    setFormData((prev) => ({ ...prev, date, timeSlot }));
  }, []);

  const updateCustomer = useCallback(
    (name: string, phone: string, licensePlate: string) => {
      setFormData((prev) => ({ ...prev, customerName: name, customerPhone: phone, licensePlate }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
  }, []);

  const addAppointment = useCallback((appointment: Appointment) => {
    setAppointments((prev) => [appointment, ...prev]);
  }, []);

  return (
    <BookingContext.Provider
      value={{
        formData,
        appointments,
        updateVehicleSize,
        updateService,
        updateDateTime,
        updateCustomer,
        resetForm,
        addAppointment,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
