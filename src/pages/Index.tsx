import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import QuoteForm from "@/components/QuoteForm";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
      <Hero />
      <Services />
      <Benefits />
      <About />
      <QuoteForm />
      <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;