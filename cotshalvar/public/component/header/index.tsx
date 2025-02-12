import * as header_menu from "../../js/header_menu";
import * as open_close_dropdown_user from "@/public/js/menu_drop_down_user"
import React from 'react'
import Link from "next/link";
import { useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import Login_slice from "@/public/redux/Login_Slice_redux";
import { FaHeart, FaUser, FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { MdExitToApp } from "react-icons/md";
import { TbShoppingCartDollar } from "react-icons/tb";


function Header() {
  const dispatch = useDispatch()
  const iconmenu = useRef(null);
  const listmenu = useRef(null);
  const closeIcon = useRef(null);
  const open_user_dropdown = useRef(null)

  const openmenu = () => {
    header_menu.openmenu(listmenu, iconmenu, closeIcon)
  };

  const open_and_close_dropdown_menu = () => {
    open_close_dropdown_user.open_and_close_dropdown_menu(open_user_dropdown)
  }


  const Check_Token_validation_And_add_redux = () => {
    if (window.localStorage.getItem("Token_validation")) {
      const Token_validation = window.localStorage.getItem("Token_validation")
      axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/first_validation_jwt`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": Token_validation
        }
      }).then((value) => {
        dispatch(Login_slice.actions.is_Login(value.data.message))

      }).catch((err) => {
        console.log(err)
        dispatch(Login_slice.actions.is_Login(null))
        window.localStorage.removeItem("Token_validation")
      })
    } else {
      dispatch(Login_slice.actions.is_Login(null))
    }
  }

  Check_Token_validation_And_add_redux()

  const Exit_Login = () => {
    window.localStorage.removeItem("Token_validation")
    window.location.reload()
  }

  const is_Login = useSelector((state: any) => state.is_Login.is_Login)

  return (
    <>

      <div className='bg-[--them1] text-[--them2] fixed w-full z-[100]'>

        <div className='container m-auto  relative p-[1rem] flex justify-between items-center flex-row'>

          <div className="relative w-[40px] h-[40px]">
            <span ref={iconmenu} onClick={openmenu} className='inline-block lg:hidden relative w-[30px] h-[30px] '>
              <IoMdMenu className='absolute bottom-0 left-0 text-[1.5rem]' />
            </span>

            <span ref={closeIcon} onClick={openmenu} className='hidden lg:hidden relative w-[30px] h-[30px] '>
              <IoCloseSharp className='absolute bottom-0 left-0 text-[1.5rem]' />
            </span>
          </div>

          <ul ref={listmenu} className='lg:relative fixed lg:top-[unset] top-[3rem] right-0 flex justify-start lg:justify-between items-center flex-col lg:flex-row overflow-hidden transition-all duration-200 lg:w-[40%] lg:h-[unset] w-[0%] h-[90vh] lg:bg-none bg-[--them1]'>

            <li onClick={openmenu} className='lg:mt-0 mt-[20px] lg:p-0 p-[5px] lg:w-auto w-full lg:border-b-[0px] border-b-[2px] flex flex-col  lg:justify-start lg:items-start justify-center items-center group cursor-pointer'>
              <span><Link href={"/"}>صفحه اصلی</Link></span>
              <span className="border-b-2 w-0 transition-all duration-400 ease-in-out group-hover:w-full border-[--them2]"></span>
            </li>

            <li onClick={openmenu} className='lg:mt-0 mt-[20px] lg:p-0 p-[5px] lg:w-auto w-full lg:border-b-[0px] border-b-[2px] flex flex-col  lg:justify-start lg:items-start justify-center items-center group cursor-pointer'>
              <span><Link href={"/product-page"}>فروشگاه</Link></span>
              <span className="border-b-2 w-0 transition-all duration-400 ease-in-out group-hover:w-full border-[--them2]"></span>
            </li>

            <li onClick={openmenu} className='lg:mt-0 mt-[20px] lg:p-0 p-[5px] lg:w-auto w-full lg:border-b-[0px] border-b-[2px] flex flex-col  lg:justify-start lg:items-start justify-center items-center group cursor-pointer'>
              <span><Link href={"/contact_me"}>ارتباط با ما</Link></span>
              <span className="border-b-2 w-0 transition-all duration-400 ease-in-out group-hover:w-full border-[--them2]"></span>
            </li>

            <li onClick={openmenu} className='lg:mt-0 mt-[20px] lg:p-0 p-[5px] lg:w-auto w-full lg:border-b-[0px] border-b-[2px] flex flex-col  lg:justify-start lg:items-start justify-center items-center group cursor-pointer'>
              <span><Link href={"/about_me"}> درباره ما</Link></span>
              <span className="border-b-2 w-0 transition-all duration-400 ease-in-out group-hover:w-full border-[--them2]"></span>
            </li>

          </ul>

          <div className='flex justify-start items-center flex-row-reverse w-[40%] '>

            <Link href={"/shopping_basket_page"} className='mr-[2rem]'>
              <PiShoppingCart className='absolute cursor-pointer bottom-[1.5rem] lg:left-0 left-[10px] text-[2rem]' />
            </Link>

            {
              is_Login ? <FaUserAlt onClick={open_and_close_dropdown_menu} className="text-[1.5rem] mb-[0.5rem] cursor-pointer" />
                :
                <Link href={"/Regester_user"}>
                  <button className='border-2 border-[--them2] p-[10px] rounded-lg transition-all duration-200 hover:bg-black whitespace-nowrap text-[11px] lg:text-[15px]'>ثبت نام / ورورد</button>
                </Link>
            }

            <ul ref={open_user_dropdown} className="absolute left-0 top-[4rem] leading-9 bg-[--them1] w-[0rem] h-[0rem] flex justify-center items-center flex-col rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
              <li onClick={open_and_close_dropdown_menu} className="border-b-[1px] cursor-pointer m-[5px] hover:text-[--them4] hover:bg-[--them2] w-full flex justify-center items-center">
                <Link href={"/profile_user"} className="flex justify-start items-center">
                  <span><FaUser /></span>
                  <span className="mr-[0.5rem] text-[0.8rem]">پروفایل کاربر</span>
                </Link>
              </li>
              <li onClick={open_and_close_dropdown_menu} className="border-b-[1px] cursor-pointer m-[5px] hover:text-[--them4] hover:bg-[--them2] w-full flex justify-center items-center">
                <Link href={""} className="flex justify-start items-center">
                  <span><TbShoppingCartDollar /></span>
                  <span className="mr-[0.5rem] text-[0.8rem]">خریداری شده</span>
                </Link>
              </li>
              <li onClick={open_and_close_dropdown_menu} className="border-b-[1px] lg:text-[1rem] text-[0.8rem] cursor-pointer m-[5px] hover:text-[--them4] hover:bg-[--them2] w-full flex justify-center items-center">
                <Link href={"/introduce_product"} className="whitespace-nowrap lg:text-[1rem] text-[0.8rem] flex justify-start items-center flex-row">
                  <span>
                    <FaHeart className="text-[1rem]" />
                  </span>
                  <span className="text-[1rem] mr-[0.5rem]">
                    علاقه مندی
                  </span>
                </Link>
              </li>
              <li onClick={open_and_close_dropdown_menu} className="border-b-[0px] cursor-pointer m-[5px] hover:text-[--them4] hover:bg-[--them2] w-full flex justify-center items-center">
                <span onClick={Exit_Login} className="lg:text-[1rem] text-[0.8rem] font-v-light">خروج</span>
                <span onClick={Exit_Login}><MdExitToApp className="lg:text-[1.7rem] mr-[0.5rem]" /></span>
              </li>
            </ul>


          </div>

        </div>

      </div>

    </>
  )
}

export default Header