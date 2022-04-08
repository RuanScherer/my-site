import { useState } from "react"
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import { CustomContainer } from "../components/CustomContainer"
import { AchievementCard } from "./AchievementCard"
import { opacityAnimation } from '../constants'
import { awardsAndRecongition } from '../data/'

export const AchievementsSection = () => {
  const [seeMore, setSeeMore] = useState(false)
  const router = useRouter()

  function handleToggleSeeMore() {
    if (seeMore) router.replace("#awards-recognition") 
    setSeeMore(!seeMore)
  }

  return (
    <motion.section
      id="awards-recognition"
      className="pt-32"
      {...opacityAnimation}
    >
      <CustomContainer className="flex flex-col items-center">
        <h1 className="text-center text-2xl md:text-3xl xl:text-4xl font-extrabold">
          Achievements
        </h1>
        <h3 className="text-sm md:text-base xl:text-lg text-gray-500 text-center font-medium mb-8">
          Click to turn the cards
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-medium list-none w-full mb-8">
          { awardsAndRecongition.map(item => (
            <AchievementCard
              title={item.title}
              subtitle={item.institution}
              content={item.content}
              className={`${(!seeMore && item.hidden) && 'hidden'} md:block`}
            />
          ))}
        </ul>

        <button 
          className="md:hidden text-gray-200 text-base font-medium bg-dark-blue-900 shadow-lg rounded-full px-4 py-1 transform transition hover:translate-y-1 hover:shadow-md"
          onClick={handleToggleSeeMore}
        >
          {seeMore ? "Show less" : "Show more"}
        </button>
      </CustomContainer>
    </motion.section>
  )
}