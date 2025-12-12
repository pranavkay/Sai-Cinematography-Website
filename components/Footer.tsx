import React from 'react';
import { Instagram, Youtube, Mail, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-cinema-accent/20 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl text-white mb-2">{PROFILE.name.toUpperCase()}</h2>
          <p className="text-cinema-accent text-sm tracking-widest uppercase">Cinematography</p>
        </div>

        <div className="flex items-center gap-8">
          <a href={PROFILE.socials.instagram} className="group flex flex-col items-center gap-2">
            <div className="p-3 bg-cinema-900 rounded-full text-gray-400 group-hover:text-black group-hover:bg-cinema-accent transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </div>
          </a>
          <a href={PROFILE.socials.youtube} className="group flex flex-col items-center gap-2">
            <div className="p-3 bg-cinema-900 rounded-full text-gray-400 group-hover:text-black group-hover:bg-cinema-accent transition-all duration-300">
              <Youtube className="w-5 h-5" />
            </div>
          </a>
          <a href={PROFILE.socials.linkedin} className="group flex flex-col items-center gap-2">
            <div className="p-3 bg-cinema-900 rounded-full text-gray-400 group-hover:text-black group-hover:bg-cinema-accent transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </div>
          </a>
          <a href={`mailto:${PROFILE.email}`} className="group flex flex-col items-center gap-2">
            <div className="p-3 bg-cinema-900 rounded-full text-gray-400 group-hover:text-black group-hover:bg-cinema-accent transition-all duration-300">
              <Mail className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
        <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <p>Based in {PROFILE.location}</p>
      </div>
    </footer>
  );
};
