import { Clock, TrendingUp, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Clock,
    number: "95%",
    label: "Reducción en tiempo de respuesta",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    number: "3x",
    label: "Más conversiones",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Building2,
    number: "+500",
    label: "Empresas automatizadas",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="w-full py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl mb-6">RESULTADOS QUE HABLAN</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Impacto real en negocios como el tuyo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-up bg-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 ${stat.bgColor} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={40} className={stat.color} strokeWidth={1.5} />
                </div>
                
                <div className={`text-5xl md:text-6xl font-black mb-4 ${stat.color}`}>
                  {stat.number}
                </div>
                
                <p className="text-lg text-muted-foreground font-medium">
                  {stat.label}
                </p>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
