import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hook/useAuth'; // Assuming UseAuth hook provides user information
import { Helmet } from 'react-helmet';
import axios from 'axios';

const AddFood = () => {
  const { user } = UseAuth();
//hook from 
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue('donator_image', user.photoURL || '');
      setValue('donator_name', user.displayName || '');
      setValue('donator_email', user.email || '');
      setValue('Food_Status', 'available' || '');
    }
  }, [user, setValue]);


  // onSubmit and added database functionality
  const onSubmit = (data) => {
    axios.post('https://food-sharing-website-server-beta.vercel.app/Food', data, {
      headers: {
        'Content-Type': 'application/json'
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
            text: 'Food added successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          reset();
        }
      })
      .catch(error => {
        console.error("Error adding food:", error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add food. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });

  };

  return (
    <>
      <Helmet>
        <title>PlateSwap | AddFood</title>
      </Helmet>
      <div className="pt-5 mb-5">
        <div className='lg:w-[50%] shadow-2xl mx-auto p-7 '>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center text-2xl font-Prata font-bold italic  text-[#218b31] mb-5">
              Add Your Food
              {/* <h1 className="text-xs text-[#424242] font-normal mt-1">Add your delicious food to <span className="font-bold text-[#006aff]">Share</span> <span className="font-bold">Trip!</span>  </h1> */}
            </h1>


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

            <div className="form-control w-[100%]">
              <label className="label">
                <span className="label-text">Discount %</span>
              </label>
              <input type='number' placeholder="Discount" className="input input-bordered" {...register('Discount')} />
            </div>



            <div className="form-control w-[100%] hidden ">
              <label className="label">
                <span className="label-text">Donator Image URL</span>
              </label>
              <input disabled type="text" placeholder="Donator Image URL" className="input input-bordered" {...register('donator_image')} />
            </div>


            <div className="form-control w-[100%] hidden">
              <label className="label">
                <span className="label-text">Donator Name</span>
              </label>
              <input disabled type="text" placeholder="Donator Name" className=" input input-bordered" {...register('donator_name')} />
            </div>


            <div className="form-control w-[100%] hidden">
              <label className="label">
                <span className="label-text">Donator Email</span>
              </label>
              <input disabled type="email" placeholder="Donator Email" className="input input-bordered" {...register('donator_email')} />
            </div>

            <div className="form-control w-[100%] hidden">
              <label className="label">
                <span className="label-text">Food Status</span>
              </label>
              <input disabled type="text" placeholder="Food Status" className="input input-bordered" {...register('Food_Status')} />
            </div>
            <div className="w-full lg:flex justify-center mt-5">
              <button type='submit' className="btn bg-[#218b31] hover:bg-[#084711] text-[#fff]">
                Add Your Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFood;
