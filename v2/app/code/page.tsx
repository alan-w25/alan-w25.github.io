import React from 'react'
import Header from '@/components/Header'
import PageGrid from '@/components/PageGrid'
import PageFooter from '@/components/PageFooter'

import profile from '../../public/mission-image.jpg'

export default function CodePage() {
  const projects = [
    {title:"Project 1", description: "Description of project 1 ", technologies:['bruh, bruh, burh'], imgSrc:profile}, 
    {title:"Project 2   ", description: "Description of project 2", technologies:['bruh, bruh, burh'], imgSrc:profile},
    {title:"Project 3", description: "Description of project 3 ", technologies:['bruh, bruh, burh'], imgSrc:profile},
    {title:"Project 4", description: "Description of project 4 ", technologies:['bruh, bruh, burh'], imgSrc:profile},
    {title:"Project 5", description: "Description of project 5 ", technologies:['bruh, bruh, burh'], imgSrc:profile},
    {title:"Project 6", description: "Description of project 6 ", technologies:['bruh, bruh, burh'], imgSrc:profile},
  ]

  return (
    <main>
      <Header currentUnderline='code' />

      <div id="code-project-description-header" className="flex w-5/6 flex-col mx-auto mt-20">
        <h1 className="text-3xl font-bold text-black">Code Projects</h1>
        <p className="mt-8 text-md text-black">
          I am always looking for new ways to build development skills and push out new projects with the latest technologies. Currently, I am 
          working on deploying coding projects that use machine learning systems. In the past, I&apos;ve used coding to explore my hobbies.  <br /><br />

          Please check out some of my coding projects below!
        </p>
        <p className="mt-20">Coming soon!</p>
      </div>
      <div className="hidden w-5/6 mt-36 flex items-center mx-auto container justify-center">
        <PageGrid projects = {projects}/>
      </div>
      
    </main>
  )
}
