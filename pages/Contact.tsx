
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

const Contact: React.FC = () => {
  // Configure seu endpoint Formspree aqui (substitua pelo seu ID)
  // Crie um formulário em https://formspree.io/ e copie o endpoint (ex: https://formspree.io/f/abcdxyz)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrbrabjq';
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
        setTimeout(() => setFormState('idle'), 3000);
      } else {
        setFormState('error');
      }
    } catch (err) {
      setFormState('error');
    }
  };

  return (
    <div className="pt-24 pb-16 bg-brand-primary">
      {/* Hero Section */}
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Vamos Criar Algo <span className="gradient-text">Incrível</span>
          </h1>
          <p className="text-lg text-brand-gray mb-2">
            Tem um projeto em mente? Adoraríamos ouvir sobre isso!
          </p>
          <p className="text-brand-gray">
            Preencha o formulário abaixo para começar sua jornada conosco.
          </p>
        </div>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-8">
            {/* Form */}
            <div>
              <div className="glassmorphism p-6 md:p-8 rounded-2xl border border-brand-accent/20 shadow-2xl max-w-2xl mx-auto">
                {formState === 'success' ? (
                  <div className="text-center py-12 reveal">
                    <div className="text-6xl mb-4">✨</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Obrigado!</h3>
                    <p className="text-brand-gray mb-2">Sua mensagem foi enviada com sucesso.</p>
                    <p className="text-brand-gray">Entraremos em contato em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="reveal">
                        <label className="block text-sm font-semibold text-white mb-2">Seu Nome *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="João Silva"
                          required
                          className="w-full bg-brand-primary text-white p-3 rounded-lg border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all duration-300 placeholder-brand-gray/50"
                        />
                      </div>
                      <div className="reveal reveal-delay-1">
                        <label className="block text-sm font-semibold text-white mb-2">Seu Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="joao@example.com"
                          required
                          className="w-full bg-brand-primary text-white p-3 rounded-lg border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all duration-300 placeholder-brand-gray/50"
                        />
                      </div>
                    </div>

                    {/* Phone and Project Type */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="reveal reveal-delay-2">
                        <label className="block text-sm font-semibold text-white mb-2">Telefone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(14) 99809-8786"
                          className="w-full bg-brand-primary text-white p-3 rounded-lg border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all duration-300 placeholder-brand-gray/50"
                        />
                      </div>
                      <div className="reveal reveal-delay-3">
                        <label className="block text-sm font-semibold text-white mb-2">Tipo de Projeto *</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full bg-brand-primary text-white p-3 rounded-lg border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all duration-300"
                        >
                          <option value="">Selecione um tipo...</option>
                          <option value="website">Website Corporativo</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="landing">Landing Page</option>
                          <option value="app">Aplicação Web</option>
                          <option value="mobile">App Mobile</option>
                          <option value="other">Outro</option>
                        </select>
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="reveal reveal-delay-4">
                      <label className="block text-sm font-semibold text-white mb-2">Orçamento Estimado *</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-primary text-white p-4 rounded-lg border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all duration-300"
                      >
                        <option value="">Selecione uma faixa...</option>
                        <option value="1000">Menos de R$ 1.000</option>
                        <option value="3000">R$ 1.000 - R$ 3.000</option>
                        <option value="5000">R$ 3.000 - R$ 5.000</option>
                        <option value="10000">R$ 5.000 - R$ 10.000</option>
                        <option value="more">Mais de R$ 10.000</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="reveal reveal-delay-4">
                      <label className="block text-sm font-semibold text-white mb-2">Conte-nos Sobre Seu Projeto *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Descreva brevemente suas ideias, objetivos e qualquer detalhe importante..."
                        rows={5}
                        required
                        className="w-full bg-brand-primary text-white p-3 rounded-lg border border-brand-accent/30 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all duration-300 placeholder-brand-gray/50 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="reveal reveal-delay-4">
                      <div className="text-center">
                        <button
                          type="submit"
                          disabled={formState === 'submitting'}
                          className="mx-auto block gradient-button text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                        >
                          <span className="relative z-10">
                            {formState === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Error Message */}
                    {formState === 'error' && (
                      <div className="reveal bg-red-500/20 border border-red-500/50 p-4 rounded-lg">
                        <p className="text-red-400 text-center">
                          ❌ Algo deu errado. Por favor, tente novamente ou entre em contato via WhatsApp.
                        </p>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-brand-gray max-w-2xl mx-auto">Respostas rápidas para suas dúvidas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="reveal glassmorphism p-6 rounded-xl border border-brand-accent/20">
            <h3 className="text-lg font-bold text-white mb-3">⏱️ Quanto tempo leva um projeto?</h3>
            <p className="text-brand-gray text-sm">Depende da complexidade, mas geralmente de 2 a 8 semanas. Após o primeiro contato, fornecemos um cronograma detalhado.</p>
          </div>

          <div className="reveal glassmorphism p-6 rounded-xl border border-brand-accent/20 reveal-delay-1">
            <h3 className="text-lg font-bold text-white mb-3">💰 Qual é o preço mínimo?</h3>
            <p className="text-brand-gray text-sm">Oferecemos projetos a partir de R$ 500. O preço varia conforme escopo e funcionalidades solicitadas.</p>
          </div>

          <div className="reveal glassmorphism p-6 rounded-xl border border-brand-accent/20 reveal-delay-2">
            <h3 className="text-lg font-bold text-white mb-3">🛠️ Oferecem suporte pós-lançamento?</h3>
            <p className="text-brand-gray text-sm">Sim! Oferecemos pacotes de manutenção e suporte técnico contínuo para todos os projetos.</p>
          </div>

          <div className="reveal glassmorphism p-6 rounded-xl border border-brand-accent/20 reveal-delay-3">
            <h3 className="text-lg font-bold text-white mb-3">📱 Fazem aplicações mobile?</h3>
            <p className="text-brand-gray text-sm">Sim, desenvolvemos aplicações iOS, Android e web apps responsivos de alta qualidade.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
