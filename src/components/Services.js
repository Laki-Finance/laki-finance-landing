import React from 'react';

// Array of services (data)
const services = [
  {
    id: 1,
    name: 'Brand Identity',
    description: 'Creating memorable brand experiences with custom designs and a unique visual identity.',
    icon: 'icon-tv', // Assuming these are custom icons or Font Awesome icons
  },
  {
    id: 2,
    name: 'Web Development',
    description: 'Building modern, responsive websites with cutting-edge technologies.',
    icon: 'icon-laptop', // Assuming these are custom icons or Font Awesome icons
  },
  {
    id: 3,
    name: 'Mobile App Development',
    description: 'Developing high-performance mobile applications for iOS and Android platforms.',
    icon: 'icon-mobile', // Assuming these are custom icons or Font Awesome icons
  },
  {
    id: 4,
    name: 'SEO Optimization',
    description: 'Optimizing websites to rank higher on search engines and attract organic traffic.',
    icon: 'icon-search', // Assuming these are custom icons or Font Awesome icons
  },
  {
    id: 5,
    name: 'Digital Marketing',
    description: 'Providing comprehensive digital marketing strategies to drive business growth.',
    icon: 'icon-bullhorn', // Assuming these are custom icons or Font Awesome icons
  },
  {
    id: 6,
    name: 'Content Creation',
    description: 'Creating high-quality content to engage users and improve brand visibility.',
    icon: 'icon-pencil', // Assuming these are custom icons or Font Awesome icons
  },
];

const Services = () => {
  return (
    <section id="services" className="s-services light-gray">
      <div className="row section-header">
        <div className="col-full">
          <h3 className="subhead">How it works</h3>
          <h1 className="display-1">Using Laki is easy</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-full">
          <p className="lead">
            
          </p>
        </div>
      </div>
      <div className="row">
        <div className="about-process process block-1-2 block-tab-full">
          {/* Repeat for each step */}
          <div className="col-block process__col" data-item="1" data-aos="fade-up">
            <div className="process__text">
              <h4>Sign Up in Minutes</h4>
              <p>Create your account with just a few clicks. All you need is a valid ID and proof of address to get started.</p>
            </div>
          </div>
          <div className="col-block process__col" data-item="2" data-aos="fade-up">
            <div className="process__text">
              <h4>Browse Investment Options</h4>
              <p>Explore a curated selection of money market funds tailored to diverse financial goals, whether you're saving for a rainy day or planning long-term growth.</p>
            </div>
          </div>
          <div className="col-block process__col" data-item="3" data-aos="fade-up">
            <div className="process__text">
              <h4>Make Your First Investment</h4>
              <p>With as little as 100 dollars, you can start investing. Use our user-friendly interface to select the fund that aligns with your needs and make secure payments.</p>
            </div>
          </div>
          <div className="col-block process__col" data-item="4" data-aos="fade-up">
            <div className="process__text">
              <h4>Watch Your Wealth Grow</h4>
              <p>Monitor your portfolio in real-time. We provide transparent updates on your investments' performance and offer insights to help you make informed decisions..</p>
            </div>
          </div>
          <div className="col-block process__col" data-item="5" data-aos="fade-up">
            <div className="process__text">
              <h4>Withdraw Anytime</h4>
              <p>Enjoy the flexibility to access your funds whenever you need them, without unnecessary delays or penalties.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
