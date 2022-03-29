import { motion } from "framer-motion"
import { CustomContainer } from "../components/CustomContainer"
import { SkillCard } from "../components/SkillCard"
import { opacityAnimation } from '../constants'

export const SkillsSection = () => {
  return (
    <motion.section id="skills" {...opacityAnimation}>
      <CustomContainer className="pt-24 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-extrabold">
          My main skills
        </h2>
        <h3 className="mt-2 mb-12 text-sm md:text-base xl:text-lg">Click the cards to see more</h3>

        <ul className="flex flex-wrap w-full md:grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8 font-bold text-lg md:text-xl list-none">
          <SkillCard title="Frontend" skills={["React.js", "Next.js", "Javascript & Typescript", "HTML & CSS", "Flutter"]}/>
          <SkillCard title="Backend" skills={["Java", "Spring", "Node.js", "Javascript & Typescript"]} />
          <SkillCard title="Databases" skills={["Oracle database", "MySQL", "MongoDB"]}/>
          <SkillCard title="Tools" skills={["GIT", "JIRA"]} />
          <SkillCard title="Soft" skills={["Continuous learning culture", "Good communication", "Love for teamwork", "Love for changes", "Like challenges"]} />
          <SkillCard title="General" skills={["Agile methodologies", "Design patterns", "REST & SOAP", "Unit tests", "CI"]} />
        </ul>
      </CustomContainer>
    </motion.section>
  )
}
