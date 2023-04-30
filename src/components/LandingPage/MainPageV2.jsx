import React from "react";
import AboutPage from "../AboutPage";
import Spline from "@splinetool/react-spline";
import NavigationBar from "../NavigationBar";
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';


function MainPageV2() {

  const [text] = useTypewriter({
    words: ['Computer Science Student', 'Developer', 'Designer', "Tech Enthusiast"],
    loop: {},
  })


  return (
    <>

      <NavigationBar />

      <main className="bg-gray-950 min-h-screen h-full min-w-full w-full">

        {/* <div className='fixed w-blurW h-32 border border-t-transparent bg-sky-400 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-40 '></div> */}

        {/* Corner Stars */}
        <div className="flex overflow-hidden justify-center items-center">
          <div className="fixed w-6 h-6 top-8 left-32 -skew-x-12 
              bg-white rounded-full blur-sm opacity-60"
          >
          </div>
          <div className="fixed w-4 h-4 left-40 top-52 skew-x-12 
              bg-blue-200 rounded-full blur-sm opacity-50"
          >
          </div>
          <div className="fixed w-8 h-8 left-80 top-24 skew-x-12 
              bg-white rounded-full blur-sm opacity-70"
          >
          </div>
        </div>

        {/* Moon */}
        <div className="flex overflow-hidden justify-end items-center">
          <div className="fixed lg:w-blurW lg:h-blurH2 -right-24 -top-80
            bg-indigo-200 rounded-full filter blur-sm opacity-60"
          >
          </div>
          <div className="fixed lg:w-blurW lg:h-blurH2 -right-24 -top-80
            bg-violet-200 rounded-full filter blur-2xl opacity-70 mix-blend-lighten hover:animate-animateBlur"
          >
          </div>
          <img
            className="fixed top-0 -right-52 rounded-full filter opacity-100 blur-2xl bottom-0 mix-blend-difference"
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

        <div className="relative flex flex-col justify-evenly min-h-screen h-full top-8">

          {/* Intro Text */}
          <div className="relative top-0 bottom-0 max-w-xl mx-auto m-4 pb-16">
            <div className="absolute w-4 h-6 pt-6 ml-8 mt-1 z-10
            bg-cyan-300 rounded-full blur-sm mi animate-pulse"
            >
            </div>
            <h1 className="pb-1 font-bold text-6xl tracking-wide text-white">
              Liam Sarjeant
            </h1>
            <span className="text-lg font-space py-4 text-violet-400">
              {text}
            </span>
            <span className="text-cyan-300 opacity-75">
              <Cursor
                cursorStyle="__"
              />
            </span>
          </div>

          {/* Node Graph */}
          <div className="relative flex justify-center">
            <div className="absolute -bottom-32 lg:w-96 lg:h-96 
            bg-violet-400  rounded-full filter blur-3xl opacity-20"
            >
            </div>
            <div className="absolute -bottom-36 sm:-bottom-72 md:-bottom-96 lg:-bottom-64 z-10 lg:w-blurW lg:h-blurH2">
              <Spline scene="https://draft.spline.design/IGkZ5PqnKyTs5cPN/scene.splinecode" />
              {/* <Spline scene="https://draft.spline.design/MwCVeXrZbvhoMES0/scene.splinecode" /> */}
            </div>
          </div>
        </div>



        <div>
          <img
            className="fixed -left-64 rotate-180 rounded-full filter opacity-100 blur-2xl bottom-0 mix-blend-difference"
            src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
          />
        </div>

      </main>

      <AboutPage />
    </>
  );
}

export default MainPageV2;
