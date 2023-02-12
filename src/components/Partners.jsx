import tirto from '/assets/img/tirto.png'
import forbes from '/assets/img/forbes.png'
import google from '/assets/img/google.png'
import tnyt from '/assets/img/tnyt.png'
import cnn from '/assets/img/cnn.png'

function Partners() {
  return (
    <div className='container mx-auto px-10'>
      <div className=' bg-primaryLight rounded-2xl mt-16'>
        <div className='lg:p-16 md:p-8 p-4   lg:space-x-10 space-x-4 justify-center flex flex-wrap'>
          <img src={cnn} alt='CNN' />
          <img src={tirto} alt='tirto' />
          <img src={forbes} alt='forbes' />
          <img src={google} alt='google' />
          <img src={tnyt} alt='The New York Times' />
        </div>
      </div>
    </div>
  )
}

export default Partners
