import { useState, useEffect } from 'react';
import DishesService from '../../services/DishesService';
import setContent from '../../utils/setContent';
import DishCard from './DishCard';

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const { getWaffles, getPancakes, getHotChocolate, process, setProcess } =
    DishesService();

  useEffect(() => {
    setProcess('loading');
    Promise.all([getWaffles(), getPancakes(), getHotChocolate()])
      .then(dataArrays => {
        const merged = dataArrays.flat();
        setRecipes(merged);
        setProcess('confirmed');
      })
      .catch(() => {
        setProcess('error');
      });
  }, []);

  return (
    <section className='w-full px-19.5 pt-22.5 pb-24'>
      <h1 className='mx-auto block w-90 text-center font-bold text-4xl'>
        Most popular recipes
      </h1>

      {setContent(process, () => (
        <div className='grid grid-cols-3 mt-14.5 justify-center place-items-center gap-6'>
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
