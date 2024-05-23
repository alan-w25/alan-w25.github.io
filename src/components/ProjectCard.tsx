import Image from 'next/image';
export interface Project{
    title: string;
    description: string; 
    link: string;
    techStack: string;
    imageUrl: string;
}

const projects: Project[] = [
    {
        title:"Survival Analysis of Lung Cancer Data for Non-Invasive Cancer Detection", 
        description:"My senior capstone research project. I researched the potential of a novel DNA sequencing method called DELFI to predict lung cancer patient survival times and outcomes.",
        link:"https://github.com/alan-w25/Cancer-Capstone",
        techStack:"Python, Sci-kit Learn, Pandas, Numpy, Matplotlib, Seaborn, Skurv, Lifelines",
        imageUrl:"/delfi.png"
    }, 
    {
        title:"Online Retail Analysis", 
        description:"Modeled the unit price of items based on the quantity of items purchased. Used the K-means clustering algorithm to segment customers based on their purchasing behavior. Compared several regression methods including linear regression, decision tree regression, and ensemble methods",
        link:"https://github.com/alan-w25/Stat-Learning-Final-Project",
        techStack:"Python, Pandas, Matplotlib, Seaborn, Scikit-learn",
        imageUrl:"/online_retail.png"
    }, 
    {
        title:"Bayesian Clinical Heart Failure Prediction", 
        description:"Predicted clinical survival status of clinical heart failure patients using traditional regression methods to predict time till death. Modeled bayesian regression models to predict time till death and logistic regression to predict death event status.",
        link:"https://github.com/alan-w25/Bayesian-Final-Project",
        techStack:"R, ggplot2, dplyr, stanglm, brms",
        imageUrl:"/heart_failure_proj.png"
    }, 
]; 

export default function ProjectCard() {
    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                            <Image src={project.imageUrl} 
                            alt={project.title} 
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className='text-gray-700 mb-2'>Technologies: {project.techStack}</p>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}