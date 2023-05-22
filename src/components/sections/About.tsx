import Section from '../layout/Section';
import Tag from '../ui/Tag';

const About = () => {
  return (
    <Section
      title='About Me'
      description='Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'
      id='about'
    >
      <div className='grid grid-cols-2'>
        <div className='get-to-know'>
          <h3 className='pb-8'>Get to know me!</h3>
          <p>This is a little bit about me.</p>
        </div>
        <div className='skills'>
          <h3 className='pb-8'>My Skills</h3>
          <div className='flex flex-wrap gap-3'>
            {mySkills.map((skill) => (
              <Tag title={skill} key={skill} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

const mySkills = [
  'React',
  'Next.js',
  'Angular',
  'TypeScript',
  'JavaScript',
  'Java',
  'HTML5',
  'CSS3',
  'Sass',
  'Tailwind CSS',
  'Responsive Design',
  'Nx',
  'Redux Toolkit',
  'NgRx',
  'MongoDB',
  'Oracle SQL',
  'Jest',
  'Scrum',
];
