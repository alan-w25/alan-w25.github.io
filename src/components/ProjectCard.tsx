import Image from 'next/image';
export interface Project{
    title: string;
    description: string; 
    link: string;
    techStack: string;
    imageUrl: string;
    github: string;
}

const projects: Project[] = [
    {
        title:"Survival Analysis of Lung Cancer Data for Non-Invasive Cancer Detection", 
        description:"My senior capstone research project. I researched the potential of a novel DNA sequencing method called DELFI to predict lung cancer patient survival times and outcomes.",
        github:"https://github.com/alan-w25/Cancer-Capstone",
        techStack:"Python, Sci-kit Learn, Pandas, Numpy, Matplotlib, Seaborn, Skurv, Lifelines",
        imageUrl:"/delfi.png",
        link:"/project_files/capstone_report.pdf",
    }, 
    {
        title:"Online Retail Analysis", 
        description:"Modeled the unit price of items based on the quantity of items purchased. Used the K-means clustering algorithm to segment customers based on their purchasing behavior. Compared several regression methods including linear regression, decision tree regression, and ensemble methods",
        github:"https://github.com/alan-w25/Stat-Learning-Final-Project",
        techStack:"Python, Pandas, Matplotlib, Seaborn, Scikit-learn",
        imageUrl:"/online_retail.png", 
        link:"/project_files/online_retail.pdf",
    }, 
    {
        title:"Bayesian Clinical Heart Failure Prediction", 
        description:"Predicted clinical survival status of clinical heart failure patients using traditional regression methods to predict time till death. Modeled bayesian regression models to predict time till death and logistic regression to predict death event status.",
        github:"https://github.com/alan-w25/Bayesian-Final-Project",
        techStack:"R, ggplot2, dplyr, stanglm, brms",
        imageUrl:"/heart_failure_proj.png", 
        link: "/project_files/Heart_Failure_Analysis.pdf",
    },
    {
        title:"Chinese MNIST Drawing Classification", 
        description:"Classified hand drawn Chinese digits using convolutional network. Used as a tool to teach myself how to use deep learning models in production and practice my chinese.",
        github:"https://github.com/alan-w25/chinese-mnist",
        techStack:"Python, Pytorch, Fastapi, Next.js, Docker, Tailwind.css, Azure",
        imageUrl:"/chinese-mnist.png",
        link:"https://chinese-mnist-predictor.azurewebsites.net/"
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
                                <p className='text-gray-700 mb-2'>Technologies: {project.techStack}<br/></p>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="mt-8">
                                <a href={project.link} className="text-blue-500 hover:underline mr-8">View Project</a>
                                <a href={project.github} className="text-blue-500 hover:underline">Github</a>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}