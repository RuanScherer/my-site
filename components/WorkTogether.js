import Link from 'next/link'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../constants'
import { CustomContainer } from './CustomContainer'

const WorkTogether = () => {
  return (
    <motion.section className="pt-24" {...opacityAnimation}>
      <CustomContainer>
        <div 
          className="bg-blue-900 fit-content space-y-4 rounded-xl shadow-xl mx-auto p-5 md:p-6 xl:p-8 transform hover:translate-y-1 transition duration-200"
        >
          <h1 className="text-2xl md:text-3xl xl:text-4xl text-center text-white font-extrabold">
            Want to build something nice?
          </h1>

          <div className="space-y-4 md:space-y-2 text-gray-100">
            <p className="text-base md:text-lg xl:text-xl text-center text-gray-100 leading-relaxed font-medium">
              I like so much to work with people who share the same passion: technology.
            </p>

            <p className="text-base md:text-lg xl:text-xl text-center text-gray-100 leading-relaxed font-medium">
              Are you one of those people?
              <Link href="https://wa.link/tgjlij">
                <a className="font-bold hover:opacity-80 transition">
                  {' '}Let's work together!
                </a>
              </Link>
            </p>
          </div>
        </div>
      </CustomContainer>
    </motion.section>
  )
}

export default WorkTogether