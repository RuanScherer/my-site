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
    if (!seeMore) router.replace("#awards-recognition") 
    setSeeMore(!seeMore)
  }

  return (
    <motion.section
      id="awards-recognition"
      className="pt-52"
      {...opacityAnimation}
    >
      <CustomContainer className="flex flex-col items-center space-y-8">
        <h1 className="text-center text-2xl md:text-3xl xl:text-4xl font-extrabold">
          Achievements
        </h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-medium list-none w-full">
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
          className="md:hidden text-gray-200 text-base md:text-lg xl:text-xl font-medium shadow-lg rounded-full px-4 py-1 transform transition hover:translate-y-1 hover:shadow-md hover:bg-gray-50"
          style={{ backgroundColor: "var(--dark-blue-900)" }}
          onClick={handleToggleSeeMore}
        >
          {seeMore ? "Show less" : "Show more"}
        </button>
      </CustomContainer>
    </motion.section>
  )
}