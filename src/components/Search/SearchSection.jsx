import { useState, useEffect } from 'react';
import RecentDishCard from '../Recipes/RecentDishCard';
import DishesService from '../../services/DishesService';
import setContent from '../../utils/setContent';

const SearchSection = ({ searchQuery }) => {
  const [searchResult, setSearchResult] = useState([]);
  const { process, getSearchRecipe } = DishesService();
  useEffect(() => {
    if (!searchQuery) return;

    getSearchRecipe(searchQuery).then(data => {
      setSearchResult(data);
    });
  }, [searchQuery]);

  return (
    <section className='min-h-screen'>
      {setContent(process, () => (
        <div className='flex flex-col gap-6 w-full px-32 justify-center items-center'>
          {searchResult.length > 0 ? (
            searchResult.map(searchDish => (
              <RecentDishCard
                key={searchDish.id}
                id={searchDish.id}
                image={searchDish.image}
                title={searchDish.title}
                content={searchDish.content}
              />
            ))
          ) : (
            <div className='w-100 text-center mx-auto text-3xl'>Not found recipes!</div>
          )}
        </div>
      ))}
    </section>
  );
};

export default SearchSection;
