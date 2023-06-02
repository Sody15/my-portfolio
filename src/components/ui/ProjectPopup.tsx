import { FC, useEffect } from 'react';

import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';

import { toggleScroll } from '../../utils/scroll';
import ProjectDetails from '../../types/ProjectDetails';

const ProjectPopup: FC<{ projectDetails: ProjectDetails; onClose: () => void }> = ({ projectDetails, onClose }) => {
  console.log(projectDetails);
  useEffect(() => {
    toggleScroll(false);
    return () => {
      toggleScroll(true);
    };
  }, []);

  return (
    <>
      <div className='popup-bg fixed top-0 left-0 w-full h-full z-40 bg-black/50' onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: 1, scale: 1, translateX: '-50%', translateY: '-50%' }}
        exit={{ opacity: 0, scale: 0, translateX: '-50%', translateY: '-50%' }}
        transition={{
          duration: 0.2,
          ease: 'easeIn',
        }}
        className='popup m-auto bg-white shadow-md rounded-lg w-full min-h-[50vh] md:w-1/2 md:h-1/2 top-1/2 left-1/2 z-50 max-w-xl fixed p-10 border-8 border-primary'
      >
        <button onClick={onClose} className='absolute top-3 right-3'>
          <IoMdClose size={30} />
        </button>
        <div className='tech-used mb-4'>
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
    </>
  );
};

export default ProjectPopup;
