
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
                <div className="flex items-center gap-3">
                  <svg id="fi_6711567" enable-background="new 0 0 512 512" height="22" viewBox="0 0 512 512" width="22" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><circle cx="256" cy="256" fill="#0cb0ff" r="240"></circle><path d="m495.674 268.568c-6.358 123.221-105.655 221.856-229.146 227.189-49.545-49.545-99.135-99.051-148.679-148.594-2.375-2.375-3.849-5.645-3.849-9.234v-163.857c0-1.292.191-2.542.546-3.724l123.629 101.782c1.269 1.045 2.601 1.963 3.98 2.755l-113.897-113.897h255.485l11.325 11.325 2.386-1.965z" fill="#0092d8"></path><path d="m397.454 170.348-123.629 101.782c-5.237 4.311-11.535 6.467-17.825 6.467s-12.589-2.156-17.825-6.467l-123.629-101.782c-.355 1.182-.546 2.432-.546 3.724v163.856c0 3.59 1.474 6.859 3.849 9.234s5.645 3.849 9.234 3.849h257.832c3.59 0 6.859-1.474 9.234-3.849s3.849-5.645 3.849-9.234v-163.856c.002-1.292-.189-2.542-.544-3.724zm-13.711-9.36-120.042 98.83c-2.251 1.853-4.973 2.78-7.701 2.78s-5.45-.927-7.701-2.78l-120.042-98.83z" fill="#fff"></path></g></svg>
                  <a
                    href="mailto:contato.cocreane@gmail.com"
                    aria-label="Enviar email para Cocreane"
                    className="text-sm hover:text-brand-accent transition-colors duration-300"
                  >
                    contato.cocreane@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <svg height="22" viewBox="0 0 176 176" width="22" xmlns="http://www.w3.org/2000/svg" id="fi_3670051"><g id="Layer_2" data-name="Layer 2"><g id="_09.whatsapp" data-name="09.whatsapp"><circle id="background" cx="88" cy="88" fill="#29a71a" r="88"></circle><g id="icon" fill="#fff"><path d="m126.8 49.2a54.57 54.57 0 0 0 -87.42 63.13l-5.79 28.11a2.08 2.08 0 0 0 .33 1.63 2.11 2.11 0 0 0 2.24.87l27.55-6.53a54.56 54.56 0 0 0 63.09-87.21zm-8.59 68.56a42.74 42.74 0 0 1 -49.22 8l-3.84-1.9-16.89 4 .05-.21 3.5-17-1.88-3.71a42.72 42.72 0 0 1 7.86-49.59 42.73 42.73 0 0 1 60.42 0 2.28 2.28 0 0 0 .22.22 42.72 42.72 0 0 1 -.22 60.19z"></path><path d="m116.71 105.29c-2.07 3.26-5.34 7.25-9.45 8.24-7.2 1.74-18.25.06-32-12.76l-.17-.15c-12.09-11.21-15.23-20.54-14.47-27.94.42-4.2 3.92-8 6.87-10.48a3.93 3.93 0 0 1 6.15 1.41l4.45 10a3.91 3.91 0 0 1 -.49 4l-2.25 2.92a3.87 3.87 0 0 0 -.35 4.32c1.26 2.21 4.28 5.46 7.63 8.47 3.76 3.4 7.93 6.51 10.57 7.57a3.82 3.82 0 0 0 4.19-.88l2.61-2.63a4 4 0 0 1 3.9-1l10.57 3a4 4 0 0 1 2.24 5.91z"></path></g></g></g></svg>
                  <a
                    href="https://wa.me/5514998098786"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir chat do WhatsApp com Cocreane"
                    className="text-sm hover:text-brand-accent transition-colors duration-300"
                  >
                    (14) 99809-8786
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-brand-accent/10 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/company/cocreane-solucoes-digitais/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cocreane no LinkedIn"
              className="w-10 h-10 rounded-lg glassmorphism flex items-center justify-center hover:bg-brand-accent/20 hover:text-brand-accent transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.6v1.7h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v7.1h-4V13.4c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V20H7.5V8z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-accent/10 pt-8 text-center text-sm">
          <p className="mb-2">
            &copy; {currentYear} Cocreane - Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-gray">
            Projetado e desenvolvido por <span className="text-brand-accent">Cocreane</span> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
