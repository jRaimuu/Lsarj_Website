import React from 'react'
import Spline from '@splinetool/react-spline';
import Testing from './Testing';
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';


function ProjectsPage() {

    const [text] = useTypewriter({
        words: ['Computer Science Student', 'Developer', 'Designer', "Tech Enthusiast"],
        loop: {},
      })


    return (
        <>
            <main className='bg-gray-950 min-h-screen h-full relative text-black overflow-hidden'>

                <div className="relative top-64 bottom-0 max-w-xl mx-auto m-4 pb-16">
                    <div className="absolute w-4 h-6 pt-6 ml-8 mt-1 z-10
            bg-emerald-200 rounded-full blur-sm mi animate-pulse"
                    >
                    </div>
                    <h1 className="pb-1 font-bold text-6xl tracking-wide text-stone-800">
                        Liam Sarjeant
                    </h1>
                    <span className="text-lg font-space py-4 text-violet-400">
                        {/* {text} */}
                    </span>
                    <span className="text-cyan-300 opacity-75">
                        <Cursor
                            cursorStyle="__"
                        />
                    </span>
                </div>

                <div className='absolute rotate-12 -right-[1000px] -top-10 scale-850 '>
                    {/* <Spline scene="https://draft.spline.design/5pel7vwKChynL9Vs/scene.splinecode" /> */}
                    {/* <Spline scene="https://draft.spline.design/b8bCdCJK5g1m0OID/scene.splinecode" /> */}

                </div>
            </main >

        </>
    )
}

export default ProjectsPage