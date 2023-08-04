import React from "react";
import AboutPageV1 from "../AboutPageV1";
import Spline from "@splinetool/react-spline";
import NavigationBar from "../NavigationBar";
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';
import AboutPage from "../AboutPage";
import ProjectsPage from "./ProjectsPage";


function MainPageV2() {

  const [text] = useTypewriter({
    words: ['Computer Science Student', 'Developer', 'Designer', "Tech Enthusiast"],
    loop: {},
  })


  return (
    <>

      <NavigationBar />

      {/* <main className="bg-gray-950 min-h-screen h-full min-w-full w-screen"> */}
      <main className="bg-gray-950 min-h-screen w-screen max-w-full overflow-hidden">

        {/* <img src="https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg"
            className='absolute filter mix-blend-plus-lighter opacity-[100%] -scale-x-100 w-screen h-screen' /> */}
        {/* <div
          className='absolute filter mix-blend-plus-lighter opacity-[25%] w-full h-screen bg-cover bg-center
                    bg-[linear-gradient(to_top,rgba(13,13,13,127),rgba(0,0,0,0)),url("https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg")]'
        >
        </div> */}

        <div className='absolute filter mix-blend-plus-lighter opacity-25 w-full h-screen bg-cover bg-center bg-gradient-image-top'></div>


        {/* <div className='fixed w-blurW h-32 border border-t-transparent bg-sky-400 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-40 '></div> */}

        {/* Corner Stars */}
        {/* changed from fixed to relative */}
        <div className="flex overflow-hidden justify-center items-center">
          <div className="absolute w-6 h-6 top-8 left-32 -skew-x-12 
              bg-white rounded-full blur-sm opacity-60"
          >
          </div>
          <div className="absolute w-4 h-4 left-40 top-52 skew-x-12 
              bg-blue-200 rounded-full blur-sm opacity-50"
          >
          </div>
          <div className="absolute w-8 h-8 left-80 top-24 skew-x-12 
              bg-white rounded-full blur-sm opacity-70"
          >
          </div>
        </div>

        {/* Moon */}
        {/* changed from fixed to relative */}
        <div className="relative bg-red-400 flex justify-end items-center">
          <div className="absolute lg:w-blurW lg:h-blurH2 -right-24 -top-80
            bg-indigo-200 rounded-full filter blur-sm opacity-60"
          >
            <img src="https://w7.pngwing.com/pngs/691/438/png-transparent-desktop-blue-space-nebula-space-texture-blue-atmosphere.png"
              className='absolute filter mix-blend-difference rotate-12 opacity-100 w-screen h-full rounded-full' />
          </div>
          <div className="absolute lg:w-blurW lg:h-blurH2 -right-24 -top-80
            bg-violet-200 rounded-full filter blur-2xl opacity-70 mix-blend-lighten hover:animate-animateBlur"
          >
          </div>
          <img
            className="absolute top-0 -right-52 rounded-full filter opacity-100 blur-2xl bottom-0 mix-blend-difference"
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
          <div className="relative top-0 bottom-0 max-w-xl px-3 mx-auto m-4 pb-16">
            <div className="absolute w-6 h-2 pt-7 xs:ml-[302px] ml-28 xs:mt-1 mt-20 z-10
            bg-cyan-300 rounded-full blur-sm  animate-pulse"
            >
            </div>
            <h1 className="pb-1 font-bold text-7xl tracking-wide text-white">
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
          {/* -bottom-20 */}
          <div className="relative flex justify-center">
            <div className="absolute -bottom-20 lg:w-80 lg:h-80
            bg-violet-400  rounded-full filter blur-2xl opacity-20"
            >
            </div>
            {/* <div className="absolute -bottom-36 sm:-bottom-72 md:-bottom-96 lg:-bottom-64 z-10 lg:w-blurW lg:h-blurH2"> */}
            <div className="absolute w-[500px] h-[500px] z-10 md:w-blurW md:h-blurH2 -bottom-36 md:-bottom-64">
              <Spline scene="https://draft.spline.design/IGkZ5PqnKyTs5cPN/scene.splinecode" />
              {/* <Spline scene="https://draft.spline.design/MwCVeXrZbvhoMES0/scene.splinecode" /> */}
            </div>
          </div>
        </div>



        {/* <div>
          <img
            className="absolute -left-64 rotate-180 rounded-full filter opacity-100 blur-2xl bottom-0 mix-blend-difference"
            src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
          />
        </div> */}

        {/* <body className="bg-gray-950 h-60">
          <div>
            <img
              className="absolute skew-y-12 skew-x-12 scale-x-50 -bottom-32 -left-[350px] -rotate-180 rounded-full filter blur-2xl mix-blend-difference"
              src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
            />
          </div>
          <div className="absolute w-16 h-28 left-[410px] -bottom-36 -rotate-45 -skew-y-12 
              bg-white rounded-full blur-xl opacity-50">
          </div>
          <div className="absolute w-6 h-40 left-[410px] -bottom-36 -rotate-45 -skew-y-12 
              bg-white rounded-full blur-xl opacity-50 ">
          </div>
        </body> */}


      </main>


      <AboutPageV1 />
    </>
  );
}

export default MainPageV2;
