import Link from 'next/link'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../constants'

const WorkTogether = () => {
  return (
    <motion.section {...opacityAnimation} className="pt-52 space-y-12 lg:w-8/12 xl:w-8/12">
      <h1 className="text-3xl md:text-4xl font-extrabold relative">
        Que tal construir algo juntos?
      </h1>

      <div className="space-y-4 md:space-y-2">
        <p className="text-lg md:text-xl leading-relaxed font-medium text-justify">
          Adoro trabalhar com pessoas que compartilham a mesma paixão por tecnologia.
        </p>
        <p className="text-lg md:text-xl leading-relaxed font-medium text-justify">
          Você é uma dessas pessoas?
          <Link href="https://wa.link/tgjlij">
            <a className="text-primary font-bold hover:opacity-70 transition">{' '}Vamos trabalhar juntos!</a>
          </Link>
        </p>
      </div>
    </motion.section>
  )
}

export default WorkTogether