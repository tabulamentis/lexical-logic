import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detectar sección activa
      const sections = ["hero", "servicios", "beneficios", "casos-de-uso", "contacto"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Detectar si estamos en la página About
  const isAboutPage = location.pathname === "/nosotros";

  const scrollToSection = (id: string) => {
    // Si estamos en otra página, navegar primero a home
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string, scrollId?: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    
    // Si hay un ID para hacer scroll, esperar a que la página cargue
    if (scrollId) {
      setTimeout(() => {
        const element = document.getElementById(scrollId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const menuItems = [
    { label: "Inicio", id: "hero", type: "scroll" },
    { label: "Servicios", id: "servicios", type: "scroll" },
    { label: "Beneficios", id: "beneficios", type: "scroll" },
    { label: "Nosotros", path: "/nosotros", id: "quienes-somos", type: "link" },
    { label: "Contacto", id: "cta-final", type: "scroll" },
  ];

  const handleQuoteClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const quoteSection = document.getElementById('cotizacion');
        if (quoteSection) {
          quoteSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const quoteSection = document.getElementById('cotizacion');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-gray-900/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <img 
              src="/images/logo.png" 
              alt="Lexical Logic" 
              className="h-16 w-auto group-hover:scale-105 transition-transform duration-200"
              style={{ 
                filter: 'brightness(1.5) contrast(1.4) saturate(1.2) drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))' 
              }}
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = item.type === "link" 
                ? isAboutPage 
                : activeSection === item.id;
              
              return (
                <button
                  key={item.label}
                  onClick={() => item.type === "link" ? handleNavigation(item.path!, item.id) : scrollToSection(item.id!)}
                  className={`font-medium transition-colors duration-200 ${
                    isActive ? "text-orange-500" : "text-gray-300 hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            {/* Botón de Cotización */}
            <button
              onClick={handleQuoteClick}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Cotización
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => {
                const isActive = item.type === "link" 
                  ? isAboutPage 
                  : activeSection === item.id;
                
                return (
                  <button
                    key={item.label}
                    onClick={() => item.type === "link" ? handleNavigation(item.path!, item.id) : scrollToSection(item.id!)}
                    className={`transition-all duration-300 font-medium text-left ${
                      isActive 
                        ? "text-[#F97316] font-bold" 
                        : "text-[#CBD5E1] hover:text-[#F97316]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              {/* Botón de Cotización móvil */}
              <button
                onClick={handleQuoteClick}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-center mt-2"
              >
                Cotización
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
