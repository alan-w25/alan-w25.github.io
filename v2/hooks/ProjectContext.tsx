import React, {createContext, useContext, ReactNode} from 'react'; 
import { ProjectCardProps } from '@/components/ProjectCard';
import { codeProjects } from '@/app/code/codeProjectsData';
import { dataProjects } from '@/app/data/dataProjectsData';

interface ProjectContextProps {
    getProjects: (type:string) => ProjectCardProps[]; 
}

const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

const ProjectProvider = ({children}: {children:ReactNode}) =>{
    const getProjects = (type:string) =>{
        if (type === 'code'){
            return codeProjects
        } else if (type === 'data') {
            return dataProjects;
        }
        return [];
    }
    return (
        <ProjectContext.Provider value={{getProjects}}>
            {children}
        </ProjectContext.Provider>
    )
}

const useProjects = () => {
    const context = useContext(ProjectContext);
    if (!context) {
      throw new Error('useProjects must be used within a ProjectProvider');
    }
    return context;
  };
  
export { ProjectProvider, useProjects };
  