import Link from 'next/link'
import { useRouter } from 'next/router'
import { socialLinks } from '../data'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../constants'

const Footer = () => {
  const router = useRouter()

  return (
    <motion.footer {...opacityAnimation} className="flex justify-between items-center pt-5 pb-12 mt-36">
      <nav className="flex items-center space-x-4">
        <img className="rounded-full" width="50" height="50" src="/images/me.jpeg"/>
        { socialLinks.map(link => (
            <Link href={link.href} key={link.title}>
              <a target="_blank" title={link.title}>
                <img 
                  className="cursor-pointer hover:opacity-75 transition" 
                  width="30" 
                  height="30" 
                  src={`/images/${link.image}`} 
                  alt={link.title}
                />
              </a>
            </Link>
          )
        )}
      </nav>
      <Link href={`${router.asPath}#main`}>
        <a className="text-lg border-b-2 border-transparent hover:border-secondary hover:text-secondary transform hover:translate-y-0.5 transition duration-200">
          Back to top
        </a>
      </Link>
    </motion.footer>
  )
}

export default Footer