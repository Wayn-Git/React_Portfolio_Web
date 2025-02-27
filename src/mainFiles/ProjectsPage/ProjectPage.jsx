import React, { useState } from 'react';

// Simplified SVG icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-7 w-7" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
    <line x1="10" y1="14" x2="20" y2="4" />
    <polyline points="15 4 20 4 20 9" />
  </svg>
);

// Simplified components
const TechTag = ({ children }) => (
  <span className="rounded-lg bg-primary-700 px-2 py-1 text-sm text-gray-200">
    {children}
  </span>
);

const ProjectLink = ({ href, children }) => (
  <a 
    href={href} 
    className="bg-gradient-to-br from-primary-800 to-primary-500 bg-clip-text font-semibold uppercase text-transparent dark:from-primary-500 dark:to-primary-200 hover:after:ml-3 after:ml-1.5 after:content-['->']"
  >
    {children}
  </a>
);

// Simplified social links component
const SocialLinks = ({ github, demo }) => (
  <div className="flex gap-4">
    <a href={github} target="_blank" rel="noopener noreferrer" title="Github repository">
      <GithubIcon />
    </a>
    <a href={demo} target="_blank" rel="noopener noreferrer" title="Live example">
      <ExternalLinkIcon />
    </a>
  </div>
);

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const { title, description, image, technologies, github, demo } = project;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#404040]/50    backdrop-blur-2xl bg-opacity-50">
<div className="bg-[#404040] w-full max-w-4xl max-h-[90vh] overflow-auto shadow-[0_0_10px_rgba(255,255,255,0.2)] rounded-lg p-6">

        {/* Project Image at top */}
        <div className="relative mb-4">
          <img 
            src={image} 
            alt={`${title} project`} 
            className="w-full h-full object-cover rounded"
          />
          <button 
            onClick={onClose} 
            className="absolute top-1 right-2 bg-[#404040/50] bg-opacity-20 backdrop-blur-3xl  text-white rounded-[20%] p-2"
          >
            ✕
          </button>
        </div>
        
        {/* Project details */}
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </div>
          
          <h3 className="font-heading text-3xl font-semibold dark:text-white mb-4">
            {title}
          </h3>
          
          <p className="text-gray-300 mb-6">
            {description}
          </p>
          
          <div className="flex justify-between">
            <ProjectLink href={demo}>Visit Demo</ProjectLink>
            <SocialLinks github={github} demo={demo} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Simplified Project Card Component
const ProjectCard = ({ project, isAlternate = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, image, technologies, github, demo, slug } = project;
  
  return (
    <li className="flex flex-col md:flex-row">
      {/* Project Image Section with click handler */}
      <div className={`relative order-1 mt-5 min-h-[14rem] w-full md:order-${isAlternate ? '2' : '1'} md:mt-0 md:w-3/5 cursor-pointer`} onClick={() => setIsModalOpen(true)}>
        <div className={`absolute top-3 z-20 hidden md:block ${isAlternate ? 'right-3' : 'left-3'}`}>
          <SocialLinks github={github} demo={demo} />
        </div>
        
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <img 
            src={image} 
            alt={`${title} project`} 
            className="w-full h-full object-cover rounded brightness-90 hover:brightness-100 transition"
          />
        </div>
      </div>
      
      {/* Project Info Section */}
      <div className={`flex w-full flex-col md:min-h-[300px] md:order-${isAlternate ? '1' : '2'} ${isAlternate ? 'md:mr-6' : 'md:ml-10'}`}>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </div>
        
        <h4 className="mt-3 font-heading text-4xl font-semibold dark:text-white">
          {title}
        </h4>
        
        <p className="mt-4 text-gray-300">
          {description}
        </p>
        
        <div className="hidden h-full items-end md:flex">
          <ProjectLink href={`/projects/${slug}`}>Read more</ProjectLink>
        </div>
      </div>
      
      {/* Mobile Links Section */}
      <div className="order-last mt-4 flex items-center justify-between md:hidden">
        <ProjectLink href={`/projects/${slug}`}>Read more</ProjectLink>
        <div className="flex gap-4">
          <SocialLinks github={github} demo={demo} />
        </div>
      </div>
      
      {/* Modal */}
      <ProjectModal 
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </li>
  );
};

// Main Projects component
const Projects = () => {
  const projects = [
    {
      title: "Javascript Finance Manager",
      description: "React Denmark Map is a library for React that allows developers to display an SVG of Denmark. It can be programmatically customized through an intuitive API.",
      image: "src/assets/ProjectImg/FinanceManager.png",
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/MartinP460/react-denmark-map",
      demo: "https://react-denmark-map.vercel.app/demo",
      slug: "#"
    },
    {
      title: "Portfolio",
      description: "Onsplash is a clone/recreation of the image-sharing platform Unsplash. In addition to replicating Unsplash's iconic gallery design, Onsplash enables users to perform CRUD operations on their own and other's images.",
      image: "src/assets/ProjectImg/PortfolioWeb.png",
      technologies: ["React", "Tailwind", "Javascript"],
      github: "https://github.com/EjramWay/Finance_Tracker",
      demo: "https://finance-tracker-lilac-theta.vercel.app/",
      slug: "#"
    },
    {
      title: "Gemini Clone",
      description: "A simple blog posts app built using Strapi and Next.js, meant to practice connecting a CMS to a frontend. Includes several blogs with randomly generated titles and filled with dummy text.",
      image: "src/assets/ProjectImg/GeminiClone.png",
      technologies: ["Next.js", "TailwindCSS", "Strapi"],
      github: "https://github.com/EjramWay/Gemeni_Clone",
      demo: "https://gemeni-clone-sigma.vercel.app/",
      slug: "https://gemeni-clone-sigma.vercel.app/"
    }
  ];

  return (
    <section className="bg-[#404040] py-36 md:py-48 justify-center items-center px-3 lg:px-60" id="projects">
      <div className="flex w-full items-center">
        <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
          Projects
        </h3>
        <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
      </div>
      
      <ul className="mt-16 flex flex-col gap-16">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            isAlternate={index % 2 !== 0} 
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;