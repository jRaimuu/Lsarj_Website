import React from 'react'
import AboutPage from '../AboutPage'

function MainPage() {
  return (
    <>


      <main className='bg-zinc-950 min-h-screen h-full min-w-full w-full'>

        {/* <div className='fixed w-blurW h-32 border border-t-transparent bg-sky-400 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-40 '></div> */}
        <nav className='sticky top-0 z-10 flex justify-center justify-content-evenly p-4'>
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
          <div className='fixed -top-16 -left-80 w-blurW h-blurH bg-purple-400 mix-blend-plus-lighter rounded-full filter blur-sm opacity-30 animate-animateBlur'></div>
          <div className='fixed -top-16 -left-80 w-blurW h-blurH bg-violet-300 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-70 animate-animateBlur animation-delay-4000 '></div>


          <div className='fixed -bottom-16 left-96 w-32 h-blurH border border-t-transparent bg-blue-700 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-70 '></div>
          <div className='fixed -bottom-64 left-48 w-32 h-blurH border border-t-transparent bg-sky-400 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-40 '></div>

          <div className='fixed bottom-0 -right-32 w-blurW h-blurH bg-orange-400 mix-blend-plus-lighter rounded-full filter blur-sm opacity-40 animate-animateBlur'></div>
          <div className='fixed bottom-0 -right-32 w-blurW h-blurH bg-amber-300 mix-blend-plus-lighter rounded-full filter blur-3xl opacity-80 animate-animateBlur animation-delay-4000 '></div>

          <div className='flex fixed items-end justify-end flex-col right-32 top-8'>
            <div className='w-32 h-blurH bg-rose-500 mix-blend-plus-lighter rounded-2xl filter blur-3xl opacity-70 animate-animateBlur animation-delay-2000'></div>
            <div className='absolute w-32 h-blurH bg-rose-300 mix-blend-plus-lighter rounded-2xl filter blur-3xl opacity-50 animate-animateBlur animation-delay-2000'></div>
            <div className='absolute w-32 h-blurH bg-red-400 mix-blend-plus-lighter rounded-2xl filter blur-sm opacity-30 animate-animateBlur animation-delay-2000'></div>
          </div>
        </div>

        <div className='flex justify-start flex-col max-w-xl m-auto py-80'>
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