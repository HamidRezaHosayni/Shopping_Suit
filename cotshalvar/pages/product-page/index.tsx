import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Priceoffproduct_productpage from '@/public/component/product/priceoffprouduct_productpage'
import Firstsliderproduct from '@/public/component/product/first_slider-product'
import Newproductslider_procpage from '@/public/component/product/newpruductslider_procpage'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import axios from 'axios'
import { FaHeart } from 'react-icons/fa'
import { introduce_save_product_heart } from '@/public/js/introduce_save_product_heart'
import { useDispatch, useSelector } from 'react-redux'
import Introduce_product from '../../public/redux/introduse_product_heart'


interface Product {
  id: string;
  name_product: string;
  price_product: string;
  uploadfile: string;
  fabric_material: string;
  discription_product: string;
  color_suit: string;
}

function Product() {

  const state_product = useSelector((state: any) => state.Introduce_product.Introduce_product)
  const dispatch = useDispatch();
  const introduce_product = useRef<any>()
console.log(state_product)


  const introduce_heart_product = (value: any) => {
    const mm = introduce_save_product_heart(introduce_product, value);
    dispatch(Introduce_product.actions.Introduce_product(mm))
  }

  const [products, setproduct] = useState<Product[]>([]);

  useEffect(() => {
    axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/get_add_product`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": window.localStorage.getItem("Token_validation")
      }
    }).then((vlaue) => {

      setproduct(vlaue.data.value_result.slice(0, 7));
      dispatch(Introduce_product.actions.Introduce_product(vlaue.data.value_result))

    }).catch((e) => { 
      console.log(e) 
    })
  }, [dispatch])

 

  console.log("render_product_page")
  return (
    <>
      <Firstsliderproduct />


      {/* slider price off product  */}
      <div className="container mr-auto ml-auto mb-auto lg:mt-[30vh]">

        <div className="flex justify-between items-center flex-row lg:px-[unset] px-[1rem]">
          <div className="flex justify-start items-center flex-row">
            <div className="lg:w-[1.5rem] w-[1rem] lg:h-[1.5rem] h-[1rem] bg-[--them5] rounded-[1rem]"></div>
            <p className="font-v-medium text-[--them5] lg:text-[1.2rem] text-[1rem] mr-[0.5rem]">محصولات با تخفیف ویژه</p>
          </div>

          <div>
            <Link href={"#"}>
              <p className="text-[--them5] font-v-light lg:text-[1.2rem] text-[1rem]">مشاهده بیشتر</p>
            </Link>
          </div>

        </div>
        <br /><br />
        <Priceoffproduct_productpage />
      </div>




      {/* slider new product  */}
      <div className="container mr-auto ml-auto mb-auto mt-[10rem]">

        <div className="flex justify-between items-center flex-row lg:px-[unset] px-[1rem]">
          <div className="flex justify-start items-center flex-row">
            <div className="lg:w-[1.5rem] w-[1rem] lg:h-[1.5rem] h-[1rem] bg-[--them5] rounded-[1rem]"></div>
            <p className="font-v-medium text-[--them5] lg:text-[1.2rem] text-[1rem] mr-[0.5rem]">محصولات جدید</p>
          </div>

          <div>
            <Link href={"#"}>
              <p className="text-[--them5] font-v-light lg:text-[1.2rem] text-[1rem]">مشاهده بیشتر</p>
            </Link>
          </div>

        </div>
        <br /><br />
        <Newproductslider_procpage />
      </div>



      <div className='container mx-auto mt-[10rem] mb-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-5 overflow-hidden'>
        {
          products.map((product, index) => {
            state_product.find((value: any) => value.id === product.id)
            return (

              <div key={index} className="mt-[1rem]">
                <div className=" lg:h-[33rem] border shadow-lg rounded-xl overflow-hidden">

                  <Link href={`product-page/${product.id}`}>
                    <div className="w-full lg:h-[23.7rem] h-[16rem]">
                      <Image className="lg:!w-full !w-full lg:!h-[23.7rem] !h-[16rem]" src={`/img/upload_img/${product.uploadfile.split(',')[0]}`} width={100} height={100} title={`${product.name_product}`} alt={`${product.name_product}`} />
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

                    <div className="w-full flex justify-end items-center flex-row">
                      <div className="flex justify-end items-center flex-row">
                        <span>
                          
                        {state_product?.includes(product.id) ? (
                                <span ref={introduce_product} onClick={() => introduce_heart_product(product.id)}>
                                  <FaHeart className='lg:text-[1.5rem] text-[1rem] text-red-600 cursor-pointer' />
                                </span>
                              ) : (
                                <span ref={introduce_product} onClick={() => introduce_heart_product(product.id)}>
                                  <CiHeart className='lg:text-[1.5rem] text-[1rem] cursor-pointer text-black' />
                                </span>
                              )}
                        </span>
                      </div>
                      <div className="flex justify-end items-center flex-row mr-[1rem]">
                        <span>
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>


            )
          }
          )
        }

      </div>


    </>
  )
}

export default Product