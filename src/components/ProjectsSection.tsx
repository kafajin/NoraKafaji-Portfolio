import React from "react";
import {
  Code,
  Users,
  Smartphone,
  Calculator,
  Receipt,
  Trophy,
  ExternalLink,
  Github,
} from "lucide-react";

export const ProjectsSection = () => {
  const groupProjects = [
    {
      title: "Goal Digger",
      description:
        "A comprehensive application developed during the Agile Web Development course. Built using agile methodologies with focus on user experience and iterative development.",
      image: "/lovable-uploads/placeholder-project.jpg",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "CSS"],
      status: "Completed",
      type: "Group Project",
      links: {
        github: "#",
        demo: "#",
      },
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "RideBuddy",
      description:
        "Full-stack ride-sharing application where users can create trips, join existing rides, and manage bookings as both drivers and passengers. Complete user management system with real-time updates.",
      image: "/lovable-uploads/placeholder-project.jpg",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
      status: "Completed",
      type: "Group Project",
      links: {
        github: "#",
        demo: "#",
      },
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const personalProjects = [
    {
      title: "Receipt Scanner",
      description:
        "Mobile application for scanning receipts using OCR technology, with manual entry option. Features expense tracking and categorization for personal finance management.",
      image: "/lovable-uploads/placeholder-project.jpg",
      technologies: ["React Native", "OCR API", "SQLite", "JavaScript"],
      status: "In Development",
      type: "Personal Project",
      links: {
        github: "#",
        demo: "#",
      },
      icon: <Receipt className="w-6 h-6" />,
    },
    {
      title: "Football Statistics App",
      description:
        "Comprehensive football statistics application tracking player performance, match results, and team analytics. Features data visualization and statistical analysis.",
      image: "/lovable-uploads/placeholder-project.jpg",
      technologies: ["Python", "JavaScript", "Chart.js", "SQLite"],
      status: "Completed",
      type: "Personal Project",
      links: {
        github: "#",
        demo: "#",
      },
      icon: <Calculator className="w-6 h-6" />,
    },
    {
      title: "Game Collection",
      description:
        "Collection of various games developed to practice programming concepts and game development fundamentals. Includes puzzle games and interactive applications.",
      image: "/lovable-uploads/placeholder-project.jpg",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS", "Python"],
      status: "Multiple Completed",
      type: "Personal Projects",
      links: {
        github: "#",
        demo: "#",
      },
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Portfolio Website",
      description:
        "This responsive portfolio website showcasing my projects, skills, and academic journey. Built with modern web technologies and responsive design principles.",
      image: "/lovable-uploads/placeholder-project.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "Completed",
      type: "Personal Project",
      links: {
        github: "#",
        demo: "#",
      },
      icon: <Smartphone className="w-6 h-6" />,
    },
  ];

  const allProjects = [...groupProjects, ...personalProjects];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
          <p className="text-gray-300 mb-4">
            I’ve completed four personal projects and enjoy working on
            smaller apps, tools, and games to sharpen my skills.
          </p>
          <p className="text-gray-300 mb-4">
            Some projects are finished, others still in progress — I love
            exploring new ideas and technologies.
          </p>

          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>{groupProjects.length} Group Projects</span>
            <span>•</span>
            <span>{personalProjects.length} Personal Projects</span>
            <span>•</span>
            <span>Full-Stack Development</span>
          </div>
        </div>

        {/* Group Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Group Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {groupProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-50">
                    {project.icon}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {project.type}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-300 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded text-sm border border-purple-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.links.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.links.demo}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-50">
                    {project.icon}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                      {project.type}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        project.status === "Completed" ||
                        project.status === "Multiple Completed"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-300 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-sm border border-blue-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.links.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.links.demo}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">
              {allProjects.length}
            </div>
            <div className="text-gray-300">Total Projects</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">8+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-gray-300">Group Projects</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Full-Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
};
