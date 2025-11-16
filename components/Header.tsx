
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
        isActive
          ? 'bg-gradient-to-r from-brand-accent to-purple-600 text-white'
          : 'text-brand-gray hover:text-white'
      }`
    }
  >
    {children}
    {!(() => {
      const path = to;
      return window.location.pathname === path;
    })() && (
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent to-purple-600 group-hover:w-full transition-all duration-300" />
    )}
  </NavLink>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-primary/95 backdrop-blur-lg shadow-2xl shadow-brand-accent/10 border-b border-brand-accent/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 group">
            <Link to="/" className="relative">
              <span className="text-2xl font-black text-white tracking-wider group-hover:text-brand-accent transition-colors duration-300">
                Cocreane<span className="bg-gradient-to-r from-brand-accent to-purple-600 bg-clip-text text-transparent">.</span>
              </span>
              {isScrolled && (
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent to-purple-600 group-hover:w-full transition-all duration-300" />
              )}
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            <NavItem to="/">Início</NavItem>
            <NavItem to="/about">Sobre</NavItem>
            <NavItem to="/projects">Projetos</NavItem>
            <NavItem to="/contact">Contato</NavItem>
          </nav>
          
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="relative overflow-hidden bg-gradient-to-r from-brand-accent to-purple-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/50 hover:scale-105"
            >
              <span className="relative z-10">Comece agora</span>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-brand-gray hover:text-white hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-brand-secondary/95 backdrop-blur-lg border-t border-brand-accent/10 animate-in fade-in duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <NavItem to="/" onClick={() => setIsMenuOpen(false)}>Início</NavItem>
            <NavItem to="/about" onClick={() => setIsMenuOpen(false)}>Sobre</NavItem>
            <NavItem to="/projects" onClick={() => setIsMenuOpen(false)}>Projetos</NavItem>
            <NavItem to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</NavItem>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full mt-4 text-center bg-gradient-to-r from-brand-accent to-purple-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Começe agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
