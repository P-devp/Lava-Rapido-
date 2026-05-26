import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import BookingWizardWrapper from "@/components/booking/BookingWizardWrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BookingWizardWrapper />
      <Testimonials />
    </>
  );
}
