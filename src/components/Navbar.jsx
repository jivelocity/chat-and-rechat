import { HashLink } from 'react-router-hash-link'
import Button from './Button'
import logo from '/assets/img/logo.png'

function Navbar() {
  const menu = ['Beranda', 'Fitur-fitur', 'Teknologi', 'FAQ']

  return (
    <div className=' container mx-auto px-10'>
      <div className='flex justify-between items-center'>
        <img src={logo} alt='Logo' />
        <div className='hidden md:flex justify-between space-x-16 text-dark'>
          <HashLink smooth to='/#fitur'>
            <a>Fitur-Fitur</a>
          </HashLink>
          <HashLink smooth to='/#teknologi'>
            <a>Teknologi</a>
          </HashLink>
          <HashLink smooth to='/#faq'>
            <a>FAQ</a>
          </HashLink>
        </div>
        <div>
          <HashLink smooth to='/#download'>
            <Button primary rounded className='px-6 py-2'>
              Download
            </Button>
          </HashLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
