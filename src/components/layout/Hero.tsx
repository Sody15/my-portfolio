import { AiFillGithub } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';

import { motion } from 'framer-motion';
import { scrollIntoView } from '../../utils/scrollTo';

const Hero = () => {
  const onProjectsClick = () => {
    scrollIntoView('projects');
  };

  return (
    <section
      id='home'
      className=' py-24 md:py-0 md:h-[80vh] flex justify-center items-center relative mt-16 md:mt-24 px-5 sm:px-12 bg-cover bg-hero-img'
    >
      {/* Background Overlay */}
      <div className='w-full h-full absolute bg-primary/[.3] z-10'></div>

      {/* Hero Content */}
      <div className='hero__main flex flex-col items-center gap-10 text-center w-5/6 z-40 text-white'>
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
        <p className='max-w-xl bg-[#395043]/[.7]'>
          I'm a Front-End Web Developer looking for a new and exciting opportunity. I love to build beautiful fast
          applications.
        </p>
        <button className='btn' type='button' onClick={onProjectsClick}>
          Projects
        </button>
      </div>
      <SideNav />
    </section>
  );
};

const SideNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: [0, 1, 1], translateX: -48 }}
      transition={{
        duration: 1,
        delay: 0.8,
        ease: 'backInOut',
      }}
      className='absolute left-0 flex-col bg-white rounded-r-md items-end hidden md:flex w-32 z-40'
    >
      <a href='https://github.com/Sody15' target='_blank'>
        <div className='flex flex-col items-center hover:bg-primary hover:text-white transition-colors p-3 rounded-r-md w-20'>
          <AiFillGithub size={30} />
          Github
        </div>
      </a>
      <a href='./Resume-PaulSoderberg.pdf' target='_blank'>
        <div className='flex flex-col items-center hover:bg-primary hover:text-white transition-colors p-3 rounded-r-md w-20'>
          <HiIdentification size={30} />
          Résumé
        </div>
      </a>
    </motion.div>
  );
};

export default Hero;
