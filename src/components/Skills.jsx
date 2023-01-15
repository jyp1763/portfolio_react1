import React from 'react'

const Skills = () => {
  return (
    <div>
        <div name='skills' className='max-width bg-[black] text-white'>
        <div className='max-width mx-auto p-4 flex flex-col justify-center items-center'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#F01BA9]'>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
              </div>
              <div>
                <ul className='max-width items-center justify-center bg-[black] text-white'>
                    <li>HTML,CSS</li>
                    <li>JavaScript,React</li>
                    <li>Mongo,mySQL</li>
                    <li>Node.js/Express.js</li>
                </ul>
                <h1>My Resume</h1>
                <a className='text-white max-width justify-center items-center'
                 href='Resume 2022.pdf'></a>
              </div>
          </div>
        </div>

    </div>
  )
}

export default Skills