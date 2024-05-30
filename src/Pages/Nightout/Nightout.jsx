import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Nightout = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="container mx-auto">
            <div className="text-center mb-20">
                <div className="text-3xl font-bold font-Prata">NightOut Collection</div>
                <div>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</div>
            </div>
            <div className="grid grid-cols-4 gap-3">
            {items.map(item => (
                <div key={item.id} className="max-w-xs pt-4 shadow-md dark:bg-gray-50 dark:text-gray-800 relative">
                    <div className="space-y-4">
                        <motion.img
                            src={item.image}
                            alt=""
                            className="block object-cover object-center w-full rounded-md h-96 dark:bg-gray-500 transition-transform duration-300 hover:z-0"
                        />
                        <div className="bg-transparent hover:bg-[#418360] absolute inset-0 rounded-md transition-colors duration-300 hover:opacity-85 "></div>
                        <div className="flex items-center text-xs absolute top-[50%] text-[#FFFFFF] left-[30%] z-10">
                            <h1 className="text-xl font-bold font-Prata">{item.spot_name}</h1> <br/>
                           
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Nightout;
