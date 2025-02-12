import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, Autoplay,Scrollbar } from 'swiper/modules';

import Image from 'next/image';
import Btnnext from '../home_page/btn-next';
import Btnprev from '../home_page/btn-prev';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react'

function Firstsliderproduct() {
  return (
    <div className='h-[50vh] lg:h-[70vh] '>
      <Swiper className='h-[100%] border'
        modules={[A11y, Navigation, Pagination, Autoplay,Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 10000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          dynamicBullets:true,
          dynamicMainBullets: 1, 
          bulletClass: 'swiper-pagination-bullet bg-red-500 absolute lg:!rounded-full !rounded-xl lg:!w-4 !w-10 lg:!h-4 !h-1 '
          }}
       
      >
        <SwiperSlide><Image className='!h-[100%]' src={"/img/home_page/1.jpg"} layout="responsive" width={100} height={50} alt='picture_first_slider' /></SwiperSlide>
        <SwiperSlide><Image className='!h-[100%]' src={"/img/home_page/2.jpg"} layout="responsive" width={100} height={50} alt='picture_first_slider' /></SwiperSlide>
        <SwiperSlide><Image className='!h-[100%]' src={"/img/home_page/3.jpg"} layout="responsive" width={100} height={50} alt='picture_first_slider' /></SwiperSlide>
        <SwiperSlide><Image className='!h-[100%]' src={"/img/home_page/2.jpg"} layout="responsive" width={100} height={50} alt='picture_first_slider' /></SwiperSlide>
        <div className='relative'>
          <Btnnext style={"absolute !w-[3rem] !h-[3rem] !bg-[--them3] right-[1.5rem] bottom-[0.5rem] lg:block hidden"} />
          <Btnprev style={"absolute !w-[3rem] !h-[3rem] !bg-[--them3] right-[5rem] bottom-[0.5rem] lg:block hidden"} />
        </div>
      </Swiper>
    </div>
  )
}

export default Firstsliderproduct 