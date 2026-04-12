"use client";

import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { Project } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { EmbedModal } from "./EmbedModal";

export function Portfolio({
  projects,
  filters,
}: {
  projects: Project[];
  filters: string[];
}) {
  const defaultFilter = filters.length > 0 ? filters[0] : "All";
  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "Featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
            Selected Works
          </h2>
          <div className="h-1 w-20 bg-cinema-accent" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 items-center">
          <Filter className="w-4 h-4 text-gray-500 mr-2 md:hidden" />
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                  activeFilter === filter
                    ? "bg-white text-black border-white font-medium"
                    : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white"
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
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No projects found in this category.</p>
        </div>
      )}

      <EmbedModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
