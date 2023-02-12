import instagram from '../assets/img/ig.png'
import facebook from '../assets/img/fb.png'
import twitter from '../assets/img/tw.png'

function Footer() {
    return ( <div className="container mx-auto px-10 mt-20">
        <div className="bg-primaryLight md:flex justify-around items-baseline md:p-20 p-16 text-gray-400 text-lg md:space-x-20 space-y-8">
            <div className="flex flex-col space-y-6 ">
                <h1 className="text-dark font-semibold text-2xl"> <span>👋</span> Chat N' Rechat</h1>
                <p className="xl:w-3/5">Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.</p>
                <p className='text-sm'>COPYRIGHT &copy; 2021. DESIGN BY NAUVAL, CODE BY JIVELOCITY</p>
            </div>

            <div className="flex flex-col justify-between space-y-2 md:items-start items-center ">
                <h1 className="text-dark font-semibold text-2xl">Sitemap</h1>
                <a href="">Beranda</a>
                <a href="">Fitur-fitur</a>
                <a href="">Teknologi</a>
                <a href="">FAQ</a>
                <a href="">Download</a>
            </div>

            <div className='space-y-4 flex flex-col md:items-start items-center'>
                <h1 className="text-dark font-semibold text-2xl text-center">Tetap Terhubung</h1>
                <p>Lihat kami pansos di sosial media berikut:</p>
                <div className='flex space-x-3'>
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>

        </div>

    </div> );
}

export default Footer;