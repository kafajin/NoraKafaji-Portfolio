
import React from 'react';
import { CheckCircle, Clock, Star, Code, Database, Globe, Calculator, Shield, Smartphone } from 'lucide-react';

export const CoursesSection = () => {
  const yearOneCourses = [
    {
      title: "Introduction to Computer Science",
      description: "Basic concepts in computer science and programming",
      status: "completed",
      grade: "G",
      skills: ["Computer Science", "Problem Solving", "Logical Thinking"],
      credits: "7.5 ECTS",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Fundamentals of Programming",
      description: "First steps in programming and algorithmic thinking",
      status: "completed", 
      grade: "G",
      skills: ["Python", "Basic Programming", "Algorithms"],
      credits: "7.5 ECTS",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Object-Oriented Programming in Java",
      description: "Deep dive into OOP concepts with Java",
      status: "completed",
      grade: "VG",
      skills: ["Java", "OOP", "Inheritance", "Polymorphism", "Encapsulation"],
      credits: "7.5 ECTS",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Discrete Mathematics",
      description: "Mathematical foundations for computer science",
      status: "completed",
      grade: "G",
      skills: ["Logic", "Set Theory", "Combinatorics"],
      credits: "7.5 ECTS",
      icon: <Calculator className="w-5 h-5" />
    },
    {
      title: "IoT (Internet of Things)",
      description: "Replaced Basic Mathematics - focus on connected devices",
      status: "completed",
      grade: "G",
      skills: ["IoT", "Sensors", "Connectivity", "Embedded Systems"],
      credits: "7.5 ECTS",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Database Technology",
      description: "Basic database design and SQL",
      status: "completed",
      grade: "G",
      skills: ["SQL", "Database Design", "Normalization"],
      credits: "6 ECTS",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Data Communication",
      description: "Network protocols and communication",
      status: "completed",
      grade: "G",
      skills: ["Networks", "Protocols", "TCP/IP"],
      credits: "7.5 ECTS",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Object-Oriented Design",
      description: "Advanced OOP and design patterns",
      status: "completed",
      grade: "VG",
      skills: ["Design Patterns", "UML", "System Design"],
      credits: "9 ECTS",
      icon: <Code className="w-5 h-5" />
    }
  ];

  const yearTwoCourses = [
    {
      title: "Operating Systems",
      description: "How operating systems work and manage resources",
      status: "completed",
      grade: "G",
      skills: ["OS", "Process Management", "Memory Management"],
      credits: "7.5 ECTS",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Sustainable Programming Methods",
      description: "Sustainable and efficient coding practices",
      status: "completed",
      grade: "G",
      skills: ["Clean Code", "Refactoring", "Testing"],
      credits: "7.5 ECTS",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Frontend Development",
      description: "Modern web development tools and frameworks",
      status: "completed",
      grade: "VG",
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
      credits: "7.5 ECTS",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Cybersecurity",
      description: "Security in IT systems and applications",
      status: "completed",
      grade: "G",
      skills: ["Cryptography", "Security", "Authentication"],
      credits: "7.5 ECTS",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Backend Development",
      description: "Server development and APIs",
      status: "completed",
      grade: "VG",
      skills: ["Node.js", "REST API", "Databases", "Authentication"],
      credits: "7.5 ECTS",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Algorithms and Data Structures",
      description: "Efficient algorithms and data structures",
      status: "completed",
      grade: "VG",
      skills: ["Algorithms", "Data Structures", "Complexity Analysis", "Sorting"],
      credits: "7.5 ECTS",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Agile Web Development",
      description: "Agile methods and fullstack development",
      status: "completed",
      grade: "VG",
      skills: ["Scrum", "Agile", "Fullstack", "Teamwork"],
      credits: "7.5 ECTS",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Mathematical Statistics",
      description: "Statistical methods for data analysis",
      status: "completed",
      grade: "G",
      skills: ["Statistics", "Data Analysis", "Probability Theory"],
      credits: "7.5 ECTS",
      icon: <Calculator className="w-5 h-5" />
    }
  ];

  const allCourses = [
    { year: "Year 1", courses: yearOneCourses },
    { year: "Year 2", courses: yearTwoCourses }
  ];

  return (
    <section id="courses" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Completed Courses
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Here are all the courses I have completed during my first two academic years
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>Year 1: 60 ECTS</span>
            <span>•</span>
            <span>Year 2: 60 ECTS</span>
            <span>•</span>
            <span>Total: 120 ECTS</span>
          </div>
        </div>

        {allCourses.map((yearData, yearIndex) => (
          <div key={yearIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              {yearData.year}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yearData.courses.map((course, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-gray-400">{course.credits}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-blue-400">
                        {course.icon}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-yellow-400">{course.grade}</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">{course.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm">{course.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Summary of First Two Years</h3>
            <p className="text-gray-300 mb-4">
              I have now completed 120 ECTS of my studies and have built a strong foundation in both theoretical 
              computer science and practical programming. Particularly strong knowledge in object-oriented 
              programming, web development, and algorithms.
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-blue-400 font-semibold">Programming</div>
                <div className="text-gray-400">Java, Python, JavaScript</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-green-400 font-semibold">Web Development</div>
                <div className="text-gray-400">HTML, CSS, React, Node.js</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-purple-400 font-semibold">Databases</div>
                <div className="text-gray-400">SQL, Database Design</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-yellow-400 font-semibold">Theoretical Foundation</div>
                <div className="text-gray-400">Algorithms, Mathematics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
