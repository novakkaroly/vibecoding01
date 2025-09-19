
import React from 'react';

interface InteractiveExampleProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const InteractiveExample: React.FC<InteractiveExampleProps> = ({ title, description, icon, children }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 transition-shadow hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
          <p className="text-slate-500">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
};

export default InteractiveExample;
