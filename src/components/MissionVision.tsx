import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MissionVision = () => {
  return (
    <section id="mision-vision" className="w-full py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl mb-4">QUIÉNES SOMOS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <Card className="group border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-up bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Target size={32} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Nuestra Misión</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Revolucionar la atención al cliente mediante soluciones de IA avanzadas. 
                Ayudamos a empresas a automatizar sus comunicaciones, optimizar tiempos de 
                respuesta y ofrecer experiencias excepcionales a través de chatbots inteligentes 
                conectados a todas las plataformas digitales.
              </p>
            </CardContent>
          </Card>

          {/* Visión */}
          <Card className="group border-2 border-transparent hover:border-secondary/50 transition-all duration-300 hover:shadow-xl animate-fade-up bg-card" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye size={32} className="text-secondary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Nuestra Visión</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ser la plataforma líder de automatización con IA en LATAM, reconocida por 
                democratizar el acceso a tecnología de punta que transforma la manera en que 
                los negocios se comunican y crecen en el ecosistema digital.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
