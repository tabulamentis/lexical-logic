import { MessageCircle, Instagram, Facebook, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      description: "Respuestas automáticas e inteligentes para tus clientes en WhatsApp"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Gestión automatizada de mensajes directos y comentarios"
    },
    {
      icon: Facebook,
      title: "Facebook Messenger",
      description: "Atención al cliente 24/7 en Facebook"
    },
    {
      icon: Globe,
      title: "Web Chat",
      description: "Integración perfecta en tu sitio web"
    }
  ];

  return (
    <section id="servicios" className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">Servicios</h2>
          <p className="text-lg md:text-xl font-light text-foreground/80 max-w-3xl mx-auto">
            Nuestro chatbot asistente inteligente se conecta con todas tus plataformas favoritas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border/40 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/5">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="font-light text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;