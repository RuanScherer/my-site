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
    <header className={`p-5 bg-white sticky top-0 w-full z-10 ${scroll > 0 ? 'shadow' : ''}`}>
      <h1 className="text-2xl text-center font-semibold"><span className="font-extrabold">Ruan</span> Scherer</h1>
    </header>
  )
}

export default Header