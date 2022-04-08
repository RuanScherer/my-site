import { motion } from 'framer-motion'
import { CustomContainer } from "../components/CustomContainer"
import Link from "next/link"
import { socialLinks } from '../data/'
import { opacityAnimation } from '../constants'

export const WelcomeSection = () => {
  return (
    <motion.main
      id="main"
      className="min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: "url('/images/circles-outlined-background.svg')",
        backgroundSize: "cover"
      }}
      {...opacityAnimation}
    >
      <CustomContainer className="flex flex-col items-center justify-center gap-y-4">
        <img 
          className="rounded-full border-2 border-gray-200 shadow-lg mt-12" 
          width="100" 
          height="100" 
          src="/images/me.jpeg" 
          alt="Ruan Scherer"
        />

        <h2 className="bg-white text-lg md:text-xl xl:text-2xl mt-2">
          Hi, I'm <span className="font-bold text-blue-900">Ruan</span>!
        </h2>

        <h1 className="bg-white mt-2 mb-8 text-center text-3xl md:text-4xl xl:text-5xl font-semibold">
          I can help you to build
          <br/>
          <span className="font-bold text-blue-900">
            amazing modern software.
          </span>
        </h1>
        
        <i className="bg-white mt-4 text-md lg:text-lg xl:text-xl font-medium text-center text-gray-100">
          {'<Senior Fullstack Developer/>'}
        </i>

        <div className="flex align-center gap-4">
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
        </div>
      </CustomContainer>
    </motion.main>
  )
}
