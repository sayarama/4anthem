import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { allTeam, logo } from "../img";
import Member from "../member.json";
import Footer from "../Footer/Footer";

Aos.init();

function About() {
  return (
    <>
      <div className="background">
        <div className="navbar">
          <Link to={'/'}>
            <img src={logo} />
          </Link>
        </div>

        <div className="about-main">
          <img src={allTeam} />
          <p>
            <b>4Anthems</b> yang berarti "Untuk Musik" dimana 4 (Four) sebagai
            penyebutan "For" yang artinya untuk dan "Anthems" artinya
            Musik/Lagu. <b>4Anthems</b> merupakan group band yang berisikan 7
            orang dan biasa membawakan lagu ber-genre pop.
          </p>
        </div>

        <div className="main-grid">
          {Member.map((member) => {
            return (
              <div className="grid">
                <div className="member-grid">
                  <img data-aos="fade-top" src={member.image} />
                  <p data-aos="fade-top">{member.social}</p>
                  <p data-aos="fade-top">{member.name}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
