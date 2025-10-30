
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-100 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
};

export default Card;