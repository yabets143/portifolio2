
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}) => {
  return (
    <div className="card bg-tech-darker border-tech-neon/20 overflow-hidden flex flex-col h-full hover:shadow-[0_0_15px_rgba(80,250,123,0.2)] transition-all duration-300">
      {imageUrl && (
        <div className="bg-gray-800 h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-70"
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-tech-light">{title}</h3>
        <p className="text-tech-light/70 mb-4 flex-grow">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-tech-neon/10 text-tech-neon text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-tech-cyan hover:text-tech-neon transition-colors"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-tech-cyan hover:text-tech-neon transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
