import './Contact.css'
import React, { useState } from 'react';
import { Form } from './Form.js'
import FormSuccess from './FormSuccess';
import { MdAlternateEmail, MdLocationCity } from 'react-icons/md'
import profileImg from '../Images/profileImg.jpg'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <section id='contact' className='contact-section'>
      <h3 className='section-title'>Contact</h3>
      <div className='contact-container'>
        <div className='form-content-left'>
          <div className='contact-left-top'>
            <img src={profileImg} alt="profile" className='profile-img' />
          </div>
          <p className="contact-text">
            Ask me a question, tell me about your available job oppertunities or just say hi.
            Use the form or just send me an email. </p>

          <div className='email-box'>
            <a href="mailto:stephanieplomp@gmail.com" className='email'><MdAlternateEmail className='email-icon' />stephanieplomp@gmail.com</a>
            <p className="location"><MdLocationCity className='location-icon' />Jersey City, NJ</p>
          </div>


          <div className='contact-left-down'>
            <p className="social-text">
              You can also find me on social media
            </p>
            <div className="socialmedia-icons">
              <a href="https://github.com/stephanieplomp" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
              <a href="https://codepen.io/stephanie-plomp/" target="_blank" rel="noreferrer"><i className="fa fa-codepen"></i></a>
              <a href="https://www.linkedin.com/in/stephanie-plomp-631b7a166/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a>
            </div>
          </div>
        </div>
        <div className='form-content-right'>

          {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
        </div>

      </div>
    </section>
  )
}

export default Contact

