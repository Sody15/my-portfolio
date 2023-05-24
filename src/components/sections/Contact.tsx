import classes from './Contact.module.css';

import Section from '../layout/Section';

const Contact = () => {
  return (
    <Section
      title='Contact'
      description='Feel free to Contact me by submitting the form below and I will get back to you as soon as possible'
      id='contact'
      className='bg-slate-200'
    >
      <form className={classes.form}>
        <div>
          <label className={classes.label} htmlFor='name'>
            Name
          </label>
          <input className={classes.input} type='text' placeholder='Enter Your Name' name='name' />
        </div>
        <div>
          <label className={classes.label} htmlFor='email'>
            Email
          </label>
          <input className={classes.input} type='text' placeholder='Enter Your Email' name='email' />
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
