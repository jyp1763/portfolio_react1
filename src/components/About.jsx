import React from 'react'
import profile from '../assets/profile.jpeg';
const About = () => {
  return (
    <div name='about' className='max-width h-screen bg-[black] text-white'>
        <div className='flex flex-col justify-center items-center'>
            <div className='max-width grid grid-cols-2 gap-8'>
                <div className='pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F01BA9]'>
                        About
                    </p>
                </div>
            </div>
        </div>
        <div className='max-width grid-cols-2  gap-8 px-4 bg-[black]'>
            <div className='text-4xl font-bold '>
                <p>Welcome to my Portfolio! My name is JaTanna Patterson </p>
            </div>
        </div>
        <div className='max-width bg-[black] text-white'></div>
        <img className='max-w-xs max-h-40' src= {profile} alt='image of jatanna'></img>
        <p className='max-width bg-[black] text-white'>
            I am just starting out in my developer career but I am excited to share my work with you! I enjoy building and designing full stack applications
            My projects are user friendly and easy to navigate. In this portfolio you will see a variety of my projects,as well as an option to contact me!
        </p>
    </div>
  )
}

export default About