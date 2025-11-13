
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'bg-brand-accent text-white'
          : 'text-brand-gray hover:text-white hover:bg-brand-secondary'
      }`
    }
  >
    {children}
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white tracking-wider">
              Cocreane<span className="text-brand-accent">.</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <NavItem to="/">Início</NavItem>
            <NavItem to="/about">Sobre</NavItem>
            <NavItem to="/projects">Projetos</NavItem>
            <NavItem to="/contact">Contato</NavItem>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-white hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Abrir menu principal</span>
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
        <div className="md:hidden bg-brand-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <NavItem to="/" onClick={() => setIsMenuOpen(false)}>Início</NavItem>
            <NavItem to="/about" onClick={() => setIsMenuOpen(false)}>Sobre</NavItem>
            <NavItem to="/projects" onClick={() => setIsMenuOpen(false)}>Projetos</NavItem>
            <NavItem to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</NavItem>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
