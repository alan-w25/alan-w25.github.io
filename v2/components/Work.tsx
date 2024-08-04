import React from 'react'
import Image from 'next/image';

export default function Work() {
  return (
    <section id="Work" className="container mx-auto flex justify-center mt-24 w-5/6">
        <div id="work-container" className="flex flex-col items-center">
            <h1 className="text-secondary font-semibold text-center text-xl md:text-2xl">where I've worked in the past</h1>
            <div id="past-work-images" className="flex md:flex-row md:flex-nowrap flex-wrap space-y-4 md:mt-20 md:space-y-0 md:space-x-4">
                {[
                { src: '/images/work/wharton.png', alt: 'Wharton' },
                { src: '/images/work/nj_cancer.png', alt: 'New Jersey Cancer' },
                { src: '/images/work/asics.png', alt: 'Asics' },
                { src: '/images/work/rutgers.png', alt: 'Rutgers' },
            ].map((image, index) => (
                <div key={index}>
                <Image src={image.src} alt={image.alt} width={300} height={300} className="max-w-full h-auto" />
                </div>
            ))}

            </div>
            <button className="w-60 h-16 border-2 border-black text-black text-xl px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-black mt-12 hover:text-white">Learn more</button>

        </div>
    </section>
  )
}



