import { Link } from 'react-router';
import { FiCoffee, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='w-full py-27.5 px-28.5 bg-yellow-300'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <div className='flex items-center gap-2'>
            <FiCoffee size={35} />
            <span className='text-2xl font-bold'>RecipeBook</span>
          </div>
        </Link>
        <div className='flex flex-col items-center'>
          <span className='text-xl font-semibold'>Social media:</span>
          <div className='flex gap-2 items-center mt-4'>
            <a
              href='https://www.youtube.com/@klopotenko'
              className='bg-yellow-100 w-8 h-8 flex justify-center items-center rounded-lg transition duration-300 easy transform hover:scale-110 hover:bg-red-600 hover:text-white'
              target='blank'
            >
              <FiYoutube size={20} />
            </a>
            <a
              href='https://x.com/r1nozaki'
              className='bg-yellow-100 w-8 h-8 flex justify-center items-center rounded-lg transition duration-300 easy transform hover:scale-110 hover:bg-black hover:text-white'
              target='blank'
            >
              <BsTwitterX size={20} />
            </a>
            <a
              href='https://www.instagram.com/_r1nozaki/?hl=ru'
              className='bg-yellow-100 w-8 h-8 flex justify-center items-center rounded-lg transition duration-300 easytransform hover:scale-110 hover:bg-pink-600 hover:text-white'
              target='blank'
            >
              <FiInstagram size={20} />
            </a>
            <a
              href='https://ru.pinterest.com/'
              className='bg-yellow-100 w-8 h-8 flex justify-center items-center rounded-lg transition duration-300 easy transform hover:scale-110 hover:bg-red-500 hover:text-white'
              target='blank'
            >
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
