// import Hero from 'components/Hero/Hero';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <h1>Головна</h1>
        {/* <Hero /> */}
      </div>
    </>
  );
};

export default Home;
