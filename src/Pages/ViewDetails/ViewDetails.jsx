import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hook/useAuth';
import axios from 'axios';







const ViewDetails = () => {
    const { user } = UseAuth();
    const food = useLoaderData()
    
    const [requestDate, setRequestDate] = useState(new Date().toISOString().slice(0, 10));
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        reset
    } = useForm();

    useEffect(() => {
        setRequestDate(new Date().toISOString().slice(0, 10));
        if (user) {
            setValue('user_email', user.email || '');
            setValue('donator_email', food.donator_email || '');
            setValue('donator_name', food.donator_name || '');
            setValue('food_name', food.food_name || '');
            setValue('food_image', food.food_image || '');
            setValue('food_id', food._id || '');
            setValue('pickup_location', food.pickup_location || '');
            setValue('expired_datetime', food.expired_datetime || '');
            setValue('additional_notes', food.additional_notes || '');
            setValue('request_date', requestDate || '');
            setValue('Food_Status', 'requested' || '');
            setValue('food_quantity', food.food_quantity || '');

        }

    }, [user, setValue]);

    const onSubmit = (data) => {
// add to my request collection
        axios.post('https://food-sharing-website-server-beta.vercel.app/MyRequestFoods', data, {
            headers: {
                "Content-Type": 'Application/json'
            }
        })
            .then(response => console.log(response.data))


// update food status available to requestes
        axios.put(`https://food-sharing-website-server-beta.vercel.app/Food/${food._id}`, data, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                const responseData = response.data;
                if (responseData.error) {
                    Swal.fire({
                        title: 'Error!',
                        text: responseData.error,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                } else {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Requested successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }
            })
            .catch(error => {
                console.error('Error updating tourist spot:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to Food Request. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            });


    };



    return (
        <div className="font-Montserrat">
            <div className="container mx-auto font-display">
                <Helmet>
                    <title>plateSwap | View Details</title>
                </Helmet>
                <div className="">
                    <div className="hero-content flex-col gap-10 items-center  lg:flex-row">
                        <div className="  flex justify-center items-center  rounded-lg" style={{ backgroundColor: 'rgba(19, 19, 19, 0.05)' }}>
                            <img src={food.food_image} className="  h-[450px] rounded-lg " />
                        </div>
                        <div className="w-[100%] ">
                            <h1 className="text-2xl font-bold text-[#2F7955]">Donor Information:</h1>
                            <div className="ml-[13%]">
                                <h1 className="p-1 rounded-lg text-lg font-bold " >Donar Name: {food.donator_name} </h1>
                                <h1 className="p-1 rounded-lg text-lg font-bold  " >Food Pickup Location: {food.pickup_location}</h1>
                            </div>
                            <hr className=' mt-1 h-[1px] border-none bg-slate-200 mx-auto w-[100%] ' />
                            <h1 className="text-2xl font-bold text-[#2F7955]">Food Information:</h1>
                            <div className="ml-[13%]">
                                <h1 className="text-3xl font-bold">{food.food_name}</h1>
                                <h1 className="p-1 rounded-lg text-lg font-bold  ">Food Quantity: {food.food_quantity} </h1>
                                <h1 className="p-1 rounded-lg text-lg font-bold  -mt-2">Expired Date/Time: {food.pickup_location} </h1>
                            </div>

                            <div className="mx-auto w-36 mt-7">
                                <Link onClick={() => document.getElementById('my_modal_4').showModal()}  ><button className="btn px-5 bg-[#2F7955] hover:bg-[#084711] text-[#FFFFFF] ">Request</button></Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_4" className="modal pb-10">
                <div className="modal-box w-11/12 max-w-2xl bg-slate-200">
                    <div>
                        <div className="pt-5 mb-5">
                            <div className='lg:w-[100%] shadow-2xl mx-auto p-10  bg-[#ffffff] rounded-lg'>

                                <form onSubmit={handleSubmit(onSubmit)} >

                                    <div className="lg:flex items-center gap-3 ">
                                        <div className='form-control w-[80%]'>
                                            <label className="label">
                                                <span className="label-text">Food Name</span>
                                            </label>
                                            <input disabled type="text" placeholder="Food Name" className="input input-bordered" {...register('food_name', { required: 'Food Name is required' })} required />
                                            {errors.food_name && (
                                                <p className="text-red-500 ml-1">{errors.food_name.message}</p>
                                            )}
                                        </div>

                                        <div className="form-control w-[100%]">
                                            <label className="label">
                                                <span className="label-text">Food ID</span>
                                            </label>
                                            <input disabled type="text" placeholder="Food ID" className="input input-bordered" {...register('food_id', { required: 'ID is required' })} required />
                                            {errors._id && (
                                                <p className="text-red-500 ml-1">{errors._id.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:flex items-center gap-3 ">
                                        <div className="form-control w-[100%]">
                                            <label className="label">
                                                <span className="label-text">Food Image URL</span>
                                            </label>
                                            <input disabled type="text" placeholder="Food Image URL" className="input input-bordered" {...register('food_image', { required: 'Food Image URL is required' })} required />
                                            {errors.food_image && (
                                                <p className="text-red-500 ml-1">{errors.food_image.message}</p>
                                            )}
                                        </div>





                                        <div className="form-control w-[100%]">
                                            <label className="label">
                                                <span className="label-text">Food Quantity</span>
                                            </label>
                                            <input disabled type="text" placeholder="Food Quantity" className="input input-bordered" {...register('food_quantity', { required: 'ID is required' })} required />
                                            {errors.food_quantity && (
                                                <p className="text-red-500 ml-1">{errors.food_quantity.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:flex items-center gap-3 ">
                                    <div className="form-control w-[100%] ">
                                        <label className="label">
                                            <span className="label-text">Donator Email</span>
                                        </label>
                                        <input disabled type="email" placeholder="Donator Email" className="input input-bordered" {...register('donator_email')} />
                                    </div>

                                    <div className="form-control w-[100%] ">
                                        <label className="label">
                                            <span className="label-text">Donator Name</span>
                                        </label>
                                        <input disabled type="text" placeholder="Donator Name" className=" input input-bordered" {...register('donator_name')} />
                                    </div>

                                    </div>
                                    <div className="lg:flex items-center gap-3 ">
                                    <div className="form-control w-[100%] ">
                                        <label className="label">
                                            <span className="label-text">User Email</span>
                                        </label>
                                        <input disabled type="email" placeholder="User Email" className="input input-bordered" {...register('user_email')} />
                                    </div>

                                    <div className="form-control w-[100%]">
                                        <label className="label">
                                            <span className="label-text">Request Date</span>
                                        </label>
                                        <input disabled type="text" value={requestDate} className="input input-bordered" {...register('request_date')} />
                                    </div>

                                    </div>
                                    <div className="lg:flex items-center gap-3 ">
                                    <div className="form-control w-[100%]">
                                        <label className="label">
                                            <span className="label-text">Pickup Location</span>
                                        </label>
                                        <input disabled type="text" placeholder="Pickup Location" className="input input-bordered" {...register('pickup_location', { required: 'Pickup Location is required' })} required />
                                        {errors.pickup_location && (
                                            <p className="text-red-500 ml-1">{errors.pickup_location.message}</p>
                                        )}
                                    </div>
                                    <div className="form-control w-[100%]">
                                        <label className="label">
                                            <span className="label-text">Expired Date/Time</span>
                                        </label>
                                        <input disabled type="datetime-local" className="input input-bordered" {...register('expired_datetime', { required: 'Expired Date/Time is required' })} required />
                                        {errors.expired_datetime && (
                                            <p className="text-red-500 ml-1">{errors.expired_datetime.message}</p>
                                        )}
                                    </div>
                                    </div>

                                    <div className="form-control w-[100%]">
                                        <label className="label">
                                            <span className="label-text">Additional Notes</span>
                                        </label>
                                        <textarea placeholder="Additional Notes" className="textarea textarea-bordered" {...register('additional_notes')} />
                                    </div>

                                    <div className="form-control w-[100%] hidden">
                                        <label className="label">
                                            <span className="label-text">Food Status</span>
                                        </label>
                                        <input disabled type="text" placeholder="Food Status" className="input input-bordered" {...register('Food_Status')} />
                                    </div>







                                    <div className="w-full flex justify-center">
                                        <button onClick={() => document.getElementById('my_modal_4').close()} type='submit' className="btn px-5 bg-[#2F7955] hover:bg-[#084711] text-[#FFFFFF]">
                                            Request
                                        </button>

                                    </div>
                                    <form method="dialog" className="float-right  ">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn ">Close</button>
                                    </form>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </dialog>

        </div>
    );
};

export default ViewDetails;