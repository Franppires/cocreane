
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary/50 backdrop-blur-sm border-t border-brand-accent/10 text-brand-gray">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="text-2xl font-black text-white tracking-wider">
                Cocreane<span className="bg-gradient-to-r from-brand-accent to-purple-600 bg-clip-text text-transparent">.</span>
              </span>
            </Link>
            <p className="text-sm text-brand-gray">
              Criando experiências digitais que inspiram e transformam negócios.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Navegação</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm hover:text-brand-accent transition-colors duration-300">
                Início
              </Link>
              <Link to="/about" className="block text-sm hover:text-brand-accent transition-colors duration-300">
                Sobre
              </Link>
              <Link to="/projects" className="block text-sm hover:text-brand-accent transition-colors duration-300">
                Projetos
              </Link>
              <Link to="/contact" className="block text-sm hover:text-brand-accent transition-colors duration-300">
                Contato
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Serviços</h4>
            <div className="space-y-3">
              <p className="text-sm hover:text-brand-accent transition-colors duration-300 cursor-pointer">
                Web Design
              </p>
              <p className="text-sm hover:text-brand-accent transition-colors duration-300 cursor-pointer">
                Desenvolvimento
              </p>
              <p className="text-sm hover:text-brand-accent transition-colors duration-300 cursor-pointer">
                Apps Mobile
              </p>
              <p className="text-sm hover:text-brand-accent transition-colors duration-300 cursor-pointer">
                Design UX/UI
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Contato</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-brand-gray mb-1">Email</p>
                <a 
                  href="mailto:contato.cocreane@gmail.com" 
                  className="text-sm hover:text-brand-accent transition-colors duration-300"
                >
                  contato.cocreane@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-brand-gray mb-1">WhatsApp</p>
                <a 
                  href="https://wa.me/5514998098786" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm hover:text-brand-accent transition-colors duration-300"
                >
                  +55 14 99809-8786
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-brand-accent/10 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a href="#" className="w-10 h-10 rounded-lg glassmorphism flex items-center justify-center hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300">
              <span>𝕱</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg glassmorphism flex items-center justify-center hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300">
              <span>𝕴</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg glassmorphism flex items-center justify-center hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300">
              <span>𝕻</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-lg glassmorphism flex items-center justify-center hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300">
              <span>𝕸</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-accent/10 pt-8 text-center text-sm">
          <p className="mb-2">
            &copy; {currentYear} Cocreane. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-gray">
            Designed & Developed com <span className="text-brand-accent">❤️</span> por Cocreane
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
