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
        />
        <h1>{title}</h1>
        <h2>{technologies.join(', ')}</h2>
        <p>{description}</p>
        <Link href={pageLink}>Read More</Link>


    </div>
  )
}
