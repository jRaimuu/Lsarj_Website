import React, { useEffect, useState } from 'react'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';

function NavigationBar() {

    const [home, setHome] = useState("home");
    const [proj, setProj] = useState("projects");
    const [about, setAbout] = useState("about");



    return (
        <>
            <nav className="fixed flex w-full p-4 top-0 z-20 justify-center items-center">
                <div className="bg-zinc-900 flex gap-16 rounded-full font-mono px-4 py-2 opacity-80">
                    <div className="fixed -top-16 w-72 h-24 
                    bg-violet-400 rounded-full justify- filter blur-3xl opacity-70"
                    >
                    </div>
                    <a href='#home'
                        className="text-zinc-500 rounded-full hover:text-zinc-50 hover:bg-zinc-800"
                        onMouseOver={() => {
                            setHome("/home")
                        }}
                        onMouseOut={() => {
                            setHome("home");
                        }}
                    >
                        {home}
                    </a>
                    <a href='#ecoArchive'
                        className="text-zinc-500 rounded-full hover:text-zinc-50 hover:bg-zinc-800"
                        onMouseOver={() => {
                            setProj("/projects")
                        }}
                        onMouseOut={() => {
                            setProj("projects");
                        }}
                    >
                        {proj}
                    </a>
                    <a  href='#about'
                        className="text-zinc-500 rounded-full hover:text-zinc-50 hover:bg-zinc-800"
                        onMouseOver={() => {
                            setAbout("/about")
                        }}
                        onMouseOut={() => {
                            setAbout("about");
                        }}
                    >
                        {about}
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar