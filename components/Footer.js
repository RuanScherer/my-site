import Link from 'next/link'
import { useRouter } from 'next/router'
import { socialLinks } from '../data'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../constants'
import { CustomContainer } from './CustomContainer'

const Footer = () => {
  const router = useRouter()

  return (
    <motion.footer
      className="py-10 mt-16"
      style={{ backgroundColor: "var(--dark-blue-900)" }}
      {...opacityAnimation}
    >
      <CustomContainer className="flex flex-col items-center space-y-5">
        <img src="/images/white-logo.svg" alt="My logo" className="w-32 md:w-36 xl:w-40"/>
        
        <nav className="flex items-center space-x-4">
          { socialLinks.map(link => (
              <Link href={link.href} key={link.title}>
                <a target="_blank" title={link.title}>
                  <img 
                    className="cursor-pointer hover:opacity-75 transition" 
                    width="22" 
                    height="22" 
                    src={`/images/${link.image}`} 
                    alt={link.title}
                  />
                </a>
              </Link>
            )
          )}
        </nav>
        
        <Link href={`${router.asPath}#main`}>
          <a className="text-sm md:text-base font-medium text-gray-400 hover:opacity-80 transition duration-200">
            Back to top
          </a>
        </Link>
      </CustomContainer>
    </motion.footer>
  )
}

export default Footer