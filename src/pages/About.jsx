import Banner from '../components/Banner';
import AboutUS from '../components/AboutUs';
import ScrollToTopBtn from '../components/ScollToTop/ScrollToTopBtn';
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
      <ScrollToTopBtn />
    </>
  );
};

export default About;
