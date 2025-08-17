import Banner from '../components/Banner';
import PopularRecipe from '../components/Recipes/PopularRecipe';
import RecipesSection from '../components/Recipes/RecentRecipesSection';

import bgBanner from '../assets/bgBanner.png';

const Recipes = () => {
  return (
    <>
      <Banner
        img={bgBanner}
        text={
          'Be inspired, cook with passion, and savor unforgettable moments at the table.'
        }
      />
      <PopularRecipe />
      <RecipesSection />
    </>
  );
};

export default Recipes;
