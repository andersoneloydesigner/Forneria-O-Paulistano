import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface NavbarProps {
  onOrderClick?: () => void;
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Nossa História', href: '#historia' },
    { label: 'Nossa Massa', href: '#massa' },
    { label: 'Ingredientes', href: '#ingredientes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleOrder = (e: MouseEvent) => {
    if (onOrderClick) {
      e.preventDefault();
      onOrderClick();
    }
  };

  return (
    <nav
      id="main-navigation"
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'fixed top-0 left-0 right-0 bg-[#f9f8ed]/95 backdrop-blur-md border-b border-[#e5e2cf] shadow-md py-3'
          : 'absolute top-0 left-0 right-0 bg-transparent text-[#f9f8ed] pt-4 sm:pt-6 pb-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between transition-all duration-300 h-16 md:h-20">
          
          {/* Logo link: dynamically switching between dark hero and light scroll */}
          <a
            href="#"
            className="flex items-center focus:outline-none transition-transform duration-200 hover:opacity-95"
            aria-label="Forneria O Paulistano"
          >
            {isScrolled ? (
              <img
                src="https://opaulistano.b-cdn.net/logo-final-o-paulistano_fundo%20claro%20horizontal.png"
                alt="Forneria O Paulistano"
                className="h-[45px] sm:h-[56px] md:h-[67px] w-auto object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            ) : (
              <img
                src="https://opaulistano.b-cdn.net/logo-final-o-paulistano_fundo%20escuro%20horizontal.png"
                alt="Forneria O Paulistano"
                className="h-[45px] sm:h-[56px] md:h-[67px] w-auto object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            )}
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-[#1e1e1e] hover:text-[#ff4d4d]'
                    : 'text-[#f9f8ed] hover:text-[#ff4d4d]'
                }`}
                style={{ fontSize: '14px' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Action Button (strictly NO icon as requested: 'tire o ícone dos botões') */}
          <div className="hidden md:flex items-center">
            <a
              id="navbar-order-btn"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOrder}
              className="inline-flex items-center justify-center bg-[#ff4d4d] hover:bg-[#e63939] text-[#f9f8ed] rounded-full font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#ff4d4d]/20 active:scale-95 cursor-pointer text-center"
              style={{
                width: '149.891px',
                height: '45.5938px',
                lineHeight: '25.6px',
                fontSize: '16px',
              }}
            >
              Fazer Pedido
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              id="mobile-nav-order-btn"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOrder}
              className="font-size-body bg-[#ff4d4d] text-[#f9f8ed] px-4 py-1.5 rounded-full font-bold text-sm active:scale-95 cursor-pointer inline-flex items-center justify-center"
            >
              Pedir
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className={`p-2 transition-colors ${
                isScrolled ? 'text-[#1e1e1e] hover:text-[#ff4d4d]' : 'text-[#f9f8ed] hover:text-[#ff4d4d]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 space-y-4 border-t ${
            isScrolled
              ? 'bg-[#f9f8ed] text-[#1e1e1e] border-[#e5e2cf]'
              : 'bg-[#141414] text-[#f9f8ed] border-[#333333]'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-size-body font-medium py-2 border-b ${
                isScrolled
                  ? 'border-[#e5e2cf] text-[#1e1e1e] hover:text-[#ff4d4d]'
                  : 'border-[#262626] text-[#f9f8ed] hover:text-[#ff4d4d]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            id="mobile-dropdown-order-btn"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
            className="w-full mt-4 font-size-body flex items-center justify-center bg-[#ff4d4d] hover:bg-[#e63939] text-[#f9f8ed] py-3 rounded-full font-bold tracking-wide cursor-pointer text-center"
          >
            Fazer Pedido via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
