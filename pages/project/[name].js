import { useRouter } from 'next/router'
import Link from 'next/link'
import WhatsAppFAB from '../../components/WhatsAppFAB'
import { projects } from '../../data/'
import { motion } from 'framer-motion'
import { opacityAnimation } from '../../constants'
import { useEffect } from 'react'

export async function getStaticPaths() {
  return {
    paths: [
      { params : { name: 'konectando' } },
      { params : { name: 'opafood' } },
      { params : { name: 'mecsystem' } }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return { props: { params, data } }
}

const Project = () => {
  const router = useRouter()
  const { name } = router.query
  const project = projects.find(element => element.id === name)

  useEffect(() => {
    if (!project) router.replace("/")
  }, [])

  return (
    <div className="my-8">
      <WhatsAppFAB />

      <main id="main" className="grid grid-cols-1 md:grid-cols-7 gap-6 min-h-screen">
        <motion.div {...opacityAnimation} className="flex flex-col justify-center space-y-6 col-span-4 text-4xl md:text-6xl font-bold leading-snug">
          <div className="flex items-center justify-between mb-5">
            <Link href="/">
              <img 
                className="mr-2 cursor-pointer hover:-translate-x-2 transition transform w-12 md:w-14 lg:w-16" 
                src="/arrow-back.svg" 
                alt="Arrow Left Emoji"
              />
            </Link>
            <img 
              className="w-12 md:hidden" 
              src={`/${ project.logo }`} 
              alt="Project logo"
            />
          </div>
          <div className="flex items-center space-x-4">
            <small className="px-3 py-0.5 rounded-full bg-black text-white text-sm md:text-base fit-content">{project.type}</small>
            { project.soon && <small className="px-3 py-0.5 rounded-full bg-black text-white text-sm md:text-base fit-content">Coming Soon</small> }
            <Link href={project.repository}>
              <a target="_blank" title="GitHub">
                <img 
                  className="cursor-pointer hover:opacity-75 transition" 
                  width="30" 
                  height="30" 
                  src="/github.svg" 
                  alt="GitHub"
                />
              </a>
            </Link>
          </div>
          <h1>{project.name}</h1>
          <p className="text-lg md:text-2xl font-semibold">{project.description}</p>
        </motion.div>

        <div className="hidden md:flex items-center justify-end col-span-3">
          <motion.img 
            className="w-2/3" 
            src={`/${ project.logo }`} 
            layoutId={project.id} 
            alt="Project logo"
          />
        </div>
      </main>

      <motion.section {...opacityAnimation} className="pt-52 space-y-12 lg:w-8/12 xl:w-8/12">
        <h1 className="text-3xl md:text-4xl font-extrabold relative">
          Understanding the idea
        </h1>

        <div className="flex flex-col gap-8 md:gap-12 text-lg md:text-xl leading-relaxed font-medium text-justify">
          { project.explanation.map(text => <p>{text}</p>) }
        </div>
      </motion.section>

      <motion.section {...opacityAnimation} className="pt-52 space-y-12 flex flex-col items-end lg:w-8/12 xl:w-8/12 ml-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold relative w-full text-right">
          Made with
        </h1>

        <ul className="flex flex-wrap items-center justify-end gap-14 leading-relaxed font-bold text-lg md:text-xl list-none w-full">
          { project.stack.map(tech => (
              <li>
                <img className="w-28 md:w-40" src={`/${tech.image}`} alt={tech.name}/>
                <legend className="text-center">{tech.name}</legend>
              </li>
            )
          )}
        </ul>
      </motion.section>

      <motion.section {...opacityAnimation} className="pt-52 space-y-12 lg:w-8/12 xl:w-8/12">
        <h1 className="text-3xl md:text-4xl font-extrabold relative">
          How about building something together?
        </h1>

        <p className="text-lg md:text-xl leading-relaxed font-medium text-justify">
          I love working with people who share the same passion for technology. Are you one of those people? 
          <Link href="https://wa.link/tgjlij">
            <a className="text-primary font-bold hover:opacity-70 transition">{' '}Let's work together!</a>
          </Link>
        </p>
      </motion.section>
    </div>
  )
}

export default Project