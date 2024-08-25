import onlineRetail from '../../public/images/project_header/online_retail.png';
import heartFailure from '../../public/images/project_header/heart_failure.png';
import delfi from '../../public/images/project_header/delfi-resize.png';
import {ProjectCardProps} from '@/components/ProjectCard';


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
