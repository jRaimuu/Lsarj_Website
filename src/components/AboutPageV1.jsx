import React, { useRef } from 'react'
import ProjectsPage from './LandingPage/ProjectsPage'
import { motion, useScroll, useTransform } from "framer-motion"
import Eco_Archive from "../assets/Eco_Archive.png";

function AboutPage() {

    // const targetRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: targetRef,
    //     offset: ["0 1", "1 1.1"],
    // });

    // const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.5, 1])


    return (
        <>
            <main className='bg-gray-950 min-h-screen h-full text-white'>


                {/* Star Overlay */}
                {/* <div className='absolute bg-gradient-to-t from-amber-300 to-red-400 filter mix-blend-overlay opacity-[100%] w-screen h-screen bg-cover bg-center '>
                    <img src="https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg"
                        className=''
                    />
                </div> */}

                {/* <div className='absolute bg-gradient-to-b from-gray-900 to-gray-950 filter opacity-[100%] w-screen h-screen bg-cover bg-center '>
                    <img src="https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg"
                        className='mix-blend-overlay'
                    />
                </div> */}

                {/* <div className='absolute filter mix-blend-plus-lighter opacity-25 w-full h-screen bg-cover bg-center bg-gradient-image-bottom'></div> */}

                {/* <div
                    className='absolute filter mix-blend-plus-lighter opacity-[25%] w-full h-screen bg-cover bg-center
                    bg-[linear-gradient(to_bottom,rgba(13,13,13,127),rgba(0,0,0,0)),url("https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg")]'
                >
                </div> */}

                <section>
                    <div className='absolute filter mix-blend-plus-lighter opacity-25 w-full h-screen bg-cover bg-center bg-gradient-image-bottom'></div>

                    {/* Comet */}
                    <div className="sm:h-48 sm:static h-0 overflow-hidden relative">
                        <div className="absolute w-16 h-[500px] left-[200px] -bottom-44 -rotate-45 -skew-y-12 
                    bg-cyan-800 rounded-full blur-3xl opacity-90 ">
                        </div>
                        <div className="absolute w-16 h-80 left-[210px] -bottom-40 -rotate-45 -skew-y-12 
                    bg-indigo-950 rounded-full blur-2xl opacity-75 filter mix-blend-lighten">
                        </div>
                        <div className="absolute w-16 h-28 left-[340px] -bottom-44 -rotate-45 -skew-y-12 
                    bg-white rounded-full blur-xl opacity-50">
                        </div>
                        <div className="absolute w-6 h-32 left-[320px] -bottom-36 -rotate-45 -skew-y-12 
                    bg-white rounded-full blur-xl opacity-50 filter mix-blend-plus-lighter">
                        </div>
                    </div>
                </section>

                {/* Starry Overlay */}
                <div className='relative opacity-50'>
                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
                        className="absolute h-[900px] w-[1250px] -top-72 right-0 object-cover lg:opacity-100 opacity-0"
                    />
                </div>

                <section>
                    <div className='absolute filter mix-blend-plus-lighter opacity-25 w-full h-screen bg-cover bg-center bg-gradient-image-both'></div>

                    {/* Personal Projects */}
                    <h1 className='flex justify-start sm:p md:mx-32 mx-3 my-3 sm:text-5xl text-4xl font-bold tracking-wide'>PERSONAL PROJECTS</h1>

                    <div className='grid lg:grid-cols-2 grid-flow-col-1 lg:gap-16 gap-8 md:px-32 px-3 pt-10 md:h-fit h-full'>
                        {/* <div className='bg-sate-200 bg-opacity-10 min-h-fit backdrop-filter backdrop-blur-sm rounded-lg shadow-xl z-2 brder borer-slate-700'> */}
                        {/* Eco Archive */}
                        <div className='relative'>
                            <div className='absolute inset-10 opacity-70 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full blur-2xl'></div>
                            <div className='relative bg-opacity-25 min-h-fit backdrop-filter backdrop-blur-3xl rounded-lg shadow-lg border border-gray-900 border-t-slate-700 border-r-slate-700  border-opacity-100'>
                                <span className='flex flex-col justify-start m-4'>
                                    <div className='flex flex-row justify-between'>
                                        <h2 className=' text-3xl font-mono font-bold text-slate-200'>Eco Archive</h2>
                                        <img src={Eco_Archive}
                                            className='h-8 w-8 mr-3' />
                                    </div>
                                    <div className='flex flex-row pt-1'>
                                        <h3 className='text-blue-300 bg-blue-200 bg-opacity-10 px-1.5 rounded-full mr-2'>React.js</h3>
                                        <h3 className='text-amber-100 bg-amber-50 bg-opacity-10 px-1.5 rounded-full mr-2'>SQL</h3>
                                        <h3 className='text-sky-200 bg-sky-200 bg-opacity-10 px-1.5 rounded-full mr-2'>TailwindCSS</h3>
                                    </div>
                                    <p className='pt-4 text-slate-200' >
                                        Developed a full-stack web application with a database management system using MySQL to retrofit legacy information storage processes,
                                        enhancing data security, efficiency and accessibility for both organizational operations and customer interactions. The goal was to ...address these challenges..
                                        and enable users to make actionable and insightful decisions on managing the recycling depot. Also, talk about charity. THis project challenged
                                        me to learn...
                                    </p>
                                </span>
                            </div>
                        </div>

                        <div className='min-h-fit'>
                            <h1 className=' font-extrabold'>Video Placeholder</h1>
                        </div>

                        {/* Toy Store */}
                        <div className='relative bg-slate-900 min-h-fit backdrop-filter backdrop-blur-sm rounded-lg shadow-xl border border-slate-700'>
                            <h2 className='relative flex justify-start m-3 text-3xl font-mono font-bold text-blue-400'>Toy Store Java Application</h2>
                            <p className='m-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sequi eaque dolores nisi omnis impedit soluta minus,
                                vel officiis illo nihil ipsum aperiam, corrupti assumenda commodi sit aut perspiciatis beatae.
                            </p>
                        </div>
                        <div className='min-h-fit'>
                            <h1 className=' font-extrabold'>Video Placeholder</h1>
                        </div>
                    </div>


                </section>





                {/* Planet Section */}
                <section
                    // ref={targetRef}
                    // style={{
                    //     opacity
                    // }}
                    className='relative flex justify-center items-center h-full overflow-hidden'
                >
                    <div className='absolute filter mix-blend-plus-lighter opacity-25 w-full h-screen bg-cover bg-center bg-gradient-image-both'></div>

                    {/* <img src="https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg"
                        className='absolute filter mix-blend-soft-light opacity-75 w-screen h-screen bg-cover bg-center' /> */}
                    <div className='absolute top-24 scale-x-150 w-full h-screen rounded-t-full  blur-2xl bg-cyan-800 '>
                    </div>
                    <div className='absolute top-36 scale-x-150 w-full h-screen rounded-t-full  blur-2xl bg-violet-900'>
                    </div>
                    <div className='relative top-32 scale-x-150 w-full h-screen rounded-t-full 
                                    bg-gradient-to-b from-gray-900 to-gray-950 border-2 border-opacity-75 border-blue-400 text-white flex justify-center items-center'>
                        <img src="https://www.solarsystemscope.com/textures/download/2k_haumea_fictional.jpg"
                            className='absolute filter mix-blend-soft-light opacity-10 w-screen h-screen rounded-t-full' />
                    </div>
                    {/* https://c4.wallpaperflare.com/wallpaper/566/308/22/landed-on-outer-earth-wallpaper-preview.jpg
                    https://w7.pngwing.com/pngs/691/438/png-transparent-desktop-blue-space-nebula-space-texture-blue-atmosphere.png 
                    https://papers.co/wallpaper/papers.co-mo25-landed-on-outer-earth-blue-space-star-texture-25-wallpaper.jpg*/}
                </section>


                {/* <motion.div
                    transition={{
                        type: 'tween',
                        ease: 'easeIn',
                        duration: 2,
                    }}

                >
                    <h1 className='font-extrabold text-6xl h-full bg-slate-500'>YO</h1>
                </motion.div> */}

                {/* <div className="flex overflow-hidden justify-end items-center">
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
                </div> */}



                {/* <div>
                    <img
                        className="fixed -left-64 rotate-180 rounded-full filter opacity-100 blur-2xl bottom-0 mix-blend-difference"
                        src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
                    />
                </div> */}
            </main>

            <ProjectsPage />

        </>
    )
}

export default AboutPage