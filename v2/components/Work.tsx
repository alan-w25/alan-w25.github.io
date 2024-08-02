import React from 'react'
import Image from 'next/image';

export default function Work() {
  return (
    <section id="Work" className="container mx-auto flex justify-center mt-24">
        <div id="work-container" className="flex flex-col items-center">
            <h1 className="text-secondary font-bold text-4xl">Where I have worked in the past...</h1>
            <div id="past-work-images" className="flex flex-row mt-20">
                {[
                { src: '/images/work/wharton.png', alt: 'Wharton' },
                { src: '/images/work/nj_cancer.png', alt: 'New Jersey Cancer' },
                { src: '/images/work/asics.png', alt: 'Asics' },
                { src: '/images/work/rutgers.png', alt: 'Rutgers' },
            ].map((image, index) => (
                <div key={index} className="transform transition duration-300 hover:scale-110">
                <Image src={image.src} alt={image.alt} width={300} height={300} className="max-w-full h-auto" />
                </div>
            ))}

            </div>
            <button className="text-3xl text-secondary font-semibold border-4 border-secondary p-2 mt-10" >Learn More</button>

        </div>
    </section>
  )
}



