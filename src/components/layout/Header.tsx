import { useRef } from 'react';

import useClickOutside from '../../hooks/useClickOutside';
import { scrollIntoView } from '../../utils/scrollTo';

import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const menuRef = useRef<HTMLUListElement>(null);

  const { isOpen: isMenuOpen, setIsOpen: setIsMenuOpen } = useClickOutside(false, menuRef);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='fixed uppercase font-semibold z-50'>
      <div className='text-lg fixed flex justify-between z-50 px-5 lg:px-12 py-3 md:py-6 bg-white md:shadow-sm top-0 max-w-[120rem] w-full whitespace-nowrap'>
        <div className='header__logo flex items-center gap-4'>
          <span className='header__logo-icon h-12 w-12 bg-primary inline-block rounded-full'></span>
          <span className='header__logo-name'>Paul Soderberg</span>
        </div>

        {/* Desktop */}
        <nav className='hidden md:flex items-center'>
          <ul className='flex gap-10'>
            <NavItem title='Home' />
            <NavItem title='About' />
            <NavItem title='Projects' />
            <NavItem title='Contact' />
          </ul>
        </nav>

        {/* Mobile */}
        {/* <button
          onClick={() => setIsMenuOpen((prevVal) => !prevVal)}
          className='md:hidden hover:text-primary transition-colors'
        >
          {isMenuOpen && <IoMdClose size={30} />}
          {!isMenuOpen && <RxHamburgerMenu size={30} />}
        </button> */}
        <motion.button
          onClick={() => setIsMenuOpen((prevVal) => !prevVal)}
          className='md:hidden hover:text-primary transition-colors'
          animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{
            duration: 0.2,
            ease: 'easeIn',
          }}
        >
          {isMenuOpen && <IoMdClose size={35} />}
          {!isMenuOpen && <RxHamburgerMenu size={30} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <nav className='md:hidden'>
        <span className='cursor-pointer relative'>
          {isMenuOpen && (
            <motion.div
              className='bg-white w-full h-full fixed left-0 top-0 text-5xl flex justify-center items-center -z-40'
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <ul className='flex flex-col items-center gap-7'>
                <NavItem title='Home' handleClick={closeMenu} />
                <NavItem title='About' handleClick={closeMenu} />
                <NavItem title='Projects' handleClick={closeMenu} />
                <NavItem title='Contact' handleClick={closeMenu} />
              </ul>
            </motion.div>
          )}
        </span>
      </nav>
    </header>
  );
};

const NavItem = ({ title, handleClick }: { title: string; handleClick?: () => void }) => {
  const onSelect = () => {
    scrollIntoView(title.toLowerCase());
    handleClick ? handleClick() : null;
  };

  return (
    <li
      className='hover:text-primary cursor-pointer transition-colors inline-block tracking-wide md:text-base'
      onClick={onSelect}
    >
      {title}
    </li>
  );
};

export default Header;
