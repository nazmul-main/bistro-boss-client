import Category from "../../Components/Category/Category";
import Feature from "../../Components/Feature/Feature";
import TestiMonials from "../../Components/TestiMonials/TestiMonials";
import Banner from "./Banner.jsx/Banner";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <TestiMonials></TestiMonials>
        </div>
    );
};

export default Home;