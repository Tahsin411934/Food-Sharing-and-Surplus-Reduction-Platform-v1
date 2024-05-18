import { useLoaderData } from "react-router-dom";
import AvailableFood from "./AvailableFood";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const AvailableFoods = () => {

    const AllAvailableFood = useLoaderData();
    const [layout, setLayout] = useState(true);
    const [sort, setSort] = useState('');
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredFoods, setFilteredFoods] = useState([]);


    useEffect(() => {
        const LocalLayout = localStorage.getItem('layout');
        if (LocalLayout) {
            setLayout(JSON.parse(LocalLayout));
        }
    }, []);

// ChangeLayout functionality
    const ChangeLayout = () => {
        const element = document.getElementById("changeLayout");
        setLayout(!layout);
        localStorage.setItem('layout', !layout);
        if (!layout) {
            element.classList.remove('grid-cols-2');
            element.classList.add('grid-cols-3');
        } else {
            element.classList.remove('grid-cols-3');
            element.classList.add('grid-cols-2');
        }
    };

// handleSortByDate
    const handleSortByDate = (e) => {
        const selectedSort = e.target.value;
        setSort(selectedSort);
    };

    useEffect(() => {
        const sortedFoods = AllAvailableFood.slice().sort((a, b) => {
            if (sort === 'ascending') {
                return new Date(a.expired_datetime) - new Date(b.expired_datetime);
            } else {
                return new Date(b.expired_datetime) - new Date(a.expired_datetime);
            }
        });
        setFilteredFoods(sortedFoods);
    }, [sort, AllAvailableFood]);


// Search functionality
    useEffect(() => {
        if (searchQuery === "") {
            setFilteredFoods(AllAvailableFood);
        } else {
            const filteredAvailableFoods = AllAvailableFood.filter(food => {
                return food.food_name.toLowerCase().includes(searchQuery.toLowerCase());
            });
            setFilteredFoods(filteredAvailableFoods);
        }
    }, [searchQuery, AllAvailableFood]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="font-Montserrat">
            <Helmet>
                <title>PlateSwap | AvailableFoods</title>
            </Helmet>
            <div className="lg:w-[60%] w-[90] h-20 rounded-lg text-[#FFFFFF] bg-[#2F7955] mx-auto">
                <div className="mx-auto w-[500px] pt-4">
                    <ul className="flex items-center gap-10 ">
                        <li> <select className="btn bg-[#2F7955] border-none hover:bg-[#122e20] text-[#FFFFFF]" id="sort" value={sort} onChange={handleSortByDate}>
                            <option disabled value="">Sort by: EP Date</option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select></li>

                        <li onClick={ChangeLayout} className="btn bg-[#2F7955] border-none hover:bg-[#122e20] text-[#FFFFFF]"><a href="#">Layout</a></li>
                        <li>
                            <fieldset className="w-full text-black space-y-1 dark:text-gray-800">
                                <label htmlFor="Search" className="hidden">Search</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                            </svg>
                                        </button>
                                    </span>
                                    <input onChange={handleSearch} type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                                </div>
                            </fieldset>
                        </li>
                    </ul>
                </div>
            </div>
            <h1 className="mt-10 w-[30%] text-4xl mx-auto font-Prata font-bold ">Order food online in</h1>
            <div id="changeLayout" className={layout ? "lg:grid grid-cols-3 container mx-auto" : "lg:grid grid-cols-2 container mx-auto"}>
                {filteredFoods.map(availableFood => <AvailableFood key={availableFood._id} availableFood={availableFood}></AvailableFood>)}
            </div>
        </div>
    );
};

export default AvailableFoods;
