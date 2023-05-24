import classes from './Projects.module.css';

import Section from '../layout/Section';
import Button from '../ui/Button';

const Projects = () => {
  return (
    <Section
      title='Projects'
      description='Here you will find some of the personal and clients projects that I created with each project containing its own case study'
      id='projects'
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
          <Button title='Tech' type='button' />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
