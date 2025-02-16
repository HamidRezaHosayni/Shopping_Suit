import * as footer_dropdown from "../../js/footer_dropdown";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";

function Footer() {

  const dropdown1 = useRef(null);
  const dropdown2 = useRef(null);

  const drop_element1 = () => {
    footer_dropdown.dropdown(dropdown1);
  }

  const drop_element2 = () => {
    footer_dropdown.dropdown(dropdown2);
  }
  
  const [width_page, setwidth_page] = useState<number>(375)
  useEffect(() => {
    setwidth_page(document.body.offsetWidth);
  },[width_page])


  return (
    <>
      <div className='relative bottom-0 w-full min-h-10 p-[20px] bg-[--them1] text-[#fff]'>

        <div className='container m-auto flex justify-around items-center flex-col lg:flex-row border-b-2 pb-7'>

          <div ref={dropdown1} onClick={drop_element1} className='transition-all duration-300 ease-in-out whitespace-pre-wrap border-2 lg:border-[0px] rounded-lg lg:rounded-[unset] bg-[--them3] lg:bg-[unset] h-[5vh] lg:h-[unset] overflow-hidden lg:w-1/4 p-[5px] flex lg:justify-center justify-start items-center flex-col lg:mt-0 mt-[20px]'>

            <div className='w-full flex justify-evenly items-center flex-row'>
              <h2 className='lg:text-center text-right w-full lg:w-[unset] text-black lg:text-white text-[15px] lg:text-[20px] font-v-bold'>درباره ما</h2>
              <span className='block lg:hidden transition-all duration-300 ease-in-out'>
                <IoIosArrowDown className="text-[--them4]" />
              </span>
            </div>

            <div className="">
              <p className='w-full text-center leading-5 lg:leading-8 mt-3 font-v-light text-[0.8rem] lg:text-[1rem] text-black lg:text-white'>
                در گذرگاه پرشتاب زمان که مد روز به سرعت دگرگون می‌شود، Art Man Class، برند شناخته شده خیاطی سعید، همچون نگینی درخشان در صنعت پوشاک
              </p>
              <p className="mr-[1rem] text-blue-400 text-center"><Link href={"/about_me"} title="درباره ما" aria-label="درباره ما">درباره ما بیشتر بخوانید ...</Link></p>

            </div>

          </div>


          <div ref={dropdown2} onClick={drop_element2} className='transition-all duration-300 ease-in-out whitespace-pre-wrap border-2 lg:border-[0px] rounded-lg lg:rounded-[unset] bg-[--them3] lg:bg-[unset] h-[5vh] lg:h-[unset] overflow-hidden lg:w-[23rem] w-full p-[5px] flex lg:justify-center justify-start items-center flex-col lg:mt-0 mt-[20px]'>

            <div className='w-full flex justify-evenly items-center flex-row'>
              <h2 className='lg:text-center text-right  w-full lg:w-[unset] text-black lg:text-white text-[15px] lg:text-[20px] font-v-bold'>تماس با ما</h2>
              <span className='block lg:hidden'>
                <IoIosArrowDown className="text-[--them4]" />
              </span>
            </div>

            <div className='w-full lg:mr-[6rem] mr-[unset] text-center leading-5 lg:leading-8 mt-3 font-v-light text-[15px] lg:text-[20px] text-black lg:text-white'>

              <div title="ادرس فروشگاه" aria-label="ادرس فروشگاه" className='flex justify-start items-center flex-row'>
                <span className='ml-[1rem]'>
                  <IoLocation className='lg:text-[1.5rem] text-[1rem]' />
                </span>
                <p className='flex justify-start items-center flex-row w-full'>
                  <span className='lg:text-[1rem] text-[0.8rem] font-v-medium inline-block'>آدرس : </span>
                  <span className='lg:text-[1rem] text-[0.8rem] font-v-light inline'>قم _ نیروگاه توحید 33 پلاک 53</span>
                </p>
              </div>

              <div title="تلفن ثابت" aria-label="تلفن ثابت" className='flex justify-start items-center flex-row'>
                <span className='ml-[1rem]'>
                  <GiRotaryPhone className='lg:text-[1.5rem] text-[1rem]' />
                </span>
                <p className='flex justify-start items-center flex-row'>
                  <span className='lg:text-[1rem] text-[0.8rem] font-v-medium'>تلفن ثابت : </span>
                  <span className='lg:text-[1rem] text-[0.8rem] font-v-light'>38848587</span>
                  <span className='lg:text-[1rem] text-[0.8rem] font-v-light'>_025</span>
                </p>
              </div>

              <div title="تلفن همراه" aria-label="تلفن همراه" className='flex justify-start items-center flex-row'>
                <span className='ml-[1rem]'>
                  <FaPhoneAlt className='lg:text-[1.5rem] text-[1rem]' />
                </span>
                <p className='flex justify-start items-center flex-row'>
                  <span className='lg:text-[1rem] text-[0.8rem] font-v-medium'>تلفن همراه : </span>
                  <span className='lg:text-[1rem] text-[0.8rem] font-v-light'>09391801680</span>
                </p>
              </div>

            </div>

          </div>



          <div className='whitespace-pre-wrap lg:w-1/4 w-full p-[5px] flex justify-center lg:items-center items-end flex-row lg:flex-col lg:mt-0 mt-[30px]'>
            <Link href={"/select-unit-suit"} title="صفحه سفاش شخصی" aria-label="صفحه سفاش شخصی">
              <button className='font-v-light border whitespace-nowrap lg:w-[220px] lg:h-[45px] w-[153px] h-[40px] font-bold  transition-all duration-200 p-[8px] bg-[--them1] hover:bg-[--them2] text-[--them2] hover:text-black rounded-xl'>شخصی درزی</button>
            </Link>
            <Link href={"/product-page"} title="رفتن به فروشگاه" aria-label="رفتن به فروشگاه">
            <button className='font-v-light border whitespace-nowrap lg:w-[220px] lg:h-[45px] w-[153px] h-[40px] font-bold  transition-all duration-200 p-[8px] bg-[--them2] hover:bg-[--them1] text-black hover:text-[--them2] rounded-xl mr-4 lg:mr-[unset] lg:mt-[1rem]'> فروشگاه </button>
            </Link>

          </div>

        </div>

        <div className='container m-auto flex justify-center items-center flex-col lg:flex-row'>

          <div className='flex justify-center items-center flex-row lg:flex-col lg:ml-[20rem] ml-[unset] pt-10'>

            <h2 className='lg:font-v-bold font-v-medium text-[15px] lg:text-[20px] text-center whitespace-pre-wrap w-[50%] lg:w-[unset]'>شما میتوانید ما را در شبکه های اجتماعی زیر دنبال کنید</h2>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 lg:flex lg:justify-around lg:items-center lg:flex-row lg:mt-[20px] mt-[unset] mr-6 lg:mr-[unset] w-[50%] lg:w-[unset]'>

              <div className='lg:mr-[20px] flex justify-center items-center'>
                <Link href={""} title="لوکیشن فروشگاه" aria-label="لوکیشن فروشگاه" className="cursor-pointer">
                  <MdOutlineLocationOn className="text-[3rem]" />
                </Link>
              </div>

              <div className='lg:mr-[20px] flex justify-center items-center'>
                <Link href={""} title="ایمیل فروشگاه" aria-label="ایمیل فروشگاه" className="cursor-pointer">
                  <CiMail className="text-[3rem]" />
                </Link>
              </div>

              <div className='lg:mr-[20px] flex justify-center items-center'>
                <Link href={""} title="ادرس تلگرام" aria-label="ادرس تلگرام" className="cursor-pointer">
                  <PiTelegramLogo className="text-[3rem]" />
                </Link>
              </div>

              <div className='lg:mr-[20px] flex justify-center items-center'>
                <Link href={""} title="ادرس ایستاگرام" aria-label="ادرس ایستاگرام" className="cursor-pointer">
                  <FaInstagram className="text-[3rem]" />
                </Link>
              </div>

            </div>

          </div>

          <div className='flex justify-center items-center flex-col  mt-[4rem] lg:mt-[4rem]'>

            <div className='flex justify-around items-center flex-row'>

              <span className='rounded-xl ml-10 cursor-pointer'><Image alt='' width={width_page <= 375 ? 100 : 150} height={20} src={"../../img/footer-img/7.svg"} /></span>
              <span className='rounded-xl ml-10 cursor-pointer'><Image alt='' width={width_page <= 375 ? 100 : 150} height={20} src={"../../img/footer-img/5.svg"} /></span>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

export default Footer