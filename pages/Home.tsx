
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
    title: 'E-commerce Platform',
    description: 'A scalable and modern e-commerce solution with a focus on user experience and performance.',
    imageUrl: 'https://picsum.photos/seed/ecom/600/400',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Corporate Website',
    description: 'A professional and sleek corporate website to strengthen brand identity and online presence.',
    imageUrl: 'https://picsum.photos/seed/corp/600/400',
    tags: ['Next.js', 'Tailwind CSS', 'Headless CMS'],
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description: 'An intuitive and data-driven dashboard for a cutting-edge Software as a Service product.',
    imageUrl: 'https://picsum.photos/seed/saas/600/400',
    tags: ['React', 'D3.js', 'Firebase', 'UX/UI'],
  },
];

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center pt-20 animated-bg overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 blob opacity-20 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 blob opacity-20 pointer-events-none" />
        
        <div className="px-4 z-10 max-w-5xl mx-auto">
          <div className="reveal reveal-delay-1">
            <span className="inline-block px-4 py-2 mb-6 glassmorphism rounded-full text-brand-accent font-semibold text-sm">
              🚀 Bem-vindo à Cocreane
            </span>
          </div>
          
          <h1 className="reveal reveal-delay-2 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Construímos Experiências Digitais<br />
            Que <span className="gradient-text">Transformam</span> Negócios
          </h1>
          
          <p className="reveal reveal-delay-3 text-lg md:text-xl text-brand-gray max-w-3xl mx-auto mb-10 leading-relaxed">
            A Cocreane cria websites e aplicações personalizadas, otimizadas para performance, engajamento e crescimento exponencial. Do conceito ao lançamento, trazemos inovação em cada detalhe.
          </p>
          
          <div className="reveal reveal-delay-4 flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              to="/projects" 
              className="gradient-button text-white font-bold py-4 px-8 rounded-lg inline-block transform transition-all duration-300"
            >
              Explore Nossos Trabalhos ✨
            </Link>
            <Link 
              to="/contact" 
              className="glassmorphism text-white font-bold py-4 px-8 rounded-lg inline-block hover:border-brand-accent border border-transparent transition-all duration-300"
            >
              Inicie Seu Projeto
            </Link>
          </div>

          {/* Floating Stats */}
          <div className="reveal reveal-delay-4 grid grid-cols-3 gap-6 pt-8 border-t border-brand-accent/20">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">50+</p>
              <p className="text-brand-gray text-sm mt-1">Projetos Realizados</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">98%</p>
              <p className="text-brand-gray text-sm mt-1">Satisfação</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">10+</p>
              <p className="text-brand-gray text-sm mt-1">Anos de Experiência</p>
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
            <Link to="/about" className="text-brand-accent font-semibold hover:underline">
              Saiba Mais Sobre Nós →
            </Link>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
             <img src="https://picsum.photos/seed/about/800/600" alt="Our team" className="w-full h-full object-cover"/>
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

      {/* Stats Section */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 blob opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <StatItem number="50+" label="Projetos Entregues" delay={0} />
            <StatItem number="98%" label="Satisfação de Clientes" delay={0.1} />
            <StatItem number="10+" label="Anos de Atuação" delay={0.2} />
            <StatItem number="25+" label="Membros do Time" delay={0.3} />
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
              Ver Todos os Projetos →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 blob opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">O Que Nossos <span className="gradient-text">Clientes Dizem</span></h2>
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
              avatar="https://i.pravatar.cc/150?img=1"
              delay={0}
            />
            <TestimonialCard
              name="Marcus Chen"
              role="Fundador"
              company="GrowthHub"
              text="Trabalhar com a Cocreane foi transformador. Entregaram uma plataforma e-commerce impressionante que aumentou nossas vendas em 300%."
              avatar="https://i.pravatar.cc/150?img=2"
              delay={0.1}
            />
            <TestimonialCard
              name="Emma Rodriguez"
              role="Diretora de Marketing"
              company="BrandCo"
              text="Profissional, criativa e orientada a resultados. A Cocreane entendeu nossa marca e criou algo realmente especial."
              avatar="https://i.pravatar.cc/150?img=3"
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
            Pronto Para Transformar Sua Presença Digital?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Vamos colaborar e criar algo extraordinário juntos.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-brand-accent font-bold py-4 px-10 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Inicie Seu Projeto Hoje
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
