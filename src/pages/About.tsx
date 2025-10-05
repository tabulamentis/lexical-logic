import { Target, Eye, Lightbulb, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Adoptamos las últimas tecnologías de IA para ofrecer soluciones de vanguardia",
    color: "text-[#64748B]",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Nos comprometemos con la calidad en cada proyecto y servicio que entregamos",
    color: "text-[#64748B]",
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "Trabajamos junto a nuestros clientes para garantizar su éxito y crecimiento",
    color: "text-[#64748B]",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="quienes-somos" className="relative w-full h-[40vh] flex items-center justify-center px-6 bg-[#1E293B]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center z-10 animate-fade-up">
          <h1 className="text-4xl md:text-6xl mb-4 text-white">
            QUIÉNES SOMOS
          </h1>
          <p className="text-lg md:text-xl text-[#CBD5E1]">
            Conoce nuestra misión y visión
          </p>
        </div>
        
        <style>{`
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 107, 53, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
          }
        `}</style>
      </section>

      {/* Mission & Vision Section con Imagen de Fondo */}
      <div className="relative bg-gray-900 py-20 overflow-hidden">
        {/* Imagen de fondo grande */}
        <div className="absolute inset-0">
          <img 
            src="/images/icono-movil.png" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
            style={{ filter: 'brightness(1.2) blur(0.5px)' }}
          />
          {/* Overlay degradado para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80"></div>
        </div>
        
        {/* Contenido sobre la imagen */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 animate-fade-up">
              <div className="text-orange-500 mb-6">
                <Target size={56} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Revolucionar la atención al cliente mediante soluciones de IA avanzadas. 
                Ayudamos a empresas a automatizar sus comunicaciones, optimizar tiempos de 
                respuesta y ofrecer experiencias excepcionales a través de chatbots inteligentes 
                conectados a todas las plataformas digitales.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="text-blue-500 mb-6">
                <Eye size={56} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Nuestra Visión
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Construir un futuro donde la tecnología de IA esté al alcance de todos los negocios, sin excepciones. Aspiramos a ser el puente que conecta a las empresas con sus clientes de manera más humana, eficiente y significativa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="w-full py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl mb-6 text-[#1F2937]">
              NUESTROS VALORES
            </h2>
            <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group border border-[#E2E8F0] hover:border-[#3B82F6] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl animate-fade-up bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex mb-6 ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#1F2937]">
                    {value.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
