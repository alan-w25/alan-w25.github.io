import Link from 'next/link'; 
import {useProjects} from '../hooks/ProjectContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface NextPrevNavigationProps {
    projectName: string;
    type: string;
}


const NextPrevNavigation =  ({projectName, type}:NextPrevNavigationProps) => {
    const { getProjects } = useProjects();
    const projects = getProjects(type);
    const totalProjects = projects.length;
    const currentIndex = projects.findIndex(project => project.title === projectName);
    if (currentIndex < 0 || currentIndex >= totalProjects) {
        console.error('Invalid currentIndex:', currentIndex);
        return null; // Or handle error appropriately
      }

    const nextIndex = (currentIndex+1)%totalProjects; 
    const prevIndex = (currentIndex-1+totalProjects)%totalProjects;
    return (
        <div className="flex flex-row mt-20 justify-between w-5/6 items-center mx-auto">
            <div className="flex flex-row gap-x-5 items-center">
                <FontAwesomeIcon icon={faChevronLeft} />
                <Link className="text-3xl" href={projects[prevIndex].pageLink}>
                    {projects[prevIndex].title}
                </Link>
            </div>

            
            <div className="flex flex-row gap-x-5 items-center">
                <Link className="text-3xl" href={projects[nextIndex].pageLink}>
                    {projects[nextIndex].title}
                </Link>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
           
            
        </div>
    )
}

export default NextPrevNavigation