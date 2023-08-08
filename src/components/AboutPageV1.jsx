import React, { useEffect, useRef, useState } from 'react'
import ProjectsPage from './LandingPage/ProjectsPage'
import { useInView, motion } from "framer-motion";
import Eco_Archive from "../assets/Eco_Archive.png";
// import Dashboard from "../assets/Dashboard.mp4";
import Tables2 from "../assets/Tables2.mp4";
import Dashboard3 from "../assets/Dashboard3.mp4";
import ProjectFrame from './ProjectFrame';



function AboutPage() {

    // const targetRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: targetRef,
    //     offset: ["0 1", "1 1.1"],
    // });

    // const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.5, 1])

    // Pargraph Props
    const frame1Par1 = ` Eco Archive is a full-stack React-based web application that leverages MySQL to 
        produce an efficient database management system for recycling depots, 
        with a central REST API powered by Node.js and Express.
    `;

    const frame1Par2 = `
        This project seeks to elevate organizational information management capabilities,
        enabling measurable outcomes while also enhancing service accessibility for customers.
        Customers can also double down on sustainability by donating their earnings to charity.
    `;

    const frame2Par1 = `
    Toy Haven is a vibrant online platform that showcases a diverse range of toys, 
    catering to the interests of children of all ages. Utilizing cutting-edge web technologies, 
    Toy Haven provides an immersive browsing experience, with an intuitive interface powered by React. 
    The backend infrastructure is fortified by Node.js and Express, ensuring seamless interactions and quick access to the extensive toy catalog.
    `;

    const frame2Par2 = `
    Through this innovative project, we aim to not only offer a comprehensive selection of toys but also promote play-based learning and creativity among children.
    Additionally, Toy Haven supports charitable initiatives, 
    allowing customers to contribute a portion of their purchases to various causes that resonate with their values.
    `;




    // Framer content
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const [slideNum, setSlideNum] = useState(0);

    // useEffect(() => {
    //     console.log("after: ", slideNum);
    // }, [slideNum]);

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
            <main className='bg-gray-950 min-h-screen min-w-fit h-full text-white overflow-x-hidden'>

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

                <section className='lg:block hidden'>
                    <div className='absolute filter mix-blend-plus- opacity-25 w-full h-[263px] bg-cover bg-center bg-gradient-image-both'></div>

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
                    bg-white rounded-full blur-xl opacity-50 filter mix-blend-plus-lighter">
                        </div>
                    </div>
                </section>

                {/* Starry Overlay */}
                <div className='relative opacity-50'>
                    <img src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
                        className="absolute h-[1000px] w-[1250px] -top-80 right-0 lg:inline hidden"
                    />
                </div>

                <section>
                    {/* Personal Projects */}
                    <h1 className='relative flex justify-start sm:p md:mx-32 mx-3 my-3 sm:text-5xl text-4xl font-bold tracking-wide '>PERSONAL PROJECTS</h1>

                    <div className='relative'>
                        <div className='absolute filter mix-blend-plus- opacity-25 w-full h-full bg-cover bg-center bg-gradient-image-both'></div>
                        <ProjectFrame
                            video1={Dashboard3}
                            video2={Tables2}
                            paragraph1={frame1Par1}
                            paragraph2={frame1Par2}
                            logo={Eco_Archive}
                            color1="from-blue-400"
                            color2="to-violet-400"
                        />
                    </div>
                    <ProjectFrame
                        video1={Dashboard3}
                        video2={Tables2}
                        paragraph1={frame2Par1}
                        paragraph2={frame2Par2}
                        logo={Eco_Archive}
                        color1="from-indigo-300"
                        color2="to-blue-400"
                    />


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
                    <div className='absolute top-32 scale-x-150 w-full h-screen rounded-t-full  blur-2xl bg-violet-900'>
                    </div>
                    <div className='relative top-32 scale-x-150 w-full h-screen rounded-t-full 
                                    bg-gradient-to-b from-gray-900 to-gray-950 border-2 border-opacity-75 border-blue-400 text-white flex justify-center items-center'>
                        <img src="https://www.solarsystemscope.com/textures/download/2k_haumea_fictional.jpg"
                            className='absolute filter mix-blend-soft-light opacity-[16%] w-screen h-screen rounded-t-full' />
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