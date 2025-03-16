import React, { useState, useEffect } from "react";

// Simplified SVG icons
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="rgb(110, 173, 52)"
    className="h-7 w-7"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    className="h-7 w-7"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="rgb(110, 173, 52)"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
    <line x1="10" y1="14" x2="20" y2="4" />
    <polyline points="15 4 20 4 20 9" />
  </svg>
);

// Simplified components
const TechTag = ({ children }) => (
  <span className="rounded-lg bg-[rgba(60,94,28,0.8)] px-2 py-1 text-sm text-gray-200">
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
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      title="Github repository"
    >
      <GithubIcon />
    </a>
    <a
      href={demo}
      target="_blank"
      rel="noopener noreferrer"
      title="Live example"
    >
      <ExternalLinkIcon />
    </a>
  </div>
);

// Project Modal Component with Animation
const ProjectModal = ({ project, isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Trigger active state after component mounts
      requestAnimationFrame(() => {
        setIsActive(true);
      });
    } else {
      // Immediately deactivate for closing animation
      setIsActive(false);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    // Only unmount when closing animation completes
    if (!isOpen) {
      setMounted(false);
    }
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#404040]/50 backdrop-blur-2xl transition-opacity duration-500 ease-in-out ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`bg-[#404040] w-full max-w-4xl max-h-[90vh] overflow-auto shadow-[0_0_10px_rgba(255,255,255,0.2)] rounded-lg p-6 transition-all duration-500 ease-in-out transform ${
          isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Modal content remains the same */}
        <div className="relative mb-4">
          <img
            src={project.image}
            alt={`${project.title} project`}
            className="w-full h-full object-cover rounded"
          />
          <button
            onClick={onClose}
            className="absolute top-1 right-2 bg-[#404040]/50 bg-opacity-20 backdrop-blur-3xl text-white rounded-[20%] p-2 transition-colors hover:bg-opacity-30 duration-200"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </div>

          <h3 className="font-heading text-3xl font-semibold dark:text-white mb-4">
            {project.title}
          </h3>

          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="flex justify-between">
            <ProjectLink href={project.demo}>Visit Demo</ProjectLink>
            <SocialLinks github={project.github} demo={project.demo} />
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
  
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      document.body.style.overflow = "";
    }, 300);
  };
  
  return (
    <li className="flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div 
        className={`relative mt-5 pl-4 min-h-[14rem] w-full md:w-3/5 cursor-pointer overflow-hidden md:mt-0 ${
          isAlternate ? "order-1" : "order-2"
        }`}
        onClick={openModal}
      >
        {/* Desktop overlay at the top */}
        <div className="absolute top-0 left-0 right-0   items-center justify-between p-4 z-20 hidden md:flex">
          <button
            onClick={openModal}
            className="text-sm font-semibold text-white hover:underline"
          >
            Read More
          </button>
          <SocialLinks github={github} demo={demo} />
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
          <img 
            src={image} 
            alt={`${title} project`} 
            className="w-full h-full object-cover rounded brightness-90 hover:brightness-100 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
      
      {/* Info Section */}
      <div 
        className={`flex w-full flex-col md:w-2/5 md:min-h-[300px] ${
          isAlternate ? "order-2 md:ml-10" : "order-1 md:mr-6"
        }`}
      >
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
        
        {/* Mobile: "Read More" + Social Links below */}
        <div className="order-last mt-4 flex items-center justify-between md:hidden">
          <button 
            onClick={openModal}
            className="text-sm font-semibold text-white hover:underline"
          >
            Read More
          </button>
          <div className="flex gap-4">
            <SocialLinks github={github} demo={demo} />
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <ProjectModal 
        project={project}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </li>
  );
};



// Main Projects component
const Projects = () => {
  const projects = [
    {
      title: "Javascript Finance Manager",
      description:
        "A simple yet handy finance tracker built with HTML, CSS, and JavaScript—because keeping track of money shouldn't feel like rocket science. Log expenses, set budgets, and maybe (just maybe) stop wondering where all your money went.",
      image: "ProjectImg/FinanceManager.png",
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Wayn-Git/Finance_Tracker",
      demo: "https://finance-tracker-lilac-theta.vercel.app/",
      slug: "#",
    },
    {
      title: "Portfolio",
      description:
        "A sleek and minimal portfolio website built with React, Tailwind CSS, and JavaScript—because first impressions matter. Showcasing projects, skills, and a bit of personality, all wrapped in a clean, responsive design. Simple, effective, and just cool enough to stand out.",
      image: "ProjectImg/PortfolioWeb.png",
      technologies: ["React", "Tailwind", "Javascript"],
      github: "https://github.com/Wayn-Git/Finance_Tracker",
      demo: "https://bilal-portfolio-omega.vercel.app/",
      slug: "#",
    },
    {
      title: "Gemini Clone",
      description:
        "A React.js clone of the Gemini platform—because why not build your own AI interface for fun? It’s got a sleek UI, responsive design, and a chatbot setup that looks smart (even if it doesn't answer your life problems). Built with React, JavaScript, and Tailwind CSS..",
      image: "ProjectImg/GeminiClone.png",
      technologies: ["Next.js", "TailwindCSS", "Strapi"],
      github: "https://github.com/Wayn-Git/Gemeni_Clone",
      demo: "https://gemeni-clone-sigma.vercel.app/",
      slug: "https://gemeni-clone-sigma.vercel.app/",
    },
    {
      title: "Nasa Daily Picture",
      description:
        "A React.js clone of the Gemini platform—because why not build your own AI interface for fun? It’s got a sleek UI, responsive design, and a chatbot setup that looks smart (even if it doesn't answer your life problems). Built with React, JavaScript, and Tailwind CSS..",
      image: "public/ProjectImg/Nasa.png",
      technologies: ["Next.js", "TailwindCSS", "Strapi"],
      github: "https://github.com/Wayn-Git/Nasa_Images",
      demo: "https://nasaimages-delta.vercel.app/",
      slug: "https://nasaimages-delta.vercel.app/",
    },
  ];

  return (
    <section
      className="bg-[#404040] py-36 md:py-48 justify-center items-center px-3 lg:px-60"
      id="projects"
    >
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
