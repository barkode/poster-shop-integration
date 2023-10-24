import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Favorites = () => {
  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <div>
        <h1>Favorites</h1>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Favorites;
