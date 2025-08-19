import { useState, useEffect } from 'react';
import RecentDishCard from './RecentDishCard';

const RecipesSection = () => {
  const [recentRecipes, setRecentRecipes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('recentDish')) || [];
    setRecentRecipes(saved);
  }, []);

  return (
    <section className='min-h-screen mt-33'>
      <h1 className='text-4xl font-bold w-90 block mx-auto text-center'>
        Recent Recipes
      </h1>
      <div className='flex flex-col w-full px-32 justify-center items-center pt-16 gap-6 mb-29'>
        {recentRecipes.length > 0 ? (
          recentRecipes.map(dish => (
            <RecentDishCard
              key={dish.id}
              id={dish.id}
              image={dish.image}
              title={dish.title}
              content={dish.content}
            />
          ))
        ) : (
          <div className='w-100 text-center mx-auto text-3xl'>
            Not found recent recipes!
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipesSection;
