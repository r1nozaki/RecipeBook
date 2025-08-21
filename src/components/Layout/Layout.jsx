import { useLocation } from 'react-router';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname.includes('/404');

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      {!hideLayout && <Header setSearchQuery={setSearchQuery} />}
      {hideLayout ? (
        children
      ) : (
        <main className='pt-35'>
          {typeof children === 'function' ? children({ searchQuery }) : children}
        </main>
      )}
      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
