
import React, { useState } from 'react';
import InteractiveExample from './InteractiveExample';
import { generateText } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';

const StoryStarter: React.FC = () => {
  const [character, setCharacter] = useState<string>('egy bátor felfedező');
  const [setting, setSetting] = useState<string>('egy elfeledett, dzsungellel benőtt templomban');
  const [story, setStory] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!character || !setting) {
      setError('Kérlek, add meg a szereplőt és a helyszínt is!');
      return;
    }
    setIsLoading(true);
    setError(null);
    setStory('');
    
    const prompt = `Írj egy lebilincselő, egy bekezdésből álló történetindítót, amelynek főszereplője ${character}, és a helyszíne ${setting}.`;
    try {
      const result = await generateText(prompt, 'Kreatív író vagy, aki izgalmas történeteket talál ki.');
      setStory(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ismeretlen hiba történt.');
    } finally {
      setIsLoading(false);
    }
  };

  const Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  return (
    <InteractiveExample
      title="Történet Indító"
      description="Adj meg egy szereplőt és egy helyszínt a kaland kezdetéhez."
      icon={<Icon />}
    >
      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="character" className="block text-sm font-medium text-slate-700 mb-1">Szereplő</label>
            <input
              id="character"
              type="text"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              placeholder="Pl. egy félénk robot"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
          <div>
            <label htmlFor="setting" className="block text-sm font-medium text-slate-700 mb-1">Helyszín</label>
            <input
              id="setting"
              type="text"
              value={setting}
              onChange={(e) => setSetting(e.target.value)}
              placeholder="Pl. egy lebegő város a fellegekben"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>
        </div>
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors"
        >
          {isLoading ? 'Írás...' : 'Történet indítása'}
        </button>
        {error && <p className="text-red-600 bg-red-100 p-3 rounded-lg text-center">{error}</p>}
        {isLoading && <LoadingSpinner message="A kaland hamarosan kezdődik..." />}
        {story && (
          <div className="mt-4 p-4 bg-slate-50 border-l-4 border-indigo-500 rounded-r-lg">
            <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">{story}</p>
          </div>
        )}
      </div>
    </InteractiveExample>
  );
};

export default StoryStarter;
