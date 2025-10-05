import { Clock, Rocket, TrendingUp, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Atención 24/7",
    description: "Tus clientes reciben respuestas instantáneas en cualquier momento del día",
    color: "text-gray-400",
  },
  {
    icon: Rocket,
    title: "Ahorro de tiempo",
    description: "Automatiza respuestas frecuentes y libera tiempo para tareas estratégicas",
    color: "text-gray-400",
  },
  {
    icon: TrendingUp,
    title: "Más ventas",
    description: "Convierte más conversaciones en ventas con respuestas rápidas y precisas",
    color: "text-gray-400",
  },
  {
    icon: Star,
    title: "Mejor experiencia",
    description: "Tus clientes disfrutan de una atención personalizada y eficiente",
    color: "text-gray-400",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="relative w-full py-24 px-8 lg:px-16 bg-[#1E293B] overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/images/hero-banners.png" 
          alt="" 
          className="w-full h-full object-cover"
          style={{ filter: 'blur(1px)' }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-gray-400 text-sm md:text-base font-bold mb-4 tracking-wider">
            BENEFICIOS
          </p>
          <h2 className="text-3xl md:text-5xl mb-6 text-white">
            Transforma la forma en que tu negocio se comunica con sus clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className={`group relative overflow-hidden border-2 border-gray-700 bg-[#0F172A] hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl animate-fade-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className={`${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-100 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
