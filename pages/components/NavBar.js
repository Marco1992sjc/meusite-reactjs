import React, { useState } from "react";
import Link from 'next/link'
import { FaLinkedinIn,FaFacebookF,FaWhatsapp,FaEnvelope} from "react-icons/fa";
import {AiFillGithub } from "react-icons/ai";







export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

 


  return (
   
    <nav className="navbar">
      <div className="nav-logo">
        <img className="logo"
          src="./logo.svg"
          alt="Logo"
          className="logo"
          width="120"
          height="120"
        />
      </div>

      <button className="nav-toggle-btn" onClick={handleClick}>
      <img src='/hamburguer.svg' alt="" role="button" draggable="false" />
      </button>

      <div className={click ? "nav-links active" : "nav-links"}>
        <ul>
          <li>
            <Link href="./">Home</Link>
          </li>
          <li>
            <Link href="/curriculo">Currículo</Link>
          </li>
          <li>
            <a href="/blog" className="disabledlink">Blog</a>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <div className="socialicons">
        <a href="https://www.linkedin.com/in/marco-aur%C3%A9lio-de-moraes-oliveira-46b013206/" rel="noreferrer" target="_blank" title="LinkedIn">
<FaLinkedinIn className="socialicon-item" size="2em"/></a>


<a href="https://api.whatsapp.com/send?phone=5512982138934&text=Ol%C3%A1%2C%20tudo%20bem%3F" rel="noreferrer" target="_blank" title="WhatsApp">
<FaWhatsapp className="socialicon-item" size="2em" /> </a>

<a href="mailto:marco1992sjc@gmail.com" rel="noreferrer" target="_blank" title="E-mail">
<FaEnvelope className="socialicon-item" size="2em" /> </a>

<a href="https://github.com/Marco1992sjc" rel="noreferrer" target="_blank" title="Meu Git">
<AiFillGithub className="socialicon-item" size="2em" /> </a>
</div>


      </div>

    
    </nav>
 
 



);
}


