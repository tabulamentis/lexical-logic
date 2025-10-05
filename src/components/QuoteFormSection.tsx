import { useState } from "react";
import QuoteFormMultiStep from "./QuoteFormMultiStep";
import { Check, Sliders, Shield } from "lucide-react";

const QuoteFormSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="cotizacion" className="min-h-screen bg-white">
      {/* Header Mejorado */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/50">
              Cotización Personalizada
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Diseñemos tu Asistente
            <span className="block mt-2 text-white">
              Inteligente Ideal
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Responde el formulario y recibe una propuesta detallada en menos de 24 horas
          </p>
          
          {/* Botón Desplegable */}
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
          >
            {isFormOpen ? 'Ocultar Formulario' : 'Comenzar Cotización'}
            <svg className={`w-5 h-5 transition-transform ${isFormOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Indicadores de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                <Check className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-sm text-white font-medium">Propuesta en 24h</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                <Sliders className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-sm text-white font-medium">100% Personalizado</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                <Shield className="w-6 h-6 text-orange-500" />
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
