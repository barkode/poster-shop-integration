import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div>
        <h1>Products</h1>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Products;
