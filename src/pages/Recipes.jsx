import Banner from '../components/Banner';
import PopularRecipe from '../components/PopularRecipes/PopularRecipe';
import RecipesSection from '../components/RecentRecipes/RecentRecipesSection';

const Recipes = () => {
  return (
    <>
      <Banner />
      <PopularRecipe />
      <RecipesSection />
    </>
  );
};

export default Recipes;
