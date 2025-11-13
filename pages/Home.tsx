
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import { Project } from '../types';

const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Plataforma de E-commerce',
    description: 'Uma solução de e-commerce escalável e moderna com foco em experiência do usuário e desempenho.',
    imageUrl: 'https://picsum.photos/seed/ecom/600/400',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Website Corporativo',
    description: 'Um website corporativo profissional e elegante para fortalecer a identidade da marca e presença online.',
    imageUrl: 'https://picsum.photos/seed/corp/600/400',
    tags: ['Next.js', 'Tailwind CSS', 'Headless CMS'],
  },
  {
    id: 3,
    title: 'Dashboard SaaS',
    description: 'Um painel intuitivo e orientado por dados para um produto inovador de Software como Serviço.',
    imageUrl: 'https://picsum.photos/seed/saas/600/400',
    tags: ['React', 'D3.js', 'Firebase', 'UX/UI'],
  },
];

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(13, 13, 43, 0.8), rgba(13, 13, 43, 0.9)), url('https://picsum.photos/seed/hero/1920/1080')" }}>
        <div className="px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            Construímos Experiências Digitais<br />Que <span className="text-brand-accent">Inspiram</span> Ação
          </h1>
          <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto mb-8">
            A Cocreane cria websites e aplicações personalizadas que não apenas são visualmente impressionantes, mas também otimizadas para desempenho, engajamento e crescimento.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/projects" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
              Nossos Projetos
            </Link>
            <Link to="/contact" className="bg-brand-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              Entrar em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre a <span className="text-brand-accent">Cocreane</span></h2>
            <p className="text-brand-gray mb-6">
              Somos uma equipe apaixonada por desenvolvedores e designers dedicados a transformar sua visão digital em realidade. Com forte foco em colaboração e inovação, criamos soluções que resolvem problemas reais e impulsionam o sucesso dos negócios. Nosso processo é transparente, nossos produtos são robustos, e nossas parcerias são duradouras.
            </p>
            <Link to="/about" className="text-brand-accent font-semibold hover:underline">
              Saiba Mais Sobre Nós &rarr;
            </Link>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
             <img src="https://picsum.photos/seed/about/800/600" alt="Nossa equipe" className="w-full h-full object-cover"/>
             <div className="absolute inset-0 bg-brand-accent opacity-20"></div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section Preview */}
      <AnimatedSection className="py-20 md:py-32 bg-brand-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos Trabalhos <span className="text-brand-accent">Recentes</span></h2>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto">
              Confira alguns dos projetos dos quais nos orgulhamos em fazer parte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
