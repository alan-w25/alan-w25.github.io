import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import FadeInSection from '@/components/FadeInSection';


export interface ProjectCardProps {
    imgSrc: StaticImport | string; 
    title: string; 
    technologies?: string[]; 
    description?: string;
    pageLink: string;
    centered?: boolean;
    book?:boolean;
}


export default function ProjectCard({imgSrc, title, technologies, description, pageLink, centered, book}:ProjectCardProps) {
  return (
    <FadeInSection fadeDuration={300} slideDuration={400} distance="5vh">
      <div>
        <Link href={pageLink} passHref>
          <Image 
              src= {imgSrc}
              alt={title}
              className={` ${book ? 'rounded-xl transition hover:scale-110' : ''} shadow-md object-cover`}
          />
        </Link>
        
        <div className={` ${centered ? 'items-center' : ' '} flex flex-col max-w-prose md:max-w-sm`}>
          <h1 className="md:text-md text-sm font-semibold mt-2">{title}</h1>
          <h2 className={`${book ? 'hidden' : ''}md:text-sm text-xs font-medium mt-2`}>{technologies ? technologies.join(', ') : ''}</h2>
          <p className={` ${book ? 'hidden' : ''} md:text-sm text-xs font-regular mt-2`}>{description}</p>
          <Link className={`${book ? 'hidden' : ' '} font-extralight text-xs md:text-sm underline`} href={pageLink}>Read More</Link>
        </div>
     </div>
    </FadeInSection>
    
  )
}
