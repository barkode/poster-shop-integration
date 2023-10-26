import data from '../data/products';
import categories from '../data/categories';

export const fetchProducts = async () => {
  try {
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Помилка завантаження даних');
  }
};

export const fetchCategories = async () => {
  try {
   console.log(categories);
    return categories; 
  }
  catch (error) {
    throw new Error('Помилка завантаження даних');
  }

}

