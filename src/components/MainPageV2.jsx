import React from "react";
import AboutPage from "./AboutPage";
import Spline from "@splinetool/react-spline";

function MainPageV2() {
  return (
    <>
      <main className="bg-gray-950 min-h-screen h-full min-w-full w-full">
        {/* <div className='fixed w-blurW h-32 border border-t-transparent bg-sky-400 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-40 '></div> */}
        <nav className="sticky top-0 z-20 flex justify-center justify-content-evenly opacity-80 p-4">
          <div className="bg-zinc-900 flex gap-16  rounded-full">
            <button className="text-zinc-500 rounded-full px-4 py-1 hover:text-orange-50 hover:bg-zinc-800">
              HOME
            </button>
            <button className="text-zinc-500 px-4 py-1 rounded-full hover:text-orange-50 hover:bg-zinc-800">
              PROJECTS
            </button>
            <button className="text-zinc-500 px-4 py-1 rounded-full hover:text-orange-50 hover:bg-zinc-800">
              ABOUT
            </button>
          </div>
        </nav>

        <div className="flex overflow-hidden justify-end items-center">
          <div
            className="fixed lg:w-blurW lg:h-blurH2 
                     bg-indigo-200  rounded-full filter blur-sm opacity-60 mix-blend- hover:animate-animateBlur"
          ></div>
          <div
            className="fixed lg:w-blurW lg:h-blurH2
                     bg-violet-200  rounded-full filter blur-3xl opacity-70 mix-blend-lighten hover:animate-animateBlur"
          ></div>

          {/* <div className='fixed lg:w-blurW lg:h-80 bottom-0
                     bg-purple-100  rounded-full filter mix-blend-lighten blud-xl opacity-70 hover:animate-animateBlur'></div> */}
          <img
            className="fixed top-0 rounded-full filter opacity-100 blur-2xl bottom-0 mix-blend-difference"
            src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
          />
        </div>

        <div className="flex overflow-hidden justify-center items-center">
          <div
            className="absolute bottom-24 lg:w-96 lg:h-96 
                     bg-violet-400  rounded-full filter blur-3xl opacity-20 hover:animate-animateBlur"
          ></div>
          <div className="absolute z-10 -bottom-16 lg:w-blurW lg:h-blurH2">
            <Spline scene="https://prod.spline.design/lTLAK28VWewyhHEx/scene.splinecode" />
          </div>
          <img
            className="fixed -left-64 rotate-180 rounded-full filter opacity-100 blur-2xl bottom-0 mix-blend-difference"
            src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
          />
        </div>

        {/* <div className='overflow-hidden flex justify-center items-center fixed'>
                    <div className=' -top-96 -left-96 sm:w-96 sm:h-96 lg:w-blurW lg:h-blurH2 
                     bg-indigo-200  rounded-full filter blur-fsm opacity-60 hover:animate-animateBlur'></div>
                    <div className=' -top-96 -left-96 sm:left-96 sm:-top-64 sm:w-96 sm:h-96 lg:w-blurW lg:h-blurH2
                     bg-purple-200  rounded-full filter mix-blend-lighten blur-f3xl opacity-70 hover:animate-animateBlur'></div>
                    {/* <img className='flex filter rounded-full top-0 -left-96'
                        src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"/>
                </div> */}

        <div className="flex justify-start flex-col max-w-xl mx-auto p-4 py-48">
          <h1 className="font-bold text-white text-5xl">Liam Sarjeant</h1>
          <body className="text-orange-50 py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            in vestibulum sapien, id rutrum sapien. Phasellus condimentum, dui
            vel tristique euismod, mauris mauris venenatis nisi, nec blandit
            augue velit in lacus. Praesent sed eros vel risus tristique aliquet
            eget ac dolor.
          </body>
        </div>
      </main>
      <AboutPage />
    </>
  );
}

export default MainPageV2;
