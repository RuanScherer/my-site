import Link from "next/link"
import { motion } from 'framer-motion'
import { opacityAnimation } from '../constants'

const WhatsAppFAB = () => (
  <Link href="https://wa.link/tgjlij">
    <motion.a {...opacityAnimation} className="p-3 shadow-xl bg-white rounded-full fixed bottom-6 right-6 z-10 transform transition hover:translate-y-1 hover:shadow-lg">
      <img width="30" src="/images/whatsapp-symbol.svg" alt="WhatsApp"/>
    </motion.a>
  </Link>
)

export default WhatsAppFAB