import { motion } from "framer-motion"
import Slider from "react-slick"
import { CustomContainer } from "../components/CustomContainer"
import { Recommendation } from "../components/Recommendation"
import { recommendations } from "../data/"
import { opacityAnimation } from "../constants"

export const RecommendationsSection = () => {
  return (
    <motion.section
      id="say-about-me"
      className="pt-32"
      {...opacityAnimation}
    >
      <CustomContainer className="flex flex-col items-stretch">
        <h2 className="text-2xl md:text-3xl xl:text-4xl text-center font-extrabold">
          What <span className="text-blue-900">people say</span> about me
        </h2>
        <h3 className="text-sm md:text-base xl:text-lg text-gray-500 text-center font-medium">
          Swipe to see more
        </h3>
        
        <Slider
          className="mt-6 lg:w-5/6 lg:mx-auto"
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
        >
          { recommendations.map((recommendation, index) => (
            <Recommendation
              key={index}
              name={recommendation.name}
              role={recommendation.role}
              content={recommendation.content}
            />
          ))}
        </Slider>
      </CustomContainer>
    </motion.section>
  )
}
