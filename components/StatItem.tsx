import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, delay = 0 }) => {
  return (
    <div
      className="reveal text-center"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl md:text-5xl font-black gradient-text mb-3">
        {number}
      </div>
      <p className="text-brand-gray text-lg">{label}</p>
    </div>
  );
};

export default StatItem;
