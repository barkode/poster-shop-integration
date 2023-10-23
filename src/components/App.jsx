import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/HomePage/Home';
import Categories from 'pages/CategoriesPage/Categories';
import Favorites from 'pages/FavoritesPage/Favorites';
import Shopping from 'pages/ShoppingPage/Shopping';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/categories' element={<Categories/> }/>
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='/shopping-card' element={<Shopping/>}/>
          <Route path='*' />
        </Route>
      </Routes>
  );
};

export default App;