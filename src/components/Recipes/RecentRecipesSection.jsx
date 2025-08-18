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
      <div className='flex-col w-full px-32 justify-center items-center'>
        {recentRecipes.map(dish => (
          <RecentDishCard
            key={dish.id}
            id={dish.id}
            image={dish.image}
            title={dish.title}
            content={dish.content}
          />
        ))}
      </div>
    </section>
  );
};

export default RecipesSection;
