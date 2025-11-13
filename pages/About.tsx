
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white">Nossa <span className="text-brand-accent">Missão</span></h1>
          <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
            Capacitar empresas com soluções digitais transformadoras que sejam inovadoras, confiáveis e perfeitamente alinhadas com seus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white mb-4">Quem Somos</h2>
            <p className="text-brand-gray mb-4">
              A Cocreane foi fundada com o princípio de que grandes websites nascem da intersecção entre design brilhante, código limpo e uma compreensão profunda das necessidades dos usuários. Somos um coletivo de criadores, pensadores e solucionadores de problemas que compartilham paixão pela tecnologia e seu potencial para conectar pessoas.
            </p>
            <p className="text-brand-gray">
              Nossa abordagem é simples: ouvimos, colaboramos e entregamos. Desde o conceito inicial até a implantação final, trabalhamos lado a lado com nossos clientes para garantir que cada projeto seja um sucesso retumbante.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://picsum.photos/seed/mission/800/600" alt="Collaborative meeting" className="rounded-lg shadow-2xl shadow-brand-accent/20" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-brand-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nossos Valores Fundamentais</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-brand-primary rounded-lg">
              <h3 className="text-xl font-semibold text-brand-accent mb-2">Inovação</h3>
              <p className="text-brand-gray text-sm">Exploramos constantemente novas tecnologias e abordagens criativas para estar sempre à frente.</p>
            </div>
            <div className="text-center p-6 bg-brand-primary rounded-lg">
              <h3 className="text-xl font-semibold text-brand-accent mb-2">Qualidade</h3>
              <p className="text-brand-gray text-sm">Somos comprometidos com os mais altos padrões de excelência em tudo que construímos.</p>
            </div>
            <div className="text-center p-6 bg-brand-primary rounded-lg">
              <h3 className="text-xl font-semibold text-brand-accent mb-2">Parceria</h3>
              <p className="text-brand-gray text-sm">Acreditamos em construir relacionamentos fortes e colaborativos com nossos clientes.</p>
            </div>
            <div className="text-center p-6 bg-brand-primary rounded-lg">
              <h3 className="text-xl font-semibold text-brand-accent mb-2">Integridade</h3>
              <p className="text-brand-gray text-sm">Operamos com transparência, honestidade e compromisso em fazer a coisa certa.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
