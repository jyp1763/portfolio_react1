import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-white bg-[black]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text text-4xl font-bold inline border-b-4 text-white border-[#F01BA9]'>
                    Work
                </p>
                <p className='py-6'>Check out my work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-white'>
                <img src='/Users/jatannapatterson/reactportfolio/src/assets/fifthimage.jpg' alt='DEAR-Reader'></img>
                <a href='https://github.com/LizBailey75/DEAR-Reader'></a> <a href='https://dear-reader-22-app.herokuapp.com/'></a>

                <img src='/Users/jatannapatterson/reactportfolio/src/assets/firstimage.jpg' alt='Workday scheduler'></img>
                <a href='https://github.com/jyp1763/workschedule1'></a> <a href='https://jyp1763.github.io/workschedule1/'></a>

                <img src='src/assets/secondimage.jpg' alt='Artist Profile'></img>
                <a href='https://github.com/Sara-Mill/Artist-Profile'></a> <a href=' https://sara-mill.github.io/Artist-Profile/'></a>

                <img src='src/assets/thirdimage.jpg' alt='Password generator'></img>
                <a href='https://github.com/jyp1763/password-generator'></a> <a href=' https://jyp1763.github.io/password-generator/'></a>

                <img src='src/assets/fourthimage.jpg' alt='Coding Quiz'></img>
                <a href='https://github.com/jyp1763/coding_quiz'></a> <a href='t https://jyp1763.github.io/coding_quiz/'></a>

                <img src='src/assets/sixthimage.jpg' alt='Weather Dashboard'></img>
                <a href='https://github.com/jyp1763/HotnCold'></a> <a href=' https://jyp1763.github.io/HotnCold/'></a>
                    <div
                    className='shadow-lg shadow-[040c16] group container rounded-md
                    flex justify-center text-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font bold text-white tracking-wider'>
                        </span>
                        <div className='pt-8 text-center'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                                    Code
                                </button>
                                <button className='text center rounded-lg ps-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                                    Live
                                </button>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
    );

};

export default Work;