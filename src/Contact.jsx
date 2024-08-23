import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './Contact.css';

export function Contact() {
  const [value, setValue] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          setValue('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <section className='contact' id='contact'>
      <h2 className='heading'>Contact <span>Me</span></h2>

      <form ref={form} onSubmit={sendEmail}>
        <div className='input-box'>
          <input type='text' name='user_name' placeholder='Full Name' />
          <input type='email' name='user_email' placeholder='Email' />
        </div>

        <div className='input-box'>
          <PhoneInput
            name='phone_number'
            defaultCountry='US'
            placeholder="Phone Number"
            value={value}
            onChange={setValue}/>
          <input type="text" name='subject' placeholder='Subject'/>
        </div>

        <textarea name='message' id='' cols={30} rows={5} placeholder='Your Message'></textarea>
        <input type="submit" value="Send" className='btn'/>
      </form>
    </section>
  )
}