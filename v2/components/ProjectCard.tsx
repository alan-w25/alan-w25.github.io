import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import FadeInSection from '@/components/FadeInSection';


export interface ProjectCardProps {
    imgSrc: StaticImport | string; 
    title: string; 
    technologies: string[]; 
    description: string;
    pageLink: string;
    centered? : boolean;
}


export default function ProjectCard({imgSrc, title, technologies, description, pageLink, centered}:ProjectCardProps) {
  return (
    <FadeInSection fadeDuration={300} slideDuration={400} distance="5vh">
      <div>
        <Image 
            src= {imgSrc}
            alt={title}
            className="shadow-md object-cover"
        />
        <div className={` ${centered ? 'items-center' : ' '} flex flex-col max-w-prose md:max-w-sm`}>
          <h1 className="md:text-md text-sm font-semibold mt-2">{title}</h1>
          <h2 className="md:text-sm text-xs font-medium text-center mt-2">{technologies.join(', ')}</h2>
          <p className="md:text-sm text-xs font-regular mt-2">{description}</p>
          <Link className="hidden font-extralight text-xs md:text-sm underline" href={pageLink}>Read More</Link>

        </div>
     </div>
    </FadeInSection>
    
  )
}
