import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import BeatLoader from "react-spinners/BeatLoader";


export const Form = ({ submitForm }) => {
    const [isUsernameActive, setIsUsernameActive] = useState('');
    const [isEmailActive, setIsEmailActive] = useState('');
    const [isMessageActive, setIsMessageActive] = useState('');

    function handleUsernameChange(e) {
        setIsUsernameActive(e.target.value);
      }

    function handleEmailChange(e) {
        setIsEmailActive(e.target.value);
      }
      
    function handleMessageChange(e) {
        setIsMessageActive(e.target.value);
      }


    const form = useRef();
    const [loading, setLoading] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)

        emailjs.sendForm('service_j7i5dmp', 'template_ysqny3p', form.current, 'aVQUsHjWdoZpG9sOD')
            .then((result) => {
                submitForm()
                setLoading(false)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <h3 className='form-title'>Get in touch</h3>
            <form className='form' ref={form} onSubmit={sendEmail}>

                <div className='form-inputs'>

                    <input
                        type='text'
                        value={isUsernameActive}
                        name='username'
                        label='username'
                        className='floating-label'
                        onChange={handleUsernameChange}
                        required
                    />
                    <label
                        htmlFor='name'
                        className={isUsernameActive ? 'active' : ''}
                    >Name*</label>
                </div>

                <div className='form-inputs'>

                    <input
                        type='email'
                        value={isEmailActive}
                        name='email'
                        label='email'
                        className='floating-label'
                        onChange={handleEmailChange}
                        required
                    />
                    <label
                        htmlFor='email'
                        className={isEmailActive ? 'active' : ''}
                    >Email*</label>
                </div>

                <div className='form-inputs textarea'>
                    <textarea
                        value={isMessageActive}
                        name='message'
                        label='message'
                        className='floating-label'
                        onChange={handleMessageChange}
                        required
                    />
                    <label
                        htmlFor='message'
                        className={isMessageActive ? 'active' : ''}
                    >Message*</label>
                </div>

                <button disabled={loading} className='form-input-btn' type='submit'>
                {loading ? ( 
                <BeatLoader color={"#CD5360"} />) :
                 ("Send Message")} 
                </button>
            </form>
        </>
    )
}