import React from 'react'
import Image from 'next/image';

export default function Currently() {
  return (
    <section id="currently" className="mt-20 container mx-auto w-5/6 items-center flex">
        <div id="currently-headshot" className='flex space-x-20 w-full'>
          <Image 
            src="/headshot-placeholder.jpeg"
            alt="Headshot"
            width={400}
            height={400} 
          />

          <div id="currently-information" className="mr-40">
            <h1 className="text-secondary text-4xl font-bold" >A little bit about me...</h1>
            <ul className="mt-8 list-square text-lg">
              <li>currently studying at ... </li>  
              <li>more information about my current job</li>
              <li>more information about my passions right now</li>
              <li>even more information about myself</li>
            </ul>
          </div>
        </div>
      </section>
  )
}
