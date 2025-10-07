import { MessageCircle, Settings, Zap, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section
      id="como-funciona"
      className="relative py-24 bg-gradient-to-b from-white via-gray-100 to-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[0.35em] text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Implementación simple en 4 pasos
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora horizontal */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-600 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {[
              {
                number: "01",
                title: "CONTÁCTANOS",
                description: "Agenda una reunión para conocer tus necesidades",
                icon: <MessageCircle className="w-10 h-10 text-orange-500" strokeWidth={2.5} />,
              },
              {
                number: "02",
                title: "PERSONALIZAMOS TU BOT",
                description: "Configuramos el chatbot con tu información y tono de marca",
                icon: <Settings className="w-10 h-10 text-blue-500" strokeWidth={2.5} />,
              },
              {
                number: "03",
                title: "INTEGRACIÓN",
                description: "Conectamos el bot con tus plataformas en minutos",
                icon: <Zap className="w-10 h-10 text-orange-500" strokeWidth={2.5} />,
              },
              {
                number: "04",
                title: "¡LISTO PARA FUNCIONAR!",
                description: "Tu asistente IA trabaja 24/7 por ti",
                icon: <Rocket className="w-10 h-10 text-blue-500" strokeWidth={2.5} />,
              },
            ].map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                {/* Círculo con número */}
                <div className="w-28 h-28 bg-gradient-to-br from-orange-500 via-orange-400 to-blue-600 rounded-full flex items-center justify-center mb-8 shadow-2xl relative z-10">
                  <span className="text-white text-3xl font-black">{step.number}</span>
                </div>
                
                {/* Card */}
                <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center w-full max-w-sm">
                  {/* Icono */}
                  <div className="mb-6">
                    {step.icon}
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-wide mb-4 uppercase">
                    {step.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;