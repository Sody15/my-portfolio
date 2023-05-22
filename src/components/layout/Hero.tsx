import Button from '../ui/Button';
import { AiFillGithub } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id='home' className='bg-slate-200 h-[80vh] flex justify-center items-center relative top-24'>
      <div className='hero__main flex flex-col items-center gap-10 text-center'>
        <h1>Hey, I'm Paul Soderberg</h1>
        <p className='max-w-xl'>
          I'm a Front-End Web Developer looking for a new and exciting opportunity. I love to build beautiful fast
          applications.
        </p>
        <Button title='Projects' type='button' />
      </div>
      <div className='absolute left-0 flex flex-col bg-white p-4 rounded-sm shadow-sm items-center gap-2'>
        <a href='https://github.com/Sody15' target='_blank'>
          <div className='flex flex-col items-center hover:scale-105 transition-transform'>
            <AiFillGithub size={40} />
            Github
          </div>
        </a>
        <a href='src/assets/Resume-PaulSoderberg.pdf' target='_blank'>
          <div className='flex flex-col items-center hover:scale-105 transition-transform'>
            <HiIdentification size={40} />
            Résumé
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
