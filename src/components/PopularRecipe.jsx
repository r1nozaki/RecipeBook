import DishesItem from './DishesItem';

const PopularRecipe = () => {
  return (
    <section className='w-full px-19.5 pt-22.5 pb-24'>
      <h1 className='mx-auto block w-60 text-bold text-4xl'>Recent recipes</h1>
      <div className='grid grid-cols-3 mt-14.5'></div>
    </section>
  );
};

export default PopularRecipe;
