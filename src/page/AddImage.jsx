import React from "react";
import ColorBox from "../components/colorbox/ColorBox";
import SearchBox from "../components/searchbox/SearchBox";
import { hotel } from "../data";
import Menu from "../components/menu/Menu";
import Label from "../components/Label";
import Button from "../components/button/Button";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AddImage = () => {
  return (
    <div className="m-auto">
       <div className='  min-w-[360px] m-auto p-[10px] sm:p-0 flex-col items-center h-full sm:justify-start justify-center sm:flex-row px-8 sm:px-0   sm:m-0  sm:max-w-[1280px] sm:flex  relative  '>
        <div className=" sm:-mt-20">
        <Menu />
        </div>
      {/* topbar */}
      <div className="sm:w-[940px] h-full  ">
        <div>
          <div className="flex items-center justify-center sm:block">
          <ColorBox />
          </div>
          {/* label */}
          <div className="flex items-center justify-center sm:justify-between mb-10">
            <div className="flex justify-center  gap-3 items-center">
              <Label />
              <div className="hidden sm:flex items-center justify-center gap-2">
                <div>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67291 0.327391C6.34748 0.00195375 5.81984 0.00195375 5.4944 0.327391L0.91107 4.91072C0.585633 5.23616 0.585633 5.7638 0.91107 6.08923L5.4944 10.6726C5.81984 10.998 6.34748 10.998 6.67291 10.6726C6.99835 10.3471 6.99835 9.81949 6.67291 9.49406L2.67884 5.49998L6.67291 1.5059C6.99835 1.18046 6.99835 0.652828 6.67291 0.327391Z"
                      fill="#A6ACC4"
                    />
                  </svg>
                </div>
                <h3 className="text-[#087599] text-[14px] font-thin">
                  افزودن امکانات
                </h3>
              </div>
              <div className="hidden sm:flex items-center justify-center gap-2">
                <div>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67291 0.327391C6.34748 0.00195375 5.81984 0.00195375 5.4944 0.327391L0.91107 4.91072C0.585633 5.23616 0.585633 5.7638 0.91107 6.08923L5.4944 10.6726C5.81984 10.998 6.34748 10.998 6.67291 10.6726C6.99835 10.3471 6.99835 9.81949 6.67291 9.49406L2.67884 5.49998L6.67291 1.5059C6.99835 1.18046 6.99835 0.652828 6.67291 0.327391Z"
                      fill="#A6ACC4"
                    />
                  </svg>
                </div>
                <h3 className="text-[#087599] text-[14px] font-thin">
                  افزودن تصاویر
                </h3>
              </div>
            </div>
            <SearchBox />
          </div>
        </div>

        <h1 className="sm:mr-10 mr-4 mb-5 text-[#003666] text-[22px] w-[300px]">
          تصاویر هتل خود را وارد نمایید
        </h1>
        <div className="min-w-full  sm:p-0 sm:w-[868px] h-[330px] sm:border    border-[#C2C7CC] sm:mr-10 flex items-center justify-center">
          <div className="w-[642px] h-[230px]  border border-[#C2C7CC] ">
            <p className="-mt-10 sm:-mr-20 w-[50] sm:w-full">
              <span className="text-[#003666]  text-[14px] sm:text-[16px]">گالری تصاویر</span>
              <span className="sm:text-[12px] text-[10px] text-[#A2AFB8]">
                ( عکس ها باید با فرمت jpg و تعداد حداکثر 15 عدد باشند )
              </span>
            </p>
            {/* slider */}
           
              <div className="">

                 <Swiper
                 className=' flex w-[89vw]   sm:w-[643px] h-[210px] mt-5 justify-center items-center overflow-visible '
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 spaceBetween={30}
                 slidesPerView={1}
                 navigation={true}
                
               >

                  <SwiperSlide className="flex  items-center justify-center">
                    <svg
                      width="52"
                      height="53"
                      viewBox="0 0 52 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9161 40.0769V22.3994L12 28.2919"
                        stroke="#A2AFB8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.918 22.3994L23.8341 28.2919"
                        stroke="#A2AFB8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M47.6673 21.9825V32.7726C47.6673 43.5627 43.334 47.8788 32.5007 47.8788H19.5007C8.66732 47.8788 4.33398 43.5627 4.33398 32.7726V19.8244C4.33398 9.03431 8.66732 4.71826 19.5007 4.71826H30.334"
                        stroke="#A2AFB8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M39.0007 21.9825C32.5007 21.9825 30.334 19.8244 30.334 13.3504V4.71826L47.6673 21.9825H39.0007Z"
                        stroke="#A2AFB8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center">
                    <h2>opop</h2>
                  </SwiperSlide>
                </Swiper>
               

                {/* <div className=' w-[1380px] h-full bg-black/80 absolute top-0 left-0'></div> */}
              </div>
           
            {/* slider */}
            <div className="flex sm:flex-row sm:gap-8 gap-4 flex-col mt-6   -mr-[200px] sm:mr-0 left-0  static">
              <div className="flex  mr-10 sm:mr-0 items-center gap-2 justify-center">
                <span>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12.5137C22 7.01367 17.5 2.51367 12 2.51367C6.5 2.51367 2 7.01367 2 12.5137C2 18.0137 6.5 22.5137 12 22.5137C17.5 22.5137 22 18.0137 22 12.5137Z"
                      stroke="#157B96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 12.5137H16"
                      stroke="#157B96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 16.5137V8.51367"
                      stroke="#157B96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-[14px] text-[#003666]"> افزودن عکس جدید</p>
              </div>
              <div className="flex mr-8 sm:mr-0 items-center gap-2 justify-center">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17V11L7 13"
                      stroke="#157B96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 11L11 13"
                      stroke="#157B96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                      stroke="#157B96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 10C15 10 14 9 14 6V2L22 10H18Z"
                      stroke="#157B96"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-[14px] text-[#003666]"> بارگزاری عکس ها </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mt-[250px] mt-[100px]">
          <Button />
        </div>
      </div>
    </div>

    </div>
    
   
  );
};

export default AddImage;
