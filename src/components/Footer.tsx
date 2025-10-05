import { MessageCircle, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 bg-[#0F172A] border-t border-[#334155]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="/images/headers.png" 
                alt="Lexical Logic" 
                className="h-28 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automatización Inteligente para el futuro de tu negocio
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide">
              Plataformas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">
                  WhatsApp Business
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">
                  Facebook Messenger
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">
                  Web Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#mision-vision" className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">
                  Misión
                </a>
              </li>
              <li>
                <a href="#mision-vision" className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">
                  Visión
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide">
              Contacto
            </h4>
            <div className="space-y-3 text-sm mb-4">
              <a 
                href="mailto:info@lexicallogic.com" 
                className="flex items-center gap-2 text-[#CBD5E1] hover:text-[#3B82F6] transition-colors"
              >
                <Mail size={16} />
                <span>info@lexicallogic.com</span>
              </a>
              <a 
                href="tel:+584248943835" 
                className="flex items-center gap-2 text-[#CBD5E1] hover:text-[#3B82F6] transition-colors"
              >
                <Phone size={16} />
                <span>+58 424-8943835</span>
              </a>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://wa.me/584248943835"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBD5E1] hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/lexicallogic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/lexicallogic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CBD5E1] hover:text-[#3B82F6] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#CBD5E1] text-center md:text-left">
            © {currentYear} Lexical Logic - Automatización con IA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-[#CBD5E1]">
            <a href="#" className="hover:text-[#3B82F6] transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
