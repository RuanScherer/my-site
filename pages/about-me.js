import Link from "next/link"
import { motion } from "framer-motion"
import { CustomContainer } from "../components/CustomContainer"
import { opacityAnimation } from "../constants"
import { BiMouse, BiChevronDown } from "react-icons/bi"
import { IoArrowBackOutline } from "react-icons/io5"

export default function AboutMe() {
  return (
    <motion.section
      style={{
        backgroundImage: "url('/images/me-presentation.svg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom"
      }}
      {...opacityAnimation}
    >
      <CustomContainer className="min-h-screen flex flex-col items-stretch justify-between space-y-16 py-10">
        <Link href="/">
          <a className="mr-auto flex items-center gap-1 text-sm sm:text-lg font-semibold cursor-pointer hover:-translate-x-2 transition transform">
            <IoArrowBackOutline stroke="#0C0A1F" className="w-4 lg:w-5 h-4 lg:h-5" />
            Back to home
          </a>
        </Link>

        <div>
          <h2 className="mb-3 md:mb-4 text-center text-gray-800 text-lg sm:text-xl md:text-2xl font-semibold">
            Good to see you here!
          </h2>

          <h1 className="w-4/6 sm:w-3/5 md:4/5 xl:w-5/6 mx-auto text-center text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Let's know a little more <span className="text-blue-900">about me.</span>
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <BiMouse className="w-6 lg:w-8 h-6 lg:h-8 -mb-2" color="#0C0A1F" />
          <BiChevronDown className="w-6 lg:w-8 h-6 lg:h-8" color="#0C0A1F" />
        </div>
      </CustomContainer>
    </motion.section>
  )
}