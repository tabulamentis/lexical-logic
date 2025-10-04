import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  company: z.string().min(2, "El nombre de la empresa debe tener al menos 2 caracteres").max(100),
});

type FormData = z.infer<typeof formSchema>;

const FinalCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual edge function call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Demo request:", data);
      
      toast({
        title: "¡Solicitud enviada!",
        description: "Nos pondremos en contacto contigo pronto para agendar tu demo personalizada.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta-final" className="w-full py-20 px-6 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-white" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-white">
            ¿LISTO PARA AUTOMATIZAR TU NEGOCIO?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Únete a cientos de empresas que ya están transformando su atención al cliente
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl animate-scale-in">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-dark font-semibold">Nombre completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tu nombre"
                        {...field}
                        className="h-12 text-base border-2 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-dark font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        {...field}
                        className="h-12 text-base border-2 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-dark font-semibold">Empresa</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nombre de tu empresa"
                        {...field}
                        className="h-12 text-base border-2 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-dark hover:bg-dark/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Solicitar Demo Gratis
                    <Sparkles className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </Form>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Sin tarjeta de crédito requerida • Respuesta en 24 horas
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
