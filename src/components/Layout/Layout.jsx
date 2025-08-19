import { useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname.includes('/404');
  return (
    <>
      {!hideLayout && <Header />}
      {hideLayout ? children : <main className='pt-35'>{children}</main>}
      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
