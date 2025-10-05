import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2, Send, ChevronDown } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    empresa: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    try {
      // Enviar datos al webhook de n8n
      const response = await fetch("https://n8n-n8n.n3v9pm.easypanel.host/webhook/eb48cc1a-701b-4bd7-8d33-9f9746ffb91a", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          empresa: formData.empresa,
          telefono: formData.phone,
          mensaje: formData.message,
          fecha: new Date().toISOString(),
          tipo: 'contacto',
          origen: 'Website Lexical Logic - Formulario de Contacto'
        }),
      });

      if (response.ok) {
        // Mostrar mensaje de éxito animado
        setShowSuccess(true);
        
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
        });

        // Resetear formulario
        setFormData({
          name: "",
          email: "",
          empresa: "",
          phone: "",
          message: ""
        });
        
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo o contáctanos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="w-full py-24 px-8 lg:px-16 bg-gradient-to-br from-white via-[#F8FAFC] to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#1F2937] font-bold">Contáctanos</h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto">
            ¿Listo para automatizar tu negocio? Completa el formulario y nos pondremos en contacto contigo
          </p>
        </div>

        {/* Botón para abrir/cerrar formulario */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsContactFormOpen(!isContactFormOpen)}
            className="bg-[#F97316] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 uppercase tracking-wide"
          >
            {isContactFormOpen ? 'OCULTAR FORMULARIO' : 'CONTÁCTANOS'}
            <ChevronDown 
              className={`transform transition-transform duration-300 ${isContactFormOpen ? 'rotate-180' : ''}`} 
              size={20}
            />
          </button>
        </div>

        {/* Mensaje de éxito animado */}
        {showSuccess && (
          <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-4 animate-fade-up shadow-lg">
            <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-green-900 text-lg">¡Mensaje enviado exitosamente!</h3>
              <p className="text-green-700">Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
          </div>
        )}

        {/* Formulario colapsable */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isContactFormOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-base font-semibold text-[#1F2937]">Nombre completo *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-14 text-base py-4 px-6 border-2 border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-base font-semibold text-[#1F2937]">Correo electrónico *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-14 text-base py-4 px-6 border-2 border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
              placeholder="tu.email@empresa.com"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="empresa" className="text-base font-semibold text-[#1F2937]">Empresa</Label>
            <Input
              id="empresa"
              name="empresa"
              type="text"
              value={formData.empresa}
              onChange={handleChange}
              className="h-14 text-base py-4 px-6 border-2 border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
              placeholder="Nombre de tu empresa"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="phone" className="text-base font-semibold text-[#1F2937]">Teléfono (opcional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="h-14 text-base py-4 px-6 border-2 border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
              placeholder="+58 412 123 4567"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="message" className="text-base font-semibold text-[#1F2937]">Mensaje *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-40 text-base py-4 px-6 border-2 border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200 resize-none"
              placeholder="Cuéntanos sobre tu negocio, qué necesitas automatizar y cómo podemos ayudarte a crecer..."
            />
          </div>

          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full text-lg font-bold px-8 py-6 h-auto bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#F97316] text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                Enviando mensaje...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Enviar mensaje
              </>
            )}
          </Button>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Responderemos en menos de 24 horas • Sin compromiso
          </p>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;