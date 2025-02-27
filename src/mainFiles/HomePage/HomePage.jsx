import React, { useState, useEffect } from "react";
import Projects from "../ProjectsPage/ProjectPage";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable page scrolling when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <section className="bg-[#404040] scroll-smooth h-[101vh] w-full relative">
      {/* Menu Section - Controlled by isOpen State */}
      <section
        id="Menu"
        className={`w-full h-[100vh] scroll-smooth bg-[#283F13]/70 z-50 p-0 m-0 backdrop-blur-md transition-all duration-100 fixed ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="fixed top-0 scroll-smooth right-0 z-30 h-screen w-screen bg-primary-800/70 backdrop-blur-md transition-transform flex flex-col justify-center gap-8 p-16 pb-32 md:w-1/2 lg:hidden">
          <div className="mb-8 flex items-center justify-between">
            <a href="/">
              <svg
                className="w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              </svg>
            </a>
            <button
              className="text-primary-800 transition-colors dark:text-white text-white"
              aria-label="Toggle light mode"
              title="Toggle light mode"
            >
              <svg
                className="w-8 transition-colors hover:text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="4" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
              <svg
                className="w-8 transition-colors hover:text-primary-200 hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
              </svg>
            </button>
          </div>

          <a
            className="scroll-smooth uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
            href="/#aboutMe"
          >
            about
            <span className="w-6 text-white/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </span>
          </a>

          {/* Additional mobile links */}
          <a
            className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
            href="/#projects"
          >
            projects
            <span className="w-6 text-white/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385" />
                <path d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z" />
              </svg>
            </span>
          </a>

          <a
            className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
            href="/#work"
          >
            work
            <span className="w-6 text-white/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M9 8l1 0" />
                <path d="M9 12l1 0" />
                <path d="M9 16l1 0" />
                <path d="M14 8l1 0" />
                <path d="M14 12l1 0" />
                <path d="M14 16l1 0" />
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
              </svg>
            </span>
          </a>

          <a
            className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
            href="/#toolbox"
          >
            toolbox
            <span className="w-6 text-white/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="2" />
                <path d="M9 14l2 2l4 -4" />
              </svg>
            </span>
          </a>

          <a
            className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
            href="/#contact"
          >
            contact
            <span className="w-6 text-white/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </span>
          </a>

          <button className="relative h-12 w-40 font-bold mx-auto overflow-hidden border-2 border-white bg-transparent text-white shadow-2xl transition-all duration-500 group hover:text-white hover:border-transparent">
            <span className="relative z-10">Resume</span>
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8ACA4F] to-[#B6E89A] transition-transform duration-100 scale-y-0 group-hover:scale-y-100 origin-bottom" />
            </div>
          </button>
        </div>
      </section>

      {/* Header Section with Animated Button */}
      <header className="scroll-smooth fixed top-0 left-0 z-60 flex h-20 w-full items-center justify-end px-4 sm:px-8 lg:hidden">
        <button
          className="outline-none transition-all duration-300 transform ease-in-out lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className={`hover:cursor-pointer h-[40px] w-[42px] text-white font-bold transition-transform duration-300 ${
              isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              // Close (X) Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 6L18 18M6 18L18 6"
              />
            ) : (
              // Hamburger Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="scroll-smooth pl-6 lg:pl-30 lg:pr-30 lg:pt-10 flex flex-col">
        <nav className="scroll-smooth hidden z-999 h-[101vh] w-20 lg:block absolute items-center justify-center pt-50">
          <ul className="scroll-smooth fixed flex h-screen flex-col gap-10 text-primary-800 dark:text-white lg:w-20 xl:w-0">
            <li >
              <a href="#aboutMe" title="About" className="scroll-smooth">
                <svg
                  className="w-6 hover:text-primary-700 dark:hover:text-primary-500 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#projects" title="Projects" className="">
                <svg
                  className="w-6 hover:text-primary-700 dark:hover:text-primary-500 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385" />
                  <path d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#work" title="Work" className="">
                <svg
                  className="w-6 hover:text-primary-700 dark:hover:text-primary-500 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l18 0" />
                  <path d="M9 8l1 0" />
                  <path d="M9 12l1 0" />
                  <path d="M9 16l1 0" />
                  <path d="M14 8l1 0" />
                  <path d="M14 12l1 0" />
                  <path d="M14 16l1 0" />
                  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#toolbox" title="Toolbox" className="">
                <svg
                  className="w-6 hover:text-primary-700 dark:hover:text-primary-500 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="2" />
                  <path d="M9 14l2 2l4 -4" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#contact" title="Contact" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 hover:text-primary-700 dark:hover:text-primary-500 transition"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        <header className="w-full flex justify-end gap-7 px-4 sm:px-8">
          <button
            className="text-primary-800 transition-colors dark:text-white z-50 hidden lg:block"
            aria-label="Toggle light mode"
            title="Toggle light mode"
          >
            <svg
              className="w-8 transition-colors hover:text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
            </svg>
            <svg
              className="w-8 transition-colors hover:text-primary-200 hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            </svg>
          </button>
          <button className="hidden lg:block ResumeButtonLG relative h-12 w-40 overflow-hidden border-2 border-primary-900 text-primary-800 shadow-2xl transition-all duration-500 group hover:text-white font-bold dark:border-white dark:text-white dark:hover:text-primary-800 mt-0 z-50">
            <span className="relative z-10">Resume</span>
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8ACA4F] to-[#B6E89A] transition-transform duration-500 scale-y-0 group-hover:scale-y-100 origin-bottom transform" />
            </div>
          </button>
        </header>

        <div className="w-full max-w-2xl flex flex-col items-left text-left pt-34 mx-auto mt-16 px-4 sm:px-8 lg:mt-0">
          <p className="mt-4 font-bold text-gray-600 dark:text-gray-400 w-full">
            Hey - I'm
          </p>
          <div className="bg-[#283F13] mt-3 flex max-w-fit flex-col whitespace-nowrap rounded bg-primary-800 px-2 pt-1 pb-3 font-mono text-5xl sm:text-5xl font-semibold tracking-tight text-white shadow-lg dark:font-bold sm:flex-row lg:text-6xl">
            Bilal
            <span className="ml-2">Rukundi</span>
          </div>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold text-gray-600 dark:text-gray-300 lg:text-6xl">
            I like to explore tech
          </h2>
          <p className="m-2 mt-8 max-w-2xl text-gray-600 dark:text-gray-300">
            I'm an AI and ML student from{" "}
            <span className="bg-gradient-to-br from-primary-800 to-primary-500 bg-clip-text font-semibold text-[#98CC68] dark:from-primary-500 dark:to-primary-200">
              India, Maharashtra
            </span>
            . This is my portfolio! In a nutshell, I like making things and
            exploring new technologies.
          </p>
          <button className="relative h-12 w-40 overflow-hidden border-2 border-primary-800 text-primary-800 shadow-2xl transition-all duration-500 group hover:text-white font-bold dark:border-white dark:text-white dark:hover:text-primary-800 mt-8">
            <span className="relative z-10">Projects</span>
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8ACA4F] to-[#B6E89A] transition-transform duration-500 scale-y-0 group-hover:scale-y-100 origin-bottom transform" />
            </div>
          </button>
        </div>
      </main>

      {/* ABOUT ME SECTION */}
      <section
        id="aboutMe"
        className="bg-[#404040] justify-center items-center gap-x-8 flex flex-col min-h-screen w-full relative p-3 lg:pr-60 lg:pl-60 pt-28 pb-20 md:flex-row md:pb-1 scroll-smooth"
      >
        <div className="mt-8">
          <div className="flex w-full items-center">
            <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
              About me
            </h3>
            <div className="mx-8 h-0.5 w-full rounded bg-gray-200"></div>
          </div>

          <div className="flex flex-col lg:flex-row mt-4 text-gray-600 dark:text-gray-300 gap-8">
            <div className="flex-1">
              <p>
                Hey! My name is Bilal. I'm a programmer and an AI/ML student who
                enjoys exploring the world of technology. Outside of studying, I
                spend my time coding, reading, working out, and sometimes just
                staring at the sky, lost in thought. I find peace in the little
                things—cold nights, the sound of rain, and the quiet stillness of
                nature.
              </p>
              <br />
              <p>
                When it comes to building things, I believe in simplicity. I like
                clean, minimal, and well-structured code. Whether it's designing a
                UI or organizing a database, I prefer solutions that are efficient
                and easy to understand. There's something satisfying about
                creating something from scratch and watching it all come together.
              </p>
              <br />
              <p>Here's a picture of me if you were wondering what I look like ;)</p>
            </div>

            <div className="flex-1 flex justify-end">
              <div className="mt-8 max-w-xs pr-5">
                <div className="relative">
                  <div className="group relative z-10 transition-transform hover:translate-x-3 hover:translate-y-3">
                    <div className="relative">
                      <img
                        alt="A picture of me"
                        src="src/assets/ImgMe/MeIMG2.jpg"
                        className="rounded brightness-90 transition group-hover:brightness-100 group-hover:saturate-100"
                      />
                    </div>
                    <div className="absolute top-0 h-[98%] w-full bg-primary-800/30 transition-colors group-hover:bg-transparent"></div>
                  </div>
                  <div
                    className="absolute top-0 mt-4 ml-6 h-full w-full from-primary-800 dark:from-white"
                    style={{
                      backgroundSize: "20px 20px",
                      backgroundImage:
                        "linear-gradient(to right, var(--tw-gradient-from) 1px, transparent 1px), linear-gradient(to bottom, var(--tw-gradient-from) 1px, transparent 1px)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 
     Projects Section  */}

<Projects></Projects>


    </section>
  );
}
