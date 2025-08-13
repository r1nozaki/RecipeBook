import { useState, useEffect } from 'react';
import DishesService from '../services/DishesService';
import setContent from '../utils/setContent';
import DishCard from './DishCard';

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const { getPopularRecipes, process, setProcess } = DishesService();

  useEffect(() => {
    getPopularRecipes().then(data => {
      setRecipes(data);
    });
  }, []);

  return (
    <section className='w-full px-19.5 pt-22.5 pb-24'>
      <h1 className='mx-auto block w-60 text-bold text-4xl'>Recent recipes</h1>

      {setContent(process, () => (
        <div className='grid grid-cols-3 mt-14.5'>
          {recipes.map(dish => (
            <DishCard
              key={dish.id}
              id={dish.id}
              image={dish.image}
              title={dish.title}
              content={dish.content}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default PopularRecipe;
