import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router';

const SearchInput = ({ setSearchQuery }) => {
  const navigate = useNavigate();

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      navigate('/search');
    }
  };

  return (
    <div className='relative'>
      <input
        type='search'
        className='bg-[#F5F2F2] rounded-3xl h-11 w-64.5 pl-12 pr-2'
        placeholder='Search for recipe'
        onChange={e => {
          setSearchQuery(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => navigate('/search')} className='hover:cursor-pointer'>
        <FiSearch className='absolute top-3 left-5' size={20} />
      </button>
    </div>
  );
};

export default SearchInput;
