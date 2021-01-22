import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../constants'
import { menuLinks } from '../data/'

const Header = () => {
  const [scroll, setScroll] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  }

  const handleScroll = () => {
    setScroll(window.pageYOffset)
  }

  useEffect(() => {
    console.log(menuLinks)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <motion.header {...opacityAnimation} className={`flex justify-between items-center p-5 bg-white sticky px-5 lg:px-14 top-0 w-full z-10 ${scroll > 0 && 'shadow'} ${router.pathname !== '/' && 'hidden'}`}>
      <img className="h-5" src="/images/logo.svg" alt="My logo"/>

      <nav className="hidden xl:flex flex-wrap space-x-6 text-lg">
        { menuLinks.map(link => (
            <Link href={`#${link.href}`}>
              <a className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">
                {link.name}
              </a>
            </Link>
          )
        )}
      </nav>

      <button className="xl:hidden" onClick={() => setShowMenu(true)}>
        <img className="hover:opacity-50 transition" src="/images/menu.svg" alt="Menu"/>
      </button>

      <motion.nav
        animate={showMenu ? "open" : "closed"}
        transition={{ duration: .4, type: "spring" }}
        variants={menuVariants}
        className="fixed top-0 left-0 w-screen h-screen p-8 bg-white z-20 overflow-y-auto flex flex-col justify-center items-center space-y-6 text-lg">
        <button onClick={() => setShowMenu(false)}>
          <img className="hover:opacity-50 transition" src="/images/x.svg" alt="Menu"/>
        </button>
        
        { menuLinks.map(link => (
            <Link href={`#${link.href}`}>
              <a onClick={() => setShowMenu(false)} className="border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">
                {link.name}
              </a>
            </Link>
          )
        )}
      </motion.nav>
    </motion.header>
  )
}

export default Header