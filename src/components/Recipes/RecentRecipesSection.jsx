import { useState, useEffect } from 'react';
import DishesService from '../../services/DishesService';
import setContent from '../../utils/setContent';
import RecentDishCard from './RecentDishCard';

const RecipesSection = () => {
  const [recentRecipes, setRecentRecipes] = useState([]);
  const { process, setProcess } = DishesService();

  return (
    <section className='min-h-screen mt-33'>
      <h1 className='text-4xl font-bold w-90 block mx-auto text-center'>
        Recent Recipes
      </h1>
      <div className='flex-col w-full px-32 justify-center items-center'></div>
    </section>
  );
};

export default RecipesSection;
