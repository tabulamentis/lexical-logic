const About = () => {
  return (
    <section id="nosotros" className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl mb-8">Nosotros</h2>
        <div className="space-y-6 text-lg md:text-xl font-light text-foreground/80 leading-relaxed">
          <p>
            En <span className="font-semibold text-foreground">Tabula Mentis</span>, creemos que la tecnología debe 
            simplificar tu vida, no complicarla. Somos un equipo venezolano apasionado por la innovación 
            y la inteligencia artificial.
          </p>
          <p>
            Nuestra misión es democratizar el acceso a soluciones de automatización inteligentes, 
            permitiendo que negocios de todos los tamaños puedan competir en el mundo digital 
            con herramientas de vanguardia.
          </p>
          <p>
            Transformamos la forma en que las empresas se comunican con sus clientes, 
            integrando inteligencia artificial avanzada con las plataformas que ya utilizas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;