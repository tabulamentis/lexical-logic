import { ShoppingCart, UtensilsCrossed, Briefcase, HeartPulse, GraduationCap, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const useCases = [
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Automatiza pedidos, consultas de productos y seguimiento de envíos",
    isNew: true,
  },
  {
    title: "Restaurantes",
    icon: UtensilsCrossed,
    description: "Reservas, menús y pedidos a domicilio automatizados",
    isNew: false,
  },
  {
    title: "Servicios Profesionales",
    icon: Briefcase,
    description: "Agenda citas, responde consultas y califica leads",
    isNew: false,
  },
  {
    title: "Salud",
    icon: HeartPulse,
    description: "Agendar citas médicas y recordatorios de consultas",
    isNew: true,
  },
  {
    title: "Educación",
    icon: GraduationCap,
    description: "Información de cursos, inscripciones y soporte estudiantil",
    isNew: false,
  },
  {
    title: "Inmobiliarias",
    icon: Building,
    description: "Consultas de propiedades y agendamiento de visitas",
    isNew: false,
  },
];

const UseCases = () => {
  return (
    <section id="casos-de-uso" className="w-full py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl mb-6">SECTORES QUE TRANSFORMAMOS</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones de automatización adaptadas a tu industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card 
              key={useCase.title}
              className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {useCase.isNew && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                    Nuevo
                  </Badge>
                )}
                
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon size={48} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
