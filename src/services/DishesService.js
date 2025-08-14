import { useHttp } from '../hooks/http.hook';

const DishesService = () => {
  const { request, clearError, process, setProcess } = useHttp();

  const _apiBase = 'https://api.spoonacular.com/recipes/complexSearch';
  const _apiKey = '50dff3684e8c4a23861b86b22ebace28';

  const getWaffles = async () => {
    const res = await request(
      `${_apiBase}?query=waffles&number=1&addRecipeInformation=true&apiKey=${_apiKey}`
    );
    return res.results.map(_transformDishCard);
  };

  const getPancakes = async () => {
    const res = await request(
      `${_apiBase}?query=pancakes&number=1&addRecipeInformation=true&apiKey=${_apiKey}`
    );
    return res.results.map(_transformDishCard);
  };

  const getHotChocolate = async () => {
    const res = await request(
      `${_apiBase}?query=hot%20chocolate&number=1&addRecipeInformation=true&apiKey=${_apiKey}`
    );
    return res.results.map(_transformDishCard);
  };

  const _transformDishCard = dish => {
    return {
      id: dish.id,
      image: dish.image,
      title: dish.title,
      content: dish.summary.replace(/<[^>]+>/g, '').slice(0, 101) + '...',
    };
  };

  return { clearError, process, setProcess, getWaffles, getPancakes, getHotChocolate };
};

export default DishesService;
