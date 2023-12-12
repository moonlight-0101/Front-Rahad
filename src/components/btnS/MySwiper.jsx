// import React, { useState, useEffect, useRef } from 'react';
// import Swiper from 'swiper';

// function MySwiper() {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (!swiperRef.current) {
//       swiperRef.current = new Swiper('.swiper-container', {
//         direction:'horizontal',
//         slidesPerView: 1,
//         loop: true,
//         autoplay: {
//           disableOnInteraction: false,
//         },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         },
      
//       });
//     }
//   }, []);

//   const handlePrevious = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const handleNext = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   return (
//     <div>
//       <div className="swiper-container bg-blue-700 w-[620px] h-[200px] overflow-hidden">
//         <div className='swiper-wrapper'>
//           <div className="swiper-slide">
//             مهتاب
//           </div>
//           {/* <div className="swiper-slide">
//             <p>متن </p>
//           </div> */}
//             <div className="swiper-slide">
//             alii
//           </div>
//         </div>
//         <div className='swiper-wrapper'>
//             <div className="swiper-slide">
//             alii
//           </div>
//         </div>
//       </div>
//       <button className='bg-red-700 mt-30 text-blue-200 text-2xl mr-10' onClick={handlePrevious}>قبلی</button>
//       <button className='bg-red-500 mt-30 text-blue-200 text-2xl mr-10' onClick={handleNext}>بعدی</button>
//     </div>
//   );
// }

// export default MySwiper;



// import React, { useState, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import SwiperCore, { Navigation } from 'swiper';

// // Initialize Swiper
// SwiperCore.use([Navigation]);

// const MySwiper = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const swiperRef = useRef(null);

//   const handlePrevious = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={handlePrevious} disabled={currentPage === 0}>Previous</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         navigation
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default MySwiper;
import { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

SwiperCore.use([Navigation]); // اضافه کردن Navigation به SwiperCore

const MySwiper = () => {
  const swiperRef = useRef(null);

  return (
    <div>
      <Swiper
        navigation={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
      <div>
        <button onClick={() => swiperRef.current.slidePrev()}>Prev</button>
        <button onClick={() => swiperRef.current.slideNext()}>Next</button>
      </div>
    </div>
  );
};

export default MySwiper;