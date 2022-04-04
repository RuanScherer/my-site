import { motion } from "framer-motion"
import { CustomContainer } from "../components/CustomContainer"
import { opacityAnimation } from '../constants'
import { MediumCard } from "./MediumCard"

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

        <MediumCard className="col-span-3 xl:col-span-2"/>
      </CustomContainer>
    </motion.section>
  )
}
