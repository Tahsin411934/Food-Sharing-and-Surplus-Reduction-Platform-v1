import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hook/useAuth';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';


const UpdateFood = () => {
    const { user } = UseAuth();
    const food = useLoaderData()

   
    const [requestDate, setRequestDate] = useState('');
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        reset
    } = useForm();

    useEffect(() => {

        if (user) {
            setValue('user_email', user.email || '')
            setValue('food_name', food.food_name || '');
            setValue('food_image', food.food_image || '');
            setValue('food_id', food._id || '');
            setValue('pickup_location', food.pickup_location || '');
            setValue('expired_datetime', food.expired_datetime || '');
            setValue('additional_notes', food.additional_notes || '');
            setValue('Food_Status', food.Food_Status || '');
            setValue('Discount', food.Discount || '');
            setValue('food_quantity', food.food_quantity || '');

        }
        setRequestDate(new Date().toISOString().slice(0, 10));
    }, [user, setValue]);

    const onSubmit = (data) => {


        axios.put(`https://food-sharing-website-server-beta.vercel.app/Food/${food._id}`, data, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => {
                const responseData = response.data;
                if (responseData.error) {
                    // If there is an error, show SweetAlert2 error message
                    Swal.fire({
                        title: 'Error!',
                        text: responseData.error,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                } else {
                    // If successful, show success message
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });

                }
            })
            .catch(error => {
                console.error('Error updating tourist spot:', error);
                // If there is an error, show SweetAlert2 error message
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update tourist spot. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            });


    };
    return (
        <div>
            <Helmet>
        <title>PlateSwap | UpdateFood</title>
      </Helmet>
            <div className="pt-5 mb-5">
                <div className='lg:w-[50%] shadow-2xl mx-auto p-10 '>
                    <h1 className='text-center mb-3 text-[#218b31] font-Prata italic font-bold text-2xl'>Update Your Food</h1>
                    <h1 className='text-center mb-3 text-[#218b31] font-Montserrat text-sm'>Food Id :  {food._id}</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='lg:flex items-center gap-3'>
                            <div className='form-control w-[100%]'>
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" placeholder="Food Name" className="input input-bordered" {...register('food_name', { required: 'Food Name is required' })} required />
                                {errors.food_name && (
                                    <p className="text-red-500 ml-1">{errors.food_name.message}</p>
                                )}
                            </div>

                            <div className="form-control w-[100%]">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="number" placeholder="Food Quantity" className="input input-bordered" {...register('food_quantity', { required: 'Food Quantity is required' })} required />
                                {errors.food_quantity && (
                                    <p className="text-red-500 ml-1">{errors.food_quantity.message}</p>
                                )}
                            </div>

                        </div>



                        <div className='lg:flex items-center gap-3'>
                        <div className="form-control w-[100%]">
                            <label className="label">
                                <span className="label-text">Pickup Location</span>
                            </label>
                            <input type="text" placeholder="Pickup Location" className="input input-bordered" {...register('pickup_location', { required: 'Pickup Location is required' })} required />
                            {errors.pickup_location && (
                                <p className="text-red-500 ml-1">{errors.pickup_location.message}</p>
                            )}
                        </div>
                        <div className="form-control w-[100%]">
                            <label className="label">
                                <span className="label-text">Expired Date/Time</span>
                            </label>
                            <input type="datetime-local" className="input input-bordered" {...register('expired_datetime', { required: 'Expired Date/Time is required' })} required />
                            {errors.expired_datetime && (
                                <p className="text-red-500 ml-1">{errors.expired_datetime.message}</p>
                            )}
                        </div>

                        </div>


                        <div className='lg:flex items-center gap-3'>
                        <div className="form-control w-[100%]">
                            <label className="label">
                                <span className="label-text">Discount %</span>
                            </label>
                            <input type='number' placeholder="Discount" className="input input-bordered" {...register('Discount')} />
                        </div>

                        <div className="form-control w-[100%] ">
                            <label className="label">
                                <span className="label-text">Food Status</span>
                            </label>
                            <input type="text" placeholder="Food Status" className="input input-bordered" {...register('Food_Status')} />
                        </div>

                        </div>

                        <div className="form-control w-[100%]">
                            <label className="label">
                                <span className="label-text">Food Image URL</span>
                            </label>
                            <input type="text" placeholder="Food Image URL" className="input input-bordered" {...register('food_image', { required: 'Food Image URL is required' })} required />
                            {errors.food_image && (
                                <p className="text-red-500 ml-1">{errors.food_image.message}</p>
                            )}
                        </div>


                        <div className="form-control w-[100%]">
                            <label className="label">
                                <span className="label-text">Additional Notes</span>
                            </label>
                            <textarea placeholder="Additional Notes" className="textarea textarea-bordered" {...register('additional_notes')} />
                        </div>




                        <div className="form-control w-[100%] ">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input disabled type="email" placeholder="User Email" className="input input-bordered" {...register('user_email')} />
                        </div>




                        <div className="w-full flex justify-center mt-5">
                            <button type='submit' className="btn bg-[#218b31] hover:bg-[#084711] text-base text-[#fff]">
                               Update Your Food
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;