import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    // Simulación de envío
    console.log("Formulario enviado:", formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Resetear formulario
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="w-full py-20 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-6">Contacto</h2>
          <p className="text-lg md:text-xl font-light text-foreground/80">
            ¿Listo para automatizar tu negocio? Escríbenos
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base">Nombre *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 text-base"
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 text-base"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="h-12 text-base"
              placeholder="+58 412 123 4567"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base">Mensaje *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-32 text-base resize-none"
              placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
            />
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            size="lg" 
            className="w-full text-base py-6 h-auto"
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;