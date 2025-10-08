import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { toast } from "sonner";
import { ChevronDown, ChevronUp } from "lucide-react";

const quoteSchema = z.object({
  companyName: z.string().min(1, "El nombre de la empresa es obligatorio"),
  website: z.string().url("Debe ser una URL válida").or(z.literal("")),
  industry: z.string().min(1, "Selecciona una industria"),
  companySize: z.string().min(1, "Selecciona el tamaño de la empresa"),
  yearsInBusiness: z.string().min(1, "Selecciona el tiempo funcionando"),
  location: z.string().min(1, "La ubicación es obligatoria"),
  companyDescription: z.string().min(10, "Describe brevemente tu empresa (mínimo 10 caracteres)"),
  platforms: z.array(z.string()).min(1, "Selecciona al menos una plataforma"),
  messageVolume: z.string().min(1, "Selecciona el volumen de mensajes"),
  chatbotTypes: z.array(z.string()).min(1, "Selecciona al menos un tipo de chatbot"),
  features: z.array(z.string()).min(1, "Selecciona al menos una funcionalidad"),
  chatbotName: z.string().min(1, "El nombre del chatbot es obligatorio"),
  language: z.string().min(1, "Selecciona el idioma principal"),
  tone: z.string().min(1, "Selecciona el tono del chatbot"),
  welcomeMessage: z.string().min(10, "El mensaje de bienvenida debe tener al menos 10 caracteres"),
  scheduleStart: z.string().min(1, "Indica la hora de inicio"),
  scheduleEnd: z.string().min(1, "Indica la hora de cierre"),
  offHoursMessage: z.string().min(10, "El mensaje fuera de horario debe tener al menos 10 caracteres"),
  agentWhatsapp: z.string().optional(),
  notificationEmail: z.string().email("Email inválido").optional().or(z.literal("")),
  clientEmail: z.string().email("Email inválido para recibir la cotización"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const platforms = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook Messenger" },
  { id: "telegram", label: "Telegram" },
  { id: "website", label: "Sitio Web" },
];

const chatbotTypes = [
  { id: "customer-service", label: "Atención al cliente" },
  { id: "sales", label: "Ventas" },
  { id: "support", label: "Soporte técnico" },
  { id: "appointments", label: "Agendamiento de citas" },
  { id: "all", label: "Todo lo anterior" },
];

const features = [
  { id: "schedule", label: "Agendar citas" },
  { id: "faq", label: "Responder FAQ" },
  { id: "transfer", label: "Transferir a agente humano" },
  { id: "database", label: "Interacción con base de datos" },
  { id: "payments", label: "Procesar pagos" },
  { id: "catalogs", label: "Enviar catálogos/PDFs" },
  { id: "leads", label: "Capturar leads" },
  { id: "availability", label: "Consultar disponibilidad de productos" },
  { id: "orders", label: "Consultar estado de pedidos" },
];

const QuoteForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      companyName: "",
      website: "",
      industry: "",
      companySize: "",
      yearsInBusiness: "",
      location: "",
      companyDescription: "",
      platforms: [],
      messageVolume: "",
      chatbotTypes: [],
      features: [],
      chatbotName: "",
      language: "",
      tone: "",
      welcomeMessage: "",
      scheduleStart: "",
      scheduleEnd: "",
      offHoursMessage: "",
      agentWhatsapp: "",
      notificationEmail: "",
      clientEmail: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://n8n-n8n.n3v9pm.easypanel.host/webhook/eb48cc1a-701b-4bd7-8d33-9f9746ffb91a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo: 'cotizacion',
          destinatario: 'tabulamantis@gmail.com',
          nombreEmpresa: data.companyName,
          sitioWeb: data.website,
          industria: data.industry,
          tamanoEmpresa: data.companySize,
          tiempoFuncionando: data.yearsInBusiness,
          ubicacionPrincipal: data.location,
          descripcionBreve: data.companyDescription,
          plataformas: data.platforms,
          volumenMensajes: data.messageVolume,
          tipoChatbot: data.chatbotTypes,
          funcionalidades: data.features,
          nombreChatbot: data.chatbotName,
          idiomaPrincipal: data.language,
          tonoChatbot: data.tone,
          mensajeBienvenida: data.welcomeMessage,
          horarioInicio: data.scheduleStart,
          horarioCierre: data.scheduleEnd,
          mensajeHorario: data.offHoursMessage,
          whatsappAgente: data.agentWhatsapp,
          emailNotificaciones: data.notificationEmail,
          emailCotizacion: data.clientEmail,
          origen: 'Website Lexical Logic - Formulario de Cotización'
        }),
      });

      if (response.ok) {
        toast.success("¡Cotización enviada! Gracias por contactarnos. Te responderemos pronto con una cotización detallada en las próximas 24 horas.", {
        duration: 5000,
      });
        
        form.reset();
        setIsOpen(false);
      } else {
        throw new Error('Error al enviar la cotización');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Error al enviar la cotización: Ocurrió un error al enviar la cotización. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="cotizacion" className="w-full py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-6">Obtén tu Cotización Personalizada</h2>
            <p className="text-lg md:text-xl font-light text-foreground/80 mb-8">
              Mientras más detallada sea tu información, más preciso será el chatbot que diseñaremos para ti.
            </p>
            
            <CollapsibleTrigger asChild>
              <Button 
                variant="default" 
                size="lg"
                className="text-base py-6 h-auto px-12 bg-orange-500 hover:bg-orange-600 text-white"
              >
                {isOpen ? (
                  <>
                    Ocultar Formulario
                    <ChevronUp className="ml-2" />
                  </>
                ) : (
                  <>
                    Completar Formulario de Cotización
                    <ChevronDown className="ml-2" />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="mt-8">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            {/* Información de la Empresa */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold border-b pb-2">Información de la Empresa</h3>
              
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de la empresa *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Mi Empresa S.A." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sitio web</FormLabel>
                    <FormControl>
                      <Input placeholder="https://www.miempresa.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industria/Sector *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu industria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="servicios">Servicios</SelectItem>
                        <SelectItem value="educacion">Educación</SelectItem>
                        <SelectItem value="salud">Salud</SelectItem>
                        <SelectItem value="tecnologia">Tecnología</SelectItem>
                        <SelectItem value="consultoria">Consultoría</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tamaño de la empresa *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tamaño" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="freelancer">Freelancer/Emprendedor</SelectItem>
                        <SelectItem value="2-10">2–10 empleados</SelectItem>
                        <SelectItem value="11-50">11–50 empleados</SelectItem>
                        <SelectItem value="51-200">51–200 empleados</SelectItem>
                        <SelectItem value="200+">200+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearsInBusiness"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tiempo funcionando *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tiempo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="<1">Menos de 1 año</SelectItem>
                        <SelectItem value="1-3">1–3 años</SelectItem>
                        <SelectItem value="4-10">4–10 años</SelectItem>
                        <SelectItem value="10+">+10 años</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ubicación principal *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Caracas, Venezuela" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="companyDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción breve de la empresa *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe tu empresa, qué productos o servicios ofreces, y tu público objetivo..."
                        className="min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Plataformas y Configuración */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold border-b pb-2">Plataformas y Configuración</h3>
              
              <FormField
                control={form.control}
                name="platforms"
                render={() => (
                  <FormItem>
                    <FormLabel>Plataformas donde quiere su chatbot *</FormLabel>
                    <div className="space-y-2">
                      {platforms.map((platform) => (
                        <FormField
                          key={platform.id}
                          control={form.control}
                          name="platforms"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(platform.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, platform.id])
                                      : field.onChange(field.value?.filter((value) => value !== platform.id));
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {platform.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="messageVolume"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Volumen estimado de mensajes *</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="1-50" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">1–50 mensajes/día</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="51-200" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">51–200 mensajes/día</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="201-500" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">201–500 mensajes/día</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="501-1000" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">501–1,000 mensajes/día</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="1000+" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">+1,000 mensajes/día</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Servicios y Funcionalidades */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold border-b pb-2">Servicios y Funcionalidades</h3>
              
              <FormField
                control={form.control}
                name="chatbotTypes"
                render={() => (
                  <FormItem>
                    <FormLabel>Tipo de chatbot *</FormLabel>
                    <div className="space-y-2">
                      {chatbotTypes.map((type) => (
                        <FormField
                          key={type.id}
                          control={form.control}
                          name="chatbotTypes"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(type.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, type.id])
                                      : field.onChange(field.value?.filter((value) => value !== type.id));
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {type.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="features"
                render={() => (
                  <FormItem>
                    <FormLabel>Funcionalidades deseadas *</FormLabel>
                    <div className="space-y-2">
                      {features.map((feature) => (
                        <FormField
                          key={feature.id}
                          control={form.control}
                          name="features"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(feature.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, feature.id])
                                      : field.onChange(field.value?.filter((value) => value !== feature.id));
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {feature.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Personalización del Chatbot */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold border-b pb-2">Personalización del Chatbot</h3>
              
              <FormField
                control={form.control}
                name="chatbotName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del chatbot *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Ana, Carlos, AsistenteBot" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idioma principal *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el idioma" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="espanol">Español</SelectItem>
                        <SelectItem value="ingles">Inglés</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tono del chatbot *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tono" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="formal">Formal/Corporativo</SelectItem>
                        <SelectItem value="profesional">Profesional pero Amigable</SelectItem>
                        <SelectItem value="casual">Casual y Cercano</SelectItem>
                        <SelectItem value="juvenil">Juvenil y Dinámico</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="welcomeMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje de bienvenida *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Ej: ¡Hola! 👋 Soy Ana, tu asistente virtual de [Empresa]. Estoy aquí para ayudarte con información sobre nuestros productos y servicios. ¿En qué puedo asistirte hoy?"
                        className="min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="scheduleStart"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Horario de inicio *</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="scheduleEnd"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Horario de cierre *</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="offHoursMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje fuera de horario *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Ej: Gracias por contactarnos. Nuestro horario de atención es de Lunes a Viernes de 9:00 AM a 6:00 PM. Te responderemos en cuanto estemos disponibles."
                        className="min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contacto del Agente Humano */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold border-b pb-2">Contacto del Agente Humano (opcional)</h3>
              
              <FormField
                control={form.control}
                name="agentWhatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de WhatsApp del agente</FormLabel>
                    <FormControl>
                      <Input placeholder="+58 412 123 4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notificationEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email de notificaciones</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="notificaciones@miempresa.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email del Cliente */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="clientEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email para recibir la cotización *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tucorreo@ejemplo.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              variant="default" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full text-base py-6 h-auto bg-orange-500 hover:bg-orange-600 text-white"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                'Obtener Cotización'
              )}
            </Button>
          </form>
        </Form>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default QuoteForm;