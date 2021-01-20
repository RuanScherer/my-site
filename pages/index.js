import Link from "next/link"
import { useState } from "react"
import WhatsAppFAB from '../components/WhatsAppFAB'
import { skills } from '../data/'

export default function Home() {
  const [seeMoreAwardsAndRecongition, setSeeMoreAwardsAndRecongition] = useState(false)

  return (
    <>
      <WhatsAppFAB />

      <main id="main" className="grid grid-cols-1 lg:grid-cols-7 gap-6 min-h-screen">
        <div className="flex flex-col justify-center space-y-6 col-span-4 text-2xl md:text-4xl font-bold">
          <div className="flex items-center space-x-4">
            <img className="rounded-full" width="80" height="80" src="/me.jpeg" alt="Ruan Scherer profile photo"/>
            <Link href="https://www.instagram.com/ruan.scherer/">
              <a target="_blank" title="Instagram">
                <img className="cursor-pointer hover:opacity-75 transition" width="30" height="30" src="/instagram.svg" alt="Instagram"/>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/ruan-scherer/">
              <a target="_blank" title="LinkedIn">
                <img className="cursor-pointer hover:opacity-75 transition" width="30" height="30" src="/linkedin.svg" alt="LinkedIn"/>
              </a>
            </Link>
            <Link href="https://www.github.com/RuanScherer/">
              <a target="_blank" title="GitHub">
                <img className="cursor-pointer hover:opacity-75 transition" width="30" height="30" src="/github.svg" alt="GitHub"/>
              </a>
            </Link>
            <Link href="/Ruan-Scherer.pdf">
              <a target="_blank" title="Curriculum">
                <img className="cursor-pointer hover:opacity-75 transition" width="30" height="30" src="/document.png" alt="Curriculum"/>
              </a>
            </Link>
          </div>
          <div className="p-5 shadow-xl rounded-md fit-content leading-snug">
            <img className="mr-2 inline-block align-middle" width="40" height="40" src="/hi.png" alt="Hi Emoji"/>
            Hi there, I'm Ruan.
          </div>
          <div className="p-5 shadow-xl rounded-md fit-content leading-snug">
            I'm a Full Stack <span className="text-primary">{'<Developer/>'}</span>, academic and currently working at Philips.
          </div>
          <div className="p-5 shadow-xl rounded-md fit-content leading-snug">
            Scroll up and let me perform better
            <img className="ml-2 inline-block align-middle" width="40" height="40" src="/smile.png" alt="Smile Emoji"/>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center col-span-3">
          <img className="w-full" src="/techs.svg" alt="Technologies logo"/>
        </div>
      </main>

      <section className="p-5 shadow-lg rounded-md fit-content leading-snug text-lg md:text-xl">
        <img className="mr-2 inline-block align-middle" width="25" height="25" src="/heart.png" alt="Heart Emoji"/>
        9 people liked my work so far. Did you like it too?{' '}
          <button className="ml-2 text-red-600 font-bold focus:outline-none">
            Touch here
          </button>
      </section>

      <section id="about-me" className="pt-36 space-y-12">
        <h1 className="text-3xl md:text-4xl font-extrabold relative">
          About me
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-lg md:text-xl leading-relaxed font-medium text-justify">
          <p className="md:col-start-1">
            I'm 18 years old, I graduated with a computer technician and I study Information Systems at Uniasselvi in ​​Blumenau-SC. 
            In addition, I am always studying web and mobile development in my spare time, because I love it.
          </p>

          <p className="order-3 md:order-none md:col-start-2">
            I also like and have been taking on freelance jobs, helping people with solutions and having fun programming.
          </p>

          <p className="md:col-start-1">
            I started professionally not too long ago, in March 2019. 
            Since then, I had the opportunity to work with very experienced professionals who are great at what they do, and who undoubtedly contributed a lot to me.
          </p>
        </div>
      </section>

      <section id="skills" className="pt-52 space-y-12 flex flex-col items-end">
        <h1 className="text-3xl md:text-4xl font-extrabold relative w-full text-right">
          My skills
        </h1>


        <ul className="flex flex-wrap lg:grid lg:grid-cols-5 items-center justify-center gap-16 leading-relaxed font-bold text-lg md:text-xl list-none">
          { skills.map(skill => (
              <li>
                <img className="w-28 md:w-40" src={`/${skill.image}`} alt={`/${skill.name}`}/>
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
      </section>

      <section id="where-i-worked" className="pt-52 space-y-12 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-extrabold relative w-full mb-8 lg:mb-20">
          Where I worked
        </h1>


        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 leading-relaxed font-medium text-lg md:text-xl list-none text-justify">
          <li className="relative pl-12">
            <img className="absolute -left-4 -top-14 md:-top-18 lg:-left-12 lg:-top-28 xl:-left-12 xl:-top-2/4 w-28 lg:w-52 opacity-20" src="/philips.svg" alt="Philips Logo"/>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5">Philips</h2>
            <p>
              I started here in March 2019 as an intern and was hired in October of the same year. 
              This is my current job, I develop a health system using Javascript, Java, Delphi and PL/SQL.
            </p>
          </li>
          <li className="relative pl-12">
            <img className="absolute -left-4 -top-14 md:-top-18 lg:-left-12 lg:-top-28 xl:-left-12 xl:-top-2/4 w-28 lg:w-52 opacity-20" src="/autoaprova.svg" alt="AutoAprova logo"/>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5">AutoAprova</h2>
            <p>
              I worked at Auto Aprova temporarily (3 months) as a freelancer developing a web platform for 
              vehicle financing using technologies such as Adonis.js, React and MongoDB.
            </p>
          </li>
          <li className="relative pl-12">
          <img className="absolute -left-0 -top-5 lg:-left-6 lg:-top-6 w-28 lg:w-40 opacity-30" src="/logo.svg" alt="My logo"/>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-5">Freelance</h2>
            <p>
              Before I started working in any company, I developed small websites for businesses in order to obtain exercise.
            </p>
          </li>
        </ul>
      </section>

      <section id="say-about-me" className="pt-52 space-y-12 flex flex-col">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold relative w-full mb-8 lg:mb-20">
          What people say about me
        </h1>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 font-medium list-none">
          <li className="relative pl-12">
            <img className="absolute left-4 -top-8 lg:-left-0 lg:-top-20 w-20 lg:w-36 opacity-10" src="/quote.svg" alt="Quote"/>
            <h2 className="text-2xl md:text-3xl font-extrabold">Pablo Luiz Rodrigues</h2>
            <span className="text-lg md:text-xl text-gray-600">Tests Analyst at Philips</span>
            <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">
              Ruan is an excellent professional, always concerned with doing the best and carrying out his activities with excellence.
              He is a great developer, always with constructive criticism and great solutions, constantly demonstrating extensive knowledge.
              I had the privilege of working with him on projects and he is a person who is great at working as a team, as he is open to exchanging ideas and sharing knowledge, always adding, adding and contributing to the team.
              [...]
              First-rate professional, who has a bright future ahead and those who can work with him, will certainly have a great experience.
              [...]
            </p>
          </li>
          <li className="relative pl-12">
            <img className="absolute left-4 -top-8 lg:-left-0 lg:-top-20 w-20 lg:w-36 opacity-10" src="/quote.svg" alt="Quote"/>
            <h2 className="text-2xl md:text-3xl font-extrabold">Vilson Moro</h2>
            <span className="text-lg md:text-xl text-gray-600">Professor at UDESC</span>
            <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">
              I worked as a professor at Ruan, while he was studying Computer Technician at CedupHH. He is a person with a great interpersonal relationship. 
              They have an attitude, they don't expect things to happen, they actively participate. He always sought to achieve excellence in all proposed activities. 
              In classes, he always tried to do more than what was proposed in class. Always questioning, seeking to innovate in the proposal of solutions to the problems presented.
            </p>
          </li>
          <li className="relative pl-12">
            <img className="absolute left-4 -top-8 lg:-left-0 lg:-top-20 w-20 lg:w-36 opacity-10" src="/quote.svg" alt="Quote"/>
            <h2 className="text-2xl md:text-3xl font-extrabold">Brigiane Cardoso</h2>
            <span className="text-lg md:text-xl text-gray-600">Tests Analyst at Philips</span>
            <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">
              I worked with Ruan on a project, Ruan besides being a great programmer is always concerned with helping us create a better quality product.
            </p>
          </li>
        </ul>
      </section>

      <section id="awards-recognition" className="pt-52 space-y-12 flex flex-col">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold relative w-full lg:mb-10">
          Awards and Recognition
        </h1>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 font-medium list-none">
          <li className="relative pl-12 mt-8 lg:mt-10">
            <img className="absolute left-0 -top-10 lg:-left-7 lg:-top-12 w-24 lg:w-36 opacity-10" src="/prize.svg" alt="Prize"/>
            <h2 className="text-2xl md:text-3xl font-extrabold">Revelation Project</h2>
            <span className="text-lg md:text-xl text-gray-600">Comunidade Hackathon Shift</span>
            <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">
              My teams and I were awarded in the category of Revelation Projects of the year with OpaFood and Konectando projects.
            </p>
          </li>
          <li className="relative pl-12 mt-8 lg:mt-10">
            <img className="absolute left-0 -top-10 lg:-left-7 lg:-top-12 w-24 lg:w-36 opacity-10" src="/prize.svg" alt="Prize"/>
            <h2 className="text-2xl md:text-3xl font-extrabold">Top 3</h2>
            <span className="text-lg md:text-xl text-gray-600">NASA Space Apps COVID-19 Challenge</span>
            <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">
              We developed a project that was among the 3 finalists of the NASA Space Apps COVID-19 Challenge "The Isolation Solution" challenge.
            </p>
          </li>
          <li className="relative pl-12 mt-8 lg:mt-10">
            <img className="absolute left-0 -top-10 lg:-left-7 lg:-top-12 w-24 lg:w-36 opacity-10" src="/prize.svg" alt="Prize"/>
            <h2 className="text-2xl md:text-3xl font-extrabold">Connecty Pay Challenge Winner</h2>
            <span className="text-lg md:text-xl text-gray-600">Hack Pela Gastronomia</span>
            <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">
            We have developed a complete solution for restaurants thinking about user experience, safety during pandemic times, sustainability and agility.
            </p>
          </li>
          <li className={`${!seeMoreAwardsAndRecongition && 'hidden'} lg:block relative pl-12 mt-8 lg:mt-10`}>
            <img className="absolute left-0 -top-10 lg:-left-7 lg:-top-12 w-24 lg:w-36 opacity-10" src="/prize.svg" alt="Prize"/>
            <h2 className="text-2xl md:text-3xl font-extrabold">Second Place</h2>
            <span className="text-lg md:text-xl text-gray-600">Inter Hack Shift</span>
            <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">
              With a sustainable and accessible electronic point project, my team and I reached second place in this hackathon.
            </p>
          </li>
          <li className={`${!seeMoreAwardsAndRecongition && 'hidden'} lg:block relative pl-12 mt-8 lg:mt-10`}>
            <img className="absolute left-0 -top-10 lg:-left-7 lg:-top-12 w-24 lg:w-36 opacity-10" src="/prize.svg" alt="Prize"/>
            <h2 className="text-2xl md:text-3xl font-extrabold">Maximum Grade</h2>
            <span className="text-lg md:text-xl text-gray-600">Final Paper</span>
            <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">
              I obtained maximum grade in my final paper of the computer technician course.
            </p>
          </li>
          <li className={`${!seeMoreAwardsAndRecongition && 'hidden'} lg:block relative pl-12 mt-8 lg:mt-10`}>
            <img className="absolute left-0 -top-10 lg:-left-7 lg:-top-12 w-24 lg:w-36 opacity-10" src="/prize.svg" alt="Prize"/>
            <h2 className="text-2xl md:text-3xl font-extrabold">Winner</h2>
            <span className="text-lg md:text-xl text-gray-600">Hackathon Shift Smart Cities</span>
            <p className="leading-relaxed text-lg md:text-xl text-justify mt-5">
              This was my first hackathon, where I developed a small solution with the team to track stolen vehicles.
            </p>
          </li>
        </ul>

        { !seeMoreAwardsAndRecongition &&
          <button 
            className="lg:hidden text-primary text-xl font-bold shadow-lg rounded-sm fit-content mx-auto px-5 py-2 transform transition hover:translate-y-1 hover:shadow-md hover:bg-gray-50"
            onClick={() => setSeeMoreAwardsAndRecongition(true)}>
            See more
          </button>
        }
      </section>

      <section id="projects" className="pt-52 space-y-12 flex flex-col">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold relative w-full ">
          My Projects
        </h1>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 font-medium text-lg md:text-xl list-none">
          <li className="p-8 mt-8 lg:mt-10 shadow-xl flex flex-col items-center justify-center hover:shadow-lg hover:translate-y-1 transform transition cursor-pointer">
            <img width="180" className="mb-6" src="/konectando.svg" alt="Konectando logo"/>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center" style={{ color: '#00C2CB' }}>Konectando</h2>
          </li>
          <li className="p-8 mt-8 lg:mt-10 shadow-xl flex flex-col items-center justify-center hover:shadow-lg hover:translate-y-1 transform transition cursor-pointer">
            <img width="240" className="mb-6" src="/opafood.svg" alt="OpaFood logo"/>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center" style={{ color: '#f87652' }}>OpaFood!</h2>
          </li>
          <li className="p-8 mt-8 lg:mt-10 shadow-xl flex flex-col items-center justify-center hover:shadow-lg hover:translate-y-1 transform transition cursor-pointer">
            <img width="180" className="mb-6" src="/mecsystem.png" alt="MecSystem logo"/>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center" style={{ color: '#0088cc' }}>MecSystem</h2>
          </li>
        </ul>
      </section>
    </>
  )
}
