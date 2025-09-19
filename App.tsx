
import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import PoemGenerator from './components/PoemGenerator';
import ImageGenerator from './components/ImageGenerator';
import StoryStarter from './components/StoryStarter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <Introduction />
        <section className="mt-12 md:mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
            Interaktív Példák
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <PoemGenerator />
            <ImageGenerator />
            <StoryStarter />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
