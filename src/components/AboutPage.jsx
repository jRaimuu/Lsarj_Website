import React from 'react'
import ProjectsPage from './LandingPage/ProjectsPage'

function AboutPage() {
    return (
        <>
            <main className=' bg-gray-400 min-h-screen h- text-white'>




                {/* <div>
                    <img
                        className="fixed -left-64 rotate-180 rounded-full filter opacity-100 blur-2xl bottom-0 mix-blend-difference"
                        src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
                    />
                </div> */}

                <h1 className='text-4xl lg:text-6xl font-bold'>About Page</h1>

            </main>

            <ProjectsPage />

        </>
    )
}

export default AboutPage