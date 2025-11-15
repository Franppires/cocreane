
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import { Project } from '../types';

const allProjects: Project[] = [
  { id: 1, title: 'Plataforma E-commerce', description: 'Uma solução de e-commerce escalável e moderna com foco na experiência do usuário e no desempenho.', imageUrl: 'https://picsum.photos/seed/ecom/600/400', tags: ['React', 'TypeScript', 'Node.js'] },
  { id: 2, title: 'Website Corporativo', description: 'Um website corporativo profissional e elegante para fortalecer a identidade da marca.', imageUrl: 'https://picsum.photos/seed/corp/600/400', tags: ['Next.js', 'Tailwind CSS'] },
  { id: 3, title: 'Painel SaaS', description: 'Um painel intuitivo e orientado a dados para um produto inovador de Software como Serviço.', imageUrl: 'https://picsum.photos/seed/saas/600/400', tags: ['React', 'D3.js', 'Firebase'] },
  { id: 4, title: 'App Mobile Banking', description: 'Uma aplicação mobile segura e fácil de usar para transações bancárias em qualquer lugar.', imageUrl: 'https://picsum.photos/seed/bank/600/400', tags: ['React Native', 'Segurança', 'UX/UI'] },
  { id: 5, title: 'Portfólio Criativo', description: 'Um website de portfólio visualmente rico para um profissional criativo.', imageUrl: 'https://picsum.photos/seed/portfolio/600/400', tags: ['Gatsby', 'GraphQL', 'Animações'] },
  { id: 6, title: 'Plataforma de Aprendizado', description: 'Uma plataforma interativa para cursos online e engajamento comunitário.', imageUrl: 'https://picsum.photos/seed/learn/600/400', tags: ['Vue.js', 'Node.js', 'Web Sockets'] },
];

const Projects: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <AnimatedSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-white">Nosso <span className="text-brand-accent">Portfólio</span></h1>
            <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
              Temos orgulho do nosso trabalho. Explore uma seleção de projetos que demonstram nossas habilidades, criatividade e compromisso com a qualidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div key={project.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Projects;
