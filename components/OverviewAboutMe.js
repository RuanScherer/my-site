import Link from "next/link"
import { IoArrowForwardOutline } from "react-icons/io5"
import { motion } from 'framer-motion'
import { CustomContainer } from "../components/CustomContainer"
import { about } from '../data/'
import { opacityAnimation } from '../constants'

export const OverviewAboutMe = () => {
  return (
    <motion.section
      id="about-me"
      className="pt-24 space-y-12"
      {...opacityAnimation}
    >
      <CustomContainer className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
        <div className="col-span-3 xl:col-span-4 m-auto">
          <h1 className="mb-4 text-2xl md:text-3xl xl:text-4xl font-extrabold">
            About <span className="text-blue-900">me</span>
          </h1>

          <div className="flex flex-col gap-4 md:gap-6 md:text-lg xl:text-xl leading-relaxed font-medium text-justify">
            {about.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

            <Link href="/about-me">
              <a className="flex items-center mr-auto gap-2 text-blue-900 text-lg font-extrabold transition transform hover:translate-x-1 hover:opacity-70">
                Know more about me
                <IoArrowForwardOutline stroke="#150DFB" />
              </a>
            </Link>
          </div>
        </div>

        <img
          src="/images/me-home-office.jpeg"
          alt="Me in home office"
          className="col-span-3 xl:col-span-2 rounded-2xl m-auto shadow-xl"
        />
      </CustomContainer>
    </motion.section>
  )
}