import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import QuoteFormSection from "@/components/QuoteFormSection";
import ContactForm from "@/components/ContactForm";

import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <FAQ />
        <QuoteFormSection />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;