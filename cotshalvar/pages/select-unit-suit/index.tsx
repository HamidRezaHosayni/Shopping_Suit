import React from 'react'
import { TbCircleFilled } from "react-icons/tb";
import { AiFillExclamationCircle } from "react-icons/ai";
import Link from 'next/link';

function Selectunitsuit() {
    return (
        <>
            <div className='container m-auto'>

                <div>
                    <div className='lg:block hidden'>

                        <div className='flex justify-start flex-row whitespace-pre-wrap mt-[2rem]'>
                            <span><TbCircleFilled className='text-[--them5]' /></span>
                            <p className='text-[1rem] font-v-light mr-[10px] ml-[10px]'>توجه : در اندازه گیره محصول دقت فرمایید برای آموزش هر فیلد بر روی آیکون</p>
                            <span><AiFillExclamationCircle /></span>
                            <p className='text-[1rem] font-v-light mr-[10px]'>درکنار هر فیلد کلیک کنید.</p>
                        </div>


                        <div className='flex justify-start flex-row whitespace-pre-wrap mt-1'>
                            <p className='text-[1rem] font-v-light'>شما همچنین میتوانید کلیپ آموزشی ما نسبت به این موضوع را در </p>
                            <Link href={""} className='text-blue-600 font-v-bold'>اینجا </Link>
                            <p className='text-[1rem] font-v-light'>مشاهده کنید.</p>
                        </div>

                        <div className=' mt-1'>
                            <p className='text-[--them5]'>(در صورت بروز مشکل دراندازه گیری محصول مسئولیت آن با خود مشتری میباشد)</p>
                        </div>

                    </div>

                    <div className='lg:hidden block'>

                        <div className='mt-[2rem]'>

                            <div className='flex justify-start items-center flex-row'>
                                <TbCircleFilled className='text-[--them5]' />
                                <p className='text-[0.68rem]'>توجه : در اندازه گیره محصول دقت فرمایید برای آموزش هر فیلد بر روی آیکون</p>
                                <AiFillExclamationCircle className='mr-[5px]' />
                            </div>
                            <p className='text-[0.68rem]'>درکنار هر فیلد کلیک کنید.</p>

                        </div>


                        <div className='flex justify-start flex-row whitespace-pre-wrap mt-1 px-[2px]'>
                            <p className='text-[0.67rem] font-v-light'>شما همچنین میتوانید کلیپ آموزشی ما نسبت به این موضوع را در </p>
                            <Link href={""} className='text-blue-600 text-[0.68rem] font-v-bold'>اینجا </Link>
                            <p className='text-[0.67rem] font-v-light'>مشاهده کنید.</p>
                        </div>

                        <div className=' mt-1'>
                            <p className='text-[--them5] text-[0.67rem] '>(در صورت بروز مشکل دراندازه گیری محصول مسئولیت آن با خود مشتری میباشد)</p>
                        </div>

                    </div>
                </div>


                {/* sction cell pruduct  */}

                <div className='flex justify-center items-center flex-col mt-[10rem]'>

                    <div className='flex justify-center items-center lg:flex-row flex-col'>
                        <div className='lg:w-[25rem] w-[20rem] lg:h-[15rem] h-[12rem] shadow-xl rounded-2xl border bg-[--them3] flex justify-around items-center flex-col'>
                            <div>
                                <h4 className='text-[1.5rem] font-v-bold'>سفارش شلوار تک</h4>
                            </div>
                            <div className=''>
                                <span className='text-[1.4rem] font-v-light'>قیمت : </span>
                                <span className='text-[1.4rem] font-v-light'>2000000</span>
                            </div>
                            <div>
                            <Link href={"/Pants-order-form"}> <button className="border-2 border-[--them2] hover:border-[--them4] transition-all duration-300 ease-in-out bg-black text-[--them2] hover:bg-[--them2] hover:text-black p-[8px] lg:text-[1rem] text-[0.8rem] font-v-medium rounded-lg">ثبت سفارش</button></Link>
                            </div>
                        </div>

                        <div className='lg:w-[25rem] w-[20rem] lg:h-[15rem] h-[12rem] shadow-xl rounded-2xl border bg-[--them3] flex justify-around items-center flex-col lg:mr-5 mt-5 lg:mt-[unset]'>
                            <div>
                                <h4 className='text-[1.5rem] font-v-bold'>سفارش کت تک</h4>
                            </div>
                            <div className=''>
                                <span className='text-[1.4rem] font-v-light'>قیمت : </span>
                                <span className='text-[1.4rem] font-v-light'>2000000</span>
                            </div>
                            <div>
                            <Link href={"/suit-order-form"}> <button className="border-2 border-[--them2] hover:border-[--them4] transition-all duration-300 ease-in-out bg-black text-[--them2] hover:bg-[--them2] hover:text-black p-[8px] lg:text-[1rem] text-[0.8rem] font-v-medium rounded-lg">ثبت سفارش</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[25rem] w-[20rem] lg:h-[15rem] h-[12rem] shadow-xl rounded-2xl border bg-[--them3] flex justify-around items-center flex-col mt-5'>

                        <div>
                            <h4 className='text-[1.5rem] font-v-bold'>سفارش کت وشلوار</h4>
                        </div>

                        <div className=''>
                            <span className='text-[1.4rem] font-v-light'>قیمت : </span>
                            <span className='text-[1.4rem] font-v-light'>2000000</span>
                        </div>

                        <div>
                           <Link href={"/suit_and_pants_order"}> <button className="border-2 border-[--them2] hover:border-[--them4] transition-all duration-300 ease-in-out bg-black text-[--them2] hover:bg-[--them2] hover:text-black p-[8px] lg:text-[1rem] text-[0.8rem] font-v-medium rounded-lg">ثبت سفارش</button></Link>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Selectunitsuit