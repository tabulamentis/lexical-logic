import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
          Automatizamos tu negocio con IA
        </h1>
        <p className="text-lg md:text-xl mb-12 text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
          Chatbots inteligentes que se conectan con WhatsApp y redes sociales.
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={handleContact}
          className="text-base md:text-lg px-8 py-6 h-auto"
        >
          Habla con nosotros
        </Button>
      </div>
    </section>
  );
};

export default Hero;