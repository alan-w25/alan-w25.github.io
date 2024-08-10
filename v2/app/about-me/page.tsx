import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'; 
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import AboutMe from '../../public/images/about-me.jpg';
import CustomIcon from '@/components/CustomIcon';
import {faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

export default function AboutPage() {
  return (
    <main>
      <Header currentUnderline='aboutme' />
      <div className="flex w-full flex-col md:flex-row container md:w-5/6 mx-auto md:mt-20 mt-4 flex-1 items-center">
        <div id="about-image-container" className="w-5/6 md:w-3/5">
          <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
            <Image 
            src= {AboutMe}
            alt="Alan Wu"
            className="rounded-3xl object-cover"
            />
          </FadeInSection>
        </div>
        
        <div id="about-words-container" className="mt-8 md:mt-0 md:ml-24 container mx-auto text-secondary flex flex-col justify-left flex-1 ">
        <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
          <h1 className="text-3xl font-semibold">About Me</h1>
          </FadeInSection>

          <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
            <p className="mt-10 text-black text-sm ">
              Hello! I&apos;m Alan and I am a wannabe software engineering making his way to break into the tech industry. I&apos;m a NJ native and a recent graduate from 
              Rutgers University with a B.S. in Computer Science 
            </p>
            </FadeInSection>

          <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
            <p className="mt-4 text-black text-sm">
              I&apos;m currently pursuing my M.S.E in Data Science at the University of Pennsylvania, where I hope to dive dive deeper into data-driven solutions and build a greater, more diverse skillset so I that I can build stronger, more impactful projects.
            </p>
          </FadeInSection>

          <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
          <p className="mt-4 text-black text-sm">
            What inspires me is the ability to create and build things that can help others. I love to learn and I love to build, and I hope to use my skills to make a positive impact on the world. 
          </p>
          </FadeInSection>
          
          <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
          <p className="mt-4 text-black text-sm">
            Currently, I am hoping to do a deep dive into machine learning systems and data-based software engineering so that I can empower my work from a different perspective. 
          </p>
          </FadeInSection>

          <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
          <p className="mt-4 text-black text-sm">
            While I am not working, you can find me trying to become a professional home cook, playing ultimate frisbee, or reading a new book! 
          </p> 
          </FadeInSection>

          <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
            <div id="mission-buttons-container" className="flex flex-col items-left p-4 mt-8 w-full space-y-4 md:space-y-0 md:flex-row md:items-center" >
                    <Link target="_blank" href="/docs/Alan_Wu_resume.pdf" passHref>
                      <button className="w-48 h-16 border-2 border-black text-black text-xl px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-black hover:text-white">Resume</button>
                    </Link>
                    

                    <div id="brand-icon-div" className="flex flex-row">
                      <a target="_blank" href="mailto:alan.lw25@gmail.com" className="md:ml-20">
                        <CustomIcon name={faEnvelope} color="text-black" scale="2x" />
                      </a>
                      <a target="_blank" href="https://www.linkedin.com/in/alanlwu" className="ml-4">
                        <CustomIcon name={faLinkedinIn} color="text-black" scale="2x" />
                      </a>
                      <a target="_blank" className="ml-4">
                        <CustomIcon name={faGithubSquare} color="text-black" scale="2x" />
                      </a>
                    </div>
              </div>
          </FadeInSection>
          

          

          



          


        </div>

      </div>
      <Footer />
    </main>
  )
}
