const Header = () => {
  return (
    <header className='flex uppercase font-semibold text-lg justify-between px-12 py-6'>
      <div className='header__logo flex items-center gap-4'>
        <span className='header__logo-icon h-12 w-12 bg-yellow-300 inline-block rounded-full'></span>
        <span className='header__logo-name'>Paul Soderberg</span>
      </div>
      <nav className='my-auto'>
        <ul>
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
  return <li className='px-6 hover:text-yellow-300 cursor-pointer transition-colors inline-block'>{title}</li>;
};

export default Header;
