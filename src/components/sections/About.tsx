import Section from '../layout/Section';
import Tag from '../ui/Tag';

const About = () => {
  return (
    <Section
      title='About Me'
      description='Welcome! Here you will find out a bit about me, my skillset, and experience.'
      id='about'
    >
      <div className='md:grid grid-cols-2 gap-6 text-center md:text-left'>
        <div className='get-to-know'>
          <h3 className='pb-8'>Get to know me!</h3>
          <p>
            I’m an experienced Web Developer with a passion for coding and creating great user experiences. I have
            expertise in a wide range of technologies and I thrive in building robust applications. I love combining my
            creative and logical sides to produce a complete product that captures exactly what was envisioned.
          </p>
          <br />
          <p>
            I’m committed to staying up to date on all the latest industry trends and am ready to take on new and
            exciting web development challenges. I am dedicated to creating awesome digital experiences and continuously
            honing my skill set.
          </p>
        </div>
        <div className='skills pt-20 md:pt-0'>
          <h3 className='pb-8'>My Skills</h3>
          <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
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
  'Next.js',
  'Redux Toolkit',
  'NgRx',
  'MongoDB',
  'Oracle SQL',
  'Jest',
  'Scrum',
  'Kanban',
];
