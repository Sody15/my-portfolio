import { AiFillGithub } from 'react-icons/ai';
import { HiIdentification } from 'react-icons/hi';

const Hero = () => {
  return (
    <section
      id='home'
      className='bg-slate-200 py-24 md:py-0 md:h-[80vh] flex justify-center items-center relative mt-16 md:mt-24 px-5 sm:px-12'
    >
      <div className='hero__main flex flex-col items-center gap-10 text-center w-5/6'>
        <h1>Hey, I'm Paul Soderberg</h1>
        <p className='max-w-xl'>
          I'm a Front-End Web Developer looking for a new and exciting opportunity. I love to build beautiful fast
          applications.
        </p>
        <button className='btn' type='button'>
          Projects
        </button>
      </div>
      {/* Side Nav */}
      <div className='absolute left-0 flex-col bg-white rounded-sm shadow-sm items-center hidden md:flex'>
        <a href='https://github.com/Sody15' target='_blank'>
          <div className='flex flex-col items-center hover:bg-yellow-100 transition-colors p-3 rounded-md w-20'>
            <AiFillGithub size={30} />
            Github
          </div>
        </a>
        <a href='./Resume-PaulSoderberg.pdf' target='_blank'>
          <div className='flex flex-col items-center hover:bg-yellow-100 transition-colors p-3 rounded-md w-20'>
            <HiIdentification size={30} />
            Résumé
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
