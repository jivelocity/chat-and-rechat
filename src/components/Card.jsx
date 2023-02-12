function Card({ imgUrl, title, desc }) {

  return (
    <div className='flex flex-col md:w-80 h-[350px] justify-bettwen items-center p-4'>
      <img className="h-44" src={imgUrl} alt='' />
      <h2 className='text-lg text-center text-dark'>{title}</h2>
      <p className='text-center text-base text-darkLight leading-6 '>{desc}</p>
    </div>
  )
}

export default Card
