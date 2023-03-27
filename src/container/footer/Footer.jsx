import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt__footer section__padding footer-gradient_bg'>
      <div className="gpt__footer-heading">
        <p className='gradient__text'>Do you want to step in to the future before others</p>
      </div>
      <div className="gpt__footer-but">
        <button>Request Early Access</button>
      </div>
      <div className="gpt__footer-container">
        <div className="gpt__footer-container_logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt__footer-container_links">
        <div className="gpt__footer-container_text">
          <h1>Links</h1>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt__footer-container_text">
        <h1>Company</h1>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        </div>
      <div className="gpt__footer-container_text">
        <h1>Get in touch</h1>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
      </div>
      </div>
      <div className="gpt__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer