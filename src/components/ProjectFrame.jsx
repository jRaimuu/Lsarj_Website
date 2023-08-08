import React, { useEffect, useRef, useState } from 'react'
import { useInView, motion } from "framer-motion";

function ProjectFrame({
    video1,
    video2,
    paragraph1,
    paragraph2,
    logo,
    color1,
    color2,
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [slideNum, setSlideNum] = useState(0);

    function handleRightArrow() {
        if (slideNum >= 1) {
            setSlideNum(0);
        } else {
            setSlideNum(slideNum + 1);
        }
    }

    function handleLeftArrow() {
        if (slideNum <= 0) {
            setSlideNum(1);
        } else {
            setSlideNum(slideNum - 1);
        }
    }


    return (
        <>
            <section>
                {/* <div className='absolute filter mix-blend-plus-lighter opacity-25 w-full h-screen bg-cover bg-center bg-gradient-image-both'></div> */}

                <div className='grid xl:grid-cols-2 grid-col-1 lg:gap-16 gap-8 md:px-32 px-3 pt-10 md:h-fit h-full'
                    ref={ref}>
                    {/* <div className='bg-sate-200 bg-opacity-10 min-h-fit backdrop-filter backdrop-blur-sm rounded-lg shadow-xl z-2 brder borer-slate-700'> */}

                    {/* Eco_Archive */}
                    <div className='relative'
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <div className={`absolute inset-10 opacity-70 bg-gradient-to-r ${color1} ${color2} rounded-full blur-2xl`}></div>
                        <div className='relative bg-opacity-25 h-full backdrop-filter backdrop-blur-3xl rounded-lg shadow-lg border border-gray-900 border-t-slate-700 border-r-slate-700 '>
                            <span className='flex flex-col justify-start xl:m-10 m-6'>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-row justify-start'>
                                        <h2 className='text-3xl pr-2 font-mono font-bold text-slate-200'>Eco Archive</h2>
                                        <a href="https://github.com/anthonyjdam/Eco_Archive"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-9">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                            </svg>
                                        </a>
                                    </div>
                                    <img src={logo} className='h-8 w-8 mr-3' />
                                </div>
                                <div className='flex flex-row pt-1'>
                                    <h3 className='text-blue-300 bg-blue-200 bg-opacity-10 px-1.5 rounded-full mr-2'>React</h3>
                                    <h3 className='text-amber-100 bg-amber-50 bg-opacity-10 px-1.5 rounded-full mr-2'>SQL</h3>
                                    <h3 className='text-sky-200 bg-sky-200 bg-opacity-10 px-1.5 rounded-full mr-2'>TailwindCSS</h3>
                                </div>
                                {/* <p className='relative flex xl:h-80 lg:h-fit h-full xl:items-center xl:text-base text-base text-slate-200' > */}
                                <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                    {paragraph1}
                                </p>
                                <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                    {paragraph2}
                                </p>
                            </span>
                        </div>
                    </div>

                    {/* Eco_Archive Video */}
                    <motion.div className='min-h-full h-full w-full relative'
                        style={{
                            transform: isInView ? "none" : "translateX(200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <div className='relative'>
                            {slideNum == 0 &&
                                <video autoPlay loop muted
                                    className='relative h-full w-full rounded-lg'
                                >
                                    <source src={video1} type="video/mp4" />
                                </video>
                            }
                            {slideNum == 1 &&
                                <video autoPlay loop muted
                                    className='relative h-full w-full rounded-lg'
                                >
                                    <source src={video2} type="video/mp4" />
                                </video>
                            }

                            {/* Right Button */}
                            <div className='absolute top-1/2 right-2 -translate-y-1/2'>
                                <button className='z-10 sm:bg-opacity-100 bg-opacity-50 sm:drop-shadow-[0_5px_5px_rgba(96,165,250,0.7)] drop-shadow-lg rounded-full bg-gray-200  
                                            sm:border-4 border-0 active:ring active:ring-blue-300 hover:bg-white hover:border-white'
                                    onClick={(e) => {
                                        console.log("before: ", slideNum);
                                        handleRightArrow();
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            {/* Left Button */}
                            <div className='absolute top-1/2 left-2 -translate-y-1/2'>
                                <button className='z-10 sm:bg-opacity-100 bg-opacity-50 sm:drop-shadow-[0_5px_5px_rgba(96,165,250,0.7)] drop-shadow-lg rounded-full bg-gray-200  
                                                        sm:border-4 border-0 active:ring active:ring-blue-300 hover:bg-white hover:border-white'
                                    onClick={(e) => {
                                        console.log("before: ", slideNum);
                                        handleLeftArrow();
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svgh" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


        </>
    )
}

export default ProjectFrame