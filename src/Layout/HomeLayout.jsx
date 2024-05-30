import Faq from "../Pages/FAQ/Faq";
import FeaturedFoods from "../Pages/FeaturedFoods/FeaturedFoods";
import Home from "../Pages/Home/Home";
import InspirationForYourFirstOrder from "../Pages/InspirationforyourFirstOrder/InspirationForYourFirstOrder";
import Nightout from "../Pages/Nightout/Nightout";


const HomeLayout = () => {
    return (
        <div>
            <Home/>
            <FeaturedFoods/>
            <InspirationForYourFirstOrder/>
            <Nightout/>
            <Faq/>
        </div>
    );
};

export default HomeLayout;