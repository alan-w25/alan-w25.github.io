import React from 'react'
import Header from '@/components/Header'
import PageGrid from '@/components/PageGrid'
import PageFooter from '@/components/PageFooter'

import kitchenPantry from '../../public/images/project_header/pantry-tracker.png';
import chineseMnist from '../../public/images/project_header/chinese-mnist-crop.png';
import langtrain from '../../public/images/project_header/langtrain.jpg';
import {ProjectCardProps} from '@/components/ProjectCard';

export const codeProjects: ProjectCardProps[] = [
  {
    title:"LangTrain App", 
    description:"A mobile app that leverages AI to customize mandarin learning", 
    imgSrc:langtrain, 
    technologies:["React Native, Firebase, OpenAI API"],
    pageLink:"/code"
  },
  {
    title:"Kitchen Pantry App",
    description:"A web app that helps users keep track of their pantry items",
    imgSrc:kitchenPantry,
    technologies:["Next.js, MaterialUI, Firebase"],
    pageLink:"/code/kitchen-pantry"
  }, 
  {
    title:"Chinese MNIST Teacher",
    description:"A web app that teaches you how to read, write, and pronounce Chinese digits",
    imgSrc:chineseMnist,
    technologies:["Next.js, TailwindCSS, FastAPI, Pytorch"],
    pageLink:"/code/chinese-mnist"
  }
]

export default function CodePage() {

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
      </div>
      <div className="w-full mt-24 flex items-center mx-auto container justify-center">
        <PageGrid projects = {codeProjects}/>
      </div>
      
      <PageFooter />
    </main>
  )
}
