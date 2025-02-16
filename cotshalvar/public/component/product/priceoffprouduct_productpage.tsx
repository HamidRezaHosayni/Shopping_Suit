import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import Btnnext from '../home_page/btn-next';
import Btnprev from '../home_page/btn-prev';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaHeart, FaRegComments } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { introduce_save_product_heart, add_product_in_shopping_westbasket } from '@/public/js/introduce_save_product_heart'
import { useDispatch, useSelector } from 'react-redux';
import Introduce_product from '@/public/redux/introduse_product_heart';


interface Product {
    id: string;
    name_product: string;
    price_product: string;
    uploadfile: string;
    fabric_material: string;
    discription_product: string;
    color_suit: string;
}

function Priceoffproduct_productpage(props: any) {


    const state_product = useSelector((state: any) => state.Introduce_product.Introduce_product)
    const dispatch = useDispatch();

    const introduce_product = useRef<any>()

    const shopping_wetbasket = (value: any) => {
        add_product_in_shopping_westbasket(value)
    }

    const introduce_heart_product = (value: any) => {
        const mm = introduce_save_product_heart(introduce_product, value);
        dispatch(Introduce_product.actions.Introduce_product(mm))
    }

    const [products, setproduct] = useState<Product[]>([]);
    useEffect(() => {
        console.log("peice_off_product_page")
        axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/get_add_product`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": window.localStorage.getItem("Token_validation")
            }
        }).then((vlaue) => {
            // console.log(vlaue.data.value_result)
            setproduct(vlaue.data.value_result?.slice(0, 7))
        })
    }, [setproduct])

    return (
        <div>
            <Swiper className=''
                modules={[A11y, Navigation, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 10000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 50

                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 90
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 100
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 100
                    },
                }}
            >


                {
                    products?.map((product) => {

                        return (
                            <SwiperSlide key={product.id}>
                                <div className="">
                                    <div className="lg:w-[130%] w-[13rem] lg:h-[33rem] border rounded-xl overflow-hidden">

                                        <Link href={`product-page/${product.id}`}>
                                            <div className="w-full lg:h-[23.7rem] h-[16rem]">
                                                <Image className="lg:!w-full !w-full lg:!h-[23.7rem] !h-[16rem]" src={`/img/upload_img/${product.uploadfile.split(',')[0]}`} placeholder='blur' priority={false} width={100} height={100} alt={`یک عکس از محصولات خیاطی سعید برای فروش ${product.uploadfile.split(',')[0]}`} title="خیاطی سعید با برند art_man_class بهترین کت وشلوار بازاری و شخصی دوزی"/>
                                            </div>
                                        </Link>
                                        <div className="w-full flex justify-center items-right flex-col px-[1rem] mt-[2rem]">

                                            <div>
                                                <p className="font-v-medium lg:text-[1rem] text-[0.8rem] whitespace-nowrap">{product.name_product}</p>
                                            </div>

                                            <div className="w-full flex justify-start items-center flex-row mt-[1rem]">
                                                <span className="font-v-light lg:text-[1rem] text-[0.8rem]">قیمت محصول :</span>
                                                <span className="font-v-light lg:text-[1rem] text-[0.8rem] mr-[0.8rem]">{Number(product.price_product).toLocaleString('fa-IR')}</span>
                                            </div>

                                            <div className="w-full flex justify-end items-center flex-row">
                                                <div className="flex justify-end items-center flex-row">
                                                    <span>
                                                        {state_product?.includes(product.id) ? <span ref={introduce_product} onClick={() => { introduce_heart_product(product.id) }}><FaHeart className='lg:text-[1.5rem] text-[1rem] text-red-600 cursor-pointer' /></span> : <span ref={introduce_product} onClick={() => { introduce_heart_product(product.id) }}><CiHeart className='lg:text-[1.5rem] text-[1rem] cursor-pointer text-black' /></span>}
                                                    </span>
                                                </div>
                                                <div className="flex justify-end items-center flex-row mr-[1rem]">
                                                    <span>
                                                        <CiShoppingCart onClick={() => shopping_wetbasket(product.id)} className='lg:text-[1.5rem] text-[1rem] cursor-pointer' />
                                                    </span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    }
                    )?? <h1 className="text-red-600 translate-x-[-25%] lg:translate-x-[-50%]">درحال حاضر محصولی وجود ندارد</h1>
                }


                <div className='relative'>
                    <Btnnext style={"absolute !w-[3rem] !h-[3rem] !bg-[#6A6A6A] right-[1.5rem] bottom-[15rem] lg:block hidden"} />
                    <Btnprev style={"absolute !w-[3rem] !h-[3rem] !bg-[#6A6A6A] left-[1.5rem] bottom-[15rem] lg:block hidden"} />
                </div>
            </Swiper>
        </div>
    )
}

export default Priceoffproduct_productpage;