import { MessageCircle, Instagram, Facebook, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    name: "WhatsApp Business",
    icon: MessageCircle,
    description: "Respuestas automáticas e inteligentes para tus clientes en WhatsApp",
    color: "hover:border-[#3B82F6]",
    iconColor: "text-[#64748B]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Gestión automatizada de mensajes directos y comentarios",
    color: "hover:border-[#3B82F6]",
    iconColor: "text-[#64748B]",
  },
  {
    name: "Facebook Messenger",
    icon: Facebook,
    description: "Atención al cliente 24/7 en Facebook",
    color: "hover:border-[#3B82F6]",
    iconColor: "text-[#64748B]",
  },
  {
    name: "Web Chat",
    icon: Globe,
    description: "Integración perfecta en tu sitio web",
    color: "hover:border-[#3B82F6]",
    iconColor: "text-[#64748B]",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="w-full py-24 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#1F2937]">
            Nuestro chatbot asistente inteligente se conecta con todas tus plataformas favoritas
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto">
            Automatización sin límites en todos los canales de comunicación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.name} 
              className={`group transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2 border border-[#E2E8F0] ${service.color} bg-white rounded-xl animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className={`mb-6 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1F2937]">{service.name}</h3>
                <p className="text-[#64748B] leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
