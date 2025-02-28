import React from "react";

function ContactPage() {
  return (
    <section id="contact" className="bg-[#404040] pb-40 pt-70 scroll-smooth lg:pr-60 lg:pl-60 p-3 w-full relative">
      <div className="flex w-full items-center pb-10">
        <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
          Contact
        </h3>
        <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
      </div>
      
      <div className="max-w-3xl">
        <p className="max-w-lg pb-8 text-gray-600 dark:text-gray-300">
          Wanna connect? Drop me an email or shoot me a message on LinkedIn
          (linked below). I'm not very good at reaching out myself so I love
          when others do it first!
        </p>
      
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex gap-3">
          <a
  href="/Bilal_Resume.pdf"
  download
  onClick={() => setIsOpen(false)}
  className="relative flex h-12 w-40 items-center justify-center font-bold mx-auto overflow-hidden border-2 border-white bg-transparent text-white shadow-2xl transition-all duration-500 group hover:text-white hover:border-transparent"
>
  <span className="relative z-10">Resume</span>
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#8ACA4F] to-[#B6E89A] transition-transform duration-500 scale-y-0 group-hover:scale-y-100 origin-bottom transform" />
  </div>
</a>

            <button className="relative h-12 w-28 font-bold overflow-hidden border-2 border-white bg-transparent text-white shadow-2xl transition-all duration-500 group hover:text-white hover:border-transparent">
              <span className="relative z-10">Mail</span>
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8ACA4F] to-[#B6E89A] transition-transform duration-100 scale-y-0 group-hover:scale-y-100 origin-bottom" />
              </div>
            </button>
          </div>

          <ul className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-4">
            <li>
              <a
                href="https://github.com/EjramWay"
                target="_blank"
                rel="noopener noreferrer"
                title="Github profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-8 w-8 dark:fill-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/bilal-rukundi/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn profile"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 382 382"
                  xml:space="preserve"
                  className="h-8 w-8 dark:fill-white"
                >
                  <path
                    className="fill-[#0077B7]"
                    d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;