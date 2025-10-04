import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "584129462945"; // Replace with actual WhatsApp Business number
  const defaultMessage = "¡Hola! Me interesa automatizar mi negocio con sus chatbots inteligentes. ¿Podrían darme más información?";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 p-0 group"
      aria-label="Chatea con nosotros en WhatsApp"
    >
      {/* Pulsating ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
      
      {/* Icon */}
      <MessageCircle className="h-8 w-8 text-white relative z-10" />

      {/* Online badge */}
      <span className="absolute -top-1 -right-1 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white"></span>
      </span>

      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-dark text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        Chatea con nosotros
      </span>
    </Button>
  );
};

export default WhatsAppButton;
