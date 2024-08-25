import React from 'react'
import Header from '@/components/Header'
import PageFooter from '@/components/PageFooter'
import {ProjectCardProps} from '@/components/ProjectCard';
import PageGrid from '@/components/PageGrid';

//images 

import onlineRetail from '../../public/images/project_header/online_retail.png';
import heartFailure from '../../public/images/project_header/heart_failure.png';
import delfi from '../../public/images/project_header/delfi-resize.png';

export const dataProjects: ProjectCardProps[] = [
  {
    title:"Survival Analysis of Lung Cancer Data",
    description:"Analysis of a novel dna sequencing dataset to predict lung cancer survival",
    imgSrc:delfi,
    technologies:["Python", "Sksurv", "Matplotlib"],
    pageLink:"#"
  }, 
  {
    title:"Online Retail Analysis",
    description:"Modeled the unit price of items based on the quantity of items purchased.",
    imgSrc:onlineRetail,
    technologies:["R, ggplot2, dplyr, stanglm"],
    pageLink:"#"
  }, 
  {
    title:"Bayesian Clinical Heart Failure Detection",
    description:"Modeled bayesian regression models to predict time till death and logistic regression to predict death event status.",
    imgSrc:heartFailure,
    technologies:["R, ggplot2, dplyr, stanglm"],
    pageLink:"#"
  }
]

export default function DataPage() {
  return (
    <main>
      <Header currentUnderline="data" />
      <div id="data-project-description-header" className="flex w-5/6 flex-col mx-auto mt-20">
        <h1 className="text-3xl font-bold text-black">Data Projects</h1>
        <p className="mt-8 text-md text-black">
          I love data and I think it&apos;s going to be the future. Whether it is exploring insights from large scale data, or model building to solve a prediction task, I 
          love to solve problems with unique data across diverse industries. Currently, I am 
          working on projects that incorporate large scale data analysis. In the past, I&apos;ve explored what it&apos;s like to work with different types of data in class projects and research.  <br /><br />

          Please check out some of my data projects below!
        </p>
      </div>
      <div className="w-full mt-24 flex items-center mx-auto container justify-center">
        <PageGrid projects = {dataProjects}/>
      </div>
      <PageFooter />
    </main>
  )
}
