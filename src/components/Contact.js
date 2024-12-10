import React, { useState } from 'react';

const ContactUs = () => {
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
  }
  
  const [currentDate, setCurrentDate] = useState(getDate());
  
  // State for the email input
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Send email to the backend (replace with your backend API endpoint)
    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send the email as a JSON object
      });

      if (response.ok) {
        setMessage('Subscription successful! Thank you for subscribing.');
        setEmail(''); // Clear the email input after successful subscription
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('There was an error. Please try again.');
    }
  };

  return (
    <section id="contact" className="s-contact">
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead subhead--light">Contact Us</h3>
          <h1 className="display-1 display-1--light">
            Start Investing Today
          </h1>
        </div>
      </div>

      <div className="row"></div>

      <div className="row">
        <div className="col-five tab-full contact-secondary" data-aos="fade-up">
          <div className="contact-subscribe">
            <form
              id="mc-form"
              className="group mc-form"
              noValidate
              onSubmit={handleSubmit} // Handle form submission
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Capture the email input
                name="EMAIL"
                className="email"
                id="mc-email"
                placeholder="Email Address"
                required
              />
              <input type="submit" name="subscribe" value="Subscribe" />
              <label htmlFor="mc-email" className="subscribe-message"></label>
            </form>
            {message && <p>{message}</p>} {/* Display the message after form submission */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-full cl-copyright">
          <span>Laki Copyright &copy; {currentDate};</span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
