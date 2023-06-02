import { FC, useEffect } from 'react';

import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';

import { toggleScroll } from '../../utils/scroll';
import { ProjectDetails } from '../sections/Projects';

const ProjectPopup: FC<{ projectDetails: ProjectDetails; onClose: () => void }> = ({ projectDetails, onClose }) => {
  console.log(projectDetails);
  useEffect(() => {
    toggleScroll(false);
    return () => {
      toggleScroll(true);
    };
  }, []);

  return (
    <AnimatePresence>
      <div className='popup-bg fixed top-0 left-0 w-full h-full z-40 bg-black/50' onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: 1, scale: 1, translateX: '-50%', translateY: '-50%' }}
        exit={{ opacity: 0, scale: 0, translateX: '-50%', translateY: '-50%' }}
        transition={{
          duration: 0.5,
          ease: 'easeIn',
        }}
        className='popup m-auto bg-white shadow-md rounded-lg w-full min-h-[50vh] md:w-1/2 md:h-1/2 top-1/2 left-1/2 z-50 max-w-xl fixed p-10 border-8 border-primary'
      >
        <button onClick={onClose} className='absolute top-3 right-3'>
          <IoMdClose size={30} />
        </button>
        {projectDetails.techUsed.map((tech) => (
          <div key={tech}>{tech}</div>
        ))}
        <a href={projectDetails.githubLink} target='_blank'>
          <AiFillGithub size={30} />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectPopup;
