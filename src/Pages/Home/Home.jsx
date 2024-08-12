

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../Styles/SwiperSlide.css';
import 'animate.css';
// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Helmet } from 'react-helmet';



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PlateSwap | Home</title>
      </Helmet>
      <div className='  relative font-Poppins'>
        <Swiper
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
        >


          <SwiperSlide className='bg-gradient-to-r from-slate-900 to-black animate__animated animate__fadeInUp animate__slower '>
            <div
              className="bg-cover bg-center hero  w-full h-[400px] bg-gradient-to-r from-slate-900 to-black "
              style={{
                backgroundImage:
                  "url(banner-Image.png)",
              }}
            >
              <div className=" "></div>
              <div className="hero-content text-center text-neutral-content animate__animated animate__fadeInUp animate__slower  ">
                <div className="lg:max-w-lg md:max-w-md w-[100%] lg:w-[100%]">
                  <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-[#fff] font-Prata">
                    Discover Your Food

                  </h1>
                  <p className="mb-5 text-[#fff] font-semibold ">
                    Welcome to <a className="ml-2 text-2xl font-bold italic text-[#48cf8e]">
                      PlateSwap
                    </a>
                  </p>
                  <div className="mx-auto w-[80%]  lg:w-[100%]">

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='bg-gradient-to-r from-slate-900 to-black animate__animated animate__fadeInUp animate__slower '>
            <div
              className="bg-cover bg-center hero  w-full h-[400px] bg-gradient-to-r from-slate-900 to-black  "
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/yswLJzv/home-vendor-bd.webp)",
              }}
            >
              <div className=" "></div>
              <div className="hero-content text-center text-neutral-content  ">
                <div className="lg:max-w-lg md:max-w-md  lg:w-[100%] animate__fadeOutDown">
                  <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-[#fff] font-Prata">
                    Discover Your Food
                  </h1>
                  <p className="mb-5 text-[#fff] font-semibold ">
                    Welcome to <a className="ml-2 text-2xl font-bold italic text-[#48cf8e]">
                      PlateSwap
                    </a>

                  </p>
                  <div className="mx-auto w-[80%]  lg:w-[100%]">

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
      <div className='lg:w-[70%] h-[200px] rounded-2xl shadow-lg lg:left-[15%] lg:absolute bottom-[1%] z-20  '>
        <div className="rounded-2xl  bg-gradient-to-r from-[#b9d9ff] to-[#FFF] w-full h-[200px] mb-10 ">
        <div className='w-[75%] mx-auto pt-5 flex items-center justify-around'> 
              <div className='lg:flex hidden items-center gap-2 '>
                <img className='w-12 h-12 rounded-full bg-white' src="https://i.ibb.co/gPkRLnz/images.jpg" alt="" />
                <h1 className='text-2xl font-medium'>Dining Out</h1>
              </div>

              <div className='flex items-center gap-2 '>
                <img className='w-12 h-12 rounded-full bg-white' src="https://i.ibb.co/T22V0B0/Untitled.png" alt="" />
                <h1 className='text-2xl font-medium'>Delivery</h1>
              </div>

              <div className='flex items-center gap-2 '>
                <img className='w-12 h-12 rounded-full bg-white' src="https://i.ibb.co/J3Ps74G/855687dc64a5e06d737dae45b7f6a13b1616149818.webp" alt="" />
                <h1 className='text-2xl font-medium'>Night Life</h1>
              </div>
            </div>
          <div className="lg:flex pt-[30px] items-center justify-center ">
            
            <div className=" text-[#1A2B3D] lg:px-0 px-5">
              <h1 className="text-2xl font-bold text-center lg:text-start" >Members Get Up to 50% Off</h1>
              <p className="text-xs w-[77%] hidden lg:flex">Enjoy Food such as exclusive Burger, Briyani, unbelievable discounts on thousands
                of Foods, and much more</p>
            </div>
            {/* // */}
            <div className=' flex justify-center items-center'>
              <div className="   btn bg-[#2f7955] text-[#fff] text-xs py-0 rounded-full" ><button >Find Holiday Saving</button></div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Home;