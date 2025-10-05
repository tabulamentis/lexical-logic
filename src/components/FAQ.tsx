import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto cuesta implementar un chatbot?",
    answer: "Nuestros planes se adaptan a tu negocio. Ofrecemos desde soluciones básicas para emprendedores hasta sistemas empresariales avanzados. Contáctanos para una cotización personalizada sin compromiso.",
  },
  {
    question: "¿Qué tan difícil es integrar el chatbot?",
    answer: "La integración es extremadamente simple. En 4 pasos y menos de 30 minutos, tu chatbot estará funcionando. No necesitas conocimientos técnicos, nuestro equipo te acompaña en todo el proceso.",
  },
  {
    question: "¿Puedo personalizar las respuestas del chatbot?",
    answer: "¡Por supuesto! Puedes personalizar completamente el tono, estilo, respuestas y flujos de conversación. El chatbot aprende de tu negocio y se adapta a tu marca.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer: "Ofrecemos soporte técnico 24/7 vía WhatsApp, email y chat. Además, incluimos capacitación inicial, actualizaciones constantes y un equipo dedicado a optimizar tu chatbot.",
  },
  {
    question: "¿Es seguro para mis datos y los de mis clientes?",
    answer: "Totalmente seguro. Utilizamos encriptación de nivel bancario, cumplimos con GDPR y normas internacionales de protección de datos. Tus conversaciones y datos están protegidos en todo momento.",
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Muchos clientes ven resultados desde el primer día. En promedio, observamos una reducción del 80% en tiempo de respuesta en la primera semana y un aumento en conversiones en el primer mes.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="w-full py-24 px-8 lg:px-16 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#1F2937]">PREGUNTAS FRECUENTES</h2>
          <p className="text-lg md:text-xl text-[#64748B]">
            Respondemos tus dudas más comunes
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-[#E2E8F0] rounded-xl px-6 bg-white hover:border-[#3B82F6] shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left text-lg font-bold text-[#1F2937] hover:text-[#3B82F6] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] text-base leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
