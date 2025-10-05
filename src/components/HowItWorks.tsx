import { MessageCircle, Settings, Zap, Rocket } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600">
            Implementación simple en 4 pasos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Gradient line connecting the steps */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 hidden lg:block">
            <div className="h-full bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500"></div>
          </div>
          {/* Paso 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full border border-gray-100 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl font-bold text-white">
              01
            </div>
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <MessageCircle className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              Contáctanos
            </h3>
            <p className="text-gray-600 text-center">
              Agenda una reunión para conocer tus necesidades
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full border border-gray-100 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl font-bold text-white">
              02
            </div>
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Settings className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              Personalizamos tu Bot
            </h3>
            <p className="text-gray-600 text-center">
              Configuramos el chatbot con tu información y tono de marca
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full border border-gray-100 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl font-bold text-white">
              03
            </div>
            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Zap className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              Integración
            </h3>
            <p className="text-gray-600 text-center">
              Conectamos el bot con tus plataformas en minutos
            </p>
          </div>

          {/* Paso 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full border border-gray-100 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl font-bold text-white">
              04
            </div>
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Rocket className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              ¡Listo para Funcionar!
            </h3>
            <p className="text-gray-600 text-center">
              Tu asistente IA trabaja 24/7 por ti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
