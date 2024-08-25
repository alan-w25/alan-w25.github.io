"use client"
import React from 'react';
import Image from 'next/image';
import MissionStatement from '@/components/Mission';
import Currently from '@/components/Currently';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import WorkProjects from '@/components/WorkProjects';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BookCarousel from '@/components/BookCarousel';

// static image urls 


import { dataProjects } from '../app/data/dataProjectsData';
import {codeProjects} from '../app/code/codeProjectsData';
import {booksList} from '../app/books/bookData';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header currentUnderline="home" />
      <MissionStatement />
      <Currently />
      <Skills />
      <WorkProjects codeProjects={codeProjects} dataProjects={dataProjects}/>
      <BookCarousel books={booksList} />
      <Footer />
    </main>
  );
}
