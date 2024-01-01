import React, { useEffect, useRef, useState } from 'react'
import { useInView, motion } from "framer-motion";
import Eco_Archive from "../assets/Eco_Archive.png";
import ActiveLiving from "../assets/ActiveLiving.jpg";
import ToyStore from "../assets/ToyStore.jpg";
import ThematleLogo from "../assets/ThematleLogo.png";
import ThematleVideo from "../assets/ThematleVideo.mp4";
import IcalVideo from "../assets/IcalVideo.mp4";
import OpenGymVideo from "../assets/OpenGymVideo.mp4";
import AddToy from "../assets/AddToy.png";
import SearchBuy from "../assets/SearchBuy.png";
import RemoveToy from "../assets/RemoveToy.png";
import Tables2 from "../assets/Tables2.mp4";
import Pickup from "../assets/Pickup1.mp4";
import Dashboard3 from "../assets/Dashboard3.mp4";
import StarOverlay from "../assets/StarOverlay.png";
import StarTexture from "../assets/BGStarTexture.jpg"


function ProjectsPage() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true });

    const [slideNum1, setSlideNum1] = useState(0);
    const [slideNum2, setSlideNum2] = useState(0);

    useEffect(() => {
        console.log(slideNum2);
    }, [slideNum2])

    return (
        <>
            <main className='pt-36 bg-gray-950 min-h-screen min-w-fit h-full text-white overflow-x-hidden'>


                {/* Starry Overlay */}
                <div className='relative opacity-50'>
                    <img src={StarOverlay}
                        className="absolute h-[1000px] w-[1250px] -top-80 right-0 lg:inline hidden"
                    />
                </div>

                {/* Open Gym */}
                <section
                    id="openGym"
                    className='relative'
                >

                    {/* Personal Projects */}
                    <h1 className='sticky top-0 flex justify-start sm:p md:mx-32 mx-3 my-3 sm:text-5xl text-4xl font-bold tracking-wide '>PERSONAL PROJECTS</h1>

                    <div className='absolute opacity-25 w-full h-full bg-cover bg-center'></div>
                    <div className='grid xl:grid-cols-2 grid-col-1 lg:gap-16 gap-8 md:px-32 px-3 pt-10 md:h-fit h-full'
                        ref={ref2}>

                        <div className='relative overflow-hidden'
                            style={{
                                transform: isInView2 ? "none" : "translateX(400px)",
                                opacity: isInView2 ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <div className='absolute inset-16 opacity-70 bg-gradient-to-tr from-blue-400 via-violet-400 to-cyan-500 rounded-full blur-3xl'></div>
                            <div className='relative bg-opacity-25 backdrop-blur-lg h-full rounded-lg border border-gray-900 border-t-slate-700 border-r-slate-700 '>
                                <span className='flex flex-col justify-start xl:m-10 m-6'>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row justify-start'>
                                            <h2 className='text-3xl pr-2 font-mono font-bold text-slate-200'>Open Gym Schedule</h2>
                                            {/* <a href="https://github.com/jRaimuu/Toy_Store"
                                                target="_blank" rel="noopener noreferrer"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-9">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                </svg>
                                            </a> */}
                                        </div>
                                        {/* <a href="https://github.com/jRaimuu/Toy_Store"
                                            target="_blank" rel="noopener noreferrer"
                                        > */}
                                        <img src={ActiveLiving} className='h-8 w-8 mr-3 ml-3 rounded-lg' />
                                        {/* </a> */}
                                    </div>
                                    <div className='flex flex-row pt-1'>
                                        <h3 className='text-indigo-300 bg-indigo-200 bg-opacity-10 px-1.5 rounded-full mr-2'>Next.js</h3>
                                        <h3 className='text-blue-400 bg-blue-300 bg-opacity-10 px-1.5 rounded-full mr-2'>Typescript</h3>
                                        <a href='https://trpc.io/' target="_blank" rel="noopener noreferrer">
                                            <h3 className='text-sky-300 bg-sky-200 bg-opacity-10 px-1.5 rounded-full mr-2'>tRPC</h3>
                                        </a>
                                        <h3 className='text-sky-200 bg-sky-200 bg-opacity-10 px-1.5 rounded-full mr-2'>TailwindCSS</h3>
                                    </div>
                                    {/* <p className='relative flex xl:h-80 lg:h-fit h-full xl:items-center xl:text-base text-base text-slate-200' > */}
                                    <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                        Eco Archive is a full-stack React-based web application that leverages MySQL to produce an efficient
                                        database management system for recycling depots, with a central <b>REST API</b> powered by <b>Node.js</b> and <b>Express</b>.
                                    </p>
                                    <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                        The goal of this project was to advance recycling depots' information management capabilities through centralized and secure data storage, combined with interactive data visualizations that interpret measureable outcomes.
                                        Additionally, it enhances service accesbility for customers while offering a platform for them to double down on sustainability by donating their earnings to charity.
                                    </p>
                                </span>
                            </div>
                        </div>


                        {/* Toy Store Video */}
                        <motion.div className='min-h-full h-full w-full relative'
                            style={{
                                transform: isInView2 ? "none" : "translateX(400px)",
                                opacity: isInView2 ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <div className='relative h-full'>
                                {/* {slideNum2 == 0 &&
                                    <img src={ToyStoreThumbnail}
                                        className='relative h-full w-full rounded-lg  opacity-90 hover:opacity-100'
                                    >
                                    </img>
                                } */}
                                {slideNum2 == 0 &&
                                    <video autoPlay loop muted playsInline
                                        className='relative h-full w-full rounded-lg flex justify-center items-center'
                                    >
                                        <source src={OpenGymVideo} type="video/mp4" />
                                    </video>
                                }
                                {slideNum2 == 1 &&
                                    <video autoPlay loop muted playsInline
                                        className='relative h-full w-full rounded-lg flex justify-center items-center'
                                    >
                                        <source src={IcalVideo} type="video/mp4" />
                                    </video>
                                }
                                {slideNum2 == 2 &&
                                    <img src={RemoveToy}
                                        className='relative h-full w-full rounded-lg flex justify-center items-center'
                                    >
                                    </img>
                                }
                                {/* Right Button */}
                                <div className='absolute top-1/2 right-2 -translate-y-1/2'>
                                    <button className='z-10 sm:bg-opacity-100 bg-opacity-50 sm:drop-shadow-[0_5px_5px_rgba(96,165,250,0.7)] drop-shadow-lg rounded-full bg-gray-200  
                                            sm:border-4 border-0 active:ring active:ring-blue-300 hover:bg-white hover:border-white'
                                        onClick={() => setSlideNum2((slideNum2 + 1) % 3)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Left Button */}
                                <div className='absolute top-1/2 left-2 -translate-y-1/2'>
                                    <button className='z-10 sm:bg-opacity-100 bg-opacity-50 sm:drop-shadow-[0_5px_5px_rgba(96,165,250,0.7)] drop-shadow-lg rounded-full bg-gray-200  
                                        sm:border-4 border-0 active:ring active:ring-blue-300 hover:bg-white hover:border-white'
                                        onClick={() => setSlideNum2((slideNum2 - 1 + 3) % 3)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svgh" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Eco_Archive */}
                <section
                    id="ecoArchive"
                    className='relative'
                >
                    <div className='absolute opacity-25 w-full h-full bg-cover bg-center'></div>

                    <div className='grid xl:grid-cols-2 grid-col-1 lg:gap-16 gap-8 md:px-32 px-3 pt-20 md:h-fit h-full'
                        ref={ref}>
                        {/* <div className='bg-sate-200 bg-opacity-10 min-h-fit backdrop-filter backdrop-blur-sm rounded-lg shadow-xl z-2 brder borer-slate-700'> */}

                        <div className='relative overflow-hidden'
                            style={{
                                transform: isInView ? "none" : "translateX(-200px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <div className='absolute inset-10 opacity-70 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full blur-3xl'></div>
                            <div className='relative bg-opacity-25 backdrop-blur-lg h-full rounded-lg border border-gray-900 border-t-slate-700 border-r-slate-700 '>
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
                                        <a href="https://github.com/anthonyjdam/Eco_Archive"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <img src={Eco_Archive} className='h-8 w-8 mr-3' />
                                        </a>
                                    </div>
                                    <div className='flex flex-row pt-1'>
                                        <h3 className='text-blue-300 bg-blue-200 bg-opacity-10 px-1.5 rounded-full mr-2'>React</h3>
                                        <h3 className='text-stone-300 bg-stone-200 bg-opacity-10 px-1.5 rounded-full mr-2'>Express</h3>
                                        <h3 className='text-amber-100 bg-amber-50 bg-opacity-10 px-1.5 rounded-full mr-2'>SQL</h3>
                                        <h3 className='text-sky-200 bg-sky-200 bg-opacity-10 px-1.5 rounded-full mr-2'>TailwindCSS</h3>
                                    </div>
                                    {/* <p className='relative flex xl:h-80 lg:h-fit h-full xl:items-center xl:text-base text-base text-slate-200' > */}
                                    <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                        Eco Archive is a full-stack React-based web application that leverages MySQL to produce an efficient
                                        database management system for recycling depots, with a central <b>REST API</b> powered by <b>Node.js</b> and <b>Express</b>.
                                    </p>
                                    <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                        The goal of this project was to advance recycling depots' information management capabilities through centralized and secure data storage, combined with interactive data visualizations that interpret measureable outcomes.
                                        Additionally, it enhances service accesbility for customers while offering a platform for them to double down on sustainability by donating their earnings to charity.
                                    </p>
                                </span>
                            </div>
                        </div>

                        {/* Eco_Archive Video */}
                        <motion.div className='min-h-full h-full w-full relative'
                            style={{
                                transform: isInView ? "none" : "translateX(-400px)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <div className='relative h-full min-h-full'>
                                {slideNum1 == 0 &&
                                    <video autoPlay loop muted playsInline
                                        className='relative h-full w-full rounded-lg flex justify-center items-center'
                                    >
                                        <source src={Dashboard3} type="video/mp4" />
                                    </video>
                                }
                                {slideNum1 == 1 &&
                                    <video autoPlay loop muted playsInline
                                        className='relative h-full w-full rounded-lg flex justify-center items-center'
                                    >
                                        <source src={Tables2} type="video/mp4" />
                                    </video>
                                }
                                {slideNum1 == 2 &&
                                    <video autoPlay loop muted playsInline
                                        className='relative h-full w-full rounded-lg flex justify-center items-center'
                                    >
                                        <source src={Pickup} type="video/mp4" />
                                    </video>
                                }
                                {/* Right Button */}
                                <div className='absolute top-1/2 right-2 -translate-y-1/2'>
                                    <button className='z-10 sm:bg-opacity-100 bg-opacity-50 sm:drop-shadow-[0_5px_5px_rgba(96,165,250,0.7)] drop-shadow-lg rounded-full bg-gray-200  
                                            sm:border-4 border-0 active:ring active:ring-blue-300 hover:bg-white hover:border-white'
                                        onClick={() => setSlideNum1((slideNum1 + 1) % 3)}


                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Left Button */}
                                <div className='absolute top-1/2 left-2 -translate-y-1/2'>
                                    <button className='z-10 sm:bg-opacity-100 bg-opacity-50 sm:drop-shadow-[0_5px_5px_rgba(96,165,250,0.7)] drop-shadow-lg rounded-full bg-gray-200  
                                                        sm:border-4 border-0 active:ring active:ring-blue-300 hover:bg-white hover:border-white'
                                        onClick={() => setSlideNum1((slideNum1 - 1 + 3) % 3)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svgh" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Toy Store */}
                <section
                    id="toyStore"
                    className='relative'
                >
                    {/* <div className='absolute filter mix-blend-plus opacity-25 w-full h-full bg-cover bg-center bg-gradient-image-both'></div> */}
                    <div className='absolute opacity-25 w-full h-full bg-cover bg-center'></div>
                    <div className='grid xl:grid-cols-2 grid-col-1 lg:gap-16 gap-8 md:px-32 px-3 pt-20 md:h-fit h-full'
                        ref={ref2}>

                        <div className='relative overflow-hidden'
                            style={{
                                transform: isInView2 ? "none" : "translateX(400px)",
                                opacity: isInView2 ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <div className='absolute inset-16 opacity-70 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-3xl'></div>
                            <div className='relative bg-opacity-25 backdrop-blur-lg h-full rounded-lg border border-gray-900  border-b-slate-700 border-r-slate-700 '>
                                <span className='flex flex-col justify-start xl:m-10 m-6'>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row justify-start'>
                                            <h2 className='text-3xl pr-2 font-mono font-bold text-slate-200'>Toy Store</h2>
                                            <a href="https://github.com/jRaimuu/Toy_Store"
                                                target="_blank" rel="noopener noreferrer"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-9">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                </svg>
                                            </a>
                                        </div>
                                        <a href="https://github.com/jRaimuu/Toy_Store"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <img src={ToyStore} className='h-8 w-8 mr-3 rounded-lg' />
                                        </a>
                                    </div>
                                    <div className='flex flex-row pt-1'>
                                        <h3 className='text-red-300 bg-red-200 bg-opacity-10 px-1.5 rounded-full mr-2'>Java</h3>
                                    </div>
                                    {/* <p className='relative flex xl:h-80 lg:h-fit h-full xl:items-center xl:text-base text-base text-slate-200' > */}
                                    <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                        This Toy Store Java application is designed to assist users in purchasing, searching, adding, and removing products from a store inventory.
                                        It handles inventory product information by parsing the data from a CSV text file,  performing CRUD operations, and presenting it through a user-friendly JavaFX interface.
                                    </p>
                                    <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                        In the implementation of this project, employing MVC design patterns alongside object-oriented programming principles such as encapsulation, abstraction, inheritance, and polymorphism,
                                        led to greater design flexibility, simpler code, reduced coupling, and higher cohesion.
                                    </p>
                                </span>
                            </div>
                        </div>


                        {/* Toy Store Video */}
                        <motion.div className='min-h-full h-full w-full relative'
                            style={{
                                transform: isInView2 ? "none" : "translateX(400px)",
                                opacity: isInView2 ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <div className='relative min-h-full h-full'>
                                {/* {slideNum2 == 0 &&
                                    <img src={ToyStoreThumbnail}
                                        className='relative h-full w-full rounded-lg  opacity-90 hover:opacity-100'
                                    >
                                    </img>
                                } */}
                                {slideNum2 == 0 &&
                                    <img src={SearchBuy}
                                        className='relative h-full w-full rounded-lg flex justify-center items-center'
                                    >
                                    </img>
                                }
                                {slideNum2 == 1 &&
                                    <img src={AddToy}
                                        className='relative h-full w-full rounded-lg flex justify-center items-center'
                                    >
                                    </img>
                                }
                                {slideNum2 == 2 &&
                                    <img src={RemoveToy}
                                        className='relative h-full w-full rounded-lg flex justify-center items-center'
                                    >
                                    </img>
                                }
                                {/* Right Button */}
                                <div className='absolute top-1/2 right-2 -translate-y-1/2'>
                                    <button className='z-10 sm:bg-opacity-100 bg-opacity-50 sm:drop-shadow-[0_5px_5px_rgba(96,165,250,0.7)] drop-shadow-lg rounded-full bg-gray-200  
                                            sm:border-4 border-0 active:ring active:ring-blue-300 hover:bg-white hover:border-white'
                                        onClick={() => setSlideNum2((slideNum2 + 1) % 3)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Left Button */}
                                <div className='absolute top-1/2 left-2 -translate-y-1/2'>
                                    <button className='z-10 sm:bg-opacity-100 bg-opacity-50 sm:drop-shadow-[0_5px_5px_rgba(96,165,250,0.7)] drop-shadow-lg rounded-full bg-gray-200  
                                        sm:border-4 border-0 active:ring active:ring-blue-300 hover:bg-white hover:border-white'
                                        onClick={() => setSlideNum2((slideNum2 - 1 + 3) % 3)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svgh" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Thematle */}
                <section
                    id="thematle"
                    className='relative'
                >
                    {/* <div className='absolute filter mix-blend-plus opacity-25 w-full h-full bg-cover bg-center bg-gradient-image-both'></div> */}
                    <div className='absolute opacity-25 w-full h-full bg-cover bg-center'></div>
                    <div className='grid xl:grid-cols-2 grid-col-1 lg:gap-16 gap-8 md:px-32 px-3 pt-20 md:h-fit h-full'
                        ref={ref2}>

                        <div className='relative overflow-hidden'
                            style={{
                                transform: isInView2 ? "none" : "translateX(400px)",
                                opacity: isInView2 ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <div className='absolute inset-14 opacity-70 bg-gradient-to-br from-cyan-700 via-indigo-400 to-blue-400 rounded-full blur-3xl'></div>
                            <div className='relative bg-opacity-25 backdrop-blur-lg h-full rounded-lg border border-gray-900  border-b-slate-700 border-r-slate-700 '>
                                <span className='flex flex-col justify-start xl:m-10 m-6'>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row justify-start'>
                                            <h2 className='text-3xl pr-2 font-mono font-bold text-slate-200'>Thematle</h2>
                                            <a href="https://jraimuu.github.io/Thematle/"
                                                target="_blank" rel="noopener noreferrer"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-9">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                </svg>
                                            </a>
                                        </div>
                                        <a href="https://github.com/jRaimuu/Thematle"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <img src={ThematleLogo} className='h-8 w-8 mr-3 rounded-lg' />
                                        </a>
                                    </div>
                                    <div className='flex flex-row pt-1'>
                                        <h3 className='text-rose-400 bg-rose-300 bg-opacity-10 px-1.5 rounded-full mr-2'>Javascript</h3>
                                        <h3 className='text-blue-300 bg-blue-200 bg-opacity-10 px-1.5 rounded-full mr-2'>CSS</h3>
                                        <h3 className='text-orange-300 bg-orange-200 bg-opacity-10 px-1.5 rounded-full mr-2'>HTML</h3>
                                    </div>
                                    {/* <p className='relative flex xl:h-80 lg:h-fit h-full xl:items-center xl:text-base text-base text-slate-200' > */}
                                    <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                        This Toy Store Java application is designed to assist users in purchasing, searching, adding, and removing products from a store inventory.
                                        It handles inventory product information by parsing the data from a CSV text file,  performing CRUD operations, and presenting it through a user-friendly JavaFX interface.
                                    </p>
                                    <p className='relative pt-4 xl:text-base text-base text-slate-200' >
                                        In the implementation of this project, employing MVC design patterns alongside object-oriented programming principles such as encapsulation, abstraction, inheritance, and polymorphism,
                                    </p>
                                </span>
                            </div>
                        </div>


                        {/* Toy Store Video */}
                        <motion.div className='min-h-full h-full w-full relative '
                            style={{
                                transform: isInView2 ? "none" : "translateX(400px)",
                                opacity: isInView2 ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}
                        >
                            <div className='relative h-full min-h-full'>
                                <video autoPlay loop muted playsInline
                                    className='relative h-full w-full rounded-lg flex justify-center items-center'
                                >
                                    <source src={ThematleVideo} type="video/mp4"/>
                                </video>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>


        </>
    )
}

export default ProjectsPage