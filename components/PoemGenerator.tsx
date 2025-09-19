
import React, { useState } from 'react';
import InteractiveExample from './InteractiveExample';
import { generateText } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';

const PoemGenerator: React.FC = () => {
  const [vibe, setVibe] = useState<string>('egy melankolikus őszi délután az erdőben');
  const [poem, setPoem] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!vibe) {
      setError('Kérlek, adj meg egy hangulatot!');
      return;
    }
    setIsLoading(true);
    setError(null);
    setPoem('');
    
    const prompt = `Írj egy rövid, legfeljebb 8 soros verset, amelynek a hangulata a következő: "${vibe}".`;
    try {
      const result = await generateText(prompt, 'Költő vagy, aki hangulatokat és érzéseket önt szavakba.');
      setPoem(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ismeretlen hiba történt.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const Icon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
     </svg>
  );

  return (
    <InteractiveExample
      title="Vers Generátor"
      description="Adj meg egy hangulatot, és az AI verset költ neked."
      icon={<Icon />}
    >
      <div className="flex flex-col gap-4">
        <textarea
          value={vibe}
          onChange={(e) => setVibe(e.target.value)}
          placeholder="Pl. vidám tavaszi reggel a mezőn"
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          rows={2}
        />
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors"
        >
          {isLoading ? 'Generálás...' : 'Vers generálása'}
        </button>
        {error && <p className="text-red-600 bg-red-100 p-3 rounded-lg text-center">{error}</p>}
        {isLoading && <LoadingSpinner message="A múzsa éppen alkot..." />}
        {poem && (
          <div className="mt-4 p-4 bg-slate-50 border-l-4 border-indigo-500 rounded-r-lg">
            <p className="text-slate-700 whitespace-pre-wrap font-serif italic">{poem}</p>
          </div>
        )}
      </div>
    </InteractiveExample>
  );
};

export default PoemGenerator;
