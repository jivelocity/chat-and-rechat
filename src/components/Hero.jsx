import React, { useRef, useEffect } from 'react'
import circle from '../assets/img/bluecircle.png'

import Button from './Button'
import { FiArrowRightCircle } from 'react-icons/fi'
import { HiOutlineDownload } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'

import profileImg from '../assets/img/profile.png'
import { HiChevronLeft } from 'react-icons/hi'
import { BsCheck2 } from 'react-icons/bs'
import { AiOutlineSmile } from 'react-icons/ai'

import ParallaxElement from '../plugin/ParallaxElement'
import ParallaxMouseMove from '../plugin/ParallaxMouseMove'

function Hero() {
  return (
    <div className='container mx-auto px-10 mt-16'>
      <div className='flex lg:space-x-8 flex-wrap lg:flex-nowrap'>
        {/* left side */}
        <div className=' lg:w-1/2 w-full flex flex-col justify-between order-2 lg:order-1 py-8'>
          {/* Text */}
          <div className='flex flex-col justify-between space-y-4'>
            <h5 className='text-base text-blue-500 font-semibold uppercase tracking-wide'>
              chat n' rechat
            </h5>
            <p className='md:text-4xl text-3xl text-dark font-semibold lg:w-10/12'>
              Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi
              tidak lupa jasa pahlawan!
            </p>
            <p className='text-lg text-darkLight leading-7 lg:w-10/12'>
              Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
              ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
              pake aplikasi yang ini.
            </p>
            <div className='flex flex-col md:flex-row md:space-y-0 space-y-3 md:space-x-8 space-x-0 justify-center md:justify-start'>
              <Button
                rounded
                primary
                className='md:px-11 md:py-4 px-6 py-2 space-x-2  text-lg'
              >
                Register <FiArrowRightCircle className='ml-3' />{' '}
              </Button>
              <Button
                rounded
                className='bg-primaryLight text-blue-500 md:px-11 md:py-4 px-6 py-2  text-lg'
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Total */}
          <div className='flex flex-col md:flex-row md:space-x-10 space-x-0 md:space-y-0 space-y-3 mt-8 justify-center items-center md:justify-start'>
            <div className='flex md:justify-between justify-center space-x-2 lg:space-x-8 items-center'>
              <HiOutlineDownload className='text-darkLight text-2xl' />
              <div className='flex flex-col items-center'>
                <p className='text-xs text-darkLight'>TOTAL DON'TLOUD</p>
                <span className='text-2xl text-dark font-bold'>1,501,234</span>
              </div>
            </div>
            <div className='bg-darkLight md:w-0.5 md:h-12 h-0.5 w-1/2 opacity-10'></div>
            <div className='flex md:justify-between justify-center space-x-2 lg:space-x-8 items-center'>
              <BiUser className='text-darkLight text-2xl' />
              <div className='flex flex-col items-center'>
                <p className='text-xs text-darkLight'>TOTAL USER</p>
                <span className='text-2xl text-dark font-bold'>1,318,829</span>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='relative flex justify-center items-center lg:w-1/2 w-full max-h-max order-1 lg:order-2'>
          <div className='bg-primaryLight lg:w-[28rem] lg:h-[28rem] w-[16rem] h-[16rem] rounded-full absolute'></div>
          <div className='bg-white md:rotate-[15deg] rounded-2xl md:w-[20.731rem] md:h-[41.828rem] w-[15rem] h-[30rem] shadow-2xl shadow-blue-800/40'>
            {/* profile */}
            <div>
              <div className='flex justify-center space-x-1 items-center py-4'>
                <div className='bg-gray-100 rounded w-12 h-1.5'></div>
                <div className='bg-gray-100 rounded w-1.5 h-1.5'></div>
              </div>
              <div className='bg-gray-100 flex items-center py-3 px-6 space-x-3'>
                <HiChevronLeft className='text-2xl text-gray-400' />
                <img src={profileImg} alt='' />
                <div>
                  <p className='text-sm font-semibold'>My Soo May</p>
                  <p className='text-xs text-gray-400'>Last seen at 16:40</p>
                </div>
              </div>
            </div>

            {/* Chat Section*/}
            <div className='space-y-10 px-4 md:py-10 py-0 flex-1'>
              {/* Chat Box */}
              <ParallaxMouseMove speed={-0.4}>
                <div className=''>
                  {/* top */}
                  <div className='bg-white rounded-lg md:w-[19.25rem] md:h-36 w-[14rem] rounded-tl-none p-4 space-y-2 drop-shadow-xl relative'>
                    <img
                      className='absolute -top-5 -left-5'
                      src={circle}
                      alt=''
                    />
                    <div className='bg-gray-200 w-48 h-3 rounded'></div>
                    <div className='bg-gray-200 md:w-64 w-35 h-3 rounded'></div>
                    <div className='bg-gray-200 w-40 h-3 rounded'></div>
                    <div className='bg-gray-200 w-48 h-3 rounded'></div>
                    <div className='bg-gray-200 w-40 h-3 rounded'></div>
                  </div>
                  <div className='flex justify-end mt-1 md:w-[19.25rem] w-[14rem]'>
                    <BsCheck2 className='text-blue-700' />
                    <p className='text-[0.625rem]'>Today, at 15:50</p>
                  </div>
                </div>
              </ParallaxMouseMove>
              {/* Chat Box */}
              <ParallaxMouseMove speed={0.6}>
                <div className='flex flex-col items-end '>
                  {/* top */}
                  <div className='bg-blue-500 relative rounded-lg md:w-[18.25rem] md:h-[7.375rem] w-[14rem]  rounded-tr-none p-4 space-y-2 drop-shadow-xl '>
                    <span className='absolute top-0 -left-8 text-4xl'>🔐</span>
                    <span className='absolute -bottom-4 -right-4 text-2xl'>
                      💌
                    </span>
                    <div className='bg-blue-400 w-40 h-3 rounded'></div>
                    <div className='bg-blue-400 w-48 h-3 rounded'></div>
                    <div className='bg-blue-400 w-40 h-3 rounded'></div>
                    <div className='bg-blue-400 w-48 h-3 rounded'></div>
                  </div>
                  <div className='flex justify-start mt-1 md:w-[19.25rem] w-[14rem]'>
                    <BsCheck2 className='text-blue-700' />
                    <p className='text-[0.625rem]'>Today, at 15:50</p>
                  </div>
                </div>
              </ParallaxMouseMove>
            </div>
            <div className='px-4'>
              {/* Tempat Ngetik */}
              <div className=' flex items-center px-5 py-3 border border-gray-300 rounded-full text-darkLight space-x-3 md:mt-12 mt-0'>
                <AiOutlineSmile />
                <p className='text-xs'>Type a message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
