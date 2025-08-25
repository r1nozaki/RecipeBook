import { useState, useEffect } from 'react';
import RecentDishCard from '../Recipes/RecentDishCard';
import DishesService from '../../services/DishesService';
import setContent from '../../utils/setContent';

const SearchSection = ({ searchQuery }) => {
  const [searchResult, setSearchResult] = useState([]);

  const { process, setProcess, getSearchRecipe } = DishesService();
  useEffect(() => {
    if (!searchQuery) {
      return (
        <div className='min-h-screen flex items-center justify-center text-2xl'>
          Введіть пошуковий запит 🔎
        </div>
      );
    }

    setProcess('loading');
    getSearchRecipe(searchQuery)
      .then(data => {
        setSearchResult(data);
        setProcess('confirmed');
      })
      .catch(() => {
        setProcess('error');
      });
  }, [searchQuery]);

  return (
    <section className='min-h-screen'>
      {setContent(process, () => (
        <div className='flex flex-col gap-6 w-full px-32 justify-center items-center mt-16 mb-29'>
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
