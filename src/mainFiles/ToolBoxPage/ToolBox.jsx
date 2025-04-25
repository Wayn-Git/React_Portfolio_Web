import React from "react";

function ToolBox() {
  return (
    <section id="toolbox" className="bg-[#0A0908] pt-40 scroll-smooth lg:pr-60 lg:pl-60 h- p-3 w-full relative">
      <div className="flex w-full mb-10 items-center">
        <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
          Toolbox
        </h3>
        <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
      </div>

      {/* Aligned container for title, paragraph and toolbox components */}
      <div className="flex flex-col items-start max-w-3xl mx-auto">
        <div className="text-lg font-semibold dark:text-white w-full">
          <h1 className="pb-1 text-left">Methods and concepts</h1>
          <p className="text-sm font-semibold pb-5 text-gray-500 dark:text-gray-400 text-left">
            I blend cutting-edge computer science techniques with savvy management
            strategies to supercharge my projects.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
              Version control
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
              Testing hierarchy
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
              Agile methods
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-fit whitespace-nowrap text-center">
              Participatory design
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-15 items-start max-w-3xl mx-auto">
        <div className="text-lg font-semibold dark:text-white w-full">
          <h1 className="pb-1 text-left">Languages</h1>
          <p className="text-sm font-semibold pb-5 text-gray-500 dark:text-gray-400 text-left">
          Programming, markup, and query languages I use.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
              HTML + CSS
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
              Javascript
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
              Python
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-fit whitespace-nowrap text-center">
              C
            </span>
            <span className="pr-3 rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-fit whitespace-nowrap text-center">
              SQL
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-fit whitespace-nowrap text-center">
              Java (Novice)
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-15 items-start max-w-3xl mx-auto">
        <div className="text-lg font-semibold dark:text-white w-full">
          <h1 className="pb-1 text-left">Frontend technologies and libraries</h1>
          <p className="text-sm font-semibold pb-5 text-gray-500 dark:text-gray-400 text-left">
          Technologies I use to develop user interfaces.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
             React
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
             Tailwind
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
              Remix
            </span>
          
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-15 items-start max-w-3xl mx-auto">
        <div className="text-lg font-semibold dark:text-white w-full">
          <h1 className="pb-1 text-left">Backend technologies and databases</h1>
          <p className="text-sm font-semibold pb-5 text-gray-500 dark:text-gray-400 text-left">
          I will be there soon ;)
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
             Node js (Goal)
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
             Next js (Goal)
            </span>
            <span className="rounded-lg px-2 py-1 text-sm text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white transition-colors w-32 whitespace-nowrap text-center">
              Express (Goal)
            </span>
          
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default ToolBox;