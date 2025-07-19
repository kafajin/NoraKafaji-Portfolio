
import React from 'react';
import { BookOpen, Calendar, Target, Brain, Smartphone, BarChart3, GraduationCap, FileText } from 'lucide-react';

export const FutureCoursesSection = () => {
  const yearThreeCourses = [
    {
      title: "Machine Learning",
      description: "Fundamental and advanced techniques in AI and machine learning",
      semester: "Fall 2025",
      credits: "7.5 ECTS",
      skills: ["Python", "Scikit-learn", "TensorFlow", "Data Science", "AI"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Research Methodology in Computer Science",
      description: "Scientific methods and research processes in computer science",
      semester: "Fall 2025", 
      credits: "7.5 ECTS",
      skills: ["Research Methods", "Statistics", "Scientific Writing", "Literature Review"],
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Mobile Application Development",
      description: "Creating mobile applications for different platforms",
      semester: "Spring 2026",
      credits: "7.5 ECTS",
      skills: ["React Native", "Flutter", "Mobile UI/UX", "App Store Deployment"],
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Big Data Analytics",
      description: "Big Data techniques and tools for large-scale data analysis",
      semester: "Spring 2026",
      credits: "7.5 ECTS", 
      skills: ["Big Data", "Apache Spark", "Hadoop", "Data Mining", "Visualization"],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Software Engineering",
      description: "Large-scale software development with focus on architecture and project management",
      semester: "Spring 2026",
      credits: "15 ECTS",
      skills: ["System Architecture", "Project Management", "DevOps", "Quality Assurance", "Documentation"],
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Bachelor's Thesis in Computer Science",
      description: "Independent research and development project in chosen specialization area",
      semester: "Spring 2026",
      credits: "15 ECTS",
      skills: ["Research", "Project Management", "Technical Reporting", "Presentation"],
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="future" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Future Studies - Year 3
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Final year focuses on advanced topics in AI, mobile development, and bachelor's thesis
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>60 ECTS total</span>
            <span>•</span>
            <span>6 courses</span>
            <span>•</span>
            <span>Graduation Spring 2026</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {yearThreeCourses.map((course, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-bl-full"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-400">
                  {course.icon}
                </div>
                <div>
                  <span className="text-sm text-gray-400">{course.semester}</span>
                  <span className="text-sm text-gray-400 ml-2">• {course.credits}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
              <p className="text-gray-300 mb-4">{course.description}</p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-blue-300">Will learn:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-sm border border-blue-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Specialization</h3>
            <p className="text-gray-300 mb-4">
              During the third year, I focus on deepening my knowledge in AI/machine learning and 
              mobile application development - two areas I'm passionate about and see as future technology.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-blue-400 font-semibold">AI & ML</div>
                <div className="text-gray-400">15 ECTS focus</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-green-400 font-semibold">Mobile Dev</div>
                <div className="text-gray-400">7.5 ECTS course</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Bachelor's Thesis</h3>
            <p className="text-gray-300 mb-4">
              My thesis will focus on combining my interests in AI/ML with practical application development, 
              possibly in areas like computer vision or predictive analytics.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-yellow-400 font-semibold">Research</div>
                <div className="text-gray-400">15 ECTS project</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-purple-400 font-semibold">Innovation</div>
                <div className="text-gray-400">Own idea</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Bachelor's Degree Spring 2026</h3>
            <p className="text-gray-300 mb-6">
              After completing my studies, I will have a Bachelor's degree in Computer Science 
              with strong specialization in web development, AI/machine learning, and mobile application development.
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-blue-400 font-semibold">Total</div>
                <div className="text-gray-400">180 ECTS</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-green-400 font-semibold">Study Time</div>
                <div className="text-gray-400">3 years</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-purple-400 font-semibold">Specialization</div>
                <div className="text-gray-400">AI & Web</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-yellow-400 font-semibold">Ready for</div>
                <div className="text-gray-400">Tech Career</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
