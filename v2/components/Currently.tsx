"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from './FadeInSection';



export default function Currently() {

  return (
    <section id="currently" className="mt-24 container mx-auto w-5/6 flex md:flex-row flex-col">
        <div id="currently-container" className="flex flex-col md:flex-row container w-full">
          
            <div id="currently-headshot" className='w-full'>
            <FadeInSection fadeDuration={300} slideDuration={400} distance="5vh">
              <Image 
                src="/images/headshot.jpg"
                alt="Headshot"
                width={300}
                height={300} 
                className="rounded-full"
              />
              </FadeInSection>
            </div> 
          

          <div id="currently-information" className="mt-8 md:mt-0">
            <FadeInSection fadeDuration={300} slideDuration={400} distance="5vh">
              <h1 className="text-secondary text-xl md:text-2xl font-semibold" >a little about me</h1>
            </FadeInSection>
            <ul className="mt-8 list-disc text-md">
              <FadeInSection fadeDuration={500} slideDuration={500} distance="0">
                <li>
                  <p>
                    currently studying at the University of Pennsylvania, pursuing a master&apos;s degree in <span> </span> 
                    <Link className="text-secondary hover:underline" href="https://dats.seas.upenn.edu/">Data Science</Link>
                  </p>
                </li>  
              </FadeInSection>
              <FadeInSection fadeDuration={500} slideDuration={500} distance="0">
                <li className="mt-8">
                  <p>
                    a Research Assistant at the <Link className="text-secondary hover:underline" href="https://ai-analytics.wharton.upenn.edu/">Wharton School of Business</Link>, working on analytics project with Wharton partners such as Penn Sports Analytics and Wharton Analytics Fellows.
                  </p>
                </li>
              </FadeInSection>
              <FadeInSection fadeDuration={500} slideDuration={500} distance="0">
                <li className="mt-8">
                  <p>
                    interested in data-driven software development to build innovative solutions at the intersection of machine learning, data science, and software engineering, with the primary goal of helping others
                  </p>
                </li>
              </FadeInSection>
            </ul>
            <FadeInSection fadeDuration={500} slideDuration={500} distance="5vh">
              <Link href="/about-me" passHref>
                <button className="w-48 h-16 border-2 border-black text-black text-xl px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-black mt-16 hover:text-white">Learn more</button>
              </Link>
            </FadeInSection>
            
            
          </div>
          
        </div>
      </section>
  )
}
