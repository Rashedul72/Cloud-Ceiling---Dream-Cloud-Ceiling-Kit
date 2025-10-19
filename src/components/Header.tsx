'use client';

import { useState, useEffect } from 'react';
import { Cloud, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Make header transparent only when in hero section
        setIsTransparent(scrollPosition < heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'হোম' },
    { id: 'product', label: 'প্রোডাক্ট' },
    { id: 'pricing', label: 'মূল্য' },
    { id: 'support', label: 'সাপোর্ট' },
    // { id: 'order', label: 'অর্ডার' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent 
        ? 'bg-white/20 backdrop-blur-md shadow-sm border-b border-white/20' 
        : 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Cloud className={`h-8 w-8 transition-colors duration-300 ${
              isTransparent ? 'text-white drop-shadow-lg' : 'text-[#58ac1c]'
            }`} />
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isTransparent ? 'text-white drop-shadow-lg' : 'text-gray-900'
            }`}>
              Cloud Ceiling
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 font-medium hover:text-[#58ac1c] ${
                  isTransparent 
                    ? 'text-white drop-shadow-md hover:drop-shadow-lg' 
                    : 'text-gray-700 hover:drop-shadow-sm'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 hover:text-[#58ac1c] ${
              isTransparent 
                ? 'text-white hover:bg-white/20 drop-shadow-md' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-md border-t transition-all duration-300 ${
              isTransparent 
                ? 'bg-white/90 border-white/20' 
                : 'bg-white border-gray-200'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-800 hover:text-[#58ac1c] hover:bg-white/50 rounded-md transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
