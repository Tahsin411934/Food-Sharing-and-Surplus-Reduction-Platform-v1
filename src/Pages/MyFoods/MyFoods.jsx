import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { MdDelete, MdOutlineSecurityUpdate } from "react-icons/md";
import axios from 'axios';
import Swal from "sweetalert2";
import { useState } from "react";
import { Tooltip } from 'react-tooltip'
const MyFoods = () => {
    const foods = useLoaderData();
    const [MyAddedFood, setMyAddedFood] = useState(foods);
    const handleDlt = (_id) => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://food-sharing-website-server-beta.vercel.app/Food/${_id}`)
                    .then(response => {
                       
                        if (response.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Food Item has been deleted.",
                                icon: "success",
                            });
                            const remaining = MyAddedFood.filter(SingleAddedFood => SingleAddedFood._id !== _id);
                            setMyAddedFood(remaining);
                        }
                    })
                    .catch(error => {
                        console.error("Error occurred while deleting:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete your Food Item.",
                            icon: "error",
                        });
                    });
            }
        });
    };









    return (
        <div>
            <div className="container bg-[#FFFFFF] mt-5 mx-auto mb-10 shadow-xl w-[96%] p-5 rounded-2xl">
                <Helmet>
                    <title>PlateSwap | My Food</title>
                </Helmet>
                <h1 className="text-center font-Prata text-[#218b31] text-2xl font-bold italic mt-10 mb-10 lg:w-[95%] mx-auto">
                    My Foods
                    <h1 className="text-xs text-[#424242] font-normal mt-1">you can Edit Your  <span className=" font-bold text-[#218b31]">Food Item</span> <span className="font-bold"></span>  </h1>
                </h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-base text-[#218b31]">
                            <tr>
                                <th>Food Name</th>
                                <th>Food Quantity</th>
                                <th>Expired Datetime</th>
                                <th>pickup Location</th>
                                <th>Food Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            MyAddedFood.map(foods => (
                                <tbody key={foods._id}>
                                    <tr>
                                        <td>{foods.food_name}</td>
                                        <td>{foods.food_quantity}</td>
                                        <td>{foods.expired_datetime}</td>
                                        <td>{foods.pickup_location}</td>
                                        <td>{foods.Food_Status}</td>
                                        <td>
                                            <div className="flex gap-7">

                                                <Link to={`/MyFoods/request/${foods._id}`} data-tooltip-id="my-tooltip" data-tooltip-content="Update">
                                                    <p className="text-[#218b31]">
                                                        <i >
                                                            <MdOutlineSecurityUpdate size={24} />
                                                        </i>
                                                    </p>
                                                </Link>
                                                <button data-tooltip-id="my-tooltip" data-tooltip-content="Delete" onClick={() => handleDlt(foods._id)} className="text-red-500"> <MdDelete size={24} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
            
        </div>
    );
};

export default MyFoods;