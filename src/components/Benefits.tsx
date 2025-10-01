import { Clock, TrendingUp, Heart, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Atención 24/7",
      description: "Tus clientes reciben respuestas instantáneas en cualquier momento del día"
    },
    {
      icon: Zap,
      title: "Ahorro de tiempo",
      description: "Automatiza respuestas frecuentes y libera tiempo para tareas estratégicas"
    },
    {
      icon: TrendingUp,
      title: "Más ventas",
      description: "Convierte más conversaciones en ventas con respuestas rápidas y precisas"
    },
    {
      icon: Heart,
      title: "Mejor experiencia",
      description: "Tus clientes disfrutan de una atención personalizada y eficiente"
    }
  ];

  return (
    <section id="beneficios" className="w-full py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">Beneficios</h2>
          <p className="text-lg md:text-xl font-light text-foreground/80 max-w-3xl mx-auto">
            Transforma la forma en que tu negocio se comunica con sus clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="font-light text-foreground/70 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;