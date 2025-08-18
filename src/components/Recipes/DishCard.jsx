import { useNavigate } from 'react-router';
import { addRecentRecipe } from '../../utils/addRecentRecipe';
const DishCard = ({ id, image, title, content }) => {
  const navigate = useNavigate();

  const seeRecipe = () => {
    addRecentRecipe({ id, image, title, content }, navigate);
  };

  return (
    <div className='w-101 h-118.5 rounded-xl bg-[#F5F2F2]'>
      <div className='w-full h-53'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover rounded-t-xl'
        />
      </div>
      <div className='px-9.5 pt-7.5 pb-12'>
        <h2 className='text-2xl font-bold h-15 mb-3'>{title}</h2>
        <p className='text-lg w-82'>{content}</p>
        <button
          onClick={seeRecipe}
          className='w-45 h-10 rounded-xl bg-yellow-300 text-center mt-12 text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400 hover:cursor-pointer'
        >
          See recipe
        </button>
      </div>
    </div>
  );
};

export default DishCard;
