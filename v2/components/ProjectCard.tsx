import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    imgSrc: string; 
    title: string; 
    technologies: string[]; 
    description: string;
    pageLink: string;
}


export default function ProjectCard({imgSrc, title, technologies, description, pageLink}:ProjectCardProps) {
  return (
    <div>
        <Image 
            src= {imgSrc}
            alt={title}
            height={400}
            width={400}
            className="shadow-md"
        />
        <div className="flex flex-col max-w-prose md:max-w-sm">
          <h1 className="md:text-md text-sm font-semibold mt-2">{title}</h1>
          <h2 className="md:text-sm text-xs font-medium text-center mt-2">{technologies.join(', ')}</h2>
          <p className="md:text-sm text-xs font-regular mt-2">{description}</p>
          <Link className="font-extralight text-xs md:text-sm underline" href={pageLink}>Read More</Link>

        </div>
    </div>
  )
}
