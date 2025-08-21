import SearchSection from '../components/Search/SearchSection';
import Banner from '../components/Banner';

import bgBanner from '../assets/bgBanner.png';
const SearchResult = () => {
  return (
    <>
      <Banner img={bgBanner} text={'Search results!'} />
      <SearchSection />
    </>
  );
};

export default SearchResult;
