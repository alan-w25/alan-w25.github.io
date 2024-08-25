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
import norwegianWood from '../public/images/books/norwegian_wood.jpg';
import deepWork from '../public/images/books/deep_work.jpg';
import cryingHmart from '../public/images/books/crying_in_hmart.jpeg';
import neverSplitDifference from '../public/images/books/never_split_difference.jpg';
import dune from '../public/images/books/dune.jpeg';
import dance from '../public/images/books/dance.jpeg';

import kitchenPantry from '../public/images/project_header/pantry-tracker.png';
import chineseMnist from '../public/images/project_header/chinese-mnist-crop.png';
import onlineRetail from '../public/images/project_header/online_retail.png';
import heartFailure from '../public/images/project_header/heart_failure.png';
import delfi from '../public/images/project_header/delfi-resize.png';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ProjectCardProps } from '@/components/ProjectCard';
export interface Book {
  imageSrc: StaticImport;
  link: string;
  title: string;
}

export default function Home() {

  const codeProjects: ProjectCardProps[] = [
    {
      title:"Kitchen Pantry App",
      description:"A web app that helps users keep track of their pantry items",
      imgSrc:kitchenPantry,
      technologies:["Next.js, MaterialUI, Firebase"],
      pageLink:"/code/kitchen-pantry"
    }, 
    {
      title:"Chinese MNIST Teacher",
      description:"A web app that teaches you how to read, write, and pronounce Chinese digits",
      imgSrc:chineseMnist,
      technologies:["Next.js, TailwindCSS, FastAPI, Pytorch"],
      pageLink:"/code/chinese-mnist"
    }
  ]

  const dataProjects: ProjectCardProps[] = [
    {
      title:"Survival Analysis of Lung Cancer Data",
      description:"Analysis of a novel dna sequencing dataset to predict lung cancer survival",
      imgSrc:delfi,
      technologies:["Python", "Sksurv", "Matplotlib"],
      pageLink:"#"
    }, 
    {
      title:"Online Retail Analysis",
      description:"Modeled the unit price of items based on the quantity of items purchased.",
      imgSrc:onlineRetail,
      technologies:["R, ggplot2, dplyr, stanglm"],
      pageLink:"#"
    }, 
    {
      title:"Bayesian Clinical Heart Failure Detection",
      description:"Modeled bayesian regression models to predict time till death and logistic regression to predict death event status.",
      imgSrc:heartFailure,
      technologies:["R, ggplot2, dplyr, stanglm"],
      pageLink:"#"
    }
  ]

  const books: Book[] = [
    {
      imageSrc: norwegianWood, 
      link: "#",
      title: "Norwegian Woood"
    }, 
    {
      imageSrc: deepWork, 
      link: "#",
      title: "Deep Work"
    }, 
    {
      imageSrc: cryingHmart, 
      link: "#",
      title: "Crying in Hmart"
    }, 
    {
      imageSrc: neverSplitDifference, 
      link: "#",
      title: "Never Split the Difference"
    },
    {
      imageSrc: dune, 
      link: "#",
      title: "Dune"
    }, 
    {
      imageSrc: dance, 
      link: "#",
      title: "Dance Dance Dance"
    }
  ]




  return (
    <main className="min-h-screen bg-white">
      <Header currentUnderline="home" />
      <MissionStatement />
      <Currently />
      <Skills />
      <Work />
      <WorkProjects codeProjects={codeProjects} dataProjects={dataProjects}/>
      <BookCarousel books={books} />
      <Footer />
    </main>
  );
}
