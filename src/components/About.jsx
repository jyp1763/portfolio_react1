import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[black] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F01BA9]'>
                        About
                    </p>
                </div>
            </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:gird-cols-2 gap-8 px-4 bg-[black]'>
            <div className='sm:text-right text-4xl font-bold '>
                <p>Welcome to my Portfolio! My name is JaTanna Patterson </p>
            </div>
        </div>
        <div className='w-full h-screen bg-[black] text-white'></div>
        <p className='w-full h-screen bg-[black] text-white'>
            I am just starting out in my developer career but I am excited to share my work with you! I enjoy building and designing full stack applications
            My projects are user friendly and easy to navigate. In this portfolio you will see a variety of my projects,as well as an option to contact me!
        </p>
    </div>
  )
}

export default About