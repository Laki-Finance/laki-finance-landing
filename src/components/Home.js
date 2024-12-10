import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-scroll';

const HomeSection = () => {
  return (
    <Parallax
      bgImage={`${process.env.PUBLIC_URL}/images/hero-bg.jpg`}
      strength={700} // You can adjust this for the speed of the parallax effect
    >
      <section id="home" className="s-home target-section">
        <div className="shadow-overlay"></div>
        <div className="home-content">
          <div className="row home-content__main">
            <h1>Marketplace for <br/> Money Market Funds </h1>
            <p>Where Your Money Finds Stability and Growth.</p>
          </div>
        </div>
        <ul className="home-sidelinks">
        <li>
          <Link
            to="services"
            smooth={true}
            duration={1000}  // Increase duration for smoother scroll
            className="smoothscroll"
          >
            Services<span>what we do</span>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}  // Increase duration for smoother scroll
            className="smoothscroll"
          >
            About<span>who we are</span>
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={1000}  // Increase duration for smoother scroll
            className="smoothscroll"
          >
            Contact<span>get in touch</span>
          </Link>
        </li>
      </ul>
        {/* <ul className="home-social">
          <li className="home-social-title">Follow Us</li>
          <li><a href="#0"><i className="fab fa-facebook"></i><span>Facebook</span></a></li>
          <li><a href="#0"><i className="fab fa-twitter"></i><span>Twitter</span></a></li>
          <li><a href="#0"><i className="fab fa-linkedin"></i><span>LinkedIn</span></a></li>
        </ul> */}
      </section>
    </Parallax>
  );
};

export default HomeSection;
