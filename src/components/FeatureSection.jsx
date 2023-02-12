import Card from './Card'

function FeatureSection() {
  const cardValues = [
    {
      id: 1,
      imgUrl: 'src/assets/img/card1.png',
      title: 'Groups to keep in touch',
      description:
        'Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos.',
    },
    {
      id: 2,
      imgUrl: 'src/assets/img/card2.png',
      title: 'Simple, Reliable Messaging',
      description:
        "Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.",
    },
    {
      id: 3,
      imgUrl: 'src/assets/img/card3.png',
      title: 'Speak Freely',
      description:
        "With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations.",
    },
  ]

  const renderedCards = cardValues.map((cardValue) => {
    return (
      <Card
        key={cardValue.id}
        imgUrl={cardValue.imgUrl}
        title={cardValue.title}
        desc={cardValue.description}
      />
    )
  })

  return (
    <div className='container mx-auto px-10 py-24'>
      <div className='flex flex-col items-center md:space-y-24 space-y-16 bg-gradient-radial-custom'>
        <div className='flex flex-col items-center space-y-2'>
          <h5 className='text-sm text-dark font-semibold'>
            NGGAK HARUS SIH SEBENERNYA
          </h5>
          <h4 className='text-3xl text-dark font-semibold text-center'>
            Kenapa Harus Pakai Chat N' Rechat?
          </h4>
          <p className='text-center text-base text-darkLight leading-6 md:w-4/6'>
            Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp
            aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.
          </p>
        </div>
        <div className='flex flex-wrap justify-center md:space-x-8 space-x-0'>
          {/* cardFeature jadiin component */}
          {renderedCards}
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
