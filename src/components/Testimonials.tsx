import { useState, useEffect, useRef } from "react";
import { Clock, TrendingUp, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: Clock,
    number: 95,
    suffix: "%",
    label: "Reducción en tiempo de respuesta",
    color: "text-[#F97316]",
    bgColor: "bg-[#F97316]/10",
  },
  {
    icon: TrendingUp,
    number: 3,
    suffix: "x",
    label: "Más conversiones",
    color: "text-[#3B82F6]",
    bgColor: "bg-[#3B82F6]/10",
  },
  {
    icon: Building2,
    number: 500,
    prefix: "+",
    suffix: "",
    label: "Empresas automatizadas",
    color: "text-[#F97316]",
    bgColor: "bg-[#F97316]/10",
  },
];

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function para animación suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-[#F97316] to-[#3B82F6] bg-clip-text text-transparent">
      {prefix}{count}{suffix}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonios" className="w-full py-24 px-8 lg:px-16 bg-gradient-to-br from-white via-[#F8FAFC] to-white relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 via-transparent to-[#3B82F6]/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#1F2937] font-bold">RESULTADOS QUE HABLAN</h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto">
            Impacto real en negocios como el tuyo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group border border-[#E2E8F0] hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl animate-fade-up bg-white"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-10 text-center">
                <div className={`inline-flex p-4 ${stat.bgColor} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={40} className={stat.color} strokeWidth={1.5} />
                </div>
                
                <AnimatedCounter 
                  end={stat.number} 
                  prefix={stat.prefix || ""} 
                  suffix={stat.suffix || ""}
                />

                <p className="text-base text-gray-500 font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
