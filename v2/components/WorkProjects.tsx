import React from 'react'
import ProjectCard from './ProjectCard';
import Link from 'next/link';

export default function WorkProjects() {
  return (
    <section id="work-projects" className="w-5/6 container mx-auto flex mt-24 justify-center">
        <div id="work-projects-container" className="container w-full flex flex-col items-center">
            <h1 className="text-2xl text-secondary font-semibold">Please take a look at some of my projects below</h1>
            <div id="coding-projects-home-container" className="w-full mx-auto flex flex-col mt-24">
                <div id="coding-projects-home-header" className="container w-full mx-auto flex flex-row justify-between">
                    <h2 id="coding-project-header" className="text-xl font-semibold text-black">Coding Projects</h2>
                    <Link href="/code">
                        <button className="w-36 
                        h-12 border-2 
                        border-black 
                        text-black 
                        text-lg 
                        px-4 
                        py-2 
                        rounded-lg 
                        transition-colors duration-300 hover:bg-black hover:text-white">
                            View All
                        </button>
                    </Link>
                </div>
                
                <div id="coding-projects-card" className="flex flex-row space-x-10 justify-center mt-4">
                    <ProjectCard 
                        title="Kitchen Pantry App"
                        description="A web app that helps users keep track of their pantry items"
                        imgSrc="/images/project_header/pantry-tracker.png"
                        technologies={["Next.js, MaterialUI, Firebase"]}
                        pageLink="#"
                    />

                    <ProjectCard 
                        title="Chinese MNIST Teacher"
                        description="A web app that teaches you how to read, write, and pronounce Chinese digits"
                        imgSrc="/images/project_header/chinese-mnist-crop.png"
                        technologies={["Next.js, TailwindCSS, FastAPI, Pytorch"]}
                        pageLink="#"
                    />

                </div>
                
            </div>
            <div id="data-projects-home-container" className="w-full mx-auto flex flex-col mt-24">
                <div id="data-projects-home-header" className="container w-full mx-auto flex flex-row justify-between">
                    <h2 id="data-project-header" className="text-xl font-semibold text-black">Data Projects</h2>
                    <Link href="/data">
                        <button className="w-36 
                        h-12 border-2 
                        border-black 
                        text-black 
                        text-lg 
                        px-4 
                        py-2 
                        rounded-lg 
                        transition-colors duration-300 hover:bg-black hover:text-white">
                            View All
                        </button>
                    </Link>
                    
                </div>
                
                <div id="data-projects-card" className="flex flex-row space-x-10 mt-10">
                    <ProjectCard 
                        title="Survival Analysis of Lung Cancer Data"
                        description="Analysis of a novel dna sequencing dataset to predict lung cancer survival"
                        imgSrc="/images/project_header/delfi-resize.png"
                        technologies={["Python", "Sksurv", "Matplotlib"]}
                        pageLink="#"
                    />

                    <ProjectCard 
                        title="Online Retail Analysis"
                        description="Modeled the unit price of items based on the quantity of items purchased."
                        imgSrc="/images/project_header/online_retail.png"
                        technologies={["R, ggplot2, dplyr, stanglm"]}
                        pageLink="#"
                    />
                    <div className="hidden md:block">
                        <ProjectCard 
                            title="Bayesian Clinical Heart Failure Detection"
                            description="Modeled bayesian regression models to predict time till death and logistic regression to predict death event status."
                            imgSrc="/images/project_header/heart_failure.png"
                            technologies={["R, ggplot2, dplyr, stanglm"]}
                            pageLink="#"
                        />
                    </div>
                    

                </div>
                
            </div>
        </div>
    </section>
  )
}
