import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Send, ChevronDown, Sparkles } from "lucide-react"; // ✅ Se agregó Sparkles

const ContactForm = () => {
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
      toast.error("Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
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

        toast.success("¡Mensaje enviado! Gracias por contactarnos. Te responderemos pronto.");

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
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo o contáctanos por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="cta-final" className="w-full py-24 px-8 lg:px-16 bg-gradient-to-br from-[#F97316] via-[#3B82F6] to-[#F97316] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12 animate-fade-up">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-white font-bold">
            ¿LISTO PARA AUTOMATIZAR TU NEGOCIO?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Únete a cientos de empresas que ya están transformando su atención al cliente con nuestras soluciones de IA
          </p>

          {/* Botón para abrir/cerrar formulario */}
          <div className="flex justify-center mb-8">
            <button
              type="button"
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  className="w-full h-14 text-base py-4 px-6 border-2 border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
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
                  onChange={handleInputChange}
                  className="w-full h-14 text-base py-4 px-6 border-2 border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all duration-200"
                  placeholder="+58 412 123 4567"
                />
              </div>

              <div className="space-y-3">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
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
      </div>
    </section>
  );
};

export default ContactForm;
