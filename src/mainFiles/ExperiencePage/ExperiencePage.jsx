import React from "react";

const ExperienceSection = () => {
  return (
    <section
      className="bg-[#404040] w-full md:pr-20 md:pl-20 flex flex-col lg:pr-60 lg:pl-60 items-center pt-28 pb-36 md:pb-48"
      id="work"
    >
      {/* Section Heading */}
      <div className="flex w-full items-center px-4">
        <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest text-white">
          Work
        </h3>
        <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
      </div>

      {/* Timeline and Text Content */}
      <div className="mt-12 flex flex-row items-start w-full max-w-4xl px-4 gap-4">
        {/* Timeline Column */}
        <div className="flex flex-col justify-center items-center">
          <div className="mb-1 h-0.5 w-2 bg-gray-200"></div>
          <div className="mb-1 h-1 w-2 bg-gray-200"></div>
          <div className="mb-1.5 h-2 w-2 bg-gray-200"></div>
          <div className="mb-2 h-20 w-2 rounded-b-sm bg-gray-200"></div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
            <svg
              className="ml-1 h-8 w-8"
              viewBox="0 0 447 514"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
            >
              <g transform="matrix(1,0,0,1,-39.1656,0.421737)">
                <g transform="matrix(1.80779,0,0,1.80779,-230.33,-199.978)">
                  <g transform="matrix(0.990908,0,0,1.00457,0.780414,-2.39614)">
                    <path d="M221.055,323.247L219.137,112.27L149.858,192.901L149.655,395.05L221.055,323.247Z" />
                  </g>
                  <g transform="matrix(1,0,0,1,0.600311,-3.65738)">
                    <path d="M395.297,252.907L288.411,252.105L219.225,325.987L324.68,325.208L395.297,252.907Z" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="mt-2 h-28 w-2 rounded-b-lg rounded-t-sm bg-gray-200"></div>
        </div>

        {/* Text Column */}
        <div className="flex-1 justify-center align-middle items-center">
          <h3 className="text-xl font-bold text-black dark:text-white">
            Currently No Experience
          </h3>
          <div className="mt-1 flex flex-col text-sm font-semibold text-gray-500 dark:text-gray-200 sm:flex-row sm:items-center">
            <p>Upskilling</p>
            <div className="h-3 rounded-full bg-gray-500 dark:bg-gray-200 w-2 mx-4 hidden sm:inline"></div>
            <p>October 2024 - September 2026 (Goal)</p>
          </div>
          <p className="mt-2 text-gray-300">
            While I haven't yet had the opportunity to gain formal work
            experience, I'm actively learning and building my skills through
            personal projects and academic studies. Currently, I’m focused on
            exploring AI and machine learning as part of my coursework, and I’m
            continually challenging myself with hands-on projects. My journey
            in tech is driven by curiosity and passion, and I'm eager to apply
            what I learn in real-world scenarios as I continue to grow (:
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
