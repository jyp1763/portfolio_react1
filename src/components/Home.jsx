import React from 'react'
import {HiArrowNarrowRight}  from 'react-icons/hi'
const Home = () => {
  return (
    <div  name='home' className='max-width bg-[black] text-white'>

        <div className='max-width mx-auto px-8 flex-col justify-center'>
            <p className='text-[#F01BA9]'> Hi, My name is</p>
            <a href='src/assets/IMG_1946.jpeg' alt='jatanna'></a>
            <h1 className='text-4xl font-bold text-[#F01BA9]'> JaTanna Patterson</h1>
            <h2 className='text-4xl font-bold text-[#F01BA9]'> Full Stack Developer</h2>
            <p className='text-white py-0 80px max-w-[700px]'> I am a beginner full stack web developer specializing in building and designing 
            clean and responsive applications.
            </p>
            <a href='src/assets/IMG_1946.jpeg' alt='jatanna'></a>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F01BA9] hover:border-[#F01BA9]'> View Work<HiArrowNarrowRight className='ml-3' /></button>
            </div>
        </div>

    </div>
  )
}

export default Home