import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    setScroll(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <header className={`flex justify-between py-5 bg-white sticky top-0 w-full px-5 md:px-14 z-10 ${scroll > 0 ? 'shadow' : ''}`}>
      <h1 className="text-2xl font-semibold"><span className="font-extrabold">Ruan</span> Scherer</h1>
      <Link href="https://wa.link/tgjlij">
        <a className="text-lg border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">
          Chat with me
        </a>
      </Link>
    </header>
  )
}

export default Header