import { useQuery } from "@tanstack/react-query";
import FeaturedFood from "./FeaturedFood";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const FeaturedFoods = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['AvailableFood'],
        queryFn: async () => {
            const res = await fetch('https://food-sharing-website-server-beta.vercel.app/Food/available' , {Credentials: true});
            return res.json();
        },
    });

    if (isLoading) return <button type="button" className="bg-indigo-500 mt-52 w-20  ..." disabled>
        <svg className="animate-spin h-5 w-10 mr-3 ..." viewBox="0 0 24 24">
       
        </svg>
        Processing...
    </button>;
    if (error) return <div>Error: {error.message}</div>;
   


    return (
        <div className="mt-52">
            <h1 className="lg:w-[30%] text-4xl mx-auto font-Prata font-bold ">Order food online in</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  container mx-auto  justify-around  ">
                {
                    data?.slice(0, 9).map(Featuredfood => <FeaturedFood key={Featuredfood._id} FeaturedFood={Featuredfood}></FeaturedFood>)
                }
            </div>
            <div className="float-end w-60 mt-3 container mx-auto">
                <Link to={`/AvailableFoods`} ><button className="mx-auto border border-[#084711] w-44  btn mb-10 px-5  hover:bg-[#65d877] text-[#218b31] font-Montserrat text-base">See More <FaArrowRight /></button></Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;
