import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import setContent from '../../utils/setContent';
import DishesService from '../../services/DishesService';
import Banner from '../Banner';
import { FaArrowLeftLong } from 'react-icons/fa6';

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { process, setProcess, getRecipe } = DishesService();
  const [recipe, setRecipe] = useState({
    id: null,
    image: '',
    title: '',
    ingredients: [],
    preparation: '',
  });

  useEffect(() => {
    getRecipe(id)
      .then(data => setRecipe(data))
      .catch(() => {
        setProcess('error');
      });
  }, [id]);

  return (
    <section className='min-h-screen'>
      {setContent(process, () => (
        <>
          <Banner img={recipe.image} text={recipe.title} />

          <div className='px-6 md:px-20 py-12 bg-gray-50'>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8'>
              {/* Ingredients */}
              <div>
                <h2 className='mb-5 font-bold text-2xl border-b pb-2'>Ingredients</h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              {/* Preparation */}
              <div className='mt-10'>
                <h2 className='mb-5 font-bold text-2xl border-b pb-2'>Preparation</h2>
                <ol className='list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed'>
                  {recipe.preparation.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </>
      ))}
      <div className='mt-10 pl-32'>
        <div
          onClick={() => navigate(-1)}
          className='flex gap-2 items-center text-lg text-semibold hover:cursor-pointer transition transform duration-300 easy-in-out hover:scale-110 w-40'
        >
          <FaArrowLeftLong size={20} /> Back to recipes
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
