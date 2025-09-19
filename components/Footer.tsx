
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 mt-16">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Vibe Coding Project. Kreatív ötletek megvalósítva a Google Gemini API segítségével.</p>
      </div>
    </footer>
  );
};

export default Footer;
