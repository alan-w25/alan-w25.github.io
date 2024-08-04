import React from 'react';
import Image from 'next/image';
import MissionStatement from '@/components/Mission';
import Currently from '@/components/Currently';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import WorkProjects from '@/components/WorkProjects';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header currentUnderline="home" />
      <MissionStatement />
      <Currently />
      <Skills />
      <Work />
      <WorkProjects />
      <Footer />
    </main>
  );
}
