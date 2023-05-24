import Button from '../ui/Button';
import { AiFillGithub } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';

const Hero = () => {
  return (
    <section
      id='home'
      className='bg-slate-200 py-24 md:py-0 md:h-[80vh] flex justify-center items-center relative mt-24'
    >
      <div className='hero__main flex flex-col items-center gap-10 text-center'>
        <h1>Hey, I'm Paul Soderberg</h1>
        <p className='max-w-xl'>
          I'm a Front-End Web Developer looking for a new and exciting opportunity. I love to build beautiful fast
          applications.
        </p>
        <Button title='Projects' type='button' />
      </div>
      <div className='absolute left-0 flex-col bg-white px-2 py-3 rounded-sm shadow-sm items-center gap-2 hidden lg:flex'>
        <a href='https://github.com/Sody15' target='_blank'>
          <div className='flex flex-col items-center hover:bg-yellow-100 transition-colors p-3 rounded-md'>
            <AiFillGithub size={30} />
            Github
          </div>
        </a>
        <a href='src/assets/Resume-PaulSoderberg.pdf' target='_blank'>
          <div className='flex flex-col items-center hover:bg-yellow-100 transition-colors p-3 rounded-md'>
            <HiIdentification size={30} />
            Résumé
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
