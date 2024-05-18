import Faq from "../Pages/FAQ/Faq";
import FeaturedFoods from "../Pages/FeaturedFoods/FeaturedFoods";
import Home from "../Pages/Home/Home";
import InspirationForYourFirstOrder from "../Pages/InspirationforyourFirstOrder/InspirationForYourFirstOrder";


const HomeLayout = () => {
    return (
        <div>
            <Home/>
            <FeaturedFoods/>
            <InspirationForYourFirstOrder/>
            <Faq/>
        </div>
    );
};

export default HomeLayout;