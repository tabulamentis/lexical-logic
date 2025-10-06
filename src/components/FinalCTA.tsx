import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta-final" className="w-full py-24 px-8 lg:px-16 bg-gradient-to-br from-[#F97316] via-[#3B82F6] to-[#F97316] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12 animate-fade-up">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-white font-bold">
            ¿LISTO PARA AUTOMATIZAR TU NEGOCIO?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Únete a cientos de empresas que ya están transformando su atención al cliente con nuestras soluciones de IA
          </p>
          
          <Button 
            onClick={scrollToContact}
            className="text-lg px-8 py-6 bg-white text-[#3B82F6] hover:bg-gray-100 font-bold rounded-lg transition-all duration-300 group shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Contáctanos Ahora
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>

          <p className="text-center text-[#64748B] text-sm mt-6">
            Sin tarjeta de crédito requerida • Respuesta en 24 horas
          </p>
        </div>
    </section>
  );
};

export default FinalCTA;
