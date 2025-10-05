import { ShoppingCart, UtensilsCrossed, Briefcase, Heart, GraduationCap, Home } from "lucide-react";
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
    icon: Heart,
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
    icon: Home,
    description: "Consultas de propiedades y agendamiento de visitas",
    isNew: false,
  },
];

const UseCases = () => {
  return (
    <section id="casos-de-uso" className="w-full py-24 px-8 lg:px-16 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl mb-6 text-white">SECTORES QUE TRANSFORMAMOS</h2>
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-3xl mx-auto">
            Soluciones de automatización adaptadas a tu industria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={useCase.title}
              className="group relative overflow-hidden border-2 border-transparent hover:border-gradient shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl animate-fade-up bg-[#F1F5F9]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#F97316] via-[#3B82F6] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ padding: '2px' }}></div>
              
              <CardContent className="p-8 bg-[#F1F5F9] rounded-xl relative z-10">
                {useCase.isNew && (
                  <Badge className="absolute top-4 right-4 bg-[#F97316] text-white border-0 shadow-md">
                    Nuevo
                  </Badge>
                )}
                
                <div className="text-[#F97316] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon size={48} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
