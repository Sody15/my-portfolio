import classes from './Projects.module.css';

import Section from '../layout/Section';

const Projects = () => {
  return (
    <Section
      title='Projects'
      description='Here you will find some of the personal and clients projects that I created with each project containing its own case study'
      id='projects'
      className='flex flex-col gap-6'
    >
      <div className='project flex flex-col md:grid grid-cols-2 gap-10 items-center'>
        <div className='project__img'>
          <img className={classes['img-todo']} />
        </div>
        <div className='project__desc flex flex-col items-center md:items-start'>
          <h3>Todo</h3>
          <p className='py-6 text-center md:text-left'>
            Todo is a simple todo application to keep track of your weekly tasks. It's a complete full-stack application
            with authentication and a database.
          </p>
          <div className='flex gap-3'>
            <button type='button'>Tech Used</button>
            <a className='btn' target='_blank' href='https://www.todo.paulsoderberg.com'>
              Live Link
            </a>
          </div>
        </div>
      </div>
      <div className='project flex flex-col md:grid grid-cols-2 gap-10 items-center'>
        <div className='project__img'>
          <img className={classes['img-todo']} />
        </div>
        <div className='project__desc flex flex-col items-center md:items-start'>
          <h3>Ecommerce</h3>
          <p className='py-6 text-center md:text-left'>
            Ecommerce is a simple ecommerce application that lets you add and remove items from your shopping cart. I
            used redux to demonstrate I know it.
          </p>
          <div className='flex gap-3'>
            <button type='button'>Tech Used</button>
            <a className='btn' target='_blank' href='https://www.todo.paulsoderberg.com'>
              Live Link
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
