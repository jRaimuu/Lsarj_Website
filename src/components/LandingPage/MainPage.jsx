import React from 'react'
import AboutPage from '../AboutPage'

function MainPage() {
  return (
    <>


      <main className='bg-gray-950 min-h-screen h-full min-w-full w-full'>

        {/* <div className='fixed w-blurW h-32 border border-t-transparent bg-sky-400 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-40 '></div> */}
        <nav className='sticky top-0 z-10 flex justify-center justify-content-evenly opacity-80 p-4'>
          <div className='bg-zinc-900 flex gap-16  rounded-full'>
            <button className='text-zinc-500 rounded-full px-4 py-1 hover:text-orange-50 hover:bg-zinc-800'>
              HOME
            </button>
            <button className='text-zinc-500 px-4 py-1 rounded-full hover:text-orange-50 hover:bg-zinc-800'>
              PROJECTS
            </button>
            <button className='text-zinc-500 px-4 py-1 rounded-full hover:text-orange-50 hover:bg-zinc-800'>
              ABOUT
            </button>
          </div>
        </nav>

        {/* <div className='relative flex items-end justify-end flex-row'>
          <div className=''>
          <div className='absolute -top-48 -right-32 w-blurW h-blurH bg-purple-400 rounded-full filter blur-3xl opacity-50 animate-animateBlur'></div>
          <div className='absolute top-64 -right-80 w-blurW h-blurH bg-red-500 rounded-full filter blur-3xl opacity-50 animate-animateBlur animation-delay-2000'></div>
          <div className='relative top-48'>
          <div className='absolute top-96 -right-20 w-blurW h-blurH bg-orange-400 rounded-full filter blur-3xl opacity-50 animate-animateBlur animation-delay-4000 '></div>
            </div>
          </div>
        </div> */}

        <div className='overflow-hidden'>
          <div className='fixed -top-64 -left-64 sm:-left-52 sm:-top-64 sm:w-96 sm:h-96 lg:w-blurW lg:h-blurH 
            bg-indigo-300 mix-blend-plus-lighter rounded-full filter blur-sm opacity-60 animate-animateBlur'></div>
          <div className='fixed -top-64 -left-64 sm:-left-52 sm:-top-64 sm:w-96 sm:h-96 lg:w-blurW lg:h-blurH ]
            bg-violet-400 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-70 animate-animateBlur animation-delay-4000 '></div>


          <div className='fixed -bottom-16 left-96 w-32 h-blurH border border-t-transparent bg-purple-600 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-70 '></div>
          <div className='fixed -bottom-64 left-52 w-32 h-blurH border border-t-transparent bg-orange-300 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-100 '></div>
          <div className='fixed -bottom-64 left-52 w-32 h-blurH border border-t-transparent bg-amber-700 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-70 '></div>


          <div className='fixed -bottom-64 -right-48 md:w-92 md:h-92 lg:w-blurW lg:h-blurH sm:-right-32 sm:-bottom-32 sm:w-96 sm:h-96
            bg-orange-500 mix-blend-plus-lighter rounded-full filter blur-sm opacity-40 animate-animateBlur'></div>
          <div className='fixed -bottom-64 -right-48 md:w-92 md:h-92 lg:w-blurW lg:h-blurH sm:-right-32 sm:-bottom-32 sm:w-96 sm:h-96
            bg-amber-500 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-80 animate-animateBlur animation-delay-4000 '></div>
          <div className='fixed items-end justify-end right-80 -top-64 mix-blend-plus-lighter'>
            <div className='absolute w-32 h-blurH sm:-right-28 sm:-top-16 sm:w-96 sm:h-96 sm:bg-purple-700
              bg-indigo-400 rounded-2xl filter blur-2xl opacity-70 animate-animateBlur animation-delay-2000'></div>
            {/* <div className='absolute w-32 h-blurH sm:-right-32 sm:-bottom-16 sm:w-96 sm:h-96
              bg-red-400 mix-blend-plus-lighter rounded-2xl filter blur-sm opacity-50 animate-animateBlur animation-delay-2000'></div> */}
          </div>
        </div>

        <div className='flex justify-start flex-col max-w-xl mx-auto p-4 py-64'>
          <h1 className='font-bold text-white text-5xl'>
            Liam Sarjeant
          </h1>
          <body className='text-orange-50 py-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum in vestibulum sapien, id rutrum sapien.
            Phasellus condimentum, dui vel tristique euismod, mauris mauris venenatis nisi, nec blandit augue velit in lacus.
            Praesent sed eros vel risus tristique aliquet eget ac dolor.
          </body>

        </div>

      </main>
      <AboutPage />



    </>
  )
}

export default MainPage