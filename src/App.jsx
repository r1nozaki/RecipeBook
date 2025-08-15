import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Page404 from './pages/404';

import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
