import React from 'react'
import Image from 'next/image';

const Pic_learnig_measurment_product = ({ isVisible, onClose, content,pic_path }:any) => {
      if (!isVisible) return null;
    
      return (
        <div className="absolute z-20 bg-[--them1] p-5 rounded-md">

            <Image src={pic_path} width={500} height={500} title='art_man_class بهترین تولید کنند کت وشلوار های بازاری و شخصی دوزی' alt='art_man_class بهترین تولید کنند کت وشلوار های بازاری و شخصی دوزی'></Image>
          <div className="">
            <p className='text-white font-v-light text-[1.2rem]'>{content}</p>
            <button className='cursor-pointer border-2 border-[--them2] hover:bg-[--them2] duration-75 ease-in-out mt-5 text-white hover:text-black py-1 px-10 rounded-md ' onClick={onClose}>بستن</button>
          </div>
        </div>
      );
    };

export default Pic_learnig_measurment_product