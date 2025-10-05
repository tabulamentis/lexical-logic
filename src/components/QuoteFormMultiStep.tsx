import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Check, ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

const steps = [
  { name: "Plataformas", number: 1 },
  { name: "Empresa", number: 2 },
  { name: "Configuración", number: 3 },
  { name: "Servicios", number: 4 },
  { name: "Funcionalidades", number: 5 },
  { name: "Personalidad", number: 6 },
  { name: "Contacto", number: 7 },
];

const QuoteFormMultiStep = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    // Paso 1
    plataformas: [] as string[],
    descripcionAsistente: '',
    mensajesDia: '',
    mensajesMes: '',
    
    // Paso 2
    nombreEmpresa: '',
    sitioWeb: '',
    industria: '',
    tamanoEmpresa: '',
    tiempoFuncionando: '',
    ubicacionPrincipal: '',
    descripcionNegocio: '',
    
    // Paso 3
    nombreChatbot: '',
    idiomaPrincipal: '',
    mensajeBienvenida: '',
    horarioAtencion: '',
    mensajeFueraHorario: '',
    
    // Paso 4
    tipoChatbot: [] as string[],
    productosServicios: '',
    faqPregunta1: '',
    faqRespuesta1: '',
    precios: '',
    manejaPromociones: '',
    detallePromociones: '',
    
    // Paso 5
    funcionalidadesEspeciales: [] as string[],
    descripcionFuncionalidades: '',
    
    // Paso 6
    tonoChatbot: '',
    usarEmojis: '',
    frasesProhibidas: '',
    
    // Paso 7
    casosTransferencia: '',
    whatsappAgente: '',
    emailNotificaciones: '',
    emailCotizacion: ''
  });

  const validateStep = (step: number): boolean => {
    switch(step) {
      case 1:
        return formData.plataformas.length > 0 && formData.descripcionAsistente.trim() !== '' && formData.mensajesDia !== '' && formData.mensajesMes !== '';
      case 2:
        return !!(formData.nombreEmpresa && formData.industria && formData.tamanoEmpresa && formData.descripcionNegocio);
      case 3:
        return !!(formData.nombreChatbot && formData.idiomaPrincipal && formData.mensajeBienvenida);
      case 4:
        return formData.tipoChatbot.length > 0;
      case 5:
        return true; // Opcional
      case 6:
        return !!(formData.tonoChatbot && formData.usarEmojis);
      case 7:
        return !!(formData.casosTransferencia && formData.emailCotizacion);
      default:
        return true;
    }
  };

  const handleNextStep = () => {
    if (!validateStep(currentStep)) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios antes de continuar.",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep(currentStep + 1);
    
    // Scroll al inicio del formulario
    if (formRef.current) {
      const navbarHeight = 80; // Altura del navbar
      const elementPosition = formRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    
    // Scroll al inicio del formulario
    if (formRef.current) {
      const navbarHeight = 80;
      const elementPosition = formRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(7)) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const dataToSend = {
      tipo: 'cotizacion',
      destinatario: 'tabulamantis@gmail.com',
      ...formData,
      fecha: new Date().toISOString(),
      origen: 'Website Lexical Logic - Formulario Cotización Completo'
    };

    console.log('Datos a enviar:', dataToSend);

    try {
      const response = await fetch('https://n8n-n8n.n3v9pm.easypanel.host/webhook/eb48cc1a-701b-4bd7-8d33-9f9746ffb91a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      // Aceptar tanto 200 como 201 como éxito
      if (response.ok || response.status === 200 || response.status === 201) {
        setSubmitStatus('success');
        console.log('Cotización enviada exitosamente');
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Error HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error('Error completo:', error);
      setSubmitStatus('error');
      alert('Hubo un error al enviar la cotización. Por favor verifica la consola para más detalles.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  // Pantalla de éxito
  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto p-8 text-center bg-white rounded-lg shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Cotización Enviada con Éxito!</h2>
          <p className="text-gray-600 mb-2 text-lg">Hemos recibido tu solicitud de cotización.</p>
          <p className="text-gray-600 mb-6">
            Te enviaremos la cotización detallada a <strong className="text-orange-500">{formData.emailCotizacion}</strong> en las próximas 24 horas.
          </p>
          <p className="text-sm text-gray-500 mb-8">Si no la ves en tu bandeja de entrada, revisa tu carpeta de spam.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all"
            style={{ backgroundColor: '#FF6B35', color: '#FFFFFF' }}
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={formRef} className="w-full max-w-5xl mx-auto p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
      {/* Progress Bar Mejorada */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-2">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                  ${currentStep > step.number ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 
                    currentStep === step.number ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/40 scale-110' : 
                    'bg-gray-300 text-gray-800 font-semibold'}
                `}>
                  {currentStep > step.number ? <Check size={20} /> : step.number}
                </div>
                <span className={`text-xs font-medium hidden md:block ${
                  currentStep === step.number ? 'text-orange-500 font-semibold' : 'text-gray-700'
                }`}>
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-3 transition-all duration-500 ${
                  currentStep > step.number ? 'bg-orange-500' : 'bg-gray-300'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {/* PASO 1 - PLATAFORMAS */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Plataformas y Configuración Inicial</h3>
            <p className="text-base text-gray-700 mb-6">Seleccione donde quiere que funcione su chatbot</p>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 block">¿En qué plataformas quiere su chatbot? *</label>
              {['WhatsApp', 'Instagram', 'Facebook Messenger', 'Telegram', 'Sitio Web'].map(platform => (
                <label key={platform} className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 hover:bg-orange-50/50 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.plataformas.includes(platform)}
                    onChange={() => setFormData({
                      ...formData,
                      plataformas: toggleArrayItem(formData.plataformas, platform)
                    })}
                    className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-2 focus:ring-orange-500/30 accent-orange-500"
                  />
                  <span className="text-gray-700">{platform}</span>
                </label>
              ))}
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Describa su Asistente Ideal *
              </label>
              <textarea
                value={formData.descripcionAsistente}
                onChange={(e) => setFormData({...formData, descripcionAsistente: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 placeholder:text-gray-500 text-gray-900 focus:outline-none"
                placeholder="Ej: Me gustaría un asistente que pueda agendar citas automáticamente, responder preguntas frecuentes sobre mis productos..."
              />
            </div>
            
            {/* Estimación de volumen de mensajes */}
            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Estimación de volumen de mensajes</h4>
              <p className="text-sm text-gray-600 mb-4">Esto nos ayuda a recomendar la mejor opción para su presupuesto</p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    Mensajes estimados por día *
                  </label>
                  <select
                    value={formData.mensajesDia}
                    onChange={(e) => setFormData({...formData, mensajesDia: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 text-gray-900 focus:outline-none"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="1-50">1-50 mensajes</option>
                    <option value="51-200">51-200 mensajes</option>
                    <option value="201-500">201-500 mensajes</option>
                    <option value="501-1000">501-1,000 mensajes</option>
                    <option value="1000+">Más de 1,000 mensajes</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    Mensajes estimados por mes *
                  </label>
                  <select
                    value={formData.mensajesMes}
                    onChange={(e) => setFormData({...formData, mensajesMes: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 text-gray-900 focus:outline-none"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="1-1500">1–1,500 mensajes</option>
                    <option value="1501-6000">1,501–6,000 mensajes</option>
                    <option value="6001-15000">6,001–15,000 mensajes</option>
                    <option value="15001-30000">15,001–30,000 mensajes</option>
                    <option value="30000+">Más de 30,000 mensajes</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PASO 2 - INFORMACIÓN EMPRESA */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-bold text-gray-900">Información de la Empresa</h3>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Nombre de la empresa *</label>
              <input
                type="text"
                value={formData.nombreEmpresa}
                onChange={(e) => setFormData({...formData, nombreEmpresa: e.target.value})}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Nombre de tu empresa"
              />
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Sitio web</label>
              <input
                type="url"
                value={formData.sitioWeb}
                onChange={(e) => setFormData({...formData, sitioWeb: e.target.value})}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="https://tuempresa.com"
              />
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Industria *</label>
              <select
                value={formData.industria}
                onChange={(e) => setFormData({...formData, industria: e.target.value})}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
              >
                <option value="">Seleccione su industria</option>
                <option value="ecommerce">E-commerce</option>
                <option value="servicios">Servicios</option>
                <option value="educacion">Educación</option>
                <option value="salud">Salud</option>
                <option value="tecnologia">Tecnología</option>
                <option value="consultoria">Consultoría</option>
                <option value="restaurante">Restaurante/Gastronomía</option>
                <option value="inmobiliaria">Inmobiliaria</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Tamaño de la empresa *</label>
              <select
                value={formData.tamanoEmpresa}
                onChange={(e) => setFormData({...formData, tamanoEmpresa: e.target.value})}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
              >
                <option value="">Seleccione el tamaño</option>
                <option value="solo">Solamente yo (Freelancer)</option>
                <option value="2-10">2-10 empleados</option>
                <option value="11-50">11-50 empleados</option>
                <option value="51-200">51-200 empleados</option>
                <option value="201+">201+ empleados</option>
              </select>
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Tiempo funcionando</label>
              <input
                type="text"
                value={formData.tiempoFuncionando}
                onChange={(e) => setFormData({...formData, tiempoFuncionando: e.target.value})}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Ej: 2 años"
              />
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Ubicación principal</label>
              <input
                type="text"
                value={formData.ubicacionPrincipal}
                onChange={(e) => setFormData({...formData, ubicacionPrincipal: e.target.value})}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Ciudad, País"
              />
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Descripción breve del negocio *</label>
              <textarea
                value={formData.descripcionNegocio}
                onChange={(e) => setFormData({...formData, descripcionNegocio: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Describe brevemente a qué se dedica tu empresa..."
              />
            </div>
          </div>
        )}

        {/* PASO 3 - CONFIGURACIÓN CHATBOT */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-bold text-gray-900">Configuración del Chatbot</h3>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Nombre del chatbot *</label>
              <input
                type="text"
                value={formData.nombreChatbot}
                onChange={(e) => setFormData({...formData, nombreChatbot: e.target.value})}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Ej: Ana, Asistente Virtual, Bot de Ventas"
              />
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Idioma principal *</label>
              <select
                value={formData.idiomaPrincipal}
                onChange={(e) => setFormData({...formData, idiomaPrincipal: e.target.value})}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
              >
                <option value="">Seleccione el idioma</option>
                <option value="espanol">Español</option>
                <option value="ingles">Inglés</option>
                <option value="bilingue">Bilingüe (Español/Inglés)</option>
              </select>
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Mensaje de bienvenida inicial *</label>
              <textarea
                value={formData.mensajeBienvenida}
                onChange={(e) => setFormData({...formData, mensajeBienvenida: e.target.value})}
                rows={3}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Ej: ¡Hola! Soy Ana, tu asistente virtual. ¿En qué puedo ayudarte hoy?"
              />
            </div>
            
            {/* Horario de Atención General */}
            <div className="mt-6 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Horario de Atención General</h4>
              <p className="text-sm text-gray-600 mb-4">Configure el horario básico de atención</p>
              
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">
                  Horario de atención
                </label>
                <input
                  type="text"
                  value={formData.horarioAtencion}
                  onChange={(e) => setFormData({...formData, horarioAtencion: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 placeholder:text-gray-500 text-gray-900 focus:outline-none"
                  placeholder="Ej: Lunes a Viernes de 9:00 AM a 6:00 PM"
                />
              </div>
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Mensaje fuera de horario</label>
              <textarea
                value={formData.mensajeFueraHorario}
                onChange={(e) => setFormData({...formData, mensajeFueraHorario: e.target.value})}
                rows={3}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Gracias por contactarnos. Nuestro horario de atención es de Lunes a Viernes de 9:00 AM a 6:00 PM. Te responderemos en cuanto estemos disponibles."
              />
            </div>
          </div>
        )}

        {/* PASO 4 - SERVICIOS */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-bold text-gray-900">Servicios y Funcionalidades</h3>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-3">¿Qué tipo de chatbot necesita? *</label>
              {['Atención al cliente', 'Ventas', 'Soporte técnico', 'Agendamiento de citas', 'Generación de leads', 'Todo lo anterior'].map(tipo => (
                <label key={tipo} className="flex items-center gap-3 p-4 border-2 rounded-lg mb-3 cursor-pointer hover:bg-gray-50 hover:border-orange-300 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.tipoChatbot.includes(tipo)}
                    onChange={() => setFormData({
                      ...formData,
                      tipoChatbot: toggleArrayItem(formData.tipoChatbot, tipo)
                    })}
                    className="w-5 h-5 text-orange-500"
                  />
                  <span className="text-gray-700">{tipo}</span>
                </label>
              ))}
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Productos/Servicios principales</label>
              <textarea
                value={formData.productosServicios}
                onChange={(e) => setFormData({...formData, productosServicios: e.target.value})}
                rows={3}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Describe los productos o servicios que ofreces..."
              />
            </div>
            
            {/* Sección FAQ */}
            <div className="mt-8 p-6 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Responder FAQ (Preguntas Frecuentes)</h4>
              <div className="flex items-start gap-2 mb-4">
                <span className="text-2xl">💡</span>
                <p className="text-sm text-gray-600">
                  <strong>Consejo:</strong> Agregue las preguntas exactamente como las hacen sus clientes. Mientras más específicas sean las respuestas, mejor será la experiencia del usuario.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    Pregunta 1 *
                  </label>
                  <input
                    type="text"
                    value={formData.faqPregunta1}
                    onChange={(e) => setFormData({...formData, faqPregunta1: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 placeholder:text-gray-500 text-gray-900 focus:outline-none"
                    placeholder="Ej: ¿Cuáles son sus horarios de atención?"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    Respuesta ⓘ
                  </label>
                  <textarea
                    value={formData.faqRespuesta1}
                    onChange={(e) => setFormData({...formData, faqRespuesta1: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 placeholder:text-gray-500 text-gray-900 focus:outline-none"
                    placeholder="Ej: Nuestros horarios son de Lunes a Viernes de 9:00 AM a 6:00 PM, y Sábados de 9:00 AM a 2:00 PM."
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Información de precios</label>
              <textarea
                value={formData.precios}
                onChange={(e) => setFormData({...formData, precios: e.target.value})}
                rows={2}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Rangos de precios o información relevante..."
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-3">¿Maneja promociones o descuentos?</label>
              <div className="space-y-3">
                {['Sí', 'No'].map(option => (
                  <label key={option} className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 hover:bg-orange-50/50 transition-all">
                    <input
                      type="radio"
                      name="manejaPromociones"
                      value={option}
                      checked={formData.manejaPromociones === option}
                      onChange={(e) => setFormData({...formData, manejaPromociones: e.target.value, detallePromociones: e.target.value === 'No' ? '' : formData.detallePromociones})}
                      className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-2 focus:ring-orange-500/30 accent-orange-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              
              {formData.manejaPromociones === 'Sí' && (
                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    Describe las promociones o descuentos
                  </label>
                  <textarea
                    value={formData.detallePromociones}
                    onChange={(e) => setFormData({...formData, detallePromociones: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 placeholder:text-gray-500 text-gray-900 focus:outline-none"
                    placeholder="Ej: 20% de descuento en primera compra, 2x1 los martes, etc."
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* PASO 5 - FUNCIONALIDADES ESPECIALES */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-bold text-gray-900">Funcionalidades Especiales</h3>
            <p className="text-gray-600">Seleccione solo las que realmente necesita</p>
            
            <div className="space-y-3">
              {[
                'Agendar citas/reuniones',
                'Consultar disponibilidad de productos',
                'Procesar pagos',
                'Enviar catálogos/PDFs',
                'Transferir a agente humano',
                'Capturar leads',
                'Enviar ubicación de tienda',
                'Consultar estado de pedidos',
                'Integración con CRM',
                'Respuestas con IA avanzada'
              ].map(func => (
                <label key={func} className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 hover:border-orange-300 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.funcionalidadesEspeciales.includes(func)}
                    onChange={() => setFormData({
                      ...formData,
                      funcionalidadesEspeciales: toggleArrayItem(formData.funcionalidadesEspeciales, func)
                    })}
                    className="w-5 h-5 text-orange-500"
                  />
                  <span className="text-gray-700">{func}</span>
                </label>
              ))}
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Descripción adicional de funcionalidades</label>
              <textarea
                value={formData.descripcionFuncionalidades}
                onChange={(e) => setFormData({...formData, descripcionFuncionalidades: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="¿Hay alguna funcionalidad específica que necesites?"
              />
            </div>
          </div>
        )}

        {/* PASO 6 - TONO Y PERSONALIDAD */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-bold text-gray-900">Tono y Personalidad</h3>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-3">Tono del chatbot *</label>
              {[
                { value: 'formal', label: 'Formal/Corporativo', desc: 'Lenguaje corporativo, protocolo estricto' },
                { value: 'profesional', label: 'Profesional pero amigable', desc: 'Equilibrio entre profesionalismo y calidez' },
                { value: 'casual', label: 'Casual y cercano', desc: 'Conversación natural y relajada' },
                { value: 'juvenil', label: 'Juvenil y dinámico', desc: 'Energético, moderno' }
              ].map(tono => (
                <label key={tono.value} className="flex items-start gap-3 p-4 border-2 rounded-lg mb-3 cursor-pointer hover:bg-gray-50 hover:border-orange-300 transition-all">
                  <input
                    type="radio"
                    name="tono"
                    value={tono.value}
                    checked={formData.tonoChatbot === tono.value}
                    onChange={(e) => setFormData({...formData, tonoChatbot: e.target.value})}
                    className="w-5 h-5 mt-1 text-orange-500"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{tono.label}</div>
                    <div className="text-sm text-gray-600">{tono.desc}</div>
                  </div>
                </label>
              ))}
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-3">¿Debe usar emojis? *</label>
              {['Sí, frecuentemente', 'Sí, moderadamente', 'No usar'].map(option => (
                <label key={option} className="flex items-center gap-3 p-4 border-2 rounded-lg mb-3 cursor-pointer hover:bg-gray-50 hover:border-orange-300 transition-all">
                  <input
                    type="radio"
                    name="emojis"
                    value={option}
                    checked={formData.usarEmojis === option}
                    onChange={(e) => setFormData({...formData, usarEmojis: e.target.value})}
                    className="w-5 h-5 text-orange-500"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Frases o palabras prohibidas</label>
              <textarea
                value={formData.frasesProhibidas}
                onChange={(e) => setFormData({...formData, frasesProhibidas: e.target.value})}
                rows={3}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="Palabras o frases que el chatbot NO debe usar..."
              />
            </div>
          </div>
        )}

        {/* PASO 7 - CONTACTO */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-bold text-gray-900">Información de Contacto</h3>
            <p className="text-gray-600">Última información para enviarte tu cotización personalizada</p>
            
            {/* Integración con Agente Humano */}
            <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Integración con Agente Humano</h4>
              <p className="text-sm text-gray-600 mb-4">Configure cuándo y cómo transferir a un agente humano</p>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    ¿En qué casos debe transferir a un humano? *
                  </label>
                  <textarea
                    value={formData.casosTransferencia}
                    onChange={(e) => setFormData({...formData, casosTransferencia: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 placeholder:text-gray-500 text-gray-900 focus:outline-none"
                    placeholder="Ej: Quejas o reclamos, problemas técnicos complejos, solicitudes de reembolso, ventas de alto valor, cuando el cliente solicite hablar con un humano"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    Número de WhatsApp del agente
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsappAgente}
                    onChange={(e) => setFormData({...formData, whatsappAgente: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 placeholder:text-gray-500 text-gray-900 focus:outline-none"
                    placeholder="Ej: +52 55 1234 5678"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    Email de notificaciones
                  </label>
                  <input
                    type="email"
                    value={formData.emailNotificaciones}
                    onChange={(e) => setFormData({...formData, emailNotificaciones: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 placeholder:text-gray-500 text-gray-900 focus:outline-none"
                    placeholder="Ej: agente@empresa.com"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="font-semibold text-gray-700 block mb-2">Email para recibir la cotización *</label>
              <input
                type="email"
                value={formData.emailCotizacion}
                onChange={(e) => setFormData({...formData, emailCotizacion: e.target.value})}
                className="w-full px-4 py-3 border-2 rounded-lg focus:border-orange-500 focus:outline-none"
                placeholder="email@empresa.com"
              />
            </div>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-medium">
                ✓ Recibirás tu cotización personalizada en menos de 24 horas
              </p>
              <p className="text-blue-700 text-sm mt-2">
                Nuestro equipo revisará tu información y te enviará una propuesta detallada con precios y tiempos de implementación.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
        {currentStep > 1 && (
          <button
            onClick={handlePrevStep}
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-400 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
            <span className="text-gray-900">Anterior</span>
          </button>
        )}
        
        {currentStep < 7 ? (
          <button
            onClick={handleNextStep}
            className="ml-auto flex items-center justify-center gap-3 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg shadow-xl transition-all duration-200 min-w-[180px]"
            style={{ backgroundColor: '#FF6B35' }}
          >
            <span style={{ color: '#FFFFFF' }}>Siguiente</span>
            <ChevronRight className="w-6 h-6" style={{ color: '#FFFFFF' }} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="ml-auto flex items-center justify-center gap-3 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-w-[220px]"
            style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#FF6B35' }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" style={{ color: '#FFFFFF' }}>
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span style={{ color: '#FFFFFF' }}>Enviando...</span>
              </>
            ) : (
              <span style={{ color: '#FFFFFF' }}>Enviar Cotización</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteFormMultiStep;
