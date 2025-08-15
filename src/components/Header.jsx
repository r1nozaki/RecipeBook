import { Link, NavLink } from 'react-router';
import { FiSearch, FiCoffee } from 'react-icons/fi';

const Header = () => {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/recipes', label: 'Recipes' },
    { to: '/about', label: 'About us' },
  ];

  return (
    <header className='w-full h-36'>
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
        <div className='relative'>
          <input
            type='search'
            className='bg-[#F5F2F2] rounded-3xl h-11 w-64.5 pl-12 pr-2'
            placeholder='Search for recipe'
          />
          <FiSearch className='absolute top-3 left-5' size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
