import React from 'react';
import Image from 'next/image';
import MissionStatement from '@/components/Mission';
import Currently from '@/components/Currently';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import WorkProjects from '@/components/WorkProjects';
import Hobbies from  '@/components/Hobbies';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MissionStatement />
      <Currently />
      <Skills />
      <Work />
      <WorkProjects />
      <Hobbies />
      <Footer />
    </main>
  );
}
