import classes from './Contact.module.css';

import Section from '../layout/Section';
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('called');

    emailjs.sendForm('service_2yto9gl', 'template_9tpabmi', form.current, 'flI8Hu3OYVqrDYBUl').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Section
      title='Contact'
      description='Feel free to Contact me by submitting the form below and I will get back to you as soon as possible'
      id='contact'
      className='bg-slate-200 max-w-full'
    >
      <form className={classes.form} onSubmit={submitForm} ref={form}>
        <div>
          <label className={classes.label} htmlFor='user_name'>
            Name
          </label>
          <input className={classes.input} type='text' placeholder='Enter Your Name' name='user_name' />
        </div>
        <div>
          <label className={classes.label} htmlFor='user_email'>
            Email
          </label>
          <input className={classes.input} type='text' placeholder='Enter Your Email' name='user_email' />
        </div>
        <div>
          <label className={classes.label} htmlFor='message'>
            Message
          </label>
          <textarea className={classes.input} placeholder='Enter Your Message' name='message' rows={10} />
        </div>
        <div className='text-right'>
          <button className='btn' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
