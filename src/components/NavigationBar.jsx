import React from 'react'

function NavigationBar() {
    return (
        <>
            <nav className="fixed flex w-full p-4 top-0 z-20 justify-center items-center">
                <div className="bg-zinc-900 flex gap-16 rounded-full font-space px-4 py-2 opacity-80">
                    <div className="fixed -top-16 w-72 h-24 
                    bg-violet-400 rounded-full justify- filter blur-3xl opacity-70"
                    >
                    </div>
                    <button className="text-zinc-500 rounded-full hover:text-zinc-50 hover:bg-zinc-800">
                        {"home"}
                    </button>
                    <button className="text-zinc-500 rounded-full hover:text-zinc-50 hover:bg-zinc-800">
                        {"projects"}
                    </button>
                    <button className="text-zinc-500 rounded-full hover:text-zinc-50 hover:bg-zinc-800">
                        {"about"}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar