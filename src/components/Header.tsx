import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">        
        <div className="flex items-center space-x-3">
          <img 
            src={`${import.meta.env.BASE_URL}/logo12.png`} // replace with your logo path
            alt="Logo" 
            className="w-20 h-20 object-contain"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-gold to-teal bg-clip-text text-transparent">
            JOCHRISTI QUIÑANOLA
          </span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['About', 'Portfolio', 'Services', 'Testimonials', 'Contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-gold transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg md:hidden">
            <ul className="py-4 px-6 space-y-4">
              {['About', 'Portfolio', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 font-medium block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;