import Button from "./Button"



function Navbar() {
  const menu = ['Beranda', 'Fitur-fitur', 'Teknologi', 'FAQ']



  return (
    <div className=' container mx-auto px-10'>
        <div className="flex justify-between items-center">
          <img  src='/src/assets/logo.png' alt='Logo' />
          <div className="hidden md:flex justify-between space-x-16 text-dark">
            <a href="#"><strong>Beranda</strong></a>
            <a href="#">Fitur-Fitur</a>
            <a href="#">Teknologi</a>
            <a href="#">FAQ</a>
          </div>
          <div>
              <Button primary rounded className="px-6 py-2">Download</Button>
          </div>
        </div>
    </div>
  )
}

export default Navbar
