import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation, Autoplay,Scrollbar } from 'swiper/modules';

import Image from 'next/image';
import Btnnext from '../home_page/btn-next';
import Btnprev from '../home_page/btn-prev';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react'


// import Image 
import Image_1 from "@/public/img/home_page/1.jpg"
import Image_2 from "@/public/img/home_page/2.jpg"
import Image_3 from "@/public/img/home_page/3.jpg"
import Image_4 from "@/public/img/home_page/4.jpg"




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
       <SwiperSlide><Image className='lg:!h-[100%] !h-[60%] !w-[100%]' src={Image_2} placeholder='blur' priority={false} width={500} height={500} alt='مردی با کت و شلوار مشکی که دستانش را در کنار هم قرار داده و با چشمان بسته، آرام ایستاده است.' title='art_man_class بهترین تولید کنند کت وشلوار بازاری وشخصی دوزی' /></SwiperSlide>
        <SwiperSlide><Image className='lg:!h-[100%] !h-[60%] !w-[100%]' src={Image_1} placeholder='blur' priority={false} width={500} height={500} alt='مردی با کت و شلوار مشکی که دو دست خود را جلوی کت گرفته، ایستاده در طبیعتی پر از گل‌های سفید' title='art_man_class بهترین تولید کنند کت وشلوار بازاری وشخصی دوزی' /></SwiperSlide>
        <SwiperSlide><Image className='lg:!h-[100%] !h-[60%] !w-[100%]' src={Image_3} placeholder='blur' priority={false} width={500} height={500} alt='مردی با کت وشلوار مشکی که به جلو نگاه میکند ودر مجلس عروسی در سالن ایستاده است' title='art_man_class بهترین تولید کنند کت وشلوار بازاری وشخصی دوزی' /></SwiperSlide>
        <SwiperSlide><Image className='lg:!h-[100%] !h-[60%] !w-[100%]' src={Image_4} placeholder='blur' priority={false} width={500} height={500} alt='یک مرد با کت وشلوار مشکی که به جلو نگاه میکند و یک کروات پاپیون دارد وپشت ان یک پرده سفید هست' title='art_man_class بهترین تولید کنند کت وشلوار بازاری وشخصی دوزی' /></SwiperSlide>
        
        <div className='relative'>
          <Btnnext style={"absolute !w-[3rem] !h-[3rem] !bg-[--them3] right-[1.5rem] bottom-[0.5rem] lg:block hidden"} />
          <Btnprev style={"absolute !w-[3rem] !h-[3rem] !bg-[--them3] right-[5rem] bottom-[0.5rem] lg:block hidden"} />
        </div>
      </Swiper>
    </div>
  )
}

export default Firstsliderproduct 