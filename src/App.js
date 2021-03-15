import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
import style from "../src/styles.css";

const App = () => {
  const Home = () => <h1>home</h1>;
  const Portfolio = () => <h1>Portfolio</h1>;
  const About = () => <h1>Sobre</h1>;
  const Blog =() => <h1>Blog</h1>;

  return (
    <div style={{height: "100vh", width: "100%" }}>
      <ReactNavbar
        color="#191919"
        menu={[
          { name: "HOME", to: "/", component: Home },
          { name: "SOBRE MIM", to: "/about", component: About },
          { name: "BLOG", to: "/blog", component: Blog },
          { name: "PORTFOLIO", to: "/portfolio", component: Portfolio },
        ]}
        social={[
          {
            name: "Meu Linkedin",
            url: "https://www.linkedin.com/in/marco-aur%C3%A9lio-de-moraes-oliveira-46b013206/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Meu Facebook",
            url: "https://www.facebook.com/marcoaurelio.moraes.31",
            icon: ["fab", "facebook-f"],
          },
          
         
          {
            name: "Meu Whatsapp",
            url: "https://api.whatsapp.com/send?phone=5512982138934&text=Ol%C3%A1%2C%20tudo%20bem%3F",
            icon: ["fab", "whatsapp"],
          },
        ]}
      />
    </div>
  );
};

export default App;