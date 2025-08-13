import { useHttp } from '../hooks/http.hook';

const DishesService = () => {
  const { request, clearError, process, setProcess } = useHttp();

  const _apiBase = 'https://api.spoonacular.com/recipes/complexSearch';
  const _apiKey = 'de21ebb523954e5dbdf00001b6429765';

  const getPopularRecipes = async () => {
    const res = await request(
      `${_apiBase}?query=waffles,pancakes,hot%20chocolate&number=9&addRecipeInformation=true&apiKey=${_apiKey}`
    );
    return res.results.map(_transformDishCard);
  };

  const _transformDishCard = dish => {
    return {
      id: dish.id,
      image: dish.image,
      title: dish.title,
      content: dish.summary.replace(/<[^>]+>/g, ''),
    };
  };

  return { clearError, process, setProcess, getPopularRecipes };
};

export default DishesService;
