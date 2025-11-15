
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import StatItem from '../components/StatItem';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedSection from '../components/AnimatedSection';
import { Project } from '../types';

const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Plataforma de E-commerce',
    description: 'Uma plataforma de e‑commerce escalável, focada na experiência do usuário e alto desempenho.',
    imageUrl: 'https://picsum.photos/seed/ecom/600/400',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Website Corporativo',
    description: 'Website corporativo profissional e responsivo, pensado para fortalecer a identidade da marca.',
    imageUrl: 'https://picsum.photos/seed/corp/600/400',
    tags: ['Next.js', 'Tailwind CSS', 'Headless CMS'],
  },
  {
    id: 3,
    title: 'Painel SaaS',
    description: 'Painel intuitivo e orientado a dados para facilitar decisões estratégicas em produtos SaaS.',
    imageUrl: 'https://picsum.photos/seed/saas/600/400',
    tags: ['React', 'D3.js', 'Firebase', 'UX/UI'],
  },
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center pt-20 animated-bg overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 blob opacity-20 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 blob opacity-20 pointer-events-none" />
        
        <div className="px-4 z-10 max-w-5xl mx-auto">
          {/* <div className="reveal reveal-delay-1">
            <span className="inline-block px-4 py-2 mb-6 glassmorphism rounded-full text-brand-accent font-semibold text-sm">
              🚀 Bem-vindo à Cocreane
            </span>
          </div> */}
          
          <h1 className="reveal reveal-delay-2 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Construímos o futuro <br />
            <span className="gradient-text">Digital</span> do seu negócio.
          </h1>
          
          <p className="reveal reveal-delay-3 text-lg md:text-xl text-brand-gray max-w-3xl mx-auto mb-10 leading-relaxed">
            A Cocreane cria websites e aplicações personalizadas, otimizadas para performance, engajamento e crescimento exponencial. Do conceito ao lançamento, trazemos inovação em cada detalhe.
          </p>
          
          <div className="reveal reveal-delay-4 flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              to="/projects" 
              className="gradient-button text-white font-bold py-4 px-8 rounded-lg inline-block transform transition-all duration-300"
            >
              Explore nossos trabalhos
            </Link>
            <Link 
              to="/contact" 
              className="glassmorphism text-white font-bold py-4 px-8 rounded-lg inline-block hover:border-brand-accent border border-transparent transition-all duration-300"
            >
              Inicie seu projeto
            </Link>
          </div>

          {/* Nossos Diferenciais (substitui o bloco de estatísticas) */}
          <div className="reveal reveal-delay-4 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-brand-accent/10">
            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-purple-600 text-white mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-white">Entrega no prazo</h3>
              <p className="text-brand-gray text-sm mt-1">Projetos entregues dentro do cronograma acordado.</p>
            </div>

            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-purple-600 text-white mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-white">Comunicação direta</h3>
              <p className="text-brand-gray text-sm mt-1">Canal direto com nossa equipe durante todo o projeto.</p>
            </div>

            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-purple-600 text-white mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="font-semibold text-white">Escalabilidade</h3>
              <p className="text-brand-gray text-sm mt-1">Arquiteturas pensadas para crescer com seu negócio.</p>
            </div>

            <div className="text-center p-4">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-purple-600 text-white mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-white">Suporte contínuo</h3>
              <p className="text-brand-gray text-sm mt-1">Acompanhamento e manutenção após o lançamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre a <span className="text-brand-accent">Cocreane</span></h2>
            <p className="text-brand-gray mb-6">
              Somos um time apaixonado de desenvolvedores e designers dedicados a transformar sua visão digital em realidade. Com foco em colaboração e inovação, construímos soluções que resolvem problemas reais e impulsionam o sucesso dos negócios. Nosso processo é transparente, nossos produtos são robustos e nossas parcerias são duradouras.
            </p>
            <Link to="/about" className="gradient-button text-white font-bold py-4 px-8 rounded-lg inline-block transform transition-all duration-300 hover:shadow-2xl">
              Saiba mais sobre nós →
            </Link>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
             <img src="/images/office-cocreane.jpg" alt="Office Cocreane" className="w-full h-full object-cover"/>
             <div className="absolute inset-0 bg-brand-accent opacity-20"></div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 blob opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos <span className="gradient-text">Serviços</span></h2>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto">
              Soluções completas personalizadas para elevar sua presença digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon="💻"
              title="Web Design"
              description="Designs responsivos e belos que cativam seu público e geram conversões."
              delay={0}
            />
            <ServiceCard
              icon="⚙️"
              title="Desenvolvimento"
              description="Aplicações robustas e escaláveis construídas com tecnologias modernas."
              delay={0.1}
            />
            <ServiceCard
              icon="📱"
              title="Apps Mobile"
              description="Soluções mobile multiplataforma que entregam experiências excepcionais."
              delay={0.2}
            />
            <ServiceCard
              icon="🎨"
              title="Design UX/UI"
              description="Estratégias de design centradas no usuário que maximizam engajamento."
              delay={0.3}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Nossos Valores Section (substitui stats) */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 blob opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos <span className="gradient-text">Valores</span></h2>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto">O que guia cada projeto e parceria.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-brand-secondary/30 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-purple-600 text-white mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:ring-4 group-hover:ring-brand-accent/30">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 12V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Transparência</h3>
              <p className="text-brand-gray text-sm">Processos claros e comunicação aberta em todas as etapas.</p>
            </div>
            <div className="text-center p-6 bg-brand-secondary/30 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-purple-600 text-white mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:ring-4 group-hover:ring-brand-accent/30">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Inovação</h3>
              <p className="text-brand-gray text-sm">Soluções criativas e tecnologia de ponta para cada desafio.</p>
            </div>
            <div className="text-center p-6 bg-brand-secondary/30 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-purple-600 text-white mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:ring-4 group-hover:ring-brand-accent/30">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Parceria</h3>
              <p className="text-brand-gray text-sm">Crescemos junto com nossos clientes, lado a lado.</p>
            </div>
            <div className="text-center p-6 bg-brand-secondary/30 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-purple-600 text-white mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:ring-4 group-hover:ring-brand-accent/30">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Qualidade</h3>
              <p className="text-brand-gray text-sm">Excelência em cada entrega, do início ao fim.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section Preview */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos Trabalhos <span className="gradient-text">Recentes</span></h2>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto">
              Confira alguns dos projetos dos quais nos orgulhamos ter feito parte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="gradient-button text-white font-bold py-4 px-8 rounded-lg inline-block transform transition-all duration-300"
            >
              Ver todos os projetos →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 blob opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos <span className="gradient-text">Clientes</span></h2>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto">
              Junte-se a centenas de clientes satisfeitos que transformaram sua presença digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="CEO"
              company="TechVenture"
              text="A Cocreane transformou nossa visão em realidade. Sua atenção aos detalhes e abordagem inovadora superaram todas as expectativas."
              avatar="https://i.pravatar.cc/150?img=5"
              delay={0}
            />
            <TestimonialCard
              name="Marcus Chen"
              role="Fundador"
              company="GrowthHub"
              text="Trabalhar com a Cocreane foi transformador. Entregaram uma plataforma e-commerce impressionante que aumentou nossas vendas em 300%."
              avatar="https://i.pravatar.cc/150?img=7"
              delay={0.1}
            />
            <TestimonialCard
              name="Emma Rodriguez"
              role="Diretora de Marketing"
              company="BrandCo"
              text="Profissional, criativa e orientada a resultados. A Cocreane entendeu nossa marca e criou algo realmente especial."
              avatar="https://i.pravatar.cc/150?img=9"
              delay={0.2}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 md:py-32 bg-gradient-to-r from-brand-accent to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white blob pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white blob pointer-events-none" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Vamos colaborar e criar algo extraordinário juntos.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-brand-accent font-bold py-4 px-10 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Inicie seu projeto hoje
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
