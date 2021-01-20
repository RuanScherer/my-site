import { useEffect, useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [scroll, setScroll] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const handleScroll = () => {
    setScroll(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <header className={`flex justify-between items-center p-5 bg-white sticky px-5 lg:px-14 top-0 w-full z-10 ${scroll > 0 ? 'shadow' : ''}`}>
      <img className="h-5" src="/logo.svg" alt="My logo"/>

      <nav className="hidden lg:flex flex-wrap space-x-6 text-lg">
        <Link href="#about-me">
          <a className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">About me</a>
        </Link>
        <Link href="#skills">
          <a className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">Skills</a>
        </Link>
        <Link href="#where-i-worked">
          <a className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">Where I worked</a>
        </Link>
        <Link href="#say-about-me">
          <a onClick={() => setShowMenu(false)} className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">Recommendations</a>
        </Link>
        <Link href="#awards-recognition">
          <a onClick={() => setShowMenu(false)} className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">Awards and Recognition</a>
        </Link>
      </nav>

      <button className="lg:hidden" onClick={() => setShowMenu(true)}>
        <img className="hover:opacity-50 transition" src="/menu.svg" alt="Menu"/>
      </button>

      { showMenu && 
        <nav className="fixed top-0 left-0 w-screen h-screen p-8 bg-white z-20 overflow-y-auto flex flex-col justify-center items-center space-y-6 text-lg">
          <button onClick={() => setShowMenu(false)}>
            <img className="hover:opacity-50 transition" src="/x.svg" alt="Menu"/>
          </button>
          <Link href="#about-me">
            <a onClick={() => setShowMenu(false)} className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">About me</a>
          </Link>
          <Link href="#skills">
            <a onClick={() => setShowMenu(false)} className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">Skills</a>
          </Link>
          <Link href="#where-i-worked">
            <a onClick={() => setShowMenu(false)} className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">Where I worked</a>
          </Link>
          <Link href="#say-about-me">
            <a onClick={() => setShowMenu(false)} className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">Recommendations</a>
          </Link>
          <Link href="#awards-recognition">
            <a onClick={() => setShowMenu(false)} className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">Awards and Recognition</a>
          </Link>
        </nav>
      }
    </header>
  )
}

export default Header