import { Plug, Brain, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Conecta tus plataformas",
    description: "Vincula WhatsApp, Instagram, Facebook y más en minutos",
    icon: Plug,
  },
  {
    number: "02",
    title: "Entrena tu chatbot",
    description: "Personaliza respuestas según tu negocio",
    icon: Brain,
  },
  {
    number: "03",
    title: "Personaliza respuestas",
    description: "Ajusta el tono y estilo de comunicación",
    icon: Settings,
  },
  {
    number: "04",
    title: "¡Listo para funcionar!",
    description: "Tu asistente IA trabaja 24/7 por ti",
    icon: Rocket,
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="w-full py-20 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl mb-4 text-foreground">¿CÓMO FUNCIONA?</h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Implementación simple en 4 pasos
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Connector Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number with gradient */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 text-2xl font-bold text-white shadow-lg relative z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 text-primary">
                  <step.icon size={40} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex-1 pt-2">
                <div className="mb-3 text-primary">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
