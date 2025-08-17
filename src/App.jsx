import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Recipes from './pages/Recipes';
import About from './pages/About';
import RecipeDish from './pages/RecipeDish';
import Page404 from './pages/404';

import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/about' element={<About />} />
          <Route path='/recipes/:id' element={<RecipeDish />} />
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
