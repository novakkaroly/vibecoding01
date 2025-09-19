
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Vibe Coding</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto text-indigo-100">
          A Kreativitás Új Dimenziója az Oktatásban
        </p>
      </div>
    </header>
  );
};

export default Header;
