import React from 'react';
import './footer.css';

const Footer = () => {

  return (
    <div className='footer-container'>
      <div className='footer-info'>
        <h4>Welcome to Olean Project</h4>
        <p>We are a team of passionate developers who strive to provide solutions for researchers and students looking for research materials.</p>
        <a href="/" target="_blank" rel='noreferrer'>
          Find what you want
        </a>
      </div>
      <div className='footer-contact'>
        <h4>Contact Us</h4>
        <p>Email: oleanproject@gmail.com</p>
        <p>Phone: 080-652-529-45</p>
        <p>Address: Lagos Nigeria</p>
      </div>
      <div className='footer-social'>
        <h4>Follow Us</h4>
        <a href="https://twitter.com/oleanproject" target="_blank" rel='noreferrer'>
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/oleanproject" target="_blank" rel='noreferrer'>
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/oleanproject" target="_blank" rel='noreferrer'>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className='footer-legal'>
        <p>© 2023 Olean Project. All Rights Reserved.</p>
        <p><a href="#" target="_blank" rel='noreferrer'>Privacy Policy</a> | <a href="#" target="_blank" rel='noreferrer'>Terms of Use</a></p>
      </div>
    </div>
  )
}

export default Footer
