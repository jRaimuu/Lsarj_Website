import React from 'react'
import ProjectsPage from './LandingPage/ProjectsPage'

function AboutPage() {
    return (
        <>


            <main className='bg-gray-950 min-h-screen h-full text-white'>

            <img src="https://images.pexels.com/photos/3214110/pexels-photo-3214110.jpeg?cs=srgb&dl=pexels-frank-cone-3214110.jpg&fm=jpg"
                            className='absolute filter mix-blend-soft-light opacity-75   w-screen h-screen' />

                {/* Comet */}
                <div className="sm:h-60 bg-gray-950 sm:static h-0 overflow-hidden relative">                    {/* <div>
                        <img
                            className="absolute skew-y-12 skew-x-12 scale-x-50 -bottom-32 left-[500px] -rotate-180 rounded-full filter blur-2xl mix-blend-difference"
                            src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
                        />
                    </div> */}
                    <div className="absolute w-16 h-[500px] left-[230px] -bottom-44 -rotate-45 -skew-y-12 
                bg-cyan-800 rounded-full blur-3xl opacity-90 ">
                    </div>
                    <div className="absolute w-16 h-80 left-[240px] -bottom-40 -rotate-45 -skew-y-12 
                bg-indigo-950 rounded-full blur-2xl opacity-75 filter mix-blend-lighten">
                    </div>
                    <div className="absolute w-16 h-28 left-[370px] -bottom-44 -rotate-45 -skew-y-12 
                bg-white rounded-full blur-xl opacity-50 animate-animateComet">
                    </div>
                    <div className="absolute w-6 h-32 left-[350px] -bottom-36 -rotate-45 -skew-y-12 
                bg-white rounded-full blur-xl opacity-50 filter mix-blend-plus-lighter animate-animateComet">
                    </div>
                </div>


                {/* Planet silhouette */}
                <div className='relative flex justify-center items-center h-full overflow-hidden'>
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
                </div>

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