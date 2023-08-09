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
      description='Here are some of my personal projects that I created, proudly showcasing my proficiency using different tools and technologies.'
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
          description='Todo is a comprehensive full-stack application designed to help you stay organized by tracking your tasks. With built-in authentication and a MongoDb database, this simple task tracking application ensures a seamless and secure user experience.'
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
              'Typescript',
            ],
            githubLink: 'https://github.com/Sody15/todo-app',
          }}
          onTechUsed={openPopup}
        />
        <Project
          title='brewed-awakenings'
          description="Brewed Awakenings is a user-friendly coffee ecommerce application. It uses NgRx and the Redux pattern for state management to let you effortlessly browse and select products that you'd like to buy."
          link='https://brewed-awakenings.paulsoderberg.com/'
          projectDetails={{
            techUsed: ['Angular', 'Rxjs', 'NgRx', 'Redux', 'Typescript', 'Sass', 'BEM Methodology'],
            githubLink: 'https://github.com/Sody15/coffee-shop',
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
        <h3 className='capitalize'>{title.replaceAll('-', ' ')}</h3>
        <p className='py-6 text-center lg:text-left'>{description}</p>
        <div className='flex gap-3'>
          <button className='btn whitespace-nowrap' type='button' onClick={() => onTechUsed(projectDetails)}>
            Tech Used
          </button>
          <a className='btn whitespace-nowrap flex justify-center items-center gap-1' target='_blank' href={link}>
            <AiOutlineLink />
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
