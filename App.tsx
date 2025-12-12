import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';
import { HERO_VIDEO_ID, PROFILE } from './constants';

const App: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenVideo = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideoId(null);
  };

  return (
    <main className="min-h-screen bg-cinema-950 text-gray-100 font-sans selection:bg-cinema-accent selection:text-black">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="text-xl font-serif font-bold tracking-widest text-white">
          SAI<span className="text-cinema-accent">VAIBHAV</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#about" className="hover:text-cinema-accent transition-colors">About</a>
          <a href="#portfolio" className="hover:text-cinema-accent transition-colors">Work</a>
          <a href="#contact" className="hover:text-cinema-accent transition-colors">Contact</a>
        </div>

        <a 
          href={`mailto:${PROFILE.email}`}
          className="px-5 py-2 text-xs font-bold tracking-widest uppercase border border-white/20 hover:border-cinema-accent hover:text-cinema-accent transition-colors rounded-sm"
        >
          Let's Talk
        </a>
      </nav>

      <Hero onPlayReel={() => handleOpenVideo(HERO_VIDEO_ID)} />
      
      <About />
      
      <Portfolio onVideoSelect={handleOpenVideo} />

      <section className="py-24 bg-cinema-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Have a vision in mind?</h2>
          <p className="text-gray-400 mb-10 text-lg font-light max-w-xl mx-auto">
            Let's collaborate to bring your story to life through the lens. 
            Open for projects in {PROFILE.location} and worldwide.
          </p>
          <a 
            href={`mailto:${PROFILE.email}`}
            className="inline-block px-10 py-4 bg-cinema-accent text-cinema-950 font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(192,160,98,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Start a Project
          </a>
        </div>
      </section>

      <Footer />

      <VideoModal 
        videoId={selectedVideoId} 
        onClose={handleCloseVideo} 
      />
    </main>
  );
};

export default App;
