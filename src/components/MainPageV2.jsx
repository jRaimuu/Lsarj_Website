import React, { useEffect, useRef } from 'react';
import Spline from "@splinetool/react-spline";
import NavigationBar from "./NavigationBar";
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';
import { useInView } from "react-intersection-observer";
import MoonTexture from "../assets/MoonTexture.png";
import ColorStreak from "../assets/ColorStreak.png";
import StarTexture from "../assets/BGStarTexture.jpg"
import { motion, useAnimation } from 'framer-motion';

/**
 * Self notes:
 * If spline model does not render then you must update it first: npm install @splinetool/runtime@latest
 * 
 * 
 */

function MainPageV2() {

  const [text] = useTypewriter({
    words: ['Computer Science Student', 'Software Developer', 'Problem Solver', 'Designer'],
    loop: {},
  });

  const { ref, inView } = useInView({ triggerOnce: true });

  const controls = useAnimation();
  const scrollRef = useRef();

  useEffect(() => {
    // calculates container opacity based on the current scroll positon and height of the container 
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = window.scrollY;
        const containerHeight = scrollRef.current.offsetHeight;
        const opacity = 1 - scrollPosition / containerHeight;
        controls.start({ opacity: opacity >= 0 ? opacity : 0 }); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
      <NavigationBar />

      <main
        className="bg-gray-950 min-w-fit h-screen lg:min-h-screen min-h-[800px] w-screen max-w-full overflow-hidden" id="home">

        <motion.div
          id="home"
          ref={scrollRef}
          animate={controls}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className='fixed opacity-25 w-full h-screen bg-cover bg-center'>
            <img src={StarTexture} className="w-full h-full" />
          </div>

          {/* Corner Stars */}
          <div className="flex fixed overflow-x-visible justify-center items-center">
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
            <div className="fixed lg:w-moonW lg:h-moonH -right-24 -top-80
            bg-indigo-200 rounded-full filter blur-sm opacity-60"
            >
              <img src={MoonTexture}
                className='fixed mix-blend-difference rotate-12 opacity-100 w-screen h-full rounded-full' />
            </div>
            <div className="fixed lg:w-blurW lg:h-blurH2 -right-24 -top-80
            bg-violet-200 rounded-full blur-2xl opacity-70"
            >

            </div>
            <img
              className="fixed top-0 -right-52 rounded-full filter mix-blend-difference opacity-100 blur-2xl bottom-0"
              src={ColorStreak}
            />
          </div>



          <div className="relative flex flex-col justify-evenly min-h-screen h-full top-8">

            {/* Intro Text */}
            <div className="relative top-0 bottom-0 max-w-xl px-3 mx-auto m-4 pb-16">
              <div className="absolute w-6 h-2 pt-6 xs:ml-[302px] ml-28 xs:mt-1 -top-1 xs:-top-0 mt-20 z-10
            bg-[#84DCCF] rounded-full blur-sm  animate-pulse"
              >
              </div>
              <h1 className="pb-1 font-bold text-7xl tracking-wide text-white">
                Liam Sarjeant
              </h1>
              <span className="text-lg font-mono py-4 text-violet-400">
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
                className="absolute w-[480px] h-[480px] z-10 md:w-blurW md:h-blurH2 -bottom-36 md:-bottom-64"
              >


                {/* <Suspense
                fallback={
                  <div>
                    Loading...
                  </div>
                }
              > */}
                <Spline scene="https://draft.spline.design/lbYUU1g7sZ3i2Lg3/scene.splinecode"
                  onClick={(e) => {
                    // handleOnHover(e);
                  }}
                />
                {/* </Suspense> */}
              </div>
            </div>
          </div>

          <section className='lg:block hidden fixed top-10'>
            <div className=' opacity-25 w-full h-[264px] bg-cover bg-center '></div>

            {/* Comet */}
            <div className="sm:h-48 sm:static h-0 overflow-hidden relative">
              <div className="absolute w-16 h-[500px] left-[200px] -bottom-44 -rotate-45 -skew-y-12 
                    bg-cyan-800 rounded-full blur-3xl opacity-90 ">
              </div>
              <div className="absolute w-16 h-80 left-[210px] -bottom-40 -rotate-45 -skew-y-12 
                    bg-indigo-950 rounded-full blur-2xl opacity-75">
              </div>
              <div className="absolute w-16 h-28 left-[340px] -bottom-44 -rotate-45 -skew-y-12 
                    bg-white rounded-full blur-xl opacity-50">
              </div>
              <div className="absolute w-6 h-32 left-[320px] -bottom-36 -rotate-45 -skew-y-12 
                    bg-white rounded-full blur-xl opacity-50">
              </div>
            </div>
          </section>

        </motion.div>
      </main>


    </>
  );
}

export default MainPageV2;
