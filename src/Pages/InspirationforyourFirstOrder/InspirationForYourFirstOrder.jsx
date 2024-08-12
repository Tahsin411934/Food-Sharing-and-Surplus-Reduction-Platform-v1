// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../Styles/SwiperSlide.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const InspirationForYourFirstOrder = () => {
  return (
    <div className='container mx-auto w-[90%] mb-16'>
      <div className=" mt-20 text-center p-1 rounded-xl" >
      <h1 className=" my-14 w-[50%] text-4xl mx-auto font-Prata font-bold ">Inspiration for your first order</h1>
                
            </div>
       <Swiper
       slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }}
        >
       
       
   
        <SwiperSlide><img className='h-[200px] w-[200px] rounded-full' src="https://i.ibb.co/Q9z77ys/d0bd7c9405ac87f6aa65e31fe55800941632716575.jpg" alt="" />
        <h1 className='mr-8 mb-10 mt-2 text-center text-2xl font font-semibold'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide><img className='h-[200px] w-[200px] rounded-full' src="https://i.ibb.co/p19HZKg/ccb7dc2ba2b054419f805da7f05704471634886169.jpg" alt="" />
                <h1 className='mr-8 mb-10 mt-2 text-center text-2xl font font-semibold'>Burger</h1>
        </SwiperSlide>
        <SwiperSlide><img className='h-[200px] w-[200px] rounded-full' src="https://i.ibb.co/rx5vy8Z/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.jpg" alt="" />
                <h1 className='mr-8 mb-10 mt-2 text-center text-2xl font font-semibold'>Briyani</h1>
        </SwiperSlide>
        <SwiperSlide><img className='h-[200px] w-[200px] rounded-full' src="https://i.ibb.co/cK5mWRc/52eb9796bb9bcf0eba64c643349e97211634401116.jpg" alt="" />
                <h1 className='mr-8 mb-10 mt-2 text-center text-2xl font font-semibold'>Thali</h1>
        </SwiperSlide>
        <SwiperSlide><img className='h-[200px] w-[200px] rounded-full' src="https://i.ibb.co/FD6MD1y/c2f22c42f7ba90d81440a88449f4e5891634806087.jpg" alt="" />
                <h1 className='mr-8 mb-10 mt-2 text-center text-2xl font font-semibold'>Roll</h1>
        </SwiperSlide>
        <SwiperSlide><img className='h-[200px] w-[200px] rounded-full' src="https://i.ibb.co/mRG3HHr/d5ab931c8c239271de45e1c159af94311634805744.jpg" alt="" />
                <h1 className='mr-8 mb-10 mt-2 text-center text-2xl font font-semibold'>Cake</h1>
        </SwiperSlide>
        <SwiperSlide><img className='h-[200px] w-[200px] rounded-full' src="https://i.ibb.co/tmMLh4Z/5dbdb72a48cf3192830232f6853735301632716604.jpg" alt="" />
                <h1 className='mr-8 mb-10 mt-2 text-center text-2xl font font-semibold'>Momo</h1>
        </SwiperSlide>
        <SwiperSlide><img className='h-[200px] w-[200px] rounded-full' src="https://i.ibb.co/R4kVqgx/e444ade83eb22360b6ca79e6e777955f1632716661.jpg" alt="" />
                <h1 className='mr-8 mb-10 mt-2 text-center text-2xl font font-semibold'>Fried Rice</h1>
        </SwiperSlide>
        <SwiperSlide><img className='h-[200px] w-[200px] rounded-full' src="https://i.ibb.co/drhYVS6/91c554bcbbab049353a8808fc970e3b31615960315.jpg" alt="" />
                <h1 className='mr-8 mb-10 mt-2 text-center text-2xl font font-semibold'>Noodles</h1>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default InspirationForYourFirstOrder;