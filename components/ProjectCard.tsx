
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="glassmorphism rounded-2xl overflow-hidden shadow-lg group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-accent/30 border border-brand-accent/20 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">{project.title}</h3>
        <p className="text-brand-gray text-sm mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-brand-accent/20 to-purple-600/20 text-brand-accent text-xs font-semibold px-3 py-1 rounded-full border border-brand-accent/30 transition-all duration-300 group-hover:border-brand-accent/80 group-hover:shadow-lg group-hover:shadow-brand-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`h-0.5 w-0 bg-gradient-to-r from-brand-accent to-purple-600 rounded-full transition-all duration-500 ${isHovered ? 'w-full' : ''}`} />
      </div>
    </div>
  );
};

export default ProjectCard;
