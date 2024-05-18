import { animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion"

const MyFoodRequest = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))

    const foods = useLoaderData();
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [lastRequestDate, setLastRequestDate] = useState("");

    useEffect(() => {
        const controls = animate(count, foods.length)
      
        return () => controls.stop()
      }, [])

   
    useEffect(() => {

        const sum = foods.reduce((total, food) => total + parseInt(food.food_quantity), 0);
        setTotalQuantity(sum);

        const requestDates = foods.map((food) => new Date(food.request_date));
        const lastDate = new Date(Math.max.apply(null, requestDates));
        setLastRequestDate(lastDate.toLocaleDateString());
    }, [foods]);

    return (
        <div className="container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-800 dark:bg-gray-50">

            <Helmet>
                <title>PlateSwap | My Requested Food</title>
            </Helmet>

            <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3 lg:w-[70%]">

                    <div className="shadow-[#218b31] shadow-2xl flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-100">
                                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none"><motion.div>{rounded}</motion.div></p>
                            <p className="capitalize">Total Request Food</p>
                        </div>
                    </div>
                    <div className="shadow-[#218b31] shadow-2xl flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-100">
                                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                                <rect width="32" height="32" x="80" y="264"></rect>
                                <rect width="32" height="32" x="240" y="128"></rect>
                                <rect width="32" height="32" x="136" y="168"></rect>
                                <rect width="32" height="32" x="400" y="264"></rect>
                                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{totalQuantity}</p>
                            <p className="capitalize">Total Quantity</p>
                        </div>
                    </div>
                    <div className="shadow-[#218b31] shadow-2xl flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-100">
                                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{lastRequestDate}</p>
                            <p className="capitalize">Last Requested </p>
                        </div>
                    </div>
                </div>
            </section>




            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="rounded-t-lg dark:bg-gray-300">
                        <tr className="text-right text-normal text-[#218b31]">
                            <th title="Ranking" className="p-3 text-left">#</th>
                            <th title="Team name" className="p-3 text-left">Food Image | Name</th>
                            <th title="Wins" className="p-3">Food Id</th>
                            <th title="Losses" className="p-3">Food Quantity</th>
                            <th title="Win percentage" className="p-3">donator_name</th>
                            <th title="Games behind" className="p-3">donator_email</th>
                            <th title="Home games" className="p-3">
                                request_date</th>
                            <th title="Away games" className="p-3">
                                pickup_location</th>
                            <th title="Last 10 games" className="p-3">
                                expired_datetime</th>
                            <th title="Current streak" className="p-3">
                                additional_notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((food, index) => (

                            <tr key={index} className="text-right border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-100">
                                <td className="px-3 py-2 text-left">
                                    <span>{index + 1}</span>

                                </td>

                                <td className="px-3 py-2 text-left flex items-center gap-2">
                                    <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100" src={food.food_image} />
                                    <span className="font-bold">{food.food_name}</span>
                                </td>
                                <td className="px-3 py-2">
                                    <span>{food.food_id}</span>
                                </td>
                                <td className="px-3 py-2">
                                    <span>{food.food_quantity}</span>
                                </td>
                                <td className="px-3 py-2">
                                    <span>{food.donator_name}</span>
                                </td>
                                <td className="px-3 py-2 text-right">
                                    <span>{food.donator_email}</span>
                                </td>
                                <td className="px-3 py-2">
                                    <span>{food.request_date}</span>
                                </td>
                                <td className="px-3 py-2">
                                    <span>{food.pickup_location}</span>
                                </td>
                                <td className="px-3 py-2">
                                    <span>{food.expired_datetime}</span>
                                </td>
                                <td className="px-3 py-2">
                                    <span>{food.additional_notes}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;
