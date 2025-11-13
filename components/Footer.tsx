
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary text-brand-gray">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
             {/* Placeholder for social icons */}
          </div>
          <div className="mt-8 md:mt-0 md:order-1 text-center text-sm">
             <p className="font-bold text-lg text-white mb-2">Cocreane<span className="text-brand-accent">.</span></p>
             <p>Email: <a href="mailto:contato.cocreane@gmail.com" className="hover:text-brand-accent">contato.cocreane@gmail.com</a></p>
             <p>WhatsApp: <a href="https://wa.me/5514998098786" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent">+55 14 99809-8786</a></p>
             <p className="mt-4">&copy; {new Date().getFullYear()} Cocreane. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
