import appStore from '/assets/img/appstore.png'
import playStore from '/assets/img/playstore.png'
import { BsCheck2 } from 'react-icons/bs'

function DownloadSection() {
  return (
    <div id='download' className='container mx-auto px-10 mt-24'>
      <div className='grid lg:grid-cols-2 grid-row-2 bg-blue-500 rounded-3xl shadow-2xl shadow-blue-800/40 '>
        <div className='flex justify-center '>
          <div className=' py-20 lg:pl-20 px-8 md:space-y-6 space-y-4'>
            <h4 className='text-sm text-white'>DOWNLOAD APLIKASINYA</h4>
            <h1 className='text-3xl text-white leading-7'>
              Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau
              Symbian Store
            </h1>
            <ul className='pl-5 mt-2 space-y-1 list-disc list-inside text-blue-300'>
              <li>Android Version: Mojave+</li>
              <li>iOS Version: Lolipop+</li>
              <li>Symbian: 20.04+</li>
            </ul>
            <div className='flex flex-wrap flex-col md:flex-row justify-center items-center md:space-x-6 space-x-0 space-y-6 md:space-y-0'>
              <img src={appStore} alt='' />
              <img src={playStore} alt='' />
            </div>
          </div>
        </div>
        <div className='flex justify-center '>
          <div className='bg-white max-w-[20.731rem]'>
            {/* Chat Section*/}
            <div className='space-y-10 px-4 py-10 flex-1'>
              {/* Chat Box */}
              <div className=''>
                {/* top */}
                <div className='bg-gray-100 rounded-lg w-56 h-16 rounded-tl-none p-4 space-y-2'>
                  <div className='bg-gray-300 w-48 h-3 rounded'></div>
                  <div className='bg-gray-300 w-40 h-3 rounded'></div>
                </div>
                <div className='flex justify-end mt-1 w-56'>
                  <BsCheck2 className='text-blue-700' />
                  <p className='text-[0.625rem]'>Today, at 15:50</p>
                </div>
              </div>
              {/* Chat Box */}
              <div className='flex flex-col items-end'>
                {/* top */}
                <div className='bg-blue-500 rounded-lg w-56 h-16 rounded-tr-none p-4 space-y-2'>
                  <div className='bg-blue-400 w-48 h-3 rounded'></div>
                  <div className='bg-blue-400 w-40 h-3 rounded'></div>
                </div>
                <div className='flex justify-start mt-1 w-56'>
                  <BsCheck2 className='text-blue-700' />
                  <p className='text-[0.625rem]'>Today, at 15:50</p>
                </div>
              </div>
              {/* Chat Box */}
              <div className=''>
                {/* top */}
                <div className='bg-gray-100 rounded-lg w-56 h-18 rounded-tl-none p-4 space-y-2'>
                  <div className='bg-gray-300 w-48 h-3 rounded'></div>
                  <div className='bg-gray-300 w-40 h-3 rounded'></div>
                  <div className='bg-gray-300 w-36 h-3 rounded'></div>
                </div>
                <div className='flex justify-end mt-1 w-56'>
                  <BsCheck2 className='text-blue-700' />
                  <p className='text-[0.625rem]'>Today, at 15:50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadSection
