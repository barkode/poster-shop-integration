import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/HomePage/Home';
import Categories from 'pages/CategoriesPage/Categories';
import Favorites from 'pages/FavoritesPage/Favorites';
import Shopping from 'pages/ShoppingPage/Shopping';
import Products from 'pages/ProductsPage/Products';
import About from 'pages/AboutPage/About';
import Contacts from 'pages/ContactsPage/Contacts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shopping-card" element={<Shopping />} />
        <Route path="*" />
      </Route>
    </Routes>
  );
};

export default App;
