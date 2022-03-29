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
            About me
          </h1>

          <div className="flex flex-col gap-4 md:gap-6 md:text-lg xl:text-xl leading-relaxed font-medium text-justify">
            <p>{about[0]}</p>
            <p>{about[1]}</p>
            <p>{about[2]}</p>
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