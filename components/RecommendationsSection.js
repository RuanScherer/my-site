import { motion } from "framer-motion"
import Slider from "react-slick"
import { CustomContainer } from "../components/CustomContainer"
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
          What <span style={{ color: "var(--blue-900)" }}>people say</span> about me
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
            <div key={index} className="px-2">
              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: "#9FA5F644" }}>
                <img 
                  className="w-5 md:w-6 xl:w-8 mx-auto mb-2"
                  src="/images/quote.svg" 
                  alt="Quote"
                />
                <h2 className="text-lg md:text-xl xl:text-2xl font-bold">{recommendation.name}</h2>
                <span className="text-sm md:text-base xl:text-lg font-semibold">{recommendation.role}</span>
                <p className="text-sm md:text-base xl:text-lg font-medium leading-relaxed mt-4">{recommendation.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </CustomContainer>
    </motion.section>
  )
}
