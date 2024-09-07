"use client";
import React from 'react'
import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';
import { ProjectCardProps } from './ProjectCard';
  
interface ProjectProps {
    projects: ProjectCardProps[]; // Array of Project objects
    containerStyles?: string;
    centered: boolean;
    book: boolean;
}

export default function PageGrid({projects, containerStyles, centered, book}:ProjectProps) {
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
                pageLink={project.pageLink}
                centered={centered}
                book={book}
            />
        </FadeInSection>
      ))}
    </div>
  )
}
