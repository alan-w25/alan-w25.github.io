"use client";
import React from 'react'
import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Project {
    imgSrc: StaticImport | string; // URL or path to the image
    description: string; // A short description of the project
    title: string; // Title of the project
    technologies: string[]; // Array of technologies used
  }
  
interface ProjectProps {
    projects: Project[]; // Array of Project objects
    containerStyles?: string;
}

export default function PageGrid({projects, containerStyles}:ProjectProps) {
  return (
    <div className={`grid grid-cols-1 ${containerStyles} gap-x-10 gap-y-24 container w-full mx-auto`}>
      {projects.map((project, index) => (
        <FadeInSection 
            key={index} 
            fadeDuration={300 + index * 50} 
            slideDuration={400 + index * 50} 
            distance="5vh"
            >
            <ProjectCard 
                key={index}
                imgSrc={project.imgSrc}
                description={project.description}
                title={project.title}
                technologies={project.technologies}
                pageLink='#'
                centered
            />
        </FadeInSection>
      ))}
    </div>
  )
}
