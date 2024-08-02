import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Currently() {
  return (
    <section id="currently" className="mt-20 container mx-auto w-5/6 items-center flex">
        <div id="currently-container" className="flex container flex-col w-full">
          <h1 className="text-secondary text-2xl font-bold text-center" >a little about me</h1>
          <div id="currently-headshot" className='flex space-x-20 w-full'>
          <Image 
            src="/images/headshot.jpg"
            alt="Headshot"
            width={300}
            height={300} 
            className="rounded-full"
          />

          <div id="currently-information" className="mr-40">
            
            <ul className="mt-8 list-disc text-md">
              <li>
                <p>
                  currently studying at the University of Pennsylvania, pursuing my M.S.E in <span> </span> 
                  <Link className="text-secondary hover:underline" href="https://dats.seas.upenn.edu/">Data Science</Link>
                </p>
                 </li>  
              <li className="mt-8">
                <p>
                  a Research Assistant at the <Link href="https://ai-analytics.wharton.upenn.edu/">Wharton Business School</Link>, researching multi-modal data applications in marketing under professors <span> </span> 
                  <Link className="text-secondary hover:underline" href="https://marketing.wharton.upenn.edu/profile/riyengar/">Raghu Iyengar</Link> and <span> </span><Link className="text-secondary hover:underline" href="https://marketing.wharton.upenn.edu/profile/ebradlow/">Eric Bradlow</Link>
                </p>
              </li>
              <li className="mt-8">
                <p>
                  interested in data-driven software development to build innovative solutions at the intersection of machine learning, data science, and software engineering, with the primary goal of helping others
                </p>
              </li>
            </ul>
            <Link href="/about-me" passhref="true">
              <button className="w-48 h-16 border-2 border-black text-black text-xl px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-black mt-16 hover:text-white">Learn more</button>
            </Link>
            
          </div>
          
        </div>

        </div>
        
        
      </section>
  )
}
