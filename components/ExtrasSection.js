import { motion } from "framer-motion"
import { CustomContainer } from "../components/CustomContainer"
import { opacityAnimation } from '../constants'

export const ExtrasSection = () => {
  return (
    <motion.section id="extras" {...opacityAnimation}>
      <CustomContainer className="pt-32 grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
        <div className="col-span-3 xl:col-span-4 m-auto">
          <h2 className="mb-6 text-2xl md:text-3xl xl:text-4xl font-extrabold">
            Some <span style={{ color: "var(--blue-900)" }}>extras...</span>
          </h2>

          <p className="md:text-lg xl:text-xl leading-relaxed font-medium text-justify">
            I like too much to share knowledge I have and one of the ways I found to do that is writing posts in a blog like Medium.
            Check my profile in Medium and read my posts! Maybe you find something that interests you.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center col-span-3 xl:col-span-2 rounded-2xl p-5 m-auto border shadow-xl text-center transform hover:shadow-lg hover:translate-y-1 transition transition-250">
          <div
            className="w-20 md:w-24 xl:w-28 h-20 md:h-24 xl:h-28 mb-6 bg-cover bg-center rounded-full"
            style={{ backgroundImage: "url(/images/medium-photo.jpeg)" }}
          />
          
          <h3 className="mb-2 text-lg md:text-xl xl:text-2xl font-bold">
            Ruan Scherer
          </h3>
          
          <p className="mb-4 text-base md:text-lg xl:text-xl font-medium">
            Full Stack Developer. Passionate about technology. Let's talk?
          </p>
          
          <a
            href="https://medium.com/@ruan.vscherer"
            target="_blank"
            className="text-gray-200 text-sm md:text-base xl:text-lg font-medium shadow-lg rounded-full px-4 py-1 duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--dark-blue-900)" }}
          >
            Go to Ruan's Medium
          </a>
        </div>
      </CustomContainer>
    </motion.section>
  )
}
