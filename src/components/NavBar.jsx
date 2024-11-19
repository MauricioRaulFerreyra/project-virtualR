import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const handleToogle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav className='sticky top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-lg'>
      <section className='container relative mx-4 px-4 text-sm'>
        <aside className='flex items-center justify-between'>
          <div className='flex flex-shrink-0 items-center'>
            <img className='mr-2 h-10 w-10' src={logo} alt='logo' />
            <span className='text-xl tracking-tight'>VirtualR</span>
          </div>
          <ul className='ml-14 hidden space-x-14 lg:flex'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className='hidden items-center justify-center space-x-12 lg:flex'>
            <a href='#' className='rounded-md border px-3 py-2'>
              Sign in
            </a>
            <a href='#' className='rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2'>
              Create an account
            </a>
          </div>
          <div className='mr-4 flex-col justify-end sm:m-0 md:m-0 md:flex lg:hidden'>
            <button onClick={handleToogle}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </aside>
        {mobileDrawerOpen && (
          <div className='fixed right-0 z-20 flex w-full flex-col items-center justify-center bg-neutral-900 p-12 lg:hidden'>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-4'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='flex space-x-6'>
              <a href='#' className='rounded-md border px-3 py-2'>
                Sign in
              </a>
              <a href='#' className='rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2'>
                Create an account
              </a>
            </div>
          </div>
        )}
      </section>
    </nav>
  )
}

export default NavBar
