import { useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import useClickOutside from '../../hooks/useClickOutside';

const Header = () => {
  const menuRef = useRef<HTMLUListElement>(null);

  const { isOpen: isMenuOpen, setIsOpen: setIsMenuOpen } = useClickOutside(false, menuRef);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='flex uppercase font-semibold text-lg justify-between px-5 lg:px-12 py-3 md:py-6 fixed w-full z-50 bg-white shadow-sm top-0'>
      <div className='header__logo flex items-center gap-4'>
        <span className='header__logo-icon h-12 w-12 bg-primary inline-block rounded-full'></span>
        <span className='header__logo-name'>Paul Soderberg</span>
      </div>

      <nav className='my-auto'>
        <span className='sm:hidden cursor-pointer relative'>
          <button onClick={() => setIsMenuOpen((prevVal) => !prevVal)}>
            <RxHamburgerMenu size={30} />
          </button>

          {isMenuOpen && (
            <ul className='flex flex-col items-center absolute right-0 gap-7 bg-white p-4 shadow-md' ref={menuRef}>
              <NavItem title='Home' handleClick={closeMenu} />
              <NavItem title='About' handleClick={closeMenu} />
              <NavItem title='Projects' handleClick={closeMenu} />
              <NavItem title='Contact' handleClick={closeMenu} />
            </ul>
          )}
        </span>
        <ul className='hidden sm:block whitespace-nowrap'>
          <NavItem title='Home' />
          <NavItem title='About' />
          <NavItem title='Projects' />
          <NavItem title='Contact' />
        </ul>
      </nav>
    </header>
  );
};

const NavItem = ({ title, handleClick }: { title: string; handleClick?: () => void }) => {
  const onSelect = () => {
    document.getElementById(title.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    handleClick ? handleClick() : null;
  };

  return (
    <li
      className='px-6 hover:text-primary cursor-pointer transition-colors inline-block tracking-wide text-base'
      onClick={onSelect}
    >
      {title}
    </li>
  );
};

export default Header;
