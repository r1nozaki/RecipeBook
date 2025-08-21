import { Link, NavLink } from 'react-router';
import SearchInput from '../Search/SearchInput';
import { FiCoffee } from 'react-icons/fi';

const Header = ({ setSearchQuery }) => {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/recipes', label: 'Recipes' },
    { to: '/about', label: 'About us' },
  ];

  return (
    <header className='w-full h-36 fixed top-0 left-0 z-50 bg-white'>
      <div className='w-full h-7.5 bg-yellow-300'></div>
      <div className='flex justify-between items-center w-full py-8.5 px-19.5'>
        <Link to='/'>
          <div className='flex items-center gap-2'>
            <FiCoffee size={28} />
            <span className='text-xl font-bold'>RecipeBook</span>
          </div>
        </Link>
        <nav className='flex gap-12 px-5'>
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => (
                <span
                  className={`text-lg font-semibold transition-colors ${
                    isActive ? 'text-yellow-400' : 'text-black'
                  } hover:text-yellow-400 `}
                >
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <SearchInput setSearchQuery={setSearchQuery} />
      </div>
    </header>
  );
};

export default Header;
