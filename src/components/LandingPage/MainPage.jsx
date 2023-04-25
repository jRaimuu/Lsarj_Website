import React from 'react'
import AboutPage from '../AboutPage'

function MainPage() {
  return (
    <>


      <main className='bg-zinc-950 min-h-screen h-full min-w-full w-full overflow-hidden'>

        <nav className='sticky top-0 flex justify-center justify-content-evenly p-4'>
          <div className='bg-zinc-900 flex gap-16 p-2 rounded-full'>
            <button className='text-zinc-500 rounded-full px-2 hover:text-orange-50'>
              HOME
            </button>
            <button className='text-zinc-500 rounded-full px-2 hover:text-orange-50'>
              PROJECTS
            </button>
            <button className='text-zinc-500 rounded-full px-2 hover:text-orange-50'>
              ABOUT
            </button>
          </div>
        </nav>

        <div className='relative flex items-end justify-end flex-row'>
          <div className=''>
            <div className='absolute -top-48 -right-32 w-blurW h-blurH bg-purple-400 rounded-full filter blur-3xl opacity-50 animate-animateBlur'></div>
            <div className='absolute top-64 -right-80 w-blurW h-blurH bg-red-500 rounded-full filter blur-3xl opacity-50 animate-animateBlur animation-delay-2000'></div>
            <div className='relative top-48'>
              <div className='absolute top-96 -right-20 w-blurW h-blurH bg-orange-400 rounded-full filter blur-3xl opacity-50 animate-animateBlur animation-delay-4000 '></div>
            </div>
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