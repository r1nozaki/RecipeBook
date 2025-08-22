import { useSearchParams } from 'react-router';
import SearchSection from '../components/Search/SearchSection';
import Banner from '../components/Banner';

import bgBanner from '../assets/bgBanner.png';

const SearchResult = () => {
  const [params] = useSearchParams();
  const searchQuery = params.get('query') || '';
  return (
    <>
      <Banner img={bgBanner} text={'Search results!'} />
      <SearchSection searchQuery={searchQuery} />
    </>
  );
};

export default SearchResult;
