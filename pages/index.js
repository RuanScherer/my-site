import Link from "next/link"
import { useState } from "react"
import WhatsAppFAB from '../components/WhatsAppFAB'
import WorkTogether from '../components/WorkTogether'
import { skills, projects, socialLinks, recommendations, awardsAndRecongition, about, jobs } from '../data/'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../constants'

export default function Home() {
  const [seeMoreAwardsAndRecongition, setSeeMoreAwardsAndRecongition] = useState(false)

  return (
    <>
      <WhatsAppFAB />

      <motion.main {...opacityAnimation} id="main" className="grid grid-cols-1 lg:grid-cols-7 gap-6 min-h-screen">
        <div className="flex flex-col justify-center space-y-6 col-span-4 text-2xl md:text-4xl font-bold">
          <div className="flex items-center space-x-4">
            <img 
              className="rounded-full" 
              width="80" 
              height="80" 
              src="/images/me.jpeg" 
              alt="Ruan Scherer"
            />
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
          <div className="p-5 shadow-xl rounded-md fit-content leading-snug">
            <img 
              className="mr-2 inline-block align-middle" 
              width="40" 
              height="40" 
              src="/images/hi.png" 
              alt="Hi Emoji"
            />
            Olá, meu nome é Ruan.
          </div>
          <div className="p-5 shadow-xl rounded-md fit-content leading-snug">
            Sou <span className="text-primary">{'<Programador/>'}</span> Full Stack, acadêmico e trabalho na Philips.
          </div>
          <div className="p-5 shadow-xl rounded-md fit-content leading-snug">
            Role para baixo e deixe eu me apresentar melhor
            <img 
              className="ml-2 inline-block align-middle" 
              width="40" 
              height="40" 
              src="/images/smile.png" 
              alt="Smile Emoji"
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center col-span-3">
          <img 
            className="w-full"
            src="/images/techs.svg"
            alt="Technologies logo"
          />
        </div>
      </motion.main>

      <motion.section {...opacityAnimation} id="about-me" className="pt-36 space-y-12">
        <h1 className="text-3xl md:text-4xl font-extrabold relative">
          Sobre mim
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-lg md:text-xl leading-relaxed font-medium text-justify">
          <p className="md:col-start-1">{about[0]}</p>
          <p className="order-3 md:order-none md:col-start-2">{about[1]}</p>
          <p className="md:col-start-1">{about[2]}</p>
        </div>
      </motion.section>

      <motion.section {...opacityAnimation} id="skills" className="pt-52 space-y-12 flex flex-col items-end">
        <h1 className="text-3xl md:text-4xl font-extrabold relative w-full text-right">
          Minhas principais skills
        </h1>

        <ul className="flex flex-wrap lg:grid lg:grid-cols-5 items-center justify-center gap-16 leading-relaxed font-bold text-lg md:text-xl list-none">
          { skills.map(skill => (
              <li key={skill.name}>
                <img 
                  className="w-28 md:w-40" 
                  src={`/images/${skill.image}`} 
                  alt={skill.name}
                />
                <legend className="text-center">{skill.name}</legend>
                <div className="flex items-center justify-between gap-2">
                  <div className="bg-gray-100 h-3 w-full rounded-lg relative">
                    <div className="absolute top-0 left-0 h-3 rounded-lg" style={{ width: skill.level + '%', backgroundColor: skill.color }}></div>
                  </div>
                  <small className="text-sm">{skill.level}%</small>
                </div>
              </li>
            )
          )}
        </ul>
      </motion.section>

      <motion.section {...opacityAnimation} id="where-i-worked" className="pt-52 space-y-12 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-extrabold relative w-full mb-8 lg:mb-20">
          Onde trabalhei
        </h1>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 leading-relaxed font-medium text-lg md:text-xl list-none text-justify">
          { jobs.map(job => (
              <li className="relative pl-12">
                <img 
                  className={`absolute ${job.imageSize || "-left-4 -top-14 md:-top-18 lg:-left-12 lg:-top-28 xl:-left-12 xl:-top-2/4 w-28 lg:w-52"} opacity-20`}
                  src={`/images/${job.image}`}
                  alt={`${job.name} Logo`}
                />
                <h2 className="text-2xl md:text-3xl font-extrabold mb-5">{job.name}</h2>
                <p>{job.content}</p>
              </li>
            )
          )}
        </ul>
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
