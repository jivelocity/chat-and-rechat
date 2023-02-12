import profileImg from '/assets/img/profile.png'
import { HiChevronLeft } from 'react-icons/hi'
import { BsCheck2 } from 'react-icons/bs'
import { AiOutlineSmile } from 'react-icons/ai'
import TecnoCards from './TecnoCards'

import ParallaxMouseMove from '../plugin/ParallaxMouseMove'

function TecnologySection() {

  const cards = [
    {
      id:1,
      icon: "🤣",
      title:"Kamu Adalah Beban Kami",
      description:"Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!"
    },
    {
      id:2,
      icon: "😑",
      title:"Males Buat Ngembangin",
      description:"Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin."
    },
    {
      id:3,
      icon: "😏",
      title:"Pokoknya Males Aja Lah",
      description:"Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah."
    }
  ]

  const renderedCards = cards.map((card) => {
    return (
      <TecnoCards key={card.id} icon={card.icon} title={card.title} description={card.description} />
    )
  })

  return (
    <div className='container mx-auto px-10'>
      <div className='flex lg:space-x-8 space-y-8 lg:space-y-0 flex-wrap lg:flex-nowrap '>
        <div className=' relative lg:w-1/2 w-full flex justify-center xl:justify-end py-4 px-9'>
          {/* dark*/}
          
          <div className='bg-dark absolute pb-4 -rotate-[7deg] xl:right-36 rounded-2xl md:w-[20.731rem] md:h-[41.828rem]  w-[15rem] h-[30rem] shadow-2xl shadow-blue-800/40'>
            {/* profile */}
            <div>
              <div className='flex justify-center space-x-1 items-center py-4'>
                <div className='bg-gray-100 rounded w-12 h-1.5'></div>
                <div className='bg-gray-100 rounded w-1.5 h-1.5'></div>
              </div>
              <div className='bg-dark flex items-center py-3 md:px-6 px-2 space-x-3'>
                <HiChevronLeft className='text-2xl text-gray-400' />
                <img src={profileImg} alt='' />
                <div>
                  <p className='text-sm font-semibold text-white'>
                    Ahmad Rifai
                  </p>
                  <p className='text-xs text-gray-400'>Last seen at 16:40</p>
                </div>
              </div>
            </div>

            {/* Chat Section*/}
            <div className='space-y-10 px-4 md:py-10'>
              {/* Chat Box */}
              <div className=''>
                {/* top */}
                <div className='bg-white opacity-20 rounded-lg md:w-56 w-46 h-16 rounded-tl-none p-4 space-y-2'>
                  <div className='bg-gray-400 md:w-48 w-46 h-3 rounded'></div>
                  <div className='bg-gray-400 w-40 h-3 rounded'></div>
                </div>
                <div className='flex justify-end mt-1 md:w-56 w-46'>
                  <BsCheck2 className='text-blue-700' />
                  <p className='text-[0.625rem] text-white'>Today, at 15:50</p>
                </div>
              </div>
              {/* Chat Box */}
              <div className='flex flex-col items-end'>
                {/* top */}
                <div className='bg-blue-500 rounded-lg md:w-56 w-46 h-16 rounded-tr-none p-4 space-y-2'>
                  <div className='bg-blue-400 md:w-48 w-46 h-3 rounded'></div>
                  <div className='bg-blue-400 w-40 h-3 rounded'></div>
                </div>
                <div className='flex justify-start mt-1 md:w-56 w-46'>
                  <BsCheck2 className='text-blue-700' />
                  <p className='text-[0.625rem] text-white'>Today, at 15:50</p>
                </div>
              </div>
              {/* Chat Box */}
              <div className='hidden md:block'>
                {/* top */}
                <div className='bg-white opacity-20 rounded-lg md:w-56 w-46 h-18 rounded-tl-none p-4 space-y-2'>
                  <div className='bg-gray-400 md:w-48 w-46 h-3 rounded'></div>
                  <div className='bg-gray-400 w-40 h-3 rounded'></div>
                  <div className='bg-gray-400 w-36 h-3 rounded'></div>
                </div>
                <div className='flex justify-end mt-1 md:w-56 w-46'>
                  <BsCheck2 className='text-blue-700' />
                  <p className='text-[0.625rem] text-white'>Today, at 15:50</p>
                </div>
              </div>
            </div>
            <div className='px-4'>
              {/* Tempat Ngetik */}
              <div className=' flex items-center px-5 py-3 bg-white opacity-20 rounded-full text-darkLight space-x-3 mt-20 md:mt-12'>
                <AiOutlineSmile />
                <p className='text-xs text-gray-400'>Type a message</p>
              </div>
            </div>
          </div>
          {/* Putih */}
          <ParallaxMouseMove speed={-0.4}>
          <div className='bg-white xl:ml-48 pb-4 lg:ml-16 mt-12 rotate-[7deg] rounded-2xl md:w-[20.731rem] md:h-[41.828rem]  w-[15rem] h-[30rem] shadow-2xl shadow-blue-800/40'>
            {/* profile */}
            <div>
              <div className='flex justify-center space-x-1 items-center py-4'>
                <div className='bg-gray-100 rounded w-12 h-1.5'></div>
                <div className='bg-gray-100 rounded w-1.5 h-1.5'></div>
              </div>
              <div className='bg-gray-100 flex items-center py-3 md:px-6 px-2 space-x-3'>
                <HiChevronLeft className='text-2xl text-gray-400' />
                <img src={profileImg} alt='' />
                <div>
                  <p className='text-sm font-semibold'>Ahmad Rifai</p>
                  <p className='text-xs text-gray-400'>Last seen at 16:40</p>
                </div>
              </div>
            </div>

            {/* Chat Section*/}
            <div className='space-y-10 px-4 md:py-10 py-2 flex-1'>
              {/* Chat Box */}
              <div className=''>
                {/* top */}
                <div className='bg-gray-100 rounded-lg md:w-56 w-46 h-16 rounded-tl-none p-4 space-y-2'>
                  <div className='bg-gray-300 md:w-48 w-46 h-3 rounded'></div>
                  <div className='bg-gray-300 w-40 h-3 rounded'></div>
                </div>
                <div className='flex justify-end mt-1 md:w-56 w-46'>
                  <BsCheck2 className='text-blue-700' />
                  <p className='text-[0.625rem]'>Today, at 15:50</p>
                </div>
              </div>
              {/* Chat Box */}
              <div className='flex flex-col items-end'>
                {/* top */}
                <div className='bg-blue-500 rounded-lg md:w-56 w-46 h-16 rounded-tr-none p-4 space-y-2'>
                  <div className='bg-blue-400 md:w-48 w-46 h-3 rounded'></div>
                  <div className='bg-blue-400 w-40 h-3 rounded'></div>
                </div>
                <div className='flex justify-start mt-1 md:w-56 w-46'>
                  <BsCheck2 className='text-blue-700' />
                  <p className='text-[0.625rem]'>Today, at 15:50</p>
                </div>
              </div>
              {/* Chat Box */}
              <div className='hidden md:block'>
                {/* top */}
                <div className='bg-gray-100 rounded-lg md:w-56 w-46 h-18 rounded-tl-none p-4 space-y-2'>
                  <div className='bg-gray-300 md:w-48 w-46 h-3 rounded'></div>
                  <div className='bg-gray-300 w-40 h-3 rounded'></div>
                  <div className='bg-gray-300 w-36 h-3 rounded'></div>
                </div>
                <div className='flex justify-end mt-1 md:w-56 w-46'>
                  <BsCheck2 className='text-blue-700' />
                  <p className='text-[0.625rem]'>Today, at 15:50</p>
                </div>
              </div>
            </div>
            <div className='px-4'>
              {/* Tempat Ngetik */}
              <div className=' flex items-center px-5 py-3 border border-gray-300 rounded-full text-darkLight space-x-3 mt-20 md:mt-12'>
                <AiOutlineSmile />
                <p className='text-xs'>Type a message</p>
              </div>
            </div>
          </div>
          </ParallaxMouseMove>
        </div>

        {/* right side */}

        <div className='lg:w-1/2 w-full space-y-8'>
          {/* top */}
          <div className='flex flex-col space-y-3 lg:max-w-[31.063rem]'>
            <h4 className='text-sm text-dark uppercase font-semibold'>
              teknologi yang digunakan
            </h4>
            <h1 className='text-3xl text-dark leading-10 '>
              Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH
              Dan Jason Fried Pensiun! 😱
            </h1>
            <p className='text-base text-darkLight '>
              Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara
              aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo
              pake dan daftar di aplikasi ini jadi kita harus bayar server DO
              tiap bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan
              kenapa gak usah daftar:
            </p>
          </div>
          {/* bottom */} {/* component */}
          <div className='flex flex-col space-y-8'>
            {renderedCards}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TecnologySection
