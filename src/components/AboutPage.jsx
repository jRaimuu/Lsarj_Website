import React from 'react'

function AboutPage() {


    return (
        <>
            <main
                className='bg-gray-950 min-h-screen min-w-fit lg:h-screen sm:h-[50em] h-screen text-white overflow-x-hidden'
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
                        <img src="https://www.solarsystemscope.com/textures/download/2k_haumea_fictional.jpg"
                            className='absolute filter mix-blend-soft-light opacity-[16%] w-screen lg:h-screen sm:h-[50em] h-screen rounded-t-full'>
                        </img>
                    </div>

                    <div className='absolute lg:top-24 top-36 h-full w-full'>
                        <div className='relative lg:top-64 top-36 flex flex-col'>
                            <span>
                                <div className='md:mx-32 mx-3 my-3 sm:text-5xl text-4xl'>
                                    <h1 className='flex justify-start font-bold tracking-wide'>
                                        ABOUT ME
                                    </h1>
                                    <h1 className='flex justify-start text-cyan-600'>
                                        —
                                    </h1>
                                </div>
                                <p className='md:mx-32 mx-3 my-3'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi rerum hic ullam natus, iste aliquam sunt.
                                    Dolor libero ratione nemo ex porro velit. Nobis magni minima eligendi ducimus repudiandae? Ea. Lorem ipsum,
                                    dolor sit amet consectetur adipisicing elit. Sed nostrum maxime accusamus quia repellat molestias in modi, voluptate,
                                    perferendis iure, dolor magnam fugit nam inventore eveniet nesciunt porro? Tenetur, reprehenderit!
                                </p>
                            </span>
                        </div>
                    </div>
                </section>

                {/* <footer>
                    <div className='bg-slate-900 h-24 border border-t-0 border-x-0 border-b-0'>

                    </div>
                </footer> */}








            </main >

        </>
    )
}

export default AboutPage