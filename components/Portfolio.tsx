import React, { useState, useMemo } from 'react';
import { Play, Filter } from 'lucide-react';
import { PROJECTS, FILTERS } from '../constants';
import { Project } from '../types';

interface PortfolioProps {
  onVideoSelect: (videoId: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onVideoSelect }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Selected Works</h2>
          <div className="h-1 w-20 bg-cinema-accent" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 items-center">
          <Filter className="w-4 h-4 text-gray-500 mr-2 md:hidden" />
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                  activeFilter === filter
                    ? 'bg-white text-black border-white font-medium'
                    : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => onVideoSelect(project.videoId)} 
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No projects found in this category.</p>
        </div>
      )}
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [imgError, setImgError] = useState(false);

  // Fallback to high quality if maxres isn't available
  const thumbnailUrl = imgError 
    ? `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`;

  return (
    <div 
      className="group relative aspect-video bg-cinema-900 rounded-lg overflow-hidden cursor-pointer border border-white/5 hover:border-cinema-accent/30 transition-all duration-500"
      onClick={onClick}
    >
      {/* Thumbnail Image */}
      <img
        src={thumbnailUrl}
        alt={project.title}
        onError={() => setImgError(true)}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-cinema-accent/90 text-black rounded-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          {project.category}
        </span>
        <h3 className="text-white text-lg font-medium leading-tight line-clamp-2 group-hover:text-cinema-accent transition-colors">
          {project.title}
        </h3>
      </div>

      {/* Play Button Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 border border-white/20">
        <Play className="w-6 h-6 text-white fill-white ml-1" />
      </div>
    </div>
  );
};
