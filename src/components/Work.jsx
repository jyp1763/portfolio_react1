import React from 'react'
import first from '../assets/firstimage.jpg';
import fifth from '../assets/fifthimage.jpg';
import second from '../assets/secondimage.jpg';
import third from '../assets/thirdimage.jpg';
import fourth from '../assets/fourthimage.jpg';
import sixth from '../assets/sixthimage.PNG';

const Work = () => {
  return (
    <div name='work' className='max-width md:h-screen text-white bg-[black]'>
        <div className='max-width mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text text-4xl font-bold inline border-b-4 text-white border-[#F01BA9]'>
                    Work
                </p>
                <p className='py-6'>Check out my work</p>
            </div>
            <div className='grid h-0 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white grid-cols-1 col-gap:5px 
            group container rounded-md justify-center text-center items-center mx-auto content-div'>
                <img src={fifth} alt='DEAR-Reader'></img>
                <a href='https://github.com/LizBailey75/DEAR-Reader'>github</a> <a href='https://dear-reader-22-app.herokuapp.com/'>Live</a>

                <img src={first} alt='Workday scheduler'></img>
                <a href='https://github.com/jyp1763/workschedule1'>github</a> <a href='https://jyp1763.github.io/workschedule1/'>Live</a>

                <img src={second} alt='Artist Profile'></img>
                <a href='https://github.com/Sara-Mill/Artist-Profile'>github</a> <a href=' https://sara-mill.github.io/Artist-Profile/'>Live</a>

                <img src={third} alt='Password generator'></img>
                <a href='https://github.com/jyp1763/password-generator'>github</a> <a href=' https://jyp1763.github.io/password-generator/'>Live</a>

                <img src={fourth} alt='Coding Quiz'></img>
                <a href='https://github.com/jyp1763/coding_quiz'>github</a> <a href='t https://jyp1763.github.io/coding_quiz/'>Live</a>

                <img src={sixth} alt='Weather Dashboard'></img>
                <a href='https://github.com/jyp1763/HotnCold'>github</a> <a href=' https://jyp1763.github.io/HotnCold/'>Live</a>
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