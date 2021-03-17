import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
import { Component } from "react";
import  '../styles.css';

class NavBar extends Component {
  render() {
    return (
      <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="./logo.svg"
        menu={[
          { name: "HOME", to: "/" },
          { name: "CURRiCULO", to: "/Curriculo" },
          { name: "BLOG, EM BREVE!", to: "/blog" },
          { name: "PORTFOLIO", to: "/porfolio" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/marco-aur%C3%A9lio-de-moraes-oliveira-46b013206/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/marcoaurelio.moraes.31",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "E-mail Gmail",
            url: "mailto:marco1992sjc@gmail.com ",
            icon: ["fab", "google"],
          },        
          {
            name: "WhatsApp",
            url: "https://api.whatsapp.com/send?phone=5512982138934&text=Ol%C3%A1%2C%20tudo%20bem%3F",
            icon: ["fab", "whatsapp"],
          },
        ]}
      />
    );
  }
}

export default NavBar;