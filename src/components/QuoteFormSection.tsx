import { useState } from "react";
import QuoteFormMultiStep from "./QuoteFormMultiStep";
import { Check, Sliders, Shield } from "lucide-react";

const QuoteFormSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="cotizacion" className="min-h-screen bg-white">
      {/* Sección de encabezado con gradiente */}
      <div className="relative bg-gradient-to-br from-orange-500 via-purple-500 to-blue-500 py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿LISTO PARA AUTOMATIZAR TU NEGOCIO?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Únete a cientos de empresas que ya están transformando su atención al cliente con nuestras soluciones de IA. Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>
          
          {/* Botón Desplegable */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 shadow-lg shadow-black/20 transition-all hover:scale-105"
            >
              {isFormOpen ? 'Ocultar Formulario' : 'Comenzar Cotización'}
              <svg className={`w-5 h-5 transition-transform ${isFormOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Indicadores de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-white font-medium">Propuesta en 24h</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                <Sliders className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-white font-medium">100% Personalizado</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-white font-medium">Sin compromiso</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Formulario Desplegable */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isFormOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 py-16">
          <QuoteFormMultiStep />
        </div>
      </div>
      
      {/* Footer con mensaje de confianza */}
      {isFormOpen && (
        <div className="border-t border-gray-200 bg-gray-50 py-8">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-800 font-medium flex items-center gap-2 justify-center">
              <span>🔒</span>
              Tus datos están seguros y protegidos. Nunca compartiremos tu información.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuoteFormSection;
