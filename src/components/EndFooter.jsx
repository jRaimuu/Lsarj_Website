import React from 'react'
import GithubLogo from "../assets/GithubLogo.png";
import LinkedInLogo from "../assets/LinkedInLogo.png";

function EndFooter() {
    return (
        <>
            <footer>
                <div className='relative bg-gray-950 bg-opacity-[98%] h-24 
                    border border-t-0 border-x-0 border-b-0'
                >
                    <img src="https://www.solarsystemscope.com/textures/download/2k_haumea_fictional.jpg"
                        className='absolute filter mix-blend-soft-light opacity-[16%] max-h-full w-full object-cover'>
                    </img>
                    <div className='relative w-full flex justify-center'>
                        <hr className='w-5/6 p-3 border-1 border-[#182441] border-opacity-100' />
                    </div>
                    <section className='flex flex-row justify-center align-middle m-1'>
                        <h3 className='relative mx-3 text-sm font-bold text-cyan-600'>Let's get in touch: </h3>
                        <a href='https://www.linkedin.com/in/liam-sarjeant-6706021b1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWhBIOQt%2BQ3KeLGUW51piSg%3D%3D'
                            target="_blank" rel="noopener noreferrer"
                            className='relative mx-3 h-5 w-5'
                        >
                            <img src={LinkedInLogo} />
                        </a>
                        <a href='https://github.com/jRaimuu'
                            target="_blank" rel="noopener noreferrer"
                            className='relative mx-3 h-5 w-5'
                        >
                            <img src={GithubLogo} />
                        </a>
                    </section>
                </div>
            </footer>
        </>
    )
}

export default EndFooter