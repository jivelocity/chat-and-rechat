function TecnoCards({icon,title,description}) {
  return (
    <div className='flex space-x-6 lg:w-3/4'>
      <div>
        <div className='bg-gray-300 text-3xl p-4 rounded-md '>{icon}</div>
      </div>
      <div>
        <h4 className='text-lg font-semibold mb-3'>{title}</h4>
        <p className='text-base text-darkLight'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default TecnoCards
