import { Plug, Brain, Settings, Rocket, MessageSquare, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Contáctanos",
    description: "Agenda una reunión para conocer tus necesidades",
    icon: MessageSquare,
    iconColor: "text-[#F97316]",
  },
  {
    number: "02",
    title: "Personalizamos tu bot",
    description: "Configuramos el chatbot con tu información y tono de marca",
    icon: Settings,
    iconColor: "text-[#3B82F6]",
  },
  {
    number: "03",
    title: "Integración",
    description: "Conectamos el bot con tus plataformas en minutos",
    icon: Zap,
    iconColor: "text-[#F97316]",
  },
  {
    number: "04",
    title: "¡Listo para funcionar!",
    description: "Tu asistente IA trabaja 24/7 por ti",
    icon: Rocket,
    iconColor: "text-[#3B82F6]",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="relative w-full py-24 px-8 lg:px-16 bg-[#F8FAFC]">
      {/* Background decorativo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="/images/presentaciones-1.png"
          alt="" 
          className="w-full max-w-2xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl mb-4 text-[#1F2937]">¿CÓMO FUNCIONA?</h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto">
            Implementación simple en 4 pasos
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connector Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] via-[#3B82F6] to-[#F97316]"></div>

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F97316] to-[#3B82F6] flex items-center justify-center mb-6 text-2xl font-bold text-white shadow-lg relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`mb-4 ${step.iconColor}`}>
                  <step.icon size={40} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="flex gap-6 items-start animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Left side - Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F97316] to-[#3B82F6] flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex-1 pt-2">
                <div className={`mb-3 ${step.iconColor}`}>
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
