
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      // Simulate a random success/error for demonstration
      if (Math.random() > 0.1) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16 bg-brand-secondary">
      <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-white">Vamos Construir Algo <span className="text-brand-accent">Incrível</span></h1>
            <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
              Tem um projeto em mente? Adoraríamos saber sobre isso. Preencha o formulário abaixo para começar.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-brand-primary p-8 rounded-lg shadow-2xl">
            {formState === 'success' ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-white mb-2">Obrigado!</h3>
                <p className="text-brand-gray">Sua mensagem foi enviada. Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Seu Nome" required className="w-full bg-brand-secondary text-white p-3 rounded-md border border-brand-secondary focus:border-brand-accent focus:ring-brand-accent outline-none"/>
                  <input type="email" placeholder="Seu Email" required className="w-full bg-brand-secondary text-white p-3 rounded-md border border-brand-secondary focus:border-brand-accent focus:ring-brand-accent outline-none"/>
                </div>

                <div>
                  <select defaultValue="" required className="w-full bg-brand-secondary text-white p-3 rounded-md border border-brand-secondary focus:border-brand-accent focus:ring-brand-accent outline-none">
                    <option value="" disabled>Que tipo de site você precisa?</option>
                    <option>Institucional</option>
                    <option>E-commerce</option>
                    <option>Landing Page</option>
                    <option>Blog</option>
                    <option>Aplicação Personalizada</option>
                  </select>
                </div>

                <div>
                   <select defaultValue="" required className="w-full bg-brand-secondary text-white p-3 rounded-md border border-brand-secondary focus:border-brand-accent focus:ring-brand-accent outline-none">
                    <option value="" disabled>Qual é seu orçamento estimado?</option>
                    <option>Menos de R$ 5.000</option>
                    <option>R$ 5.000 - R$ 15.000</option>
                    <option>R$ 15.000 - R$ 25.000</option>
                    <option>R$ 25.000+</option>
                  </select>
                </div>

                <div>
                  <textarea placeholder="Conte-nos sobre seu projeto..." rows={5} required className="w-full bg-brand-secondary text-white p-3 rounded-md border border-brand-secondary focus:border-brand-accent focus:ring-brand-accent outline-none"></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" disabled={formState === 'submitting'} className="bg-brand-accent text-white font-bold py-3 px-12 rounded-full hover:bg-blue-500 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                    {formState === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </div>
                {formState === 'error' && <p className="text-red-500 text-center mt-4">Algo deu errado. Por favor, tente novamente.</p>}
              </form>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
