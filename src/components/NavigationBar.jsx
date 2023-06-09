import React, { useEffect, useState } from 'react'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';

function NavigationBar() {

    const [home, setHome] = useState("home");
    const [proj, setProj] = useState("projects");
    const [about, setAbout] = useState("about");


    // const [text1] = useTypewriter({
    //     words: ["home"],
    //     loop: 1,
    // });

    // const [text2] = useTypewriter({
    //     words: ["projects"],
    //     loop: 1,
    // });

    // const [text3] = useTypewriter({
    //     words: ["about"],
    //     loop: 1,
    // });

    // useEffect(() => {
    //     setHome(text1)
    //     setProj(text2)
    //     setAbout(text3)

    // }, [text1, text2, text3]);




    return (
        <>
            <nav className="fixed flex w-full p-4 top-0 z-20 justify-center items-center">
                <div className="bg-zinc-900 flex gap-16 rounded-full font-space px-4 py-2 opacity-80">
                    <div className="fixed -top-16 w-72 h-24 
                    bg-violet-400 rounded-full justify- filter blur-3xl opacity-70"
                    >
                    </div>
                    <button className="text-zinc-500 rounded-full hover:text-zinc-50 hover:bg-zinc-800"
                        onMouseOver={() => {
                            setHome("/home")
                        }}
                        onMouseOut={() => {
                            setHome("home");
                        }}
                    >
                        {home}
                    </button>
                    <button className="text-zinc-500 rounded-full hover:text-zinc-50 hover:bg-zinc-800"
                        onMouseOver={() => {
                            setProj("/projects")
                        }}
                        onMouseOut={() => {
                            setProj("projects");
                        }}
                    >
                        {proj}
                    </button>
                    <button className="text-zinc-500 rounded-full hover:text-zinc-50 hover:bg-zinc-800"
                        onMouseOver={() => {
                            setAbout("/about")
                        }}
                        onMouseOut={() => {
                            setAbout("about");
                        }}
                    >
                        {about}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar