"use client"
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import FadeInSection from './FadeInSection';

export default function Skills() {
  return (
    <section id="skills" className=" flex-col-reverse container mt-24 mx-auto flex items-center justify-between w-5/6 md:flex-row">
    <div id="current-skills" className="mt-8 md:mt:0">
        <h1 className="text-secondary text-xl font-semibold" >Technical Skills</h1>
        <ul className="mt-8 list-square text-md">
            <FadeInSection fadeDuration={300} slideDuration={400} distance="0">
              <li className="mt-4"> Programming Languages: <span> Python, Java, Javascript, SQL, R, HTML/CSS</span> </li>  
            </FadeInSection>
            <FadeInSection fadeDuration={300} slideDuration={400} distance="0">
              <li className="mt-4">Frameworks: React.js, Next.js, Node.js, Django, MaterialUI, TailwindCSS, Firebase</li>
            </FadeInSection>
            <FadeInSection fadeDuration={300} slideDuration={400} distance="0">
              <li className="mt-4">Developer Tools: Git, Postman, Figma, Docker, Azure CLI, Firebase, Expo CLI</li>
            </FadeInSection>
            <FadeInSection fadeDuration={300} slideDuration={400} distance="0">
            <li className="mt-4">Data: Pandas, Pytorch, Sci-kit Learn, PostgreSQL, AWS Sagemaker, H2O.ai</li>
            </FadeInSection>
            <FadeInSection fadeDuration={300} slideDuration={400} distance="0">
              <li className="mt-4">Certifications: <Link className="hover:underline" href="https://www.coursera.org/account/accomplishments/specialization/N6QEVXP2P7RQ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n">Deeplearning.AI Machine Learning Certification</Link>, 
                <Link className="hover:underline" href="https://www.coursera.org/account/accomplishments/professional-cert/6L6GFR63CX56?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof"> IBM Data Science Certification</Link></li>
            </FadeInSection>
         </ul>
    </div>
    <div id="skill-board" className="grid grid-cols-3 gap-4">
          {[
            { src: '/images/logos/python.svg', alt: 'Python' },
            { src: '/images/logos/javascript.png', alt: 'Javascript' },
            { src: '/images/logos/pytorch.jpg', alt: 'Pytorch' },
            { src: '/images/logos/react.png', alt: 'React' },
            { src: '/images/logos/firebase.png', alt: 'Firebase' },
            { src: '/images/logos/postgres.png', alt: 'PostgreSQL' },
            { src: '/images/logos/git.png', alt: 'Git' },
            { src: '/images/logos/figma.png', alt: 'Figma' },
            { src: '/images/logos/docker.png', alt: 'Docker' },
          ].map((image, index) => (
            <div key={index} className="transform transition duration-300 hover:scale-110">
              <FadeInSection fadeDuration={300} slideDuration={400} distance="5vh"> 
                <Image src={image.src} alt={image.alt} width={100} height={100} className="max-w-full h-auto" />
              </FadeInSection>
            </div>
          ))}
    </div>
  </section>
  )
}
