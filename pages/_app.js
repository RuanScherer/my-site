import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import Header from "../components/Header";
import Footer from '../components/Footer';
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Head>
        <title>Ruan Scherer</title>
        <link rel="icon" href="/images/rs.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/styles/global.css"/>
      </Head>
      <Header />
      <div className="sm:mx-auto">
        <Component {...pageProps}/>
        <Footer/>
      </div>
    </AnimateSharedLayout>
  )
}

export default MyApp
