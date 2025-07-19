import React from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Download } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Me
          </h2>
          <p className="text-xl text-gray-300">
            Interested in offering an internship or trainee position? Let's get
            in touch!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

            <div className="space-y-4">
              <a
                href="mailto:nora.kafaji@example.com"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">kafajin@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+46701234567"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <Phone className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+46 739916361</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nora-kafaji-43b646267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <p className="text-gray-300">nora-kafaji-43b646267</p>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <p className="text-gray-300">github.com/norakafaji</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                <MapPin className="w-6 h-6 text-red-400" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Stockholm/Malmö, Sweden</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Next Steps</h3>

            <div className="space-y-6">
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-400/20">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">
                  Available for
                </h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Available for internships now through Summer 2026</li>
                  <li>• Trainee programs</li>
                  <li>• Part-time work during studies</li>
                  <li>• Full-time work from Spring 2026</li>
                </ul>
              </div>

              <a
                href="/Nora_Kafaji.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>

              <div className="text-center">
                <p className="text-gray-300 text-sm mb-4">
                  Follow my development journey
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/nora-kafaji-43b646267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-500" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
