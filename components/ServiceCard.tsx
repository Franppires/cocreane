import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div
      className="reveal glassmorphism p-8 rounded-2xl border border-brand-accent/20 group card-hover"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-2xl text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-brand-gray text-sm leading-relaxed">{description}</p>
      <div className="h-1 w-0 bg-gradient-to-r from-brand-accent to-purple-600 rounded-full mt-6 group-hover:w-full transition-all duration-500" />
    </div>
  );
};

export default ServiceCard;
