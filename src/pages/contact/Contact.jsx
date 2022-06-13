import React from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_10j3a0k",
          "template_co07r7l",
          formRef.current,
          "uK1nnASCI71yo7N1r")
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          });
    };

  return (
   <div className='contact'>
      <h1 className="mainTitle">Contact</h1>
      <div className="contactWrap"> 
            <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" placeholder="name" name="user_name" />
                <input type="text" placeholder="title" name="user_subject" />
                <input type="text" placeholder="email" name="user_email" />
                <textarea rows="10" placeholder="message" name="message" />
                <button>Submit</button>
                  <br/>
                    <p className="message">{done && "message sent..."}</p>
            </form>
    </div>
    </div>
  
  )
}

export default Contact;