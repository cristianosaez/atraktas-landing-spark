
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Solução', href: '#solucao' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#contato') {
      onContactClick();
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/lovable-uploads/LOGOCLARO.png"
              alt="Atrakta"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-sm text-gray-600 font-inter">
              Tráfego que Atrai
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-atrakta-orange transition-colors duration-300 font-inter font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={onContactClick}
              className="bg-atrakta-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Falar Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-atrakta-navy"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col py-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-atrakta-orange transition-colors duration-300 font-inter font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-3">
                <Button 
                  onClick={onContactClick}
                  className="w-full bg-atrakta-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  Falar Conosco
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
