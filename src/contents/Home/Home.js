import React from "react";
import "./Home.css";
import Aos from "aos";
import 'aos/dist/aos.css'
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom";
import { logo, group } from "../img";

Aos.init();

function Home() {
  return (
    <>
      <div className="container">
        <div className="banner">
          <img src={logo} />
        </div>

        <div className="main">
          <div data-aos="fade-right" className="main-text">
            <Link to={'/About'}><p>About</p></Link>
            <a href="https://wa.link/7eo06y" target="blank">
            <p>Contact</p>
            </a>
            
          </div>
          <img src={group} />
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default Home;
