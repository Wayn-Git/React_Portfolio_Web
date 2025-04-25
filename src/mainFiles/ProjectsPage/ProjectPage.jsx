import React, { useState, useEffect } from "react";

// Simplified SVG icons
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#5E503F"
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
    stroke="#5E503F"
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
  <span className="rounded-lg bg-[#C6AC8F] px-2 py-1 text-sm font-bold text-[#22333B]">
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
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
      
      // Hide navigation bar when modal is open
      const navBar = document.querySelector('nav.scroll-smooth');
      if (navBar) navBar.style.display = 'none';
      
      // Ensure DOM update before animation
      const timer = setTimeout(() => {
        setIsActive(true);
        // Delay content animation
        const contentTimer = setTimeout(() => {
          setContentVisible(true);
        }, 400);
        return () => clearTimeout(contentTimer);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setContentVisible(false);
      setIsActive(false);
      
      // Show navigation bar when modal is closed
      const navBar = document.querySelector('nav.scroll-smooth');
      if (navBar) navBar.style.display = '';
      
      // Reset body overflow after animation completes
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    // Only unmount when closing animation completes
    if (!isOpen && !isActive) {
      setMounted(false);
    }
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-in-out ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={`fixed inset-0 bg-[#0A0908] overflow-auto transition-all duration-600 ease-out transform ${
          isActive ? "translate-y-0" : "translate-y-full"
        }`}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Close button (floating) */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-50 flex items-center justify-center h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-300 shadow-lg"
          style={{ 
            transform: isActive ? 'scale(1)' : 'scale(0.8)',
            opacity: isActive ? 1 : 0,
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            transitionDelay: '0.2s'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-6">
          {/* Hero section with large image */}
          <div 
            className="relative w-full h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-hidden rounded-lg shadow-2xl"
            style={{ 
              transform: isActive ? 'translateY(0)' : 'translateY(40px)',
              opacity: isActive ? 1 : 0,
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
              transitionDelay: '0.1s'
            }}
          >
            <div className="absolute inset-0 bg-black">
              <img
                src={project.image}
                alt={`${project.title} project`}
                className="w-full h-full object-contain md:object-cover"
                style={{
                  transition: 'transform 10s ease-in-out',
                  transform: contentVisible ? 'scale(1.03)' : 'scale(1)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10">
              <div 
                className="flex flex-wrap gap-2 mb-4"
                style={{ 
                  transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: contentVisible ? 1 : 0,
                  transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                  transitionDelay: '0.6s'
                }}
              >
                {project.technologies.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </div>
              <h3 
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-2 drop-shadow-lg"
                style={{ 
                  transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: contentVisible ? 1 : 0,
                  transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                  transitionDelay: '0.4s'
                }}
              >
                {project.title}
              </h3>
            </div>
            
            {/* Image controls - zoom/expand */}
            <div 
              className="absolute top-4 right-20 z-10"
              style={{ 
                opacity: contentVisible ? 1 : 0,
                transition: 'opacity 0.3s ease-out',
                transitionDelay: '0.8s'
              }}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.image, '_blank');
                }}
                className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300"
                title="View full image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main content in a two-column layout on desktop */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column - Main content */}
            <div className="md:col-span-2">
              {/* Project summary */}
              <div 
                className="mb-12"
                style={{ 
                  transform: contentVisible ? 'translateY(0)' : 'translateY(40px)',
                  opacity: contentVisible ? 1 : 0,
                  transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                  transitionDelay: '0.5s'
                }}
              >
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6">Overview</h4>
                <p className="text-gray-300 md:text-lg leading-relaxed">{project.description}</p>
              </div>
              
              {/* Features section - if project has features */}
              {project.features && (
                <div 
                  className="mb-12"
                  style={{ 
                    transform: contentVisible ? 'translateY(0)' : 'translateY(40px)',
                    opacity: contentVisible ? 1 : 0,
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                    transitionDelay: '0.6s'
                  }}
                >
                  <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6">Key Features</h4>
                  <ul className="list-disc pl-5 text-gray-300 md:text-lg space-y-3 leading-relaxed">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Right column - Meta information and actions */}
            <div className="md:col-span-1">
              <div 
                className="bg-[#22333B]/10 rounded-lg p-6 sticky top-10"
                style={{ 
                  transform: contentVisible ? 'translateY(0)' : 'translateY(40px)',
                  opacity: contentVisible ? 1 : 0,
                  transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                  transitionDelay: '0.7s'
                }}
              >
                {/* Tech stack details */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-gray-300 bg-[#22333B]/50 px-3 py-1.5 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project meta information */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Project Info</h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400 block text-sm">Date</span>
                      <span className="text-white">{project.date || "2023"}</span>
                    </div>
                  </div>
                </div>
                
                {/* Links section */}
                <div className="space-y-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#22333B] hover:bg-[#22333B]/80 text-white px-5 py-3 rounded-md transition-colors w-full"
                  >
                    <GithubIcon />
                    <span>View on GitHub</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#5E503F] hover:bg-[#5E503F]/80 text-white px-5 py-3 rounded-md transition-colors w-full"
                  >
                    <ExternalLinkIcon />
                    <span>View Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simplified Project Card Component
const ProjectCard = ({ project, isAlternate = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { title, description, image, technologies, github, demo, slug } = project;
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <li className="flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div 
        className={`relative w-full md:w-3/5 cursor-pointer overflow-hidden mb-4 md:mb-0 md:mt-0 ${
          isAlternate ? "md:order-1" : "md:order-2"
        }`}
        onClick={openModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Desktop overlay at the top */}
        <div className="absolute top-0 left-0 right-0 items-center justify-between px-6 py-5 z-20 hidden md:flex">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
            className="text-sm font-semibold text-white hover:underline"
          >
            Read More
          </button>
          <SocialLinks github={github} demo={demo} />
        </div>
        <div className="w-full pt-[50%] md:pt-[56.25%] relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={`${title} project`} 
              className={`w-full h-full object-cover rounded transition-all duration-700 ease-in-out ${
                isHovered ? "scale-105 brightness-100" : "scale-100 brightness-90"
              }`}
            />
          </div>
        </div>
      </div>
      
      {/* Info Section */}
      <div 
        className={`flex w-full flex-col md:w-2/5 px-4 md:px-0 ${
          isAlternate ? "md:order-2 md:ml-10" : "md:order-1 md:mr-6"
        }`}
      >
        <div className="flex flex-wrap gap-2 mt-0 md:mt-3">
          {technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </div>
        
        <h4 className="mt-3 font-heading text-3xl font-semibold dark:text-white">
          {title}
        </h4>
        
        <p className="mt-4 text-gray-300">
          {description}
        </p>
        
        {/* Mobile: "Read More" + Social Links below */}
        <div className="mt-4 flex items-center justify-between px-2 pb-2 md:hidden">
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
      title: "FilmFusion",
      description:
        "Film Fusion is a sleek movie and TV show discovery site built with React and Tailwind, featuring trending, top-rated, and upcoming content using the TMDB API.",
      image: "ProjectImg/FilmFusion.png",
      technologies: ["React", "Tailwind", "Javascript", "TMDB API"],
      github: "https://github.com/Wayn-Git/FilmFusion",
      demo: "https://filmfusionwayn.vercel.app/",
      slug: "#",
      date: "2023",
      features: [
        "Dynamic content fetching from TMDB API",
        "Trending, top-rated, and upcoming sections",
        "Responsive design with Tailwind CSS",
        "Movie and TV show details pages"
      ]
    },
    {
      title: "Javascript Finance Manager",
      description:
        "A simple yet handy finance tracker built with HTML, CSS, and JavaScript—because keeping track of money shouldn't feel like rocket science. Log expenses, set budgets, and maybe (just maybe) stop wondering where all your money went.",
      image: "ProjectImg/FinanceManager.png",
      technologies: ["HTML", "CSS", "Javascript", "LocalStorage"],
      github: "https://github.com/Wayn-Git/Finance_Tracker",
      demo: "https://finance-tracker-lilac-theta.vercel.app/",
      slug: "#",
      date: "2022",
      features: [
        "Expense tracking and categorization",
        "Budget management features",
        "Data persistence with LocalStorage",
        "Interactive charts and visualizations"
      ]
    },
    
    {
      title: "Gemini Clone",
      description:
        "A React.js clone of the Gemini platform—because why not build your own AI interface for fun? It's got a sleek UI, responsive design, and a chatbot setup that looks smart (even if it doesn't answer your life problems). Built with React, JavaScript, and Tailwind CSS.",
      image: "ProjectImg/GeminiClone.png",
      technologies: ["Next.js", "TailwindCSS", "React", "Javascript"],
      github: "https://github.com/Wayn-Git/Gemeni_Clone",
      demo: "https://gemeni-clone-sigma.vercel.app/",
      slug: "https://gemeni-clone-sigma.vercel.app/",
      date: "2023",
      features: [
        "AI chat interface with responsive design",
        "Dark/light mode toggle",
        "Multiple conversation history",
        "Modern UI inspired by Google's Gemini"
      ]
    },
    {
      title: "Nasa Daily Picture",
      description:
        "A sleek React-based web app that connects with NASA's public API to fetch and display the Astronomy Picture of the Day (APOD). It dynamically updates each day with breathtaking space imagery, detailed descriptions, and titles—bringing the cosmos right to your screen. Built for space lovers and tech geeks alike.",
      image: "ProjectImg/Nasa.png",
      technologies: ["React", "NASA API", "CSS", "Javascript"],
      github: "https://github.com/Wayn-Git/Nasa_Images",
      demo: "https://nasaimages-delta.vercel.app/",
      slug: "https://nasaimages-delta.vercel.app/",
      date: "2023",
      features: [
        "Daily updates with NASA's APOD API",
        "Historical image browsing",
        "High-resolution image viewer",
        "Detailed astronomical descriptions"
      ]
    },
    {
      title: "React Portfolio Web",
      description:
        "A sleek and minimal portfolio website built with React, Tailwind CSS, and JavaScript—because first impressions matter. Showcasing projects, skills, and a bit of personality, all wrapped in a clean, responsive design. Simple, effective, and just cool enough to stand out.",
      image: "ProjectImg/PortfolioWeb.png",
      technologies: ["React", "Tailwind", "Javascript", "Responsive Design"],
      github: "https://github.com/Wayn-Git/Finance_Tracker",
      demo: "https://bilal-portfolio-omega.vercel.app/",
      slug: "#",
      date: "2023",
      features: [
        "Responsive design for all devices",
        "Animated UI elements",
        "Project showcase with detailed modals",
        "Performance optimized loading"
      ]
    },
  ];

  return (
    <section
      className="bg-[#0A0908] py-36 md:py-48 justify-center items-center px-3 lg:px-60"
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

