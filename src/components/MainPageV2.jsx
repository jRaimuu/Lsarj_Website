import React from "react";
import Spline from "@splinetool/react-spline";
import NavigationBar from "./NavigationBar";
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import { useInView } from "react-intersection-observer";
import EndFooter from "./EndFooter";
import MoonTexture from "../assets/MoonTexture.png";
import ColorStreak from "../assets/ColorStreak.png";


function MainPageV2() {

  const [text] = useTypewriter({
    words: ['Computer Science Student', 'Developer', 'Designer'],
    loop: {},
  })

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>

      <NavigationBar />

      {/* <main className="bg-gray-950 min-h-screen h-full min-w-full w-screen"> */}
      <main className="bg-gray-950 min-w-fit h-screen lg:min-h-screen min-h-[800px] w-screen max-w-full overflow-hidden"
        id="home">

        <div className='absolute filter mix-blend-plus- opacity-25 w-full h-screen bg-cover bg-center bg-gradient-image-top'></div>

        {/* Corner Stars */}
        <div className="flex relative overflow-x-visible justify-center items-center">
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
        <div className="relative flex justify-end items-center">
          <div className="absolute lg:w-blurW lg:h-blurH2 -right-24 -top-80
            bg-indigo-200 rounded-full filter blur-sm opacity-60"
          >
            <img src={MoonTexture}
              className='absolute filter mix-blend-difference rotate-12 opacity-100 w-screen h-full rounded-full' />
          </div>
          <div className="absolute lg:w-blurW lg:h-blurH2 -right-24 -top-80
            bg-violet-200 rounded-full blur-2xl opacity-70 hover:animate-animateBlur"
          >

          </div>
          <img
            className="absolute top-0 -right-52 rounded-full filter mix-blend-difference opacity-100 blur-2xl bottom-0"
            src={ColorStreak}
          />

        </div>

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
            <div className="absolute md:-bottom-[75px] bottom-0 md:w-80 w-44 md:h-80 h-44 bg-violet-400  rounded-full blur-2xl opacity-20"
            >
            </div>
            {/* <div className="absolute -bottom-36 sm:-bottom-72 md:-bottom-96 lg:-bottom-64 z-10 lg:w-blurW lg:h-blurH2"> */}
            <div
              ref={ref}
              className="absolute w-[500px] h-[500px] z-10 md:w-blurW md:h-blurH2 -bottom-36 md:-bottom-64"
            >


              <Spline scene="https://draft.spline.design/uP58alhiH69oZepU/scene.splinecode"
                onClick={(e) => {
                  // handleOnHover(e);
                }}

              />


              {/* {inView && ( */}
              {/* )} */}
            </div>
          </div>
        </div>

      </main>


    </>
  );
}

export default MainPageV2;
