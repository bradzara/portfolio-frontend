import { useState } from 'react';
// imprt 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input';
import './Contact.css';

export function Contact() {
  const [value, setValue] = useState();
  
  return (
    <section className='contact' id='contact'>
      <h2 className='heading'>Contact <span>Me</span></h2>

      <form action='#'>
        <div className='input-box'>
          <input type='text' placeholder='Full Name' />
          <input type='email' placeholder='Email' />
        </div>

        <div className='input-box'>
          <PhoneInput
            defaultCountry='US'
            placeholder="Phone Number"
            value={value}
            onChange={setValue}/>
          <input type="text" placeholder='Subject'/>
        </div>

        <textarea name='' id='' cols={30} rows={10} placeholder='Your Message'></textarea>
        <input type="submit" value="Send Message" className='btn'/>
      </form>
    </section>
  )
}