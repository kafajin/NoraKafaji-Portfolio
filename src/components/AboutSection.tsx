import React from "react";
import {
  User,
  Target,
  BookOpen,
  Code,
  Users,
  Lightbulb,
  GraduationCap,
  Award,
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            I'm a dedicated Computer Science student with two years of
            experience and a strong passion for programming. With 120 ECTS
            credits completed and several practical projects, I'm ready to take
            the next step into the tech world through internships and trainee
            programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
            <GraduationCap className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <p className="text-gray-300">
              Computer Science student with completed courses in object-oriented
              programming, web development, algorithms and data structures.
              Strong theoretical foundation combined with practical experience.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
            <Code className="w-12 h-12 text-green-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Technical Skills
            </h3>
            <p className="text-gray-300">
              Experienced in <strong>Java</strong>, <strong>Python</strong>,{" "}
              <strong>JavaScript</strong>,<strong>React</strong>,{" "}
              <strong>Node.js</strong>, <strong>HTML/CSS</strong>,
              <strong>SQL</strong>, and <strong>algorithms</strong>. Both
              frontend and backend development.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
            <Users className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Teamwork</h3>
            <p className="text-gray-300">
              Experience with agile methodologies through group projects like{" "}
              <strong>Goal Digger</strong> and <strong>RideBuddy</strong>.
              Comfortable with Scrum, collaboration, and taking responsibility
              in teams.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
            <Target className="w-12 h-12 text-red-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Career Goals</h3>
            <p className="text-gray-300">
              Seeking <strong>internships</strong> and{" "}
              <strong>trainee programs</strong> where I can apply my knowledge,
              learn from experienced developers, and contribute to innovative
              projects in tech.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
            <Lightbulb className="w-12 h-12 text-yellow-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Project Experience
            </h3>
            <p className="text-gray-300">
              Developed several applications including games, receipt scanner,
              football statistics, and this portfolio. Both personal projects
              and <strong>full-stack development</strong> in groups.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
            <Award className="w-12 h-12 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Future Focus</h3>
            <p className="text-gray-300">
              Final year focuses on <strong>AI/Machine Learning</strong> and{" "}
              <strong>Mobile Development</strong>. Passionate about combining
              technical innovation with practical solutions.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Why Choose Me?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-3">
                Technical Competence
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>• 120 ECTS credits completed </li>
                <li>• Practical experience in full-stack development</li>
                <li>• Strong foundation in object-oriented programming</li>
                <li>• Advanced level algorithms and data structures</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-300 mb-3">
                Personal Qualities
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Driven and results-focused</li>
                <li>• Quick to learn new technologies</li>
                <li>• Experienced in both independent and group work</li>
                <li>• Passion for problem-solving and innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
