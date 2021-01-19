import Link from "next/link";
import WhatsAppFAB from '../components/WhatsAppFAB'

export default function Home() {
  return (
    <>
      <WhatsAppFAB />

      <main id="main" className="grid grid-cols-1 lg:grid-cols-7 gap-6 min-h-screen">
        <div className="flex flex-col justify-center space-y-6 col-span-4 text-2xl md:text-3xl font-bold">
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

      <section className="p-5 shadow-lg rounded-md fit-content leading-snug">
        <img className="mr-2 inline-block align-middle" width="25" height="25" src="/heart.png" alt="Heart Emoji"/>
        9 people liked my work. Did you like it too?{' '}
        <button className="text-red-600 font-bold focus:outline-none">
          Touch here
        </button>
      </section>

      <section className="my-20 space-y-12">
        <h1 className="text-2xl md:text-4xl font-extrabold relative">
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

      <section className="my-28 space-y-12 flex flex-col items-end">
        <h1 className="text-2xl md:text-4xl font-extrabold relative w-full text-right">
          My skills
        </h1>


        <ul className="flex flex-wrap lg:grid lg:grid-cols-5 items-center justify-center gap-4 md:gap-10 leading-relaxed font-bold text-lg md:text-xl list-none">
          <li>
            <img className="w-28 md:w-40" src="/nodejs.svg" alt="Node.js"/>
            <legend className="text-center">Node.js</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/typescript.svg" alt="Typescript"/>
            <legend className="text-center">Typescript</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/react.svg" alt="React.js"/>
            <legend className="text-center">React</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/vue.svg" alt="Vue.js"/>
            <legend className="text-center">Vue</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/htmlcss.svg" alt="HTML and CSS"/>
            <legend className="text-center">HTML {'&'} CSS</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/java.svg" alt="Java"/>
            <legend className="text-center">Java</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/git.svg" alt="GIT"/>
            <legend className="text-center">GIT</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/docker.svg" alt="Docker"/>
            <legend className="text-center">Docker</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/nosql.svg" alt="NoSQL"/>
            <legend className="text-center">NoSQL</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/sql.svg" alt="SQL"/>
            <legend className="text-center">SQL</legend>
          </li>
        </ul>
      </section>

      <section className="my-28 space-y-12 flex flex-col">
        <h1 className="text-2xl md:text-4xl font-extrabold relative w-full mb-8 lg:mb-20">
          Where I worked
        </h1>


        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 leading-relaxed font-medium text-lg md:text-xl list-none text-justify">
          <li className="relative pl-12">
            <img className="absolute -left-4 -top-14 md:-top-18 lg:-left-12 lg:-top-28 xl:-left-12 xl:-top-2/4 w-28 lg:w-52 opacity-20" src="/philips.svg" alt="Philips Logo"/>
            <h2 className="text-3xl font-extrabold mb-5">Philips</h2>
            <p>
              I started here in March 2019 as an intern and was hired in October of the same year. 
              This is my current job, I develop a health system using Javascript, Java, Delphi and PL/SQL.
            </p>
          </li>
          <li className="relative pl-12">
            <img className="absolute -left-4 -top-14 md:-top-18 lg:-left-12 lg:-top-28 xl:-left-12 xl:-top-2/4 w-28 lg:w-52 opacity-20" src="/autoaprova.svg" alt="AutoAprova logo"/>
            <h2 className="text-3xl font-extrabold mb-5">AutoAprova</h2>
            <p>
              I worked at Auto Aprova temporarily (3 months) as a freelancer developing a web platform for 
              vehicle financing using technologies such as Adonis.js, React and MongoDB.
            </p>
          </li>
          <li className="relative pl-12">
            <h2 className="text-3xl font-extrabold mb-5">Freelance</h2>
            <p>
              Before I started working in any company, I developed small websites for businesses in order to obtain exercise.
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}
