import Meuportfolio from './components/Meuportfolio';
import NavBar from './components/NavBar';
import { NextSeo } from 'next-seo';




export default function portfolio(){
    return(


        

<>

<NextSeo
      title="Portfolio desenvolvedor Marco Aurélio"
      description="portfolio de Marco Aurélio"
      canonical="https://marcodev.vercel.app/portfolio"
      openGraph={{
        url: 'https://marcodev.vercel.app/portfolio',
        title: 'Marco Aurélio de Moraes Oliveira portfolio',
        description: 'Desenvolvedor React em São José dos Campos',
      }}

/>




<NavBar />

<Meuportfolio />





</>



    )
}