import Hero from "components/Hero/Hero";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div>
        <Hero />
        </div>
        </>
    );
    };

export default Home;