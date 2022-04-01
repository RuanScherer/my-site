import Link from "next/link"
import WorkTogether from '../components/WorkTogether'
import { projects, recommendations } from '../data/'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../constants'
import { WelcomeSection } from "../components/WelcomeSection"
import { ExperienceBanner } from "../components/ExperienceBanner"
import { OverviewAboutMe } from "../components/OverviewAboutMe"
import { SkillsSection } from "../components/SkillsSection"
import { AchievementsSection } from "../components/AchievementsSection"

export default function Home() {
  return (
    <>
      <WelcomeSection />

      <ExperienceBanner />

      <OverviewAboutMe />

      <SkillsSection />

      <motion.section {...opacityAnimation} id="say-about-me" className="pt-52 space-y-12 flex flex-col">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold relative w-full mb-8 lg:mb-20">
          O que dizem sobre mim
        </h1>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 font-medium list-none">
          { recommendations.map(recommendation => (
              <li className="relative pl-12">
                <img 
                  className="absolute left-4 -top-8 lg:-left-0 lg:-top-20 w-20 lg:w-36 opacity-10" 
                  src="/images/quote.svg" 
                  alt="Quote"
                />
                <h2 className="text-2xl md:text-3xl font-extrabold">{recommendation.name}</h2>
                <span className="text-lg md:text-xl text-gray-600">{recommendation.role}</span>
                <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">{recommendation.content}</p>
              </li>
            )
          )}
        </ul>
      </motion.section>

      <AchievementsSection />

      <motion.section {...opacityAnimation} id="projects" className="pt-52 space-y-12 flex flex-col">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold relative w-full ">
          Meus Projetos
          <br/>
          <span className="md:hidden text-lg font-bold text-gray-800">
            Toque para detalhes
          </span>
        </h1>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 font-medium text-lg md:text-xl list-none">
          { projects.map(project => (
              <Link 
                href={`/project/[name]`} 
                as={`/project/${project.id}`}
                key={project.id}>
                <li className="relative p-8 mt-8 lg:mt-10 shadow-xl rounded-md flex flex-col items-center justify-center hover:shadow-lg hover:translate-y-1 transform transition cursor-pointer">
                  <motion.img 
                    src={`/images/${project.logo}`} 
                    className="w-36 md:w-48 mb-6"
                    layoutId={project.id}
                    alt="Project logo"
                  />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-center" style={{ color: project.color }}>{project.name}</h2>
                </li>
              </Link>
            )
          )}
        </ul>
      </motion.section>

      <WorkTogether/>
    </>
  )
}
