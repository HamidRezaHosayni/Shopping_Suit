import React from 'react'

function Measurment() {
  return (
    <div className='container m-auto'>
      <div className='mt-10 flex justify-center items-center flex-col-reverse lg:flex-row'>
            <div className='mt-5 p-5'>
                  <h1 className='font-v-medium text-[1.5rem]'>فیلم اموزشی اندازه گیری کت وشلوار </h1>
                  <p className='text-[1.2rem] font-v-light mt-[1rem]'>در این فیلم اموزشی نحوه اندازه گیری کت وشلوار به صورت دقیق توضیح داده شده است . اندازه گیری را مانند این فیلم اموزشی به صورت دقیق انجام بدهید.</p>
            </div>
            <video controls loop preload="metadata" className="lg:w-[50rem] lg:h-[29rem] w-[23rem] h-[13rem]">
                    <source src="/img/home_page/vedio/1.mp4" />
            </video>
      </div>
    </div>
  )
}

export default Measurment