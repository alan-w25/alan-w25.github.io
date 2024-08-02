import React from 'react'
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="container mt-20 mx-auto flex items-center space-x-48 w-5/6">
    <div id="current-skills">
        <h1 className="text-secondary text-4xl font-bold" >My Technical Skills</h1>
        <ul className="mt-8 list-square text-lg">
          <li>Programming Languages: </li>  
          <li>Developer Tools: </li>
          <li>Frameworks: </li>
          <li>Data: </li>
          <li>Certifications: </li>
        </ul>
    </div>
    <div id="skill-board" className="grid grid-cols-3 gap-4">
          {[
            { src: '/mission-image.jpg', alt: 'Python' },
            { src: '/mission-image.jpg', alt: 'Java' },
            { src: '/mission-image.jpg', alt: 'JavaScript' },
            { src: '/mission-image.jpg', alt: 'SQL' },
            { src: '/mission-image.jpg', alt: 'Node.js' },
            { src: '/mission-image.jpg', alt: 'React.js' },
            { src: '/mission-image.jpg', alt: 'GitHub' },
            { src: '/mission-image.jpg', alt: 'Postman' },
            { src: '/mission-image.jpg', alt: 'VSCode' },
          ].map((image, index) => (
            <div key={index} className="transform transition duration-300 hover:scale-110">
              <Image src={image.src} alt={image.alt} width={100} height={100} className="max-w-full h-auto" />
            </div>
          ))}
    </div>
  </section>
  )
}
