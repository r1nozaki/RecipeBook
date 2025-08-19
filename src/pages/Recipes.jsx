import Banner from '../components/Banner';
import PopularRecipe from '../components/Recipes/PopularRecipe';
import RecipesSection from '../components/Recipes/RecentRecipesSection';
import ScrollToTopBtn from '../components/ScollToTop/ScrollToTopBtn';

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
      <ScrollToTopBtn />
    </>
  );
};

export default Recipes;
