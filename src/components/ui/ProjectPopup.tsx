import { FC, useEffect } from 'react';

import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';

import { toggleScroll } from '../../utils/scroll';
import ProjectDetails from '../../types/ProjectDetails';
import useMediaQuery from '../../hooks/useMediaQuery';

const ProjectPopup: FC<{ projectDetails: ProjectDetails; onClose: () => void }> = ({ projectDetails, onClose }) => {
  const isMediaQuery_Md = useMediaQuery('md');

  const variants = isMediaQuery_Md
    ? {
        initial: { opacity: 0, scale: 0, translateX: '-50%', translateY: '-50%' },
        animate: { opacity: 1, scale: 1, translateX: '-50%', translateY: '-50%' },
      }
    : {
        initial: { translateY: '100%' },
        animate: { translateY: '0%' },
      };

  // Toggle Scroll
  useEffect(() => {
    toggleScroll(false);
    return () => {
      toggleScroll(true);
    };
  }, []);

  return (
    <div className='popup-container'>
      <div className='popup-bg fixed top-0 left-0 w-full h-full z-40 bg-black/50' onClick={onClose} />

      <motion.div
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.initial}
        transition={{
          duration: 0.2,
          ease: 'easeIn',
        }}
        className='popup w-full bg-white shadow-md fixed bottom-0 left-0 z-50 rounded-t-xl px-10 pb-16 md:block md:rounded-lg md:min-h-[50vh] md:w-1/2 md:h-1/2 md:top-1/2 md:left-1/2 md:bottom- md:max-w-xl md:p-10'
      >
        {/* Close Buttons */}
        <button onClick={onClose} className='absolute top-3 right-3 hidden md:block'>
          <IoMdClose size={30} />
        </button>
        <div className='md:hidden flex justify-center items-center text-primary my-5'>
          <button
            onClick={onClose}
            type='button'
            className='relative after:content-[""] after:block after:absolute after:top-3 after:left-[2px] after:w-4 after:h-1 after:bg-primary after:rotate-[30deg] before:content-[""] before:absolute before:right-[3px] before:block before:w-4 before:h-1 before:bg-primary before:-rotate-[30deg]  w-8 h-6'
          />
        </div>

        {/* Content */}
        <div className='tech-used mb-4'>
          <h3>Tech Used</h3>
          {projectDetails.techUsed.map((tech) => (
            <div key={tech}>{tech}</div>
          ))}
        </div>
        <a href={projectDetails.githubLink} target='_blank' className='inline-block'>
          <div className='flex flex-col items-center hover:bg-primary hover:text-white transition-colors p-3 rounded-md w-20 border-2 border-primary'>
            <AiFillGithub size={30} />
            Github
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectPopup;
