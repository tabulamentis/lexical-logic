import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const handleContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemo = () => {
    const demoSection = document.getElementById('como-funciona');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center justify-center px-6 py-20 md:py-32 overflow-hidden bg-gradient-to-br from-dark via-carbon to-dark">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10 animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          <span className="block mb-2">AUTOMATIZAMOS TU NEGOCIO</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl gradient-text font-black">
            CON IA
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-12 text-foreground/80 font-normal max-w-3xl mx-auto leading-relaxed">
          Chatbots inteligentes que se conectan con WhatsApp y redes sociales
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default"
            size="lg"
            onClick={handleContact}
            className="text-base md:text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-300 group"
          >
            Solicitar Demo
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={handleDemo}
            className="text-base md:text-lg px-8 py-6 h-auto border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-all duration-300"
          >
            <Play className="mr-2" size={20} />
            Ver Cómo Funciona
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--blue) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--orange) / 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
