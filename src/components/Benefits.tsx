import { Clock, Rocket, TrendingUp, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Clock,
    title: "Atención 24/7",
    description: "Tus clientes reciben respuestas instantáneas en cualquier momento del día",
    color: "text-primary",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Rocket,
    title: "Ahorro de tiempo",
    description: "Automatiza respuestas frecuentes y libera tiempo para tareas estratégicas",
    color: "text-secondary",
    gradient: "from-secondary/20 to-transparent",
  },
  {
    icon: TrendingUp,
    title: "Más ventas",
    description: "Convierte más conversaciones en ventas con respuestas rápidas y precisas",
    color: "text-primary",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Star,
    title: "Mejor experiencia",
    description: "Tus clientes disfrutan de una atención personalizada y eficiente",
    color: "text-secondary",
    gradient: "from-secondary/20 to-transparent",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="w-full py-20 px-6 bg-carbon">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary text-sm md:text-base font-bold mb-4 tracking-wider">
            BENEFICIOS
          </p>
          <h2 className="text-3xl md:text-5xl mb-6 text-foreground">
            Transforma la forma en que tu negocio se comunica con sus clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className={`group relative overflow-hidden border-0 bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className={`${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Decorative gradient border */}
                <div className={`absolute -bottom-1 -right-1 w-32 h-32 bg-gradient-to-tl ${benefit.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
