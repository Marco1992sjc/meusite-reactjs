import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
import { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="../public/logo.svg"
        menu={[
          { name: "HOME", to: "/" },
          { name: "CURRiCULO", to: "/curriculo" },
          { name: "BLOG, EM BREVE!", to: "/blog" },
          { name: "PORTFOLIO", to: "/porfolio" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
  }
}

export default NavBar;