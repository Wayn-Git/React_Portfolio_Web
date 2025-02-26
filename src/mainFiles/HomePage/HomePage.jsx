import React, { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="MainMenu" className="bg-[#404040] h-[101vh] w-full relative">
        {/* Menu Section - Controlled by isOpen State */}
        <section
          id="Menu"
          className={`w-full h-[100vh] bg-[#283F13]/70 z-50 p-0 m-0 backdrop-blur-md absolute transition-all duration-100 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="fixed top-0 right-0 z-30 h-screen w-screen bg-primary-800/70 backdrop-blur-md transition-transform flex flex-col justify-center gap-8 p-16 pb-32 md:w-1/2 lg:hidden">
            <div className="mb-8 flex items-center justify-between">
              <a href="/">
                <svg className="w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                </svg>
              </a>
              <button className="text-primary-800 transition-colors dark:text-white text-white" aria-label="Toggle light mode" title="Toggle light mode">
                <svg className="w-8 transition-colors hover:text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                </svg>
                <svg className="w-8 transition-colors hover:text-primary-200 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                </svg>
              </button>
            </div>
            
            <a className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50" href="/#about">
              about
              <span className="w-6 text-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
              </span>
            </a>
            
            <a className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50" href="/#projects">
              projects
              <span className="w-6 text-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385"></path>
                  <path d="M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z"></path>
                </svg>
              </span>
            </a>
            
            <a className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50" href="/#work">
              work
              <span className="w-6 text-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 21l18 0"></path>
                  <path d="M9 8l1 0"></path>
                  <path d="M9 12l1 0"></path>
                  <path d="M9 16l1 0"></path>
                  <path d="M14 8l1 0"></path>
                  <path d="M14 12l1 0"></path>
                  <path d="M14 16l1 0"></path>
                  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                </svg>
              </span>
            </a>
            
            <a className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50" href="/#toolbox">
              toolbox
              <span className="w-6 text-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                  <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                  <path d="M9 14l2 2l4 -4"></path>
                </svg>
              </span>
            </a>
            
            <a className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50" href="/#contact">
              contact
              <span className="w-6 text-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <polyline points="3 7 12 13 21 7"></polyline>
                </svg>
              </span>
            </a>
            
            <button className="relative z-10 w-fit overflow-hidden rounded border-2 border-white px-10 py-3 font-semibold hover:border-transparent hover:text-white dark:hover:border-transparent transition after:absolute after:inset-y-0 after:left-[-120%] after:right-full after:-z-10 after:block after:w-40 after:-skew-x-12 after:bg-gradient-to-r after:py-3 after:transition-all hover:after:inset-y-0 hover:after:-left-2 hover:after:right-0 dark:border-white dark:text-white dark:from-primary-500 dark:to-primary-200 mt-8 self-center text-white">
              Resume
            </button>
          </div>
        </section>

        {/* Header Section with Animated Button */}
        <header className="fixed top-0 left-0 z-60 flex h-20 w-full items-center justify-end px-4 sm:px-8 md:hidden">
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
        <main className="pl-5 pr-5 pt-30 flex flex-col">
          <p className="mt-4 mr-5 font-bold text-gray-600 dark:text-gray-400">
            Hey - I'm
          </p>
          <div className="bg-[#283F13] mt-3 flex max-w-fit flex-col whitespace-nowrap rounded bg-primary-800 px-2 pt-1 pb-3 font-mono text-5xl font-semibold tracking-tight text-white shadow-lg dark:font-bold sm:flex-row sm:text-5xl lg:text-6xl">
            Bilal
            <span className="ml-2">Rukundi</span>
          </div>
          <h2 className="mt-4 font-heading text-5xl font-bold text-gray-600 dark:text-gray-300 sm:text-5xl lg:text-6xl">
            I like to explore tech
          </h2>
          <p className="m-2 mt-8 max-w-2xl text-gray-600 dark:text-gray-300">
            I'm an AI and ML student{" "}
            <span className="bg-gradient-to-br from-primary-800 to-primary-500 bg-clip-text font-semibold text-[#98CC68] dark:from-primary-500 dark:to-primary-200">
              India, Maharashtra
            </span>
            . This is my portfolio! In a nutshell, I like making things and
            exploring new technologies.
          </p>
          <button className="relative z-10 w-fit overflow-hidden rounded border-2 border-primary-800 px-10 py-3 font-semibold hover:border-transparent hover:text-white dark:hover:border-transparent from-primary-800 to-primary-500 transition after:absolute after:inset-y-0 after:left-[-120%] after:right-full after:-z-10 after:block after:w-40 after:-skew-x-12 after:bg-gradient-to-r after:py-3 after:transition-all hover:after:inset-y-0 hover:after:-left-2 hover:after:right-0 dark:border-white dark:text-white dark:from-primary-500 dark:to-primary-200 mt-8">
            Projects
          </button>
        </main>
      </section>
    </>
  );
}