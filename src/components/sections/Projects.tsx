import { FC, useState } from 'react';
import { createPortal } from 'react-dom';

import classes from './Projects.module.css';

import Section from '../layout/Section';
import ProjectPopup from '../ui/ProjectPopup';
import ProjectDetails from '../../types/ProjectDetails';

import { AnimatePresence } from 'framer-motion';
import { AiOutlineLink } from 'react-icons/ai';

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>();

  const openPopup = (projectDetails: ProjectDetails) => {
    setIsPopupOpen(true);
    setProjectDetails(projectDetails);
  };

  return (
    <Section
      title='Projects'
      description='Here you will find some of the personal and clients projects that I created with each project containing its own case study'
      id='projects'
      className='flex flex-col'
    >
      {/* Popup */}
      {createPortal(
        <AnimatePresence>
          {isPopupOpen && projectDetails && (
            <ProjectPopup projectDetails={projectDetails} onClose={() => setIsPopupOpen(false)} />
          )}
        </AnimatePresence>,
        document.body
      )}

      <div className='flex flex-col gap-24'>
        <Project
          title='todo'
          description='Todo is a simple todo application to keep track of your weekly tasks. It&#39;s a complete full-stack application
            with authentication and a database.'
          link='https://www.todo.paulsoderberg.com'
          projectDetails={{
            techUsed: [
              'React',
              'Next.js',
              'Next API Routes',
              'Tanstack Query',
              'MongoDb',
              'NextAuth.js',
              'Tailwind CSS',
            ],
            githubLink: 'https://github.com/Sody15/todo-app',
          }}
          onTechUsed={openPopup}
        />
        <Project
          title='ecommerce'
          description='Ecommerce is a simple ecommerce application that lets you add and remove items from your shopping cart. I
        used redux to demonstrate I know it.'
          link='https://www.ecommerce.paulsoderberg.com'
          projectDetails={{
            techUsed: ['React'],
            githubLink: 'https://github.com/Sody15/ecommerce-app',
          }}
          onTechUsed={openPopup}
        />
      </div>
    </Section>
  );
};

const Project: FC<{
  title: string;
  description: string;
  link: string;
  projectDetails: ProjectDetails;
  onTechUsed: (techUsed: ProjectDetails) => void;
}> = ({ title, description, link, projectDetails, onTechUsed }) => {
  return (
    <div className='project flex flex-col lg:grid grid-cols-[60%_auto] gap-10 items-center'>
      <div className={classes[`img-${title}`]} />
      <div className='project__desc flex flex-col items-center lg:items-start'>
        <h3 className='capitalize'>{title}</h3>
        <p className='py-6 text-center lg:text-left'>{description}</p>
        <div className='flex gap-3'>
          <button className='btn whitespace-nowrap' type='button' onClick={() => onTechUsed(projectDetails)}>
            Tech Used
          </button>
          <a className='btn whitespace-nowrap relative' target='_blank' href={link}>
            <span className='absolute left-5 top-[1.07rem]'>
              <AiOutlineLink />
            </span>
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
