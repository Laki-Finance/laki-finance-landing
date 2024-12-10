import React from 'react';

const About = () => {
  return (
    <section id="about" className="s-about">
      <div className="row section-header">
        <div className="col-full">
          <h3 className="subhead">Who we are</h3>
          <h1 className="display-1"></h1>
        </div>
      </div>
      <div className="row">
        <div className="col-full">
          <p className="lead">At Laki, we empower individuals to grow their wealth through smart and accessible investments in money market funds across Africa. Our platform is designed to provide a seamless experience for beginners and seasoned investors alike, combining cutting-edge technology with local expertise to unlock opportunities in some of the fastest-growing economies on the continent.</p>
        </div>
      </div>
      <div className="row">
        <div className="about-process process block-1-2 block-tab-full">
          {/* Repeat for each step */}
          <div className="col-block process__col" data-item="1" data-aos="fade-up">
            <div className="process__text">
              <h4>Local Expertise</h4>
              <p>Our deep understanding of African markets ensures you get access to the best opportunities..</p>
            </div>
          </div>
          <div className="col-block process__col" data-item="2" data-aos="fade-up">
            <div className="process__text">
              <h4>Secure & Regulated</h4>
              <p>We prioritize your safety with state-of-the-art encryption and compliance with all regulatory standards..</p>
            </div>
          </div>
          <div className="col-block process__col" data-item="3" data-aos="fade-up">
            <div className="process__text">
              <h4>Transparent Fees</h4>
              <p>No hidden charges—know exactly what you’re paying for.</p>
            </div>
          </div>
          <div className="col-block process__col" data-item="4" data-aos="fade-down">
            <div className="process__text">
              <h4>Accessible to All</h4>
              <p>Start small and grow at your own pace, with investments that fit any budget.</p>
            </div>
          </div>
          <div className="col-block process__col" data-item="5" data-aos="fade-down">
            <div className="process__text">
              <h4>Customer Support</h4>
              <p>Our friendly support team is here to assist you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
