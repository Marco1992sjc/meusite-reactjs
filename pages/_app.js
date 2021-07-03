import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css'
import '../styles/globals.css'
import '../styles/style-curriculo.css'
import '../styles/meuportfolio.css'
import '../styles/progressbar.css'
import '../styles/indeximage.scss'

import '../styles/nprogress.css'

import '../styles/cardskills.css'






import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
  () => {
    return import("./components/TopProgressBar");
  },
  { ssr: false },
);

export default function MyApp({ Component, pageProps }) {
  return <>
    <TopProgressBar />
    <Component {...pageProps} />
  </>
}



