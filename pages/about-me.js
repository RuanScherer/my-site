import Link from "next/link"
import { motion } from "framer-motion"
import { BiMouse, BiChevronDown } from "react-icons/bi"
import { IoArrowBackOutline } from "react-icons/io5"
import { CustomContainer } from "../components/CustomContainer"
import { opacityAnimation } from "../constants"
import { detailedAbout } from "../data"

export default function AboutMe() {
  return (
    <>
      <motion.main
        id="main"
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
            <BiMouse className="w-7 lg:w-8 h-7 lg:h-8 -mb-2" color="#0C0A1F" />
            <BiChevronDown className="w-7 lg:w-8 h-7 lg:h-8" color="#0C0A1F" />
          </div>
        </CustomContainer>
      </motion.main>

      <motion.h3
        className="w-full my-20 text-3xl md:text-4xl xl:text-5xl font-extrabold text-center"
        {...opacityAnimation}
      >
        So, I am...
      </motion.h3>

      <motion.section className="my-24" {...opacityAnimation}>
        <CustomContainer className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
          <div className="col-span-3 xl:col-span-4 m-auto">
            <h4 className="mb-4 text-2xl md:text-3xl xl:text-4xl font-extrabold">
              a <span className="text-blue-900">sportsman</span>
            </h4>

            <div className="flex flex-col gap-4 md:gap-6 md:text-lg xl:text-xl leading-relaxed font-medium text-justify">
              {detailedAbout[0].map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <img
            src="/images/me-karate.jpeg"
            alt="Me in a karate championship"
            className="col-span-3 xl:col-span-2 rounded-2xl m-auto shadow-xl"
          />
        </CustomContainer>
      </motion.section>

      <motion.section className="my-24" {...opacityAnimation}>
        <CustomContainer className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
          <img
            src="/images/me-guitar.jpeg"
            alt="Me playing guitar"
            className="order-last md:order-1 col-span-3 xl:col-span-2 rounded-2xl m-auto shadow-xl"
          />

          <div className="md:order-2 col-span-3 xl:col-span-4 m-auto">
            <h4 className="mb-4 text-2xl md:text-3xl xl:text-4xl font-extrabold">
              a <span className="text-blue-900">musician</span>
            </h4>

            <div className="flex flex-col gap-4 md:gap-6 md:text-lg xl:text-xl leading-relaxed font-medium text-justify">
              {detailedAbout[1].map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </CustomContainer>
      </motion.section>

      <motion.section className="my-24" {...opacityAnimation}>
        <CustomContainer className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
          <div className="col-span-3 xl:col-span-4 m-auto">
            <h4 className="mb-4 text-2xl md:text-3xl xl:text-4xl font-extrabold">
              a <span className="text-blue-900">travel lover</span>
            </h4>

            <div className="flex flex-col gap-4 md:gap-6 md:text-lg xl:text-xl leading-relaxed font-medium text-justify">
              {detailedAbout[2].map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <img
            src="/images/me-trip.jpeg"
            alt="Me in a trip"
            className="col-span-3 xl:col-span-2 rounded-2xl m-auto shadow-xl"
          />
        </CustomContainer>
      </motion.section>

      <motion.h3
        className="w-full my-20 text-xl md:text-2xl xl:text-3xl font-extrabold text-center"
        {...opacityAnimation}
      >
        ...and much more!
        {' '}
        <a href="https://wa.link/tgjlij" target="_blank" className="text-blue-900 pointer hover:opacity-75 transition">
          Chat me
        </a>
        {' '}
        and let's talk!
      </motion.h3>
    </>
  )
}