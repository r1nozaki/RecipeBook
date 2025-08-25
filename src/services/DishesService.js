import { useHttp } from '../hooks/http.hook';

const DishesService = () => {
  const { request, clearError, process, setProcess } = useHttp();

  const _apiBase = 'https://api.spoonacular.com/recipes';
  const _apiKey = '50dff3684e8c4a23861b86b22ebace28';

  const getWaffles = async () => {
    const res = await request(
      `${_apiBase}/complexSearch?query=waffles&number=1&addRecipeInformation=true&apiKey=${_apiKey}`
    );
    return res.results.map(_transformDishCard);
  };

  const getPancakes = async () => {
    const res = await request(
      `${_apiBase}/complexSearch?query=pancakes&number=1&addRecipeInformation=true&apiKey=${_apiKey}`
    );
    return res.results.map(_transformDishCard);
  };

  const getHotChocolate = async () => {
    const res = await request(
      `${_apiBase}/complexSearch?query=hot%20chocolate&number=1&addRecipeInformation=true&apiKey=${_apiKey}`
    );
    return res.results.map(_transformDishCard);
  };

  const getRecipe = async id => {
    const res = await request(`${_apiBase}/${id}/information?apiKey=${_apiKey}`);

    return _transformRecipe(res);
  };

  const getSearchRecipe = async searchQuery => {
    const res = await request(
      `${_apiBase}/complexSearch?query=${encodeURIComponent(
        searchQuery
      )}&number=20&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&sort=popularity&apiKey=${_apiKey}`
    );
    return res.results.map(_transformSearchedRecipe);
  };

  const _transformDishCard = dish => {
    return {
      id: dish.id,
      image: dish.image,
      title: dish.title,
      content: dish.summary
        ? dish.summary.replace(/<[^>]+>/g, '').slice(0, 61) + '...'
        : 'No description available',
    };
  };

  const _transformRecipe = dish => {
    return {
      id: dish.id,
      image: dish.image,
      title: dish.title,
      ingredients: dish.extendedIngredients.map(dish => dish.original) || [],
      preparation: dish.analyzedInstructions?.[0]?.steps?.length
        ? dish.analyzedInstructions[0].steps.map(step => step.step)
        : dish.instructions
        ? [dish.instructions.replace(/<[^>]+>/g, '')]
        : ['No instructions found'],
    };
  };

  const _transformSearchedRecipe = dish => {
    return {
      id: dish.id,
      image: dish.image,
      title: dish.title,
      content: dish.summary
        ? dish.summary.replace(/<[^>]+>/g, '').slice(0, 151) + '...'
        : 'No description available',
    };
  };

  return {
    clearError,
    process,
    setProcess,
    getWaffles,
    getPancakes,
    getHotChocolate,
    getRecipe,
    getSearchRecipe,
  };
};

export default DishesService;
