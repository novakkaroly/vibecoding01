
import React, { useState } from 'react';
import InteractiveExample from './InteractiveExample';
import { generateImage } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('Egy világítótorony egy viharos éjszakán, festmény stílusban');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) {
      setError('Kérlek, adj meg egy leírást a képhez!');
      return;
    }
    setIsLoading(true);
    setError(null);
    setImageUrl('');

    try {
      const result = await generateImage(prompt);
      setImageUrl(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ismeretlen hiba történt.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  return (
    <InteractiveExample
      title="Képalkotó Varázsló"
      description="Írd le, mit szeretnél látni, és az AI megfesti neked."
      icon={<Icon />}
    >
      <div className="flex flex-col gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Pl. egy cica laptoppal a holdon, szürreális stílusban"
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          rows={2}
        />
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors"
        >
          {isLoading ? 'Alkotás...' : 'Kép generálása'}
        </button>
        {error && <p className="text-red-600 bg-red-100 p-3 rounded-lg text-center">{error}</p>}
        {isLoading && <LoadingSpinner message="A képi varázslat készül..." />}
        {imageUrl && (
          <div className="mt-4 p-2 bg-slate-100 rounded-lg border border-slate-200">
            <img src={imageUrl} alt={prompt} className="w-full h-auto rounded-md object-cover aspect-square" />
          </div>
        )}
      </div>
    </InteractiveExample>
  );
};

export default ImageGenerator;
