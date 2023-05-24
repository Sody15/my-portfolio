import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <header className='flex uppercase font-semibold text-lg justify-between px-5 lg:px-12 py-6 fixed w-full z-50 bg-white shadow-sm top-0'>
      <div className='header__logo flex items-center gap-4'>
        <span className='header__logo-icon h-12 w-12 bg-yellow-300 inline-block rounded-full'></span>
        <span className='header__logo-name'>Paul Soderberg</span>
      </div>

      <nav className='my-auto'>
        <span className='sm:hidden cursor-pointer'>
          <RxHamburgerMenu size={30} />
        </span>
        <ul className='hidden sm:block'>
          <NavItem title='Home' />
          <NavItem title='About' />
          <NavItem title='Projects' />
          <NavItem title='Contact' />
        </ul>
      </nav>
    </header>
  );
};

const NavItem = ({ title }: { title: string }) => {
  const onSelect = () => {
    console.log(title.toLowerCase());
    document.getElementById(title.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <li
      className='px-6 hover:text-yellow-300 cursor-pointer transition-colors inline-block tracking-wide text-base'
      onClick={onSelect}
    >
      {title}
    </li>
  );
};

export default Header;
