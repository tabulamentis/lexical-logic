import { MessageCircle, Settings, Zap, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section
      id="como-funciona"
      className="relative py-24 bg-white overflow-hidden"
    >
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
          {/* Línea conectora NARANJA */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[3px] bg-orange-500 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              {
                number: "01",
                title: "CONTÁCTANOS",
                description: "Agenda una reunión para conocer tus necesidades",
                icon: <MessageCircle className="w-12 h-12 text-orange-500" strokeWidth={2} />,
                circleColor: "bg-gradient-to-br from-orange-500 via-orange-400 to-blue-600"
              },
              {
                number: "02",
                title: "PERSONALIZAMOS TU BOT",
                description: "Configuramos el chatbot con tu información y tono de marca",
                icon: <Settings className="w-12 h-12 text-gray-700" strokeWidth={2} />,
                circleColor: "bg-gradient-to-br from-orange-500 via-orange-400 to-blue-600"
              },
              {
                number: "03",
                title: "INTEGRACIÓN",
                description: "Conectamos el bot con tus plataformas en minutos",
                icon: <Zap className="w-12 h-12 text-gray-700" strokeWidth={2} />,
                circleColor: "bg-gradient-to-br from-orange-500 via-orange-400 to-blue-600"
              },
              {
                number: "04",
                title: "¡LISTO PARA FUNCIONAR!",
                description: "Tu asistente IA trabaja 24/7 por ti",
                icon: <Rocket className="w-12 h-12 text-gray-700" strokeWidth={2} />,
                circleColor: "bg-gradient-to-br from-orange-500 via-orange-400 to-blue-600"
              },
            ].map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                {/* Círculo con gradiente FORZADO */}
                <div 
                  className={`w-32 h-32 mb-8 rounded-full flex items-center justify-center shadow-2xl ${step.circleColor}`}
                  style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #3b82f6 100%)' }}
                >
                  <span className="text-white text-4xl font-black">{step.number}</span>
                </div>
                
                {/* Card blanca */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center w-full">
                  <div className="mb-6">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 tracking-wide mb-4 uppercase">
                    {step.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 leading-relaxed">
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