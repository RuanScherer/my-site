import { motion } from 'framer-motion'
import { IoServer, IoLaptopOutline, IoPhonePortraitOutline } from "react-icons/io5"
import { CustomContainer } from "../components/CustomContainer"
import { opacityAnimation } from '../constants'
import { EnvironmentCard } from "./EnvironmentCard"

export const CanHelpYouSection = () => {
  return (
    <motion.section
      id="can-help-you"
      className="mt-32"
      style={{ backgroundColor: "#9fa5f65f" }}
      {...opacityAnimation}
    >
      <CustomContainer className="py-10 md:py-12 lg:py-14 xl:py-16">
        <h2 className="flex items-center justify-center mb-8 text-2xl md:text-3xl xl:text-4xl font-extrabold">
          I can help you with
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
          <EnvironmentCard
            icon={IoServer}
            iconBackgroundColor="#00ed64"
            name="Backend development"
            description="Building robust and scalable RESTful APIs."
          />

          <EnvironmentCard
            icon={IoLaptopOutline}
            iconBackgroundColor="#f7df1e"
            name="Frontend development"
            description="Developing beautiful, functional and user-friendly interfaces."
          />

          <EnvironmentCard
            icon={IoPhonePortraitOutline}
            iconBackgroundColor="#13b9fd"
            name="Mobile development"
            description="Creating solutions available everywhere for mobile devices."
          />
        </div>
      </CustomContainer>
    </motion.section>
  )
}
