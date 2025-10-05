import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Chatbots inteligentes que se conectan con WhatsApp y redes sociales";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleContact = () => {
    const ctaSection = document.getElementById('cta-final');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemo = () => {
    const demoSection = document.getElementById('como-funciona');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center justify-center px-8 lg:px-16 py-24 md:py-32 overflow-hidden bg-[#1E293B]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#F97316] rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#3B82F6] rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#F97316] rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#3B82F6] rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#F97316] rounded-full animate-float-delayed"></div>
      </div>
      
      {/* Decorative AI Brain Icon */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <img 
          src="/images/app-icon.png"
          alt="" 
          className="w-80 h-80 opacity-20 animate-pulse-slow"
          style={{ 
            filter: 'brightness(1.3) drop-shadow(0 0 40px rgba(14, 165, 233, 0.3))' 
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10 animate-fade-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          <span className="block mb-2 text-white">AUTOMATIZAMOS TU NEGOCIO</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl gradient-text font-black">
            CON IA
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-12 text-[#CBD5E1] font-normal max-w-3xl mx-auto leading-relaxed min-h-[4rem] flex items-center justify-center">
          {typedText}<span className="inline-block w-0.5 h-6 bg-[#F97316] ml-1 animate-pulse"></span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleContact}
            className="text-base md:text-lg px-8 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
          >
            Solicitar Demo
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          
          <Button 
            onClick={handleDemo}
            className="text-base md:text-lg px-8 py-3 border-2 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white rounded-lg transition-all duration-300"
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
