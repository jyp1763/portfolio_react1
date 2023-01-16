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
            <div className='grid h-0 grid-auto-flow sm:grid-cols-2 md:grid-cols-3 gap-4 text-white grid-cols-1 col-gap:5px 
            '>
                <img className='max-w-xs max-h-20' src={fifth} alt='DEAR-Reader'></img>
                <a href='https://github.com/LizBailey75/DEAR-Reader'></a> <a href='https://dear-reader-22-app.herokuapp.com/'></a>
                
                <img className='max-w-xs max-h-20' src={first} alt='Workday scheduler'></img>
                <a href='https://github.com/jyp1763/workschedule1'>github</a> <a href='https://jyp1763.github.io/workschedule1/'>Live</a>

                <img className='max-w-xs max-h-20' src={second} alt='Artist Profile'></img>
                <a href='https://github.com/Sara-Mill/Artist-Profile'>github</a> <a href=' https://sara-mill.github.io/Artist-Profile/'>Live</a>

                <img className='max-w-xs max-h-20' src={third} alt='Password generator'></img>
                <a href='https://github.com/jyp1763/password-generator'>github</a> <a href=' https://jyp1763.github.io/password-generator/'>Live</a>

                <img className='max-w-xs max-h-20' src={fourth} alt='Coding Quiz'></img>
                <a href='https://github.com/jyp1763/coding_quiz'>github</a> <a href='t https://jyp1763.github.io/coding_quiz/'>Live</a>

                <img className='max-w-xs max-h-20' src={sixth} alt='Weather Dashboard'></img>
                <a href='https://github.com/jyp1763/HotnCold'>github</a> <a href=' https://jyp1763.github.io/HotnCold/'>Live</a>
            </div>
        </div>
    </div>
    );

};

export default Work;