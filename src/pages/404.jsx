import { Link } from 'react-router';
import Plate from '../assets/Plate.png';
import bg404 from '../assets/bg404.png';
import number404 from '../assets/number404.png';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Page404 = () => {
  return (
    <section
      className='min-h-screen'
      style={{
        backgroundImage: `url(${bg404})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=' relative'>
        <img src={number404} alt='404' />
        <div className='flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <img src={Plate} alt='plate' />
          <span className='text-5xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            Page not found
          </span>

          <Link to='/'>
            {
              <div className='absolute top-120 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-yellow-300 rounded-lg mt-6 text-white p-3 transition duration-300 easy-in-out transform hover:scale-105 hover:cursor-pointer'>
                <span>Go to home</span>
                <FaLongArrowAltRight />
              </div>
            }
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page404;
