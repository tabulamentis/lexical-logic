import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import MissionVision from "@/components/MissionVision";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import FinalCTA from "@/components/FinalCTA";
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
        <MissionVision />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <FAQ />
        <QuoteForm />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;