const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className='bg-black text-white px-8 md:px-16 flex justify-center'>
      <div className='w-full max-w-6xl py-20'>
        <div className='footer__upper pb-10 flex flex-col items-center md:items-start'>
          <h3 className='uppercase'>Paul Soderberg</h3>
          <p className='text-base max-w-md pt-5'>
            A Front-End Web Developer looking for a new and exciting opportunity.
          </p>
        </div>
        <div className='footer__lower border-t border-gray-500 text-center pt-10 text-sm'>
          <span>© Copyright {currYear}. Made by Paul Soderberg</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
