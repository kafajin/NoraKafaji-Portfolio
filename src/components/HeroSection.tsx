import React from "react";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white">
              NK
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Nora Kafaji
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Computer Science Student & Aspiring Software Developer
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
          Passionate computer science student with 2 years of experience in
          full-stack development. Currently seeking internships and trainee
          programs to advance my career in tech.
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "Java",
            "Python",
            "JavaScript",
            "React",
            "Node.js",
            "SQL",
            "Full-Stack Development",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="/Nora_Kafaji.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>

          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/nora-kafaji-43b646267"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Github className="w-6 h-6 text-gray-300" />
            </a>
            <a
              href="mailto:kafajin@gmail.com"
              className="p-4 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mail className="w-6 h-6 text-green-400" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-white hover:text-blue-400 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
