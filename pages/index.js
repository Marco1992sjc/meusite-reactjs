import React from "react";
import NavBar from './components/NavBar';
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import Progressbar from "./components/Progressbar";
import Indeximage from "./components/Indeximage";

  export default  function App(){
    return(
<>
<Head>
       
        <title>Marco Aurélio Desenvolvedor</title>
        <meta property="og:title" content="Marco Aurélio desenvolvedor em São José dos Campos" key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       
      </Head>

<NextSeo
      title="Marco Aurélio Desenvolvedor"
      description="Marco Aurélio Desenvolvedor front-end e mobile de São José dos Campos"
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



<Indeximage />

<Progressbar />


</>



    );
  }