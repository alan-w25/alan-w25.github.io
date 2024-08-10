import React from 'react'
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import FadeInSection from './FadeInSection';

import kitchenPantry from '../public/images/project_header/pantry-tracker.png';
import chineseMnist from '../public/images/project_header/chinese-mnist-crop.png';
import onlineRetail from '../public/images/project_header/online_retail.png';
import heartFailure from '../public/images/project_header/heart_failure.png';
import delfi from '../public/images/project_header/delfi-resize.png';



export default function WorkProjects() {
  return (
    <section id="work-projects" className="w-5/6 container mx-auto flex mt-24 justify-center">
        <div id="work-projects-container" className="container w-full flex flex-col items-center">
            <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
                <h1 className="text-2xl text-secondary font-semibold">Please take a look at some of my projects below</h1>
            </FadeInSection>
            <div id="coding-projects-home-container" className="w-full mx-auto flex flex-col mt-24">
                <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
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
                </FadeInSection>
                
                <div id="coding-projects-card" className="flex flex-row space-x-10 justify-center mt-4">
                    <FadeInSection fadeDuration={300} slideDuration={400} distance="5vh">
                        <ProjectCard 
                            title="Kitchen Pantry App"
                            description="A web app that helps users keep track of their pantry items"
                            imgSrc={kitchenPantry}
                            technologies={["Next.js, MaterialUI, Firebase"]}
                            pageLink="/code/kitchen-pantry"
                        />
                    </FadeInSection>
                    
                    <FadeInSection fadeDuration={350} slideDuration={450} distance="5vh">
                        <ProjectCard 
                            title="Chinese MNIST Teacher"
                            description="A web app that teaches you how to read, write, and pronounce Chinese digits"
                            imgSrc={chineseMnist}
                            technologies={["Next.js, TailwindCSS, FastAPI, Pytorch"]}
                            pageLink="/code/chinese-mnist"
                        />
                    </FadeInSection>
                </div>
                
            </div>
            <div id="data-projects-home-container" className="w-full mx-auto flex flex-col mt-24">
                <FadeInSection fadeDuration={300} slideDuration={300} distance="5vh">
                    <div id="data-projects-home-header" className="container w-full mx-auto items-center flex flex-row justify-between">
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
                </FadeInSection>
                <div id="data-projects-card" className="flex items-center justify-center flex-row space-x-10 mt-10">
                    <FadeInSection fadeDuration={300} slideDuration={400} distance="5vh">
                        <ProjectCard 
                            title="Survival Analysis of Lung Cancer Data"
                            description="Analysis of a novel dna sequencing dataset to predict lung cancer survival"
                            imgSrc={delfi}
                            technologies={["Python", "Sksurv", "Matplotlib"]}
                            pageLink="#"
                        />
                    </FadeInSection>
                    <FadeInSection fadeDuration={350} slideDuration={450} distance="5vh">
                        <ProjectCard 
                            title="Online Retail Analysis"
                            description="Modeled the unit price of items based on the quantity of items purchased."
                            imgSrc={onlineRetail}
                            technologies={["R, ggplot2, dplyr, stanglm"]}
                            pageLink="#"
                        />
                    </FadeInSection>
                    <FadeInSection fadeDuration={400} slideDuration={500} distance="5vh">
                        <div className="hidden md:block">
                            <ProjectCard 
                                title="Bayesian Clinical Heart Failure Detection"
                                description="Modeled bayesian regression models to predict time till death and logistic regression to predict death event status."
                                imgSrc={heartFailure}
                                technologies={["R, ggplot2, dplyr, stanglm"]}
                                pageLink="#"
                            />
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </div>
    </section>
  )
}
