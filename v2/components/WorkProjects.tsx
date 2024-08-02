import React from 'react'
import ProjectCard from './ProjectCard';

export default function WorkProjects() {
  return (
    <section id="work-projects" className="w-full container mx-auto flex mt-20 justify-center">
        <div id="work-projects-container" className="container w-full flex flex-col items-center">
            <h1 className="text-3xl text-secondary font-semibold">Please take a look at some of my projects below</h1>
            <div id="coding-projects-home-container" className="w-full mx-auto flex flex-col mt-10">
                <div id="coding-projects-home-header" className="container w-full mx-auto flex flex-row justify-between">
                    <h2 id="coding-project-header" className="text-2xl font-semibold text-secondary">Coding Projects</h2>
                    <button className="border-2 border-secondary text-2xl text-semibold p-2">View All</button>
                </div>
                
                <div id="coding-projects-card" className="flex flex-row justify-between mt-10">
                    <ProjectCard 
                        title="Project 1"
                        description="This is a project description"
                        imgSrc="/images/work/project-work.jpg"
                        technologies={["Python", "React.js", "Node.js"]}
                        pageLink="#"
                    />

                    <ProjectCard 
                        title="Project 1"
                        description="This is a project description"
                        imgSrc="/images/work/project-work.jpg"
                        technologies={["Python", "React.js", "Node.js"]}
                        pageLink="#"
                    />

                    <ProjectCard 
                        title="Project 1"
                        description="This is a project description"
                        imgSrc="/images/work/project-work.jpg"
                        technologies={["Python", "React.js", "Node.js"]}
                        pageLink="#"
                    />

                </div>
                
            </div>
            <div id="data-projects-home-container" className="w-full mx-auto flex flex-col mt-10">
                <div id="data-projects-home-header" className="container w-full mx-auto flex flex-row justify-between">
                <h2 id="data-project-header" className="text-2xl font-semibold text-secondary">Data Projects</h2>
                <button className="border-2 border-secondary text-2xl text-semibold p-2">View All</button>
                </div>
                
                <div id="coding-projects-card" className="flex flex-row justify-between mt-10">
                    <ProjectCard 
                        title="Project 1"
                        description="This is a project description"
                        imgSrc="/images/work/project-work.jpg"
                        technologies={["Python", "React.js", "Node.js"]}
                        pageLink="#"
                    />

                    <ProjectCard 
                        title="Project 1"
                        description="This is a project description"
                        imgSrc="/images/work/project-work.jpg"
                        technologies={["Python", "React.js", "Node.js"]}
                        pageLink="#"
                    />

                    <ProjectCard 
                        title="Project 1"
                        description="This is a project description"
                        imgSrc="/images/work/project-work.jpg"
                        technologies={["Python", "React.js", "Node.js"]}
                        pageLink="#"
                    />

                </div>
                
            </div>
        </div>
    </section>
  )
}
