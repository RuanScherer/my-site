import { motion } from "framer-motion"
import { CustomContainer } from "../components/CustomContainer"
import { opacityAnimation } from '../constants'
import { SkillChip } from "./SkillChip"

export const SkillsSection = () => {
  return (
    <motion.section id="skills" {...opacityAnimation}>
      <CustomContainer className="pt-24 flex flex-col items-center">
        <h2 className="mb-6 text-2xl md:text-3xl xl:text-4xl font-extrabold">
          My main skills
        </h2>

        <ul className="flex flex-wrap items-center justify-center gap-2 md:w-3/4 xl:w-4/6 font-bold text-lg md:text-xl list-none">
          <SkillChip skillName="HTML & CSS" backgroundColor="#e54c21" />
          <SkillChip skillName="Javascript" backgroundColor="#f7df1e" />
          <SkillChip skillName="Typescript" backgroundColor="#3178c6" />
          <SkillChip skillName="Next.js" backgroundColor="#c4cccf" />
          <SkillChip skillName="React.js" backgroundColor="#61dafb" />
          <SkillChip skillName="Node.js" backgroundColor="#7fc728" />
          <SkillChip skillName="Flutter" backgroundColor="#13b9fd" />
          <SkillChip skillName="Java" backgroundColor="#d96901" />
          <SkillChip skillName="Spring" backgroundColor="#7fe96e" />
          <SkillChip skillName="Oracle Database" backgroundColor="#e55844" />
          <SkillChip skillName="MySQL" backgroundColor="#5aa4b9" />
          <SkillChip skillName="MongoDB" backgroundColor="#00ed64" />
          <SkillChip skillName="Git" backgroundColor="#f74e28" />
          <SkillChip skillName="Agile Methodologies" backgroundColor="#41aac5" />
          <SkillChip skillName="Contiuous learning" backgroundColor="#04d361" />
          <SkillChip skillName="Good communication" backgroundColor="#00b37e" />
          <SkillChip skillName="Teamwork" backgroundColor="#13b9fd" />
          <SkillChip skillName="Design patterns" backgroundColor="#f74e28" />
          <SkillChip skillName="REST & SOAP" backgroundColor="#1196c4" />
          <SkillChip skillName="Unit tests" backgroundColor="#ea5d68" />
          <SkillChip skillName="CI" backgroundColor="#79a6d2" />
        </ul>
      </CustomContainer>
    </motion.section>
  )
}
