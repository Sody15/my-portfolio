import { AiFillGithub } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';

import { motion } from 'framer-motion';

const Hero = () => {
  const onProjectsClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='home'
      className='bg-slate-200 py-24 md:py-0 md:h-[80vh] flex justify-center items-center relative mt-16 md:mt-24 px-5 sm:px-12'
    >
      <div className='hero__main flex flex-col items-center gap-10 text-center w-5/6'>
        <div className='hero__heading'>
          <motion.h1
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className='inline-block'
          >
            Hey,&nbsp;
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className='inline-block'
          >
            I'm Paul Soderberg
          </motion.h1>
        </div>
        <p className='max-w-xl'>
          I'm a Front-End Web Developer looking for a new and exciting opportunity. I love to build beautiful fast
          applications.
        </p>
        <button className='btn' type='button' onClick={onProjectsClick}>
          Projects
        </button>
      </div>

      {/* Side Nav */}
      <motion.div
        initial={{ translateX: -100 }}
        animate={{ translateX: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: 'backInOut',
        }}
        className='absolute left-0 flex-col bg-white rounded-sm shadow-sm items-center hidden md:flex'
      >
        <a href='https://github.com/Sody15' target='_blank'>
          <div className='flex flex-col items-center hover:bg-primary transition-colors p-3 rounded-md w-20'>
            <AiFillGithub size={30} />
            Github
          </div>
        </a>
        <a href='./Resume-PaulSoderberg.pdf' target='_blank'>
          <div className='flex flex-col items-center hover:bg-primary transition-colors p-3 rounded-md w-20'>
            <HiIdentification size={30} />
            Résumé
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
