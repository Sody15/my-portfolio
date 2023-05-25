import classes from './Projects.module.css';

import Section from '../layout/Section';
import { FC } from 'react';

const Projects = () => {
  return (
    <Section
      title='Projects'
      description='Here you will find some of the personal and clients projects that I created with each project containing its own case study'
      id='projects'
      className='flex flex-col gap-10'
    >
      <Project
        title='todo'
        description='Todo is a simple todo application to keep track of your weekly tasks. It&#39;s a complete full-stack application
            with authentication and a database.'
        link='https://www.todo.paulsoderberg.com'
      />
      <Project
        title='ecommerce'
        description='Ecommerce is a simple ecommerce application that lets you add and remove items from your shopping cart. I
        used redux to demonstrate I know it.'
        link='https://www.todo.paulsoderberg.com'
      />
    </Section>
  );
};

const Project: FC<{ title: string; description: string; link: string }> = ({ title, description, link }) => {
  return (
    <div className='project flex flex-col lg:grid grid-cols-[60%_auto] gap-10 items-center'>
      <div className={classes[`img-${title}`]} />
      <div className='project__desc flex flex-col items-center lg:items-start'>
        <h3 className='capitalize'>{title}</h3>
        <p className='py-6 text-center lg:text-left'>{description}</p>
        <div className='flex gap-3'>
          <button className='btn whitespace-nowrap' type='button'>
            Tech Used
          </button>
          <a className='btn whitespace-nowrap' target='_blank' href={link}>
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
