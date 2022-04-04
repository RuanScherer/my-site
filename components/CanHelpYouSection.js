import { motion } from 'framer-motion'
import { IoServer, IoLaptopOutline, IoPhonePortraitOutline } from "react-icons/io5"
import { CustomContainer } from "../components/CustomContainer"
import { opacityAnimation } from '../constants'

export const CanHelpYouSection = () => {
  return (
    <motion.section
      id="can-help-you"
      className="mt-32"
      style={{ backgroundColor: "#9fa5f65f" }}
      {...opacityAnimation}
    >
      <CustomContainer className="py-10 md:py-12 lg:py-14 xl:py-16">
        <h2 className="flex items-center justify-center mb-8 text-2xl md:text-3xl xl:text-4xl font-bold">
          I can help you with
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
          <article className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-xl transform hover:shadow-lg hover:translate-y-1 transition duration-200">
            <div
              className="flex items-center justify-center p-3 mx-auto rounded-full"
              style={{ backgroundColor: "#00ed64" }}
            >
              <IoServer size="25" />
            </div>
            <h3 className="text-lg md:text-xl leading-5 font-bold mt-4">Backend development</h3>
            <p className="text-base md:text-lg mt-1">Building robust and scalable RESTful APIs.</p>
          </article>

          <article className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-xl transform hover:shadow-lg hover:translate-y-1 transition duration-200">
            <div
              className="flex items-center justify-center p-3 mx-auto rounded-full"
              style={{ backgroundColor: "#f7df1e" }}
            >
              <IoLaptopOutline size="25" />
            </div>
            <h3 className="text-lg md:text-xl leading-5 font-bold mt-4">Frontend development</h3>
            <p className="text-base md:text-lg mt-1">Developing beautiful, functional and user-friendly interfaces.</p>
          </article>

          <article className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-xl transform hover:shadow-lg hover:translate-y-1 transition duration-200">
            <div
              className="flex items-center justify-center p-3 mx-auto rounded-full"
              style={{ backgroundColor: "#13b9fd" }}
            >
              <IoPhonePortraitOutline size="25" />
            </div>
            <h3 className="text-lg md:text-xl leading-5 font-bold mt-4">Mobile development</h3>
            <p className="text-base md:text-lg mt-1">Creating solutions available everywhere for mobile devices.</p>
          </article>
        </div>
      </CustomContainer>
    </motion.section>
  )
}
