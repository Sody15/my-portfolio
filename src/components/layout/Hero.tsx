import { AiFillGithub } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';

import { motion } from 'framer-motion';
import { scrollIntoView } from '../../utils/scroll';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const onAboutClick = () => scrollIntoView('about');

  const description =
    "I'm a Front-End Web Developer looking for a new and exciting opportunity. I take pride in building stunning and high performing applications.";

  const [displayDescription, setDisplayDescription] = useState('');
  const descIndex = useRef(1);

  useEffect(() => {
    const type = async () => {
      let interval: number;
      if (descIndex.current === 1) {
        interval = 1000;
      } else {
        interval = Math.floor(Math.random() * (60 - 20 + 1) + 20);
      }
      await new Promise((resolve) => setTimeout(resolve, interval));

      const updatedDisplayDesc = description.slice(0, descIndex.current);
      setDisplayDescription(updatedDisplayDesc);

      descIndex.current = descIndex.current + 1;
    };

    type();
  }, [displayDescription]);

  return (
    <section
      id='home'
      className=' py-24 md:py-0 md:h-[80vh] flex justify-center items-center relative mt-16 px-5 sm:px-12 bg-cover bg-hero-img'
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

        <div className='h-36 md:h-24'>
          <p className='text-xl max-w-xl bg-[#395043]/[.7] py-2'>
            {displayDescription && (
              <>
                {displayDescription}

                {/* Cursor */}
                <motion.span
                  className='cursor inline-block w-[0.1rem] h-5 bg-white translate-x-1 translate-y-[0.15rem]'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ delay: 7, duration: 0.7, repeat: Infinity, repeatDelay: 0.2 }}
                />
              </>
            )}
          </p>
        </div>

        <button className='btn' type='button' onClick={onAboutClick}>
          About Me
        </button>
      </div>
      <SideNav />
    </section>
  );
};

const SideNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -130 }}
      animate={{ opacity: [0, 1, 1], translateX: -48 }}
      transition={{
        duration: 1,
        delay: 0.8,
        ease: 'backInOut',
      }}
      className='absolute left-0 flex-col bg-primary text-white rounded-r-md items-end hidden md:flex w-32 z-40'
    >
      <a href='https://github.com/Sody15' target='_blank'>
        <div className='flex flex-col items-center hover:bg-white hover:text-primary transition-colors p-3 rounded-tr-md w-20'>
          <AiFillGithub size={30} />
          Github
        </div>
      </a>
      <a href='./Resume-PaulSoderberg.pdf' target='_blank'>
        <div className='flex flex-col items-center hover:bg-white hover:text-primary transition-colors p-3 rounded-br-md w-20'>
          <HiIdentification size={30} />
          Resume
        </div>
      </a>
    </motion.div>
  );
};

export default Hero;
