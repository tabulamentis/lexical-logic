import { MessageCircle, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 bg-dark border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">
              LEXICAL LOGIC
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              Automatización Inteligente para el futuro de tu negocio
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase tracking-wide">
              Plataformas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="text-foreground/70 hover:text-primary transition-colors">
                  WhatsApp Business
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-foreground/70 hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-foreground/70 hover:text-primary transition-colors">
                  Facebook Messenger
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-foreground/70 hover:text-primary transition-colors">
                  Web Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase tracking-wide">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#mision-vision" className="text-foreground/70 hover:text-primary transition-colors">
                  Misión
                </a>
              </li>
              <li>
                <a href="#mision-vision" className="text-foreground/70 hover:text-primary transition-colors">
                  Visión
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-foreground/70 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="text-foreground font-bold mb-4 uppercase tracking-wide">
              Contacto
            </h4>
            <div className="space-y-3 text-sm mb-4">
              <a 
                href="mailto:info@lexicallogic.com" 
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>info@lexicallogic.com</span>
              </a>
              <a 
                href="tel:+584129462945" 
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+58 412-946-2945</span>
              </a>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://wa.me/584129462945"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/lexicallogic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/lexicallogic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60 text-center md:text-left">
            © {currentYear} Lexical Logic - Automatización con IA. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
