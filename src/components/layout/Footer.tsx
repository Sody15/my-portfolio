const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className='bg-black text-white px-8 md:px-16'>
      <div className='footer__upper py-10'>
        <h3 className='uppercase'>Paul Soderberg</h3>
        <p className='text-base max-w-md pt-5'>
          A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the
          success of the overall product
        </p>
      </div>
      <div className='footer__lower border-t text-center py-10 text-sm'>
        <span>© Copyright {currYear}. Made by Paul Soderberg</span>
      </div>
    </footer>
  );
};

export default Footer;
