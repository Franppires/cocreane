import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, company, text, avatar, delay = 0 }) => {
  return (
    <div
      className="reveal glassmorphism p-8 rounded-2xl border border-brand-accent/20 card-hover"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-brand-accent"
        />
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-brand-gray text-sm">{role} at {company}</p>
        </div>
      </div>
      <div className="flex items-start gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-brand-accent text-lg">★</span>
        ))}
      </div>
      <p className="text-brand-gray leading-relaxed italic">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
