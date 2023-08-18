import React from 'react'
import PlanetTexture from "../assets/PlanetTexture.jpg";

function AboutPage() {


    return (
        <>
            <main
                //50em
                className='bg-gray-950 min-w-fit text-white overflow-x-hidden'
            >


                {/* Planet Section */}
                <section
                    id="about"
                    className='relative flex justify-center items-center lg:h-screen sm:h-[50em] h-screen overflow-hidden'
                >

                    <div className='absolute -scale-x-100 opacity-25 w-full h-screen bg-cover bg-center bg-gradient-image-bottom'></div>

                    {/* <img src="https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg"
                        className='absolute filter mix-blend-soft-light opacity-75 w-screen h-screen bg-cover bg-center' /> */}
                    <div className='absolute top-24 scale-x-150 w-full lg:h-screen sm:h-[50em] h-screen rounded-t-full  blur-2xl bg-cyan-800 '></div>
                    <div className='absolute top-32 scale-x-150 w-full lg:h-screen sm:h-[50em] h-screen rounded-t-full  blur-2xl bg-violet-900'></div>
                    <div className='relative top-32 scale-x-150 w-full lg:h-screen sm:h-[50em] h-screen rounded-t-full 
                        bg-gradient-to-b from-gray-900 to-gray-950 border-2 border-opacity-75 border-blue-400 text-white flex justify-center items-center'>
                        <img src={PlanetTexture}
                            className='absolute filter mix-blend-soft-light opacity-[16%] w-screen lg:h-screen sm:h-[50em] h-screen rounded-t-full'>
                        </img>
                    </div>

                    <div className='absolute lg:top-20 sm:top-32 top-24 h-full w-full'>
                        <div className='relative lg:top-56 sm:top-32 top-24 flex flex-col'>
                            <span className='text-slate-200'>
                                <div className='md:mx-32 mx-3 my-3 sm:text-5xl text-4xl'>
                                    <h1 className='flex justify-start font-bold tracking-wide text-white'>
                                        ABOUT ME
                                    </h1>
                                    <h1 className='flex justify-start text-cyan-600'>
                                        —
                                    </h1>
                                </div>
                                <div className='xs:text-base text-sm md:mx-32 mx-3 my-3'>
                                    <p className='pb-6'>
                                        I am a enthusiastic student pursuing a degree in <b>Computer Science</b>.
                                    </p>
                                    <p className='pb-4'>
                                        <b>HOW IT STARTED: </b>
                                        "Hello, World!" — is where many might begin programming, but my journey started back in elementary school when I curiously plunged into the world of programming Lego Mindstorm robots.
                                        Following a near miss for first place in a junior robotics competition, I was determined to challenge myself and learn more about technology. From thereon, I upgraded my skillset in high school by experimenting with game development and tinkering with Vex Robots and Phidget Rovers.
                                        Fast forward to today, as a student, I am committed to ongoing learning and applying my interest in computer science to industries like <b> robotics, biology, medicine </b> and beyond.
                                    </p>
                                    <p>
                                        Away from my desk, you can find me enjoying a game of volleyball, biking across the city, carving down ski slopes, or capturing life's finest moments with my camera.
                                    </p>
                                </div>
                            </span>
                        </div>
                    </div>
                </section>


            </main >

        </>
    )
}

export default AboutPage