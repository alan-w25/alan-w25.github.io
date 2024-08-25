import React from 'react'
import Header from '@/components/Header'
import PageGrid from '@/components/PageGrid'
import PageFooter from '@/components/PageFooter'

import { codeProjects } from './codeProjectsData'


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
