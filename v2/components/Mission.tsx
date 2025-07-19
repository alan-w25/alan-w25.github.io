"use client";
import React from 'react'; 
import Image from 'next/image';
import CustomIcon from './CustomIcon';
import { faLinkedinIn, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import FadeInSection from './FadeInSection';

export default function MissionStatement() {

    return (
        <section id="mission-section" className="md:mt-24 container mx-auto w-10/12 items-center flex">
          <div id="mission-container" className="flex md:flex-row flex-col-reverse w-full container md:space-y-0 md:space-x-10">
            <div id="mission-statement-container" className="flex flex-col w-full">
              <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
                <div id="mission-words-container" className="flex flex-col w-full">
                  <h1 className="text-secondary text-5xl font-bold">Hello, my name is Alan</h1> 
                    <br/>
                    <ul>
                      <li>
                        <p className="text-xl">An <span className="text-xl font-semibold text-secondary">aspiring data scientist</span>, with experience working with data under all different contexts.</p>
                      </li>
                      <li className="mt-4">
                        <p className="text-xl">I have worked in marketing, healthcare, e-commerce, and human-computer interaction, of which my primary goal has always been to<span className="text-secondary text-xl font-semibold"> serve others with the solutions that I develop</span></p>
                      </li>
                    </ul>
                </div> 
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
                    <a target="_blank" href="https://www.github.com/alan-w25" className="ml-4">
                      <CustomIcon name={faGithubSquare} color="text-black" scale="2x" />
                    </a>
                  </div>
              </div>
              </FadeInSection>
            </div>
           

            {/*<div id="mission-img" className="mb-10 md:mr-20 md:w-1/2 w-full">
              <FadeInSection
                fadeDuration={300}
                slideDuration={400}
                distance="5vh"
              >
              
              <Image 
                src="/mission-image.jpg"
                alt="Mission Image"
                width={800}
                height={800}
                />
              </FadeInSection>
            </div>*/}
          </div>
      </section>
    )
}


