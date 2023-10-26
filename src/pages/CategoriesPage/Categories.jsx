import Hero from "components/Hero/Hero";
import { Helmet } from "react-helmet";

const Categories = () => {
    return (
        <>
        <Helmet>
            <title>Categories</title>
        </Helmet>
        <div>
            <h1>Categories</h1>
            <Hero />
        </div>
        </>
    );
}

export default Categories;