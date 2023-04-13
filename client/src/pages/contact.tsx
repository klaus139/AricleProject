import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    };

    // TODO: Submit the form data to the backend or external service

    setIsFormSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee &amp; chat with us</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src="https://nicklaus-portfolio.netlify.app/static/media/email.37b9e890eea501421fbf.png" alt="email" className='imgg' />
          <a href="mailto:nickoklaus5@gmail.com" className="p-text">nickoklaus5@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src="https://nicklaus-portfolio.netlify.app/static/media/mobile.145d9ce0157a56f8fcd8.png" alt="phone" className='imgg' />
          <a href="tel:+2348072345624" className="p-text">+2348072345624</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default Contact;
