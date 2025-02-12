import { add_product_in_shopping_westbasket, introduce_save_product_heart } from '@/public/js/introduce_save_product_heart';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Introduce_product from '../../public/redux/introduse_product_heart';




function Introduce_product1() {

  const [All_introduce_product, set_All_introduce_product] = useState<any>()


  const state_product = useSelector((state: any) => state.Introduce_product.Introduce_product)
  const dispatch = useDispatch();
  const introduce_product = useRef<any>()


  const shopping_wetbasket = (value: any) => {
    add_product_in_shopping_westbasket(value)
  }

  const introduce_wetbasket = (value1: any) => {
    introduce_save_product_heart(null, value1);
    const mm = All_introduce_product.filter((value: any) => value.id !== value1);
    set_All_introduce_product(mm)
    dispatch(Introduce_product.actions.Introduce_product(mm))
  }

  useEffect(() => {
    console.log("introduce_product1")
    if (window.localStorage.getItem("introduse_product")) {

      const introduse_product = JSON.parse(window.localStorage.getItem("introduse_product")!);
      axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/introduce_shopping_westbasket`, introduse_product, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": window.localStorage.getItem("Token_validation")
        }
      }).then((value) => {
        set_All_introduce_product(value.data.value)
        dispatch(Introduce_product.actions.Introduce_product(value.data.value))
      }).catch((value) => {
        if (value.response.status) {
          window.location.replace("http://localhost:3000/Login-user")
        }
        else {
          return;
        }
      })

    }

  }, [dispatch])

  return (
    <>

      <div className='container mx-auto mt-[5rem] grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 '>
        {

          All_introduce_product ? All_introduce_product.map((product: any, index: any) => {

            return (

              <div key={product.id + index} className="mt-[1rem]">
                <div className="xl:w-[20rem] lg:w-[15rem] md:w-[15rem] sm:w-[12rem] w-[11rem] lg:h-[33rem] border rounded-xl overflow-hidden">

                  <Link href={`product-page/${product.id}`}>
                    <div className="w-full lg:h-[23.7rem] h-[16rem]">
                      <Image className="lg:!w-full !w-full lg:!h-[23.7rem] !h-[16rem]" src={`/img/upload_img/${product.uploadfile.split(',')[0]}`} width={100} height={100} alt="image product" />
                    </div>
                  </Link>
                  <div className="w-full flex justify-center items-right flex-col px-[1rem] mt-[2rem]">

                    <div>
                      <p className="font-v-medium lg:text-[1rem] text-[0.8rem] whitespace-nowrap">{product.name_product}</p>
                    </div>

                    <div className="w-full flex justify-start items-center flex-row mt-[1rem] whitespace-nowrap">
                      <span className="font-v-light lg:text-[1rem] text-[0.8rem]">قیمت محصول :</span>
                      <span className="font-v-light lg:text-[1rem] text-[0.8rem] mr-[0.8rem]">{Number(product.price_product).toLocaleString('fa-IR')}</span>
                    </div>

                    <div className="w-full flex justify-start items-center flex-row mt-[1rem] mb-[1rem]">
                      <div className="flex justify-end items-center flex-row">
                        <span>
                          {state_product.find((value: any) => value.id === product.id) ? <span ref={introduce_product} onClick={() => { introduce_wetbasket(product.id) }}><FaHeart className='lg:text-[1.5rem] text-[1rem] text-red-600 cursor-pointer' /></span> : <span ref={introduce_product} onClick={() => { introduce_wetbasket(product.id) }}><CiHeart className='lg:text-[1.5rem] text-[1rem] cursor-pointer text-black' /></span>}
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

            )
          }) : null

        }
      </div>



    </>
  )
}

export default Introduce_product1