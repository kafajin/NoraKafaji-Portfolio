
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CoursesSection } from '@/components/CoursesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { FutureCoursesSection } from '@/components/FutureCoursesSection';
import { ContactSection } from '@/components/ContactSection';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ProjectsSection />
      <FutureCoursesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
