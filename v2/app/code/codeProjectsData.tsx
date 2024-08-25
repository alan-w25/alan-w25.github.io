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
  