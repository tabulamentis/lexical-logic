import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/584248943835?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20chatbots%20de%20Lexical%20Logic"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Chatea con nosotros en WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chatea con nosotros
      </span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"></span>
    </a>
  );
};

export default WhatsAppButton;
