import Banner from '../components/Banner';
import PopularRecipe from '../components/Recipes/PopularRecipe';
import ScrollToTopBtn from '../components/ScollToTop/ScrollToTopBtn';

import bgBanner from '../assets/bgBanner.png';

const HomePage = () => {
  return (
    <>
      <Banner
        img={bgBanner}
        text={
          'Be inspired, cook with passion, and savor unforgettable moments at the table.'
        }
      />
      <PopularRecipe />
      <ScrollToTopBtn />
    </>
  );
};

export default HomePage;
