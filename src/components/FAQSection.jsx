import Accordion from './Accordion'

function FAQSection() {
  const items = [
    {
      id: '1',
      label: 'Apakah aplikasi ini sudah dapat izin dari MUI?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: '2',
      label: 'Apakah aplikasi ini gratis?',
      content:
        'Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.',
    },
    {
      id: '3',
      label: 'Apakah data saya akan dijual ke agen khusus US?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: '4',
      label: 'Kenapa bumi muter? Apa karena di depan ada yang nikah?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: '5',
      label: 'Gimana caranya supaya si Rizal mau bikin konten buat Array ID?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: '6',
      label: 'Pertanyaan di atas gabakal ada yang bisa jawab sih',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: '7',
      label: 'Kenapa Main Lato-lato, bang?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
  ]

  return (
    <div className='container mx-auto px-10 mt-20'>
      <div className='flex flex-col items-center space-y-2 text-center'>
        <p className='text-sm text-dark uppercase'>Banyak yang nanya</p>
        <p className='text-3xl text-dark'>Pertanyaan Yang Sering Ditanyakan</p>
        <p className='text-darkLight xl:w-1/3 w-full'>
          Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya
          ditaruh sini aja siapa tau lo mau baca 'kan.
        </p>
      </div>

      <div className='flex justify-center mt-8'>
        <Accordion items={items} />
      </div>
    </div>
  )
}

export default FAQSection
