
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Port Scanner",
      description: "A Python-based network tool that scans for open ports on a target system, identifying potential security vulnerabilities.",
      technologies: ["Python", "Networking", "Security"],
      githubUrl: "https://github.com/yabetsw",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with secure user authentication, product management, and payment processing features.",
      technologies: ["React", "ASP.NET", "SQL Server", "Authentication"],
      githubUrl: "https://github.com/yabetsw",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      title: "Football Management System",
      description: "An integrated system for managing football teams, matches, and statistics with web-based reporting features.",
      technologies: ["Java", "SQL", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/yabetsw",
    },
    {
      title: "Static Web Pages",
      description: "A collection of responsive web pages featuring modern design principles and accessibility standards.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/yabetsw",
      liveUrl: "https://github.com/yabetsw",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
  ];

  return (
    <section id="projects" className="section bg-tech-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-tech-light">Projects</h2>
        <p className="text-tech-light/80 max-w-3xl mb-8">
          Here are some of the projects I've worked on. Each project reflects my
          focus on creating secure, functional, and user-friendly solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
