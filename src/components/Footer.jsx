import instagram from '/assets/img/ig.png'
import facebook from '/assets/img/fb.png'
import twitter from '/assets/img/tw.png'
import { HashLink } from 'react-router-hash-link'

function Footer() {
  return (
    <div className='container mx-auto px-10 mt-20'>
      <div className='bg-primaryLight md:flex flex-col items-center md:p-20 p-16 text-gray-400 text-lg '>
        <div className='md:flex md:space-x-20 space-y-8 items-baseline'>
          <div className='flex flex-col space-y-6 '>
            <h1 className='text-dark font-semibold md:text-2xl text-xl md:text-left text-center'>
              <span>👋</span> Chat N' Rechat
            </h1>
            <p className='xl:w-3/5 md:text-left text-center'>
              Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
              ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
              pake aplikasi yang ini.
            </p>
          </div>

          <div className='flex flex-col justify-between space-y-2 md:items-start items-center '>
            <h1 className='text-dark font-semibold md:text-2xl text-xl'>
              Sitemap
            </h1>
            <HashLink smooth to='/#beranda'>
              <a>Beranda</a>
            </HashLink>
            <HashLink smooth to='/#fitur'>
              <a>Fitur-fitur</a>
            </HashLink>
            <HashLink smooth to='/#teknologi'>
              <a>Teknologi</a>
            </HashLink>
            <HashLink smooth to='/#faq'>
              <a>FAQ</a>
            </HashLink>
            <HashLink smooth to='/#download'>
              <a>Download</a>
            </HashLink>
          </div>

          <div className='space-y-4 flex flex-col md:items-start items-center'>
            <h1 className='text-dark font-semibold md:text-2xl text-xl text-center'>
              Tetap Terhubung
            </h1>
            <p>Lihat kami pansos di sosial media berikut:</p>
            <div className='flex space-x-3'>
              <img src={instagram} alt='' />
              <img src={facebook} alt='' />
              <img src={twitter} alt='' />
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <p className='text-sm text-center'>
            COPYRIGHT &copy; 2021. DESIGN BY NAUVAL, CODE BY JIVELOCITY
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
