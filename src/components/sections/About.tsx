import Section from '../layout/Section';
import Tag from '../ui/Tag';

const About = () => {
  return (
    <Section
      title='About Me'
      description='Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'
      id='about'
    >
      <div className='md:grid grid-cols-2 gap-6'>
        <div className='get-to-know'>
          <h3 className='pb-8'>Get to know me!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum reiciendis, magni molestias recusandae
            perspiciatis veniam necessitatibus impedit fuga. Atque mollitia placeat in asperiores neque ab fugit
            voluptas, eaque deleniti vel.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nisi beatae molestiae consequatur ducimus
            architecto quaerat omnis inventore ea delectus? Vero excepturi sint eum minima animi facilis, aliquam nihil
            velit.
          </p>
        </div>
        <div className='skills pt-20 md:pt-0'>
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
];
