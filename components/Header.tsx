import React from 'react';
import { AcademicCapIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-10 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-center md:justify-start">
        <AcademicCapIcon className="w-9 h-9 text-primary" />
        <h1 className="text-2xl font-bold text-dark ml-3">
          Tin Học 11 Dễ Hiểu <span className="text-secondary font-semibold">Lớp 11</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;