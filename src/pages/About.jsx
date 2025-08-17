import Banner from '../components/Banner';
import AboutUS from '../components/AboutUs';

import bgBanner from '../assets/bgBanner.png';

const About = () => {
  return (
    <>
      <Banner
        img={bgBanner}
        text={
          'Be inspired, cook with passion, and savor unforgettable moments at the table.'
        }
      />
      <AboutUS />
    </>
  );
};

export default About;
