
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white">Nossa <span className="text-brand-accent">Missão</span></h1>
          <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
            Capacitar negócios com soluções digitais transformadoras que são inovadoras, confiáveis e perfeitamente alinhadas com seus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white mb-4">Quem Somos</h2>
            <p className="text-brand-gray mb-4">
              A Cocreane foi fundada com o princípio de que ótimos websites nascem da interseção entre design brilhante, código limpo e uma compreensão profunda das necessidades dos usuários. Somos um coletivo de criadores, pensadores e resolvedores de problemas que compartilham paixão por tecnologia e seu potencial de conectar pessoas.
            </p>
            <p className="text-brand-gray">
              Nossa abordagem é simples: ouvimos, colaboramos e entregamos resultados. Do conceito inicial até o lançamento final, trabalhamos lado a lado com nossos clientes para garantir que cada projeto seja um sucesso absoluto.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="/images/about-cocreane.jpg" alt="Reunião colaborativa" className="rounded-lg shadow-2xl shadow-brand-accent/20" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-brand-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nossos Valores Fundamentais</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal glassmorphism p-8 rounded-2xl border border-brand-accent/20 card-hover">
              <h3 className="text-xl font-semibold text-brand-accent mb-3">Inovação</h3>
              <p className="text-brand-gray text-sm leading-relaxed">Exploramos constantemente novas tecnologias e abordagens criativas para ficar à frente.</p>
              <div className="h-1 w-0 bg-gradient-to-r from-brand-accent to-purple-600 rounded-full mt-4 group-hover:w-full transition-all duration-500" />
            </div>
            <div className="reveal glassmorphism p-8 rounded-2xl border border-brand-accent/20 card-hover">
              <h3 className="text-xl font-semibold text-brand-accent mb-3">Qualidade</h3>
              <p className="text-brand-gray text-sm leading-relaxed">Comprometidos com os mais altos padrões de excelência em tudo que construímos.</p>
              <div className="h-1 w-0 bg-gradient-to-r from-brand-accent to-purple-600 rounded-full mt-4 group-hover:w-full transition-all duration-500" />
            </div>
            <div className="reveal glassmorphism p-8 rounded-2xl border border-brand-accent/20 card-hover">
              <h3 className="text-xl font-semibold text-brand-accent mb-3">Parceria</h3>
              <p className="text-brand-gray text-sm leading-relaxed">Acreditamos em construir relações colaborativas fortes e duradouras com clientes.</p>
              <div className="h-1 w-0 bg-gradient-to-r from-brand-accent to-purple-600 rounded-full mt-4 group-hover:w-full transition-all duration-500" />
            </div>
            <div className="reveal glassmorphism p-8 rounded-2xl border border-brand-accent/20 card-hover">
              <h3 className="text-xl font-semibold text-brand-accent mb-3">Integridade</h3>
              <p className="text-brand-gray text-sm leading-relaxed">Operamos com transparência, honestidade e compromisso em fazer o certo.</p>
              <div className="h-1 w-0 bg-gradient-to-r from-brand-accent to-purple-600 rounded-full mt-4 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
