// import React, { useState } from "react";

// export default function AboutPage() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section className="bg-[#404040] flex flex-col min-h-screen w-full relative p-3 lg:p-60">
//       {/* Mobile/Tablet Navigation Section */}
//       <section className="bg-[#404040] relative">
//         {/* Mobile Menu – only visible on small screens */}
//         <section
//           id="Menu"
//           className={`w-full h-full bg-[#283F13]/70 z-50 p-0 m-0 backdrop-blur-md transition-all duration-100 fixed lg:hidden ${
//             isOpen ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//         >
//           <div className="fixed top-0 right-0 z-30 h-screen w-screen bg-primary-800/70 backdrop-blur-md transition-transform flex flex-col justify-center gap-8 p-16 pb-32 md:w-1/2">
//             <div className="mb-8 flex items-center justify-between">
//               <a href="/">
//                 <svg
//                   className="w-8 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                   <polyline points="5 12 3 12 12 3 21 12 19 12" />
//                   <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
//                 </svg>
//               </a>
//               <button
//                 className="text-primary-800 transition-colors dark:text-white text-white"
//                 aria-label="Toggle light mode"
//                 title="Toggle light mode"
//               >
//                 {/* Replace these with your actual toggle icons if needed */}
//                 <svg
//                   className="w-8 transition-colors hover:text-yellow-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                   <circle cx="12" cy="12" r="4" />
//                   <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
//                 </svg>
//               </button>
//             </div>
//             {/* Mobile Menu Links */}
//             <a
//               className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
//               href="/#about"
//             >
//               about
//               <span className="w-6 text-white/50">
//                 {/* Icon SVG */}
//               </span>
//             </a>
//             <a
//               className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
//               href="/#projects"
//             >
//               projects
//               <span className="w-6 text-white/50">
//                 {/* Icon SVG */}
//               </span>
//             </a>
//             <a
//               className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
//               href="/#work"
//             >
//               work
//               <span className="w-6 text-white/50">
//                 {/* Icon SVG */}
//               </span>
//             </a>
//             <a
//               className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
//               href="/#toolbox"
//             >
//               toolbox
//               <span className="w-6 text-white/50">
//                 {/* Icon SVG */}
//               </span>
//             </a>
//             <a
//               className="uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50"
//               href="/#contact"
//             >
//               contact
//               <span className="w-6 text-white/50">
//                 {/* Icon SVG */}
//               </span>
//             </a>
//             <button className="relative h-12 w-40 font-bold mx-auto overflow-hidden border-2 border-white bg-transparent text-white shadow-2xl transition-all duration-500 group hover:text-white hover:border-transparent">
//               <span className="relative z-10">Resume</span>
//               <div className="absolute inset-0 -z-10 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#8ACA4F] to-[#B6E89A] transition-transform duration-100 scale-y-0 group-hover:scale-y-100 origin-bottom" />
//               </div>
//             </button>
//           </div>
//         </section>

//         {/* Mobile Header with Burger Icon – only visible on small screens */}
//         <header className="fixed top-0 left-0 z-60 flex h-20 w-full items-center justify-end px-4 sm:px-8 lg:hidden">
//           <button
//             className="outline-none transition-all duration-300 transform ease-in-out"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg
//               className={`hover:cursor-pointer h-[40px] w-[42px] text-white font-bold transition-transform duration-300 ${
//                 isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
//               }`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="3"
//                   d="M6 6L18 18M6 18L18 6"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="3"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </header>

//         {/* Desktop Navigation – only visible on large screens */}
//         <nav className="hidden lg:block absolute items-center justify-center pt-50 h-full w-20">
//           <ul className="fixed flex h-screen flex-col gap-10 text-primary-800 dark:text-white lg:w-20">
//             <li>
//               <a href="#about" title="About">
//                 <svg
//                   className="w-6 hover:text-primary-700 dark:hover:text-primary-500 transition"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                   <circle cx="12" cy="7" r="4" />
//                   <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
//                 </svg>
//               </a>
//             </li>
//             {/* Repeat similar list items for projects, work, toolbox, and contact */}
//           </ul>
//         </nav>
//       </section>

//       {/* Content Section */}
//       <div className="mt-8">
//         <div className="flex w-full items-center">
//           <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
//             About me
//           </h3>
//           <div className="mx-8 h-0.5 w-full rounded bg-gray-200"></div>
//         </div>

//         {/* Wrap text and image in a responsive flex container */}
//         <div className="flex flex-col lg:flex-row mt-4 text-gray-600 dark:text-gray-300 gap-8">
//           {/* Text block */}
//           <div className="flex-1">
//             <p>
//               Hey! My name is Wayne. I'm a programmer and an AI/ML student who enjoys exploring the world of technology. Outside of studying, I spend my time coding, reading, working out, and sometimes just staring at the sky, lost in thought. I find peace in the little things—cold nights, the sound of rain, and the quiet stillness of nature.
//             </p>
//             <br />
//             <p>
//               When it comes to building things, I believe in simplicity. I like clean, minimal, and well-structured code. Whether it's designing a UI or organizing a database, I prefer solutions that are efficient and easy to understand. There's something satisfying about creating something from scratch and watching it all come together.
//             </p>
//             <br />
//             <p>Here's a picture of me if you were wondering what I look like:</p>
//           </div>

//           {/* Image block – on large screens, this will be on the right */}
//           <div className="flex-1 flex justify-end">
//             <div className="mt-8 max-w-xs pr-5">
//               <div className="relative">
//                 <div className="group relative z-10 transition-transform hover:translate-x-3 hover:translate-y-3">
//                   <div className="relative">
//                     <img
//                       alt="A picture of me"
//                       src="src/mainFiles/AboutPage/ImgMe/MeIMG3.jpg"
//                       className="rounded brightness-90 transition group-hover:brightness-100 group-hover:saturate-100"
//                     />
//                   </div>
//                   <div className="absolute top-0 h-[98%] w-full bg-primary-800/30 transition-colors group-hover:bg-transparent"></div>
//                 </div>
//                 <div
//                   className="absolute top-0 mt-4 ml-6 h-full w-full from-primary-800 dark:from-white"
//                   style={{
//                     backgroundSize: "20px 20px",
//                     backgroundImage:
//                       "linear-gradient(to right, var(--tw-gradient-from) 1px, transparent 1px), linear-gradient(to bottom, var(--tw-gradient-from) 1px, transparent 1px)",
//                   }}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
