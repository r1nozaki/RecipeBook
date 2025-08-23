import { FiSearch } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router';
import { useEffect, useState } from 'react';

const SearchInput = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (location.pathname === '/search') {
      setQuery('');
    }
  }, [location]);

  return (
    <div className='relative'>
      <input
        type='search'
        className='bg-[#F5F2F2] rounded-3xl h-11 w-64.5 pl-12 pr-2'
        placeholder='Search for recipe'
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className='hover:cursor-pointer'>
        <FiSearch className='absolute top-3 left-5' size={20} />
      </button>
    </div>
  );
};

export default SearchInput;
