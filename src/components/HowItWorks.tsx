import { MessageCircle, Settings, Zap, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600">
            Implementación simple en 4 pasos
          </p>
        </div>

        {/* Grid con línea degradada */}
        <div className="relative">
          {/* Línea degradada horizontal */}
          <div className="absolute top-[80px] left-0 right-0 h-1 hidden lg:block">
            <div className="h-full bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Paso 1 - NARANJA */}
            <div className="text-center relative">
              {/* Círculo con número - degradado naranja a azul */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg relative z-10">
                <span className="text-white text-2xl font-bold">01</span>
              </div>
              
              {/* Card blanca */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                {/* Ícono naranja */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <MessageCircle className="w-8 h-8 text-orange-500" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  CONTÁCTANOS
                </h3>
                <p className="text-gray-600">
                  Agenda una reunión para conocer tus necesidades
                </p>
              </div>
            </div>

            {/* Paso 2 - AZUL */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg relative z-10">
                <span className="text-white text-2xl font-bold">02</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Settings className="w-8 h-8 text-blue-500" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  PERSONALIZAMOS TU BOT
                </h3>
                <p className="text-gray-600">
                  Configuramos el chatbot con tu información y tono de marca
                </p>
              </div>
            </div>

            {/* Paso 3 - NARANJA */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg relative z-10">
                <span className="text-white text-2xl font-bold">03</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8 text-orange-500" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  INTEGRACIÓN
                </h3>
                <p className="text-gray-600">
                  Conectamos el bot con tus plataformas en minutos
                </p>
              </div>
            </div>

            {/* Paso 4 - AZUL */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg relative z-10">
                <span className="text-white text-2xl font-bold">04</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Rocket className="w-8 h-8 text-blue-500" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¡LISTO PARA FUNCIONAR!
                </h3>
                <p className="text-gray-600">
                  Tu asistente IA trabaja 24/7 por ti
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
