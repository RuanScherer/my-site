import Link from "next/link"
import { useState } from "react"
import WorkTogether from '../components/WorkTogether'
import { skills, projects, socialLinks, recommendations, awardsAndRecongition, about, jobs } from '../data/'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../constants'
import { CustomContainer } from "../components/CustomContainer"
import { SkillCard } from "../components/SkillCard"

export default function Home() {
  const [seeMoreAwardsAndRecongition, setSeeMoreAwardsAndRecongition] = useState(false)

  return (
    <>
      <motion.main
        id="main"
        className="min-h-screen flex flex-col justify-center"
        style={{
          backgroundImage: "url('/images/circles-outlined-background.svg')",
          backgroundSize: "cover"
        }}
        {...opacityAnimation}
      >
        <CustomContainer className="flex flex-col items-center justify-center gap-y-4">
          <img 
            className="rounded-full border-2 border-gray-200 shadow-lg mt-12" 
            width="100" 
            height="100" 
            src="/images/me.jpeg" 
            alt="Ruan Scherer"
          />

          <h2 className="bg-white text-lg md:text-xl xl:text-2xl mt-2">
            Hi, I'm <span className="font-bold" style={{ color: "var(--blue-900)" }}>Ruan</span>!
          </h2>

          <h1 className="bg-white mt-2 mb-8 text-center text-3xl md:text-4xl xl:text-5xl font-semibold">
            I can help you to build
            <br/>
            <span className="font-bold">amazing modern software.</span>
          </h1>
          
          <i className="bg-white mt-4 text-md lg:text-lg xl:text-xl font-medium text-center" style={{ color: "var(--gray-100)" }}>
            {'<Senior Fullstack Developer/>'}
          </i>

          <div className="flex align-center gap-4">
            { socialLinks.map(link => (
                <Link href={link.href} key={link.title}>
                  <a target="_blank" title={link.title}>
                    <img 
                      className="cursor-pointer hover:opacity-75 transition" 
                      width="30" 
                      height="30" 
                      src={`/images/${link.image}`} 
                      alt={link.title}
                    />
                  </a>
                </Link>
              )
            )}
          </div>
        </CustomContainer>
      </motion.main>

      <motion.section
        id="where-i-worked"
        className="shadow-xl"
        style={{ backgroundColor: "var(--dark-blue-900)" }}
        {...opacityAnimation}
      >
        <CustomContainer className="py-10 md:py-12 lg:py-14 xl:py-16">
          <h2 className="flex items-center justify-center mb-8 text-3xl md:text-4xl xl:text-5xl font-semibold" style={{ color: "var(--gray-100)" }}>
            02+
            <span className="ml-2 text-sm md:text-base xl:text-lg text-left" style={{ color: "var(--gray-100)", lineHeight: 1 }}>
              years of
              <br/>
              experience
            </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-lg md:text-xl leading-relaxed font-medium">
            <img src="/images/paytrack.svg" alt="Paytrack logo" className="w-32 md:w-36 xl:w-40" />
            <img src="/images/philips.svg" alt="Philips logo" className="w-32 md:w-36 xl:w-40" />
            <img src="/images/autokeet.svg" alt="Autokeet logo" className="w-32 md:w-36 xl:w-40" />
            <img src="/images/white-logo.svg" alt="My logo" className="w-32 md:w-36 xl:w-40" />
          </div>
        </CustomContainer>
      </motion.section>

      <motion.section
        id="about-me"
        className="pt-24 space-y-12"
        {...opacityAnimation}
      >
        <CustomContainer className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
          <div className="col-span-3 xl:col-span-4 m-auto">
            <h1 className="mb-4 text-2xl md:text-3xl xl:text-4xl font-extrabold">
              About me
            </h1>

            <div className="flex flex-col gap-4 md:gap-6 md:text-lg xl:text-xl leading-relaxed font-medium text-justify">
              <p className="md:col-start-1">{about[0]}</p>
              <p className="order-3 md:order-none md:col-start-2">{about[1]}</p>
              <p className="md:col-start-1">{about[2]}</p>
            </div>
          </div>

          <img src="/images/me-home-office.jpeg" alt="Me in home office" className="col-span-3 xl:col-span-2 rounded-2xl m-auto shadow-xl" />
        </CustomContainer>
      </motion.section>

      <motion.section id="skills" {...opacityAnimation}>
        <CustomContainer className="pt-52 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-extrabold">
            My main skills
          </h2>
          <h3 className="mt-2 mb-12 text-sm md:text-base xl:text-lg">Click the cards to see more</h3>

          <ul className="flex flex-wrap w-full md:grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 font-bold text-lg md:text-xl list-none">
            <SkillCard title="Frontend" skills={["React.js", "Next.js", "Javascript & Typescript", "HTML & CSS", "Flutter"]}/>
            <SkillCard title="Backend" skills={["Java", "Spring", "Node.js", "Javascript & Typescript"]} />
            <SkillCard title="Databases" skills={["Oracle database", "MySQL", "MongoDB"]}/>
            <SkillCard title="Tools" skills={["GIT", "JIRA"]} />
            <SkillCard title="Soft" skills={["Continuous learning culture", "Good communication", "Love for teamwork", "Love for changes", "Like challenges"]} />
            <SkillCard title="General" skills={["Agile methodologies", "Design patterns", "REST & SOAP", "Unit tests", "CI"]} />
          </ul>
        </CustomContainer>
      </motion.section>

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

      <motion.section {...opacityAnimation} id="awards-recognition" className="pt-52 space-y-12 flex flex-col">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold relative w-full lg:mb-10">
          Prêmios e reconhecimentos
        </h1>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 font-medium list-none">
          { awardsAndRecongition.map(item => (
              <li className={`${(!seeMoreAwardsAndRecongition && item.hidden) && 'hidden'} lg:block relative pl-12 mt-8 lg:mt-10`}>
                <img 
                  className="absolute left-0 -top-10 lg:-left-7 lg:-top-12 w-24 lg:w-36 opacity-10" 
                  src="/images/prize.svg" 
                  alt="Prize"
                />
                <h2 className="text-2xl md:text-3xl font-extrabold">{item.title}</h2>
                <span className="text-lg md:text-xl text-gray-600">{item.institution}</span>
                <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">{item.content}</p>
              </li>
            )
          )}
        </ul>

        { !seeMoreAwardsAndRecongition &&
          <button 
            className="lg:hidden text-primary text-xl font-bold shadow-lg rounded-sm fit-content mx-auto px-5 py-2 transform transition hover:translate-y-1 hover:shadow-md hover:bg-gray-50"
            onClick={() => setSeeMoreAwardsAndRecongition(true)}>
            See more
          </button>
        }
      </motion.section>

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
