
import PropTypes from 'prop-types';
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
const AvailableFood = ({ availableFood }) => {






  return (
    <div>

      <div className="mt-10 font-Montserrat relative">
        <div className="">
          <div className='border-slate-100 bg-[#ffffff] border rounded-xl bg-[#F7F8F8]card card-compact w-[95%] shadow-sm mx-auto hover:bg-[#f3f5f3] mb-3 lg:m-0'>
            <figure>
              <img className="w-full h-64 rounded-t-2xl" src={availableFood.food_image} alt="Food image" />
            </figure>
            <div className="card-body mulish-font">
              <div className="grid grid-cols-12 items-center text-sm">
                <div className="col-span-6 flex items-center gap-1">
                  <FaCalendar />
                  <p className="col-span-6">{availableFood.expired_datetime}</p>
                </div>

                <p className="col-span-6"> Available Quantity: {availableFood.food_quantity}</p>
              </div>
              <hr className=' mt-1 h-[1px] border-none bg-slate-200 mx-auto w-[90%] ' />
              <h2 className="card-title">{availableFood.food_name}</h2>
              {
                availableFood.Discount && <h2 className=" absolute top-0 left-0 bg-[#E70229] text-white p-2 rounded-2xl">{availableFood.Discount}% OFF</h2>
              }

              <p className="text-[#B09696] mb-2">{availableFood.additional_notes}</p>

              <div className='grid grid-cols-6 gap-0 text-base '>
                <p className="col-span-2 ">Location :</p>
                <p className=' col-span-4 rounded-lg text-base  font-medium text-[#2F7955]'>{availableFood.pickup_location}</p>

              </div>
              <hr className=' mt-1 h-[1px] border-none bg-slate-200 mx-auto w-[100%] ' />
              <div className="flex items-center">
                <div className="avatar placeholder w-8 h-8 col-span-1 mr-2   ">
                  <img className="rounded-full bg-neutral text-neutral-content  " src={availableFood.donator_image || "image"} alt="" />
                </div>


                <div className="flex w-full  justify-between items-center">
                  <div>
                    <h1 className="mulish-font text-base text-[#12132D] font-semibold">{availableFood.donator_name}</h1>
                    <p>Donator</p>
                  </div>

                  <div>
                    <Link to={`/viewDetails/${availableFood._id}`} ><button className="btn px-5 bg-[#218b31] hover:bg-[#084711] text-[#fff]">View Details</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes varifiaction
AvailableFood.propTypes = {
  availableFood: PropTypes.object.isRequired,


};
export default AvailableFood;