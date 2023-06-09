import { FormEvent, useRef, useState } from 'react';

import classes from './Contact.module.css';
import Section from '../layout/Section';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { BsEmojiSmile } from 'react-icons/bs';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      await emailjs.sendForm(
        'service_2yto9gl',
        'template_9tpabmi',
        form.current as HTMLFormElement,
        'flI8Hu3OYVqrDYBUl'
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Section
      title='Contact'
      description='Contact me by submitting the form below and I will get back to you as soon as possible.'
      id='contact'
      className='bg-slate-200 max-w-full'
    >
      <form className={classes.form} onSubmit={submitForm} ref={form}>
        {/* Submit Background Animation */}
        <motion.div
          className='form-bg w-6 h-6 bg-primary absolute bottom-0 right-0 rounded-full z-30 hidden'
          initial={false}
          animate={isSubmitted ? { scale: 100, display: 'block' } : { scale: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeIn',
          }}
        ></motion.div>

        {/* Submit Text Animation */}
        <motion.div
          className='w-full h-full bg-primary absolute top-0 left-0  z-30 overflow-hidden justify-center items-center text-white hidden'
          animate={isSubmitted ? { opacity: 1, display: 'flex' } : { opacity: 0, display: 'none' }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: 'easeIn',
          }}
        >
          <div className='flex flex-col items-center gap-5'>
            <span className='flex gap-2 items-center'>
              <h3>Thanks!</h3>
              <BsEmojiSmile size={30} />
            </span>

            <motion.p
              initial={{ opacity: 0 }}
              animate={!isSubmitted ? { opacity: 0 } : { opacity: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.5,
                ease: 'easeIn',
              }}
            >
              I'll be in touch soon!
            </motion.p>
          </div>
        </motion.div>

        {/* Form Fields */}
        <div>
          <label className={classes.label} htmlFor='user_name'>
            Name
          </label>
          <input className={classes.input} type='text' required placeholder='Enter Your Name' name='user_name' />
        </div>
        <div>
          <label className={classes.label} htmlFor='user_email'>
            Email
          </label>
          <input className={classes.input} type='text' required placeholder='Enter Your Email' name='user_email' />
        </div>
        <div>
          <label className={classes.label} htmlFor='message'>
            Message
          </label>
          <textarea className={classes.input} required placeholder='Enter Your Message' name='message' rows={10} />
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
