import React from 'react'
import { useRef } from 'react';
import { get_menu_list } from '../library/js/menu_js';
import { useSelector } from 'react-redux'
import { Outlet, Link } from "react-router-dom";



function Menu_page({ children }) {
  const is_Login = useSelector((state) => state.is_Login.is_Login)

  const list_Element = useRef();
  const list_Element2 = useRef();
  const get_item_menu_list = () => {
    get_menu_list(list_Element, list_Element2)
  }


  return (
    <div className='relative w-full overflow-x-hidden'>

      <div className='text-right'>
        {
          is_Login ?
            <nav className='bg-slate-300 w-[20rem] h-[100vh] fixed right-0'>
              <ul ref={list_Element} className='leading-10 w-full'>
                <Link to={"/Home_page"} ref={list_Element2} onClick={get_item_menu_list} className='bg-slate-600  cursor-pointer !w-full !inline-block p-[1rem] text-center text-white font-v-medium'>صفحه اصلی</Link>
                <Link to={"/Add_product"} ref={list_Element2} onClick={get_item_menu_list} className='bg-slate-600  cursor-pointer !w-full !inline-block p-[1rem] text-center text-white font-v-medium'>اضافه کردن محصول</Link>
                <Link to={"/Home_page"} ref={list_Element2} onClick={get_item_menu_list} className='bg-slate-600  cursor-pointer !w-full !inline-block p-[1rem] text-center text-white font-v-medium'>صفحه اصلی</Link>
                <Link to={"/Home_page"} ref={list_Element2} onClick={get_item_menu_list} className='bg-slate-600  cursor-pointer !w-full !inline-block p-[1rem] text-center text-white font-v-medium'>صفحه اصلی</Link>
                <Link to={"/Home_page"} ref={list_Element2} onClick={get_item_menu_list} className='bg-slate-600  cursor-pointer !w-full !inline-block p-[1rem] text-center text-white font-v-medium'>صفحه اصلی</Link>
                <Link to={"/Home_page"} ref={list_Element2} onClick={get_item_menu_list} className='bg-slate-600  cursor-pointer !w-full !inline-block p-[1rem] text-center text-white font-v-medium'>صفحه اصلی</Link>
                
              </ul>
             
            </nav>
            
            :
            <div>
              
            </div>
        }
      </div>

      <div className='bg-slate-300 relative right-[20rem] min-h-[100vh]'>
        {children}
      </div>
      <Outlet />

    </div>
  )
}

export default Menu_page