import React from 'react'
import Header from '@/components/Header'
import PageFooter from '@/components/PageFooter'
import PageGrid from '@/components/PageGrid';
import { dataProjects } from './dataProjectsData';
//images 

export default function DataPage() {
  return (
    <main>
      <Header currentUnderline="data" />
      <div id="data-project-description-header" className="flex w-5/6 flex-col mx-auto mt-20">
        <h1 className="text-3xl font-bold text-black">Data Projects</h1>
        <p className="mt-8 text-md text-black">
          Whether it is exploring insights from large scale data, or model building to solve a prediction task, I 
          love to solve problems with unique data across diverse industries. Currently, I am 
          working on projects that incorporate large scale data analysis. In the past, I&apos;ve explored what it&apos;s like to work with different types of data in class projects and research.  <br /><br />

          Please check out some of my data projects below!
        </p>
      </div>
      <div className="w-full mt-24 flex items-center mx-auto container justify-center">
        <PageGrid projects={dataProjects}
        containerStyles="md:grid-cols-3 justify-between"
        centered={true}
        book={false}
        />
      </div>
      <PageFooter />
    </main>
  )
}
