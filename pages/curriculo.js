import React from "react";
import NavBar from './components/NavBar';
import Meucurriculo from './components/Meucurriculo';
import { NextSeo } from 'next-seo';








function Curriculo() {
    return (
      <>
<NextSeo
      title="Marco Aurélio Desenvolvedor ReactJs e React Native"
      description="Marco Aurélio Desenvolvedor front-end e mobile, Reactjs,React Native,Nextjs  de São José dos Campos"
      canonical="https://marcodev.vercel.app/"
      openGraph={{
        url: 'https://marcodev.vercel.app/curriculo',
        title: 'Marco Aurélio de Moraes Oliveira',
        description: 'Desenvolvedor de São José dos Campos',
        images: [
          {
            url: 'https://marcodev.vercel.app/marco.jpg',
            width: 800,
            height: 600,
            alt: 'Marco Aurélio desenvolvedor mobile, frontend, experiéncia como vigilante',
          },
          {
            url: 'https://marcodev.vercel.app/marco.jpg',
            width: 900,
            height: 800,
            alt: 'Marco Auréio desenvolvedor de São José dos Campos',
          },
          { url: 'https://marcodev.vercel.app/marco.jpg' },
          { url: 'https://marcodev.vercel.app/marco.jpg' },
        ],
        site_name: 'marcodev',
      }}
      facebook={{
        appId: '100003823449139',
      }}
/>
     
      <NavBar />
<div className="Meucurriculo">
      <Meucurriculo />
      </div>
      


</> 
        
    );
  }



<NextSeo
      title="Portfolio"
      description="portfolio de Marco Aurélio"
      canonical="https://marcodev.vercel.app/portfolio"
      openGraph={{
        url: 'https://marcodev.vercel.app/portfolio',
        title: 'Marco Aurélio de Moraes Oliveira',
        description: 'Desenvolvedor em São José dos Campos',
      }}

/>


export default Curriculo;