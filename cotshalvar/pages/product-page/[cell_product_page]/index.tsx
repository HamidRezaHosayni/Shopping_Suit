import * as product_dropdown from "@/public/js/product_page_dropdown"
import Sider_cell_product_page from "@/public/component/product_page/slider_cell_product_page"
import React, { useRef, useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { HiPlusSm } from 'react-icons/hi'
import { IoIosArrowDown } from "react-icons/io";
import { MdAddShoppingCart, MdMinimize } from 'react-icons/md'
import { FaCommentMedical, FaHeart } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import { useSelector } from "react-redux"
import Link from "next/link"

function Cell_product_page() {

  // heart prosuct 
  const [heartchange, setheartchange] = useState(false)

  // dorpdown function 
  const dropdownproductpage = useRef(null);
  const drop_prosuct_cell = () => {
    product_dropdown.dropdown(dropdownproductpage);
  }

  // open comment product 
  const opencomment = useRef(null)
  const open_comment = () => {
    product_dropdown.open_comment(opencomment)
  }
  const close_comment = () => {
    product_dropdown.close_comment(opencomment)
  }

  const is_Login = useSelector((state: any) => state.is_Login.is_Login)

  return (
    <>
      {is_Login ?
        <div className="relative">

          <div className='container mr-auto ml-auto mb-auto mt-[2rem] flex justify-center items-start flex-col-reverse lg:flex-row'>

            {/* text product and cell product  */}
            <div className="lg:w-[40%] w-full leading-10 flex justify-center items-center flex-col px-[1rem] mt-[1rem] lg:mt-[unset]">
              {/* heart icon  */}
              <div className="w-full flex justify-end items-center mt-[1rem]">

                <div className="bg-[--them4] text-[--them2] w-[2rem] h-[2rem] cursor-pointer lg:ml-[5rem] flex justify-center items-center rounded-md">
                  <span onClick={() => setheartchange(!heartchange)}>
                    {heartchange ? <CiHeart className="text-[1.5rem]" /> : <FaHeart className="text-red-600" />}

                  </span>
                </div>

              </div>

              <div>
                {/* name product  */}
                <div className="mt-[1rem]">
                  <span className="lg:text-[1rem] text-[0.8rem] font-v-medium">نام محصول : </span>
                  <span className="lg:text-[1rem] text-[0.8rem] font-v-light">نام محصول</span>
                </div>
                {/* cell product  */}

                <div>
                  <span className="lg:text-[1rem] text-[0.8rem] font-v-medium">قیمت محصول : </span>
                  <span className="lg:text-[1rem] text-[0.8rem] font-v-light"> 2000000</span>
                </div>

                {/* count priduct  */}
                <div className='flex justify-start items-center flex-row'>
                  <span className="lg:text-[1rem] text-[0.8rem] font-v-medium">تعداد محصول : </span>
                  <span className='cursor-pointer ml-[0.5rem] mr-[1rem]'><HiPlusSm className="text-[1.4rem]" /></span>
                  <span className='border px-[0.5rem] w-[2rem] h-[2rem] rounded-lg bg-[--them4] text-[--them2] flex justify-center items-center'>1</span>
                  <span className='cursor-pointer mr-[0.5rem] pb-[0.6rem] p'><MdMinimize className="text-[1.4rem]" /></span>
                </div>

                <div>
                  <label htmlFor="size" className="lg:text-[1rem] text-[0.8rem] font-v-medium">سایز محصول : </label>

                  <select name="size" className="border w-[10rem] rounded-lg bg-[--them3]" id="cars">
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                  </select>
                </div>

                {/* boutton coustom product and shopping product  */}
                <div className='flex justify-start items-center flex-row mt-[3rem]'>
                  <button className='lg:text-[1rem] text-[0.8rem] cursor-pointer px-[0.9rem] bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] rounded-lg transition-all duration-300 ease-in-out'>شخصی سفارش دهید</button>
                  <button className='cursor-pointer px-[0.9rem] bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] rounded-lg transition-all duration-300 ease-in-out flex justify-center items-center flex-row mr-[1rem]'>
                    <span className="lg:text-[1rem] text-[0.8rem] ">افزودن به سبد خرید</span>
                    <span className='mr-[1rem]'><MdAddShoppingCart /></span>
                  </button>
                </div>

                {/* drop down element  */}
                <div>

                  <div ref={dropdownproductpage} onClick={drop_prosuct_cell} className='transition-all duration-300 ease-in-out whitespace-pre-wrap rounded-lg bg-[--them3] h-[4vh] overflow-hidden lg:w-3/4 w-full px-[1rem] flex justify-start items-center flex-col mt-[20px]'>

                    <div className='w-full h-[4vh] flex justify-between items-center flex-row'>
                      <h2 className='text-right w-full text-[--them4] text-[15px] font-v-bold'>توضیحات محصول</h2>
                      <span className=''><IoIosArrowDown /></span>
                    </div>

                    <p className='w-full text-center leading-5 lg:leading-8 mt-3 font-v-light text-[15px] text-[--them4]'>این یک متن ازمایشی است ازمایشی است این یک متن ازمایشی است این یک متن ازمایشی است این یک متن ازمایشی است ازمایشی است ...</p>

                  </div>

                </div>
              </div>
            </div>

            {/* pic_product cell page  */}
            <div className="lg:w-[50%] w-full flex justify-start items-center">
              <Sider_cell_product_page />
            </div>


          </div>


          {/* comment product  */}
          <div className="container mr-auto ml-auto mb-auto mt-[5rem] relative">

            {/* boutton product  */}
            <div onClick={open_comment} className="lg:w-[9rem] lg:h-[3rem] h-[2rem] flex justify-center items-center flex-row lg:text-[1rem] text-[0.8rem] cursor-pointer px-[0.9rem] bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] rounded-lg transition-all duration-300 ease-in-out">
              <button className="ml-[1rem]">ارسال نظر</button>
              <FaCommentMedical />
            </div>

            {/* list comment product  */}
            <div className="lg:mt-[5rem] mt-[2rem]">
              <ul>
                <li className="lg:text-[1rem] text-[0.8rem] font-v-light p-2 flex justify-start items-center flex-row">
                  <span className="w-[2rem] h-[2rem] rounded-2xl bg-[--them3] ml-[0.4rem] border"></span>
                  <span className=" bg-[--them3] p-2 rounded-lg">سلام بسیار خوب</span>
                </li>
              </ul>
            </div>

            {/* open comment  */}
            <div ref={opencomment} className="flex justify-start items-cente flex-col lg:w-[0rem] w-[0rem] lg:h-[0rem] h-[0rem] bg-[--them3] rounded-lg absolute bottom-0 lg:right-[10rem] right-0 z-[99] overflow-hidden transition-all duration-300 ease-in-out">

              <div className="flex justify-end items-center flex-row">
                <span onClick={close_comment} className="mt-1 ml-1"><IoClose className="text-[1.5rem] cursor-pointer left-0" /></span>
              </div>

              <textarea className="mt-[1rem] mx-[1rem] " name="comment_options" id=""></textarea>
              <div className="flex justify-center items-center flex-row mt-[2rem]">
                <div className="lg:w-[9rem] lg:h-[3rem] h-[2rem] flex justify-center items-center flex-row lg:text-[1rem] text-[0.8rem] cursor-pointer px-[0.9rem] bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] rounded-lg transition-all duration-300 ease-in-out">
                  <button className="ml-[1rem]">ثبت نظر</button>
                  <FaCommentMedical />
                </div>
              </div>

            </div>


          </div>

        </div>
        :
        <div className='container m-auto w-full flex justify-center items-center flex-col min-h-[10rem]'>
          <h1 className='lg:text-[1rem] text-[0.8rem] font-v-light'>برای دیدن این صفحه ابتدا باید وارد شوید</h1>
          <h1 className='lg:text-[1rem] text-[0.8rem] font-v-light'>برای ورورد <Link className='text-blue-600 font-v-bold mx-1' href={"/Login-user"}>اینجا</Link> کلیک کنید</h1>
        </div>
      }
    </>
  )
}

export default Cell_product_page