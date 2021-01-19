import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-7 gap-6 min-h-screen">
        <div className="flex flex-col justify-center space-y-6 col-span-4 text-2xl md:text-3xl font-bold">
          <div className="flex items-center space-x-4">
            <img className="rounded-full" width="80" height="80" src="/me.jpeg"/>
            <Link href="https://www.instagram.com/ruan.scherer/">
              <a target="_blank">
                <img className="cursor-pointer hover:opacity-75 transition" width="30" height="30" src="/instagram.svg"/>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/ruan-scherer/">
              <a target="_blank">
                <img className="cursor-pointer hover:opacity-75 transition" width="30" height="30" src="/linkedin.svg"/>
              </a>
            </Link>
            <Link href="https://www.github.com/RuanScherer/">
              <a target="_blank">
                <img className="cursor-pointer hover:opacity-75 transition" width="30" height="30" src="/github.svg"/>
              </a>
            </Link>
          </div>
          <div className="p-5 shadow-xl rounded-md fit-content leading-snug">
            <img className="mr-2 inline-block" width="40" height="40" src="/hi.png"/>
            Hi there, I'm Ruan.
          </div>
          <div className="p-5 shadow-xl rounded-md fit-content leading-snug">
            I'm a Full Stack <span className="text-primary">{'<Developer/>'}</span>, academic and currently working at Philips.
          </div>
          <div className="p-5 shadow-xl rounded-md fit-content leading-snug">
            Scroll up and let me perform better
            <img className="ml-2 inline-block" width="40" height="40" src="/smile.png"/>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center col-span-3">
          <img className="w-full" src="/techs.svg"/>
        </div>
      </main>

      <section className="my-8 space-y-12">
        <h1 className="text-2xl md:text-4xl font-extrabold relative">
          About me
          <hr className="border md:border-2 bg-gray-900 border-gray-900 w-2/6 mt-1"/>
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-lg md:text-xl leading-relaxed font-medium">
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
          <hr className="border md:border-2 bg-gray-900 border-gray-900 w-2/6 mt-1 ml-auto"/>
        </h1>


        <ul className="flex flex-wrap items-center justify-end gap-4 md:gap-10 leading-relaxed font-bold text-lg md:text-xl list-none">
          <li>
            <img className="w-28 md:w-40" src="/nodejs.svg"/>
            <legend className="text-center">Node.js</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/typescript.svg"/>
            <legend className="text-center">Typescript</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/react.svg"/>
            <legend className="text-center">React</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/vue.svg"/>
            <legend className="text-center">Vue</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/htmlcss.svg"/>
            <legend className="text-center">HTML {'&'} CSS</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/java.svg"/>
            <legend className="text-center">Java</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/git.svg"/>
            <legend className="text-center">GIT</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/docker.svg"/>
            <legend className="text-center">Docker</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/nosql.svg"/>
            <legend className="text-center">NoSQL</legend>
          </li>
          <li>
            <img className="w-28 md:w-40" src="/sql.svg"/>
            <legend className="text-center">SQL</legend>
          </li>
        </ul>
      </section>
    </>
  )
}
