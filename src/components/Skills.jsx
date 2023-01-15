import React from 'react'

const Skills = () => {
  return (
    <div>
        <div name='skills' className='w-full h-screen bg-[black] text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#F01BA9]'>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
              </div>
              <div>
                <ul className='bg-[black] text-white'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Mongo</li>
                    <li>mySQL</li>
                    <li>Node.js/Express.js</li>
                </ul>
                <h1>My Resume</h1>
                <a className='text-white'
                 href='Resume 2022.pdf'></a>
              </div>
          </div>
        </div>

    </div>
  )
}

export default Skills