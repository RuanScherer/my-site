import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center pt-5 pb-12">
      <nav className="flex items-center space-x-4">
        <img className="rounded-full" width="50" height="50" src="/me.jpeg"/>
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
      </nav>
      <Link href="#main">
        <a className="hover:text-secondary transition duration-200">Back to top</a>
      </Link>
    </footer>
  )
}

export default Footer