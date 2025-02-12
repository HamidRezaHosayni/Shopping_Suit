import React from 'react';
import * as yup from "yup";
import { useFormik } from 'formik';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import Login_slice from '../redux/Login_Slice_redux';

function Regester_admin() {

  const is_Login = useSelector((state) => state.is_Login.is_Login)
  const dispatch = useDispatch()
  if (window.localStorage.getItem("Token_validation")) {
    dispatch(Login_slice.actions.is_Login(window.localStorage.getItem("Token_validation")))
  }
  
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: (value) => {
      axios.post(`${process.env.REACT_APP_API_KEY}/Regester_Admin_Route`, value, {
        headers: { "Content-Type": "application/json" }
      }).then((value) => {

        window.localStorage.setItem("Token_validation", value.data.vrify_Login.jwt)
        dispatch(Login_slice.actions.is_Login(value.data.vrify_Login.jwt))

      }).catch((value) => {
        console.log("error request data in login_admin : \n" + value)
      })
    },
    validationSchema: yup.object({
      username: yup.string().min(2, "نام کاربری نمیتواند کمتر از 2 کاراکتر باشد").required("پرکردن این فیلد اجباری است"),
      password: yup.string().min(5, "پسورد نمیتواند کمتر از 5 کاراکتر باشد").required("پرکردن این فیلد اجباری است")
    })
  })


  return (
    <div className='flex justify-center items-center border h-[100vh]'>
      <div className='bg-[--them3] p-[3rem] rounded-xl shadow-lg'>
        {
          is_Login ?
            <div>
              <p>شما با موفقیت وارد شدید</p>
            </div>
            :
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className='flex justify-center items-center flex-col'>

              <div className='flex justify-between items-center lg:w-[17rem] w-[16rem] mt-[2rem]'>
                <label htmlFor='username' className=' lg:text-[1rem] text-[0.9rem] font-v-light'>نام کاربری : </label>
                <input {...formik.getFieldProps('username')} className={`border-2 ${formik.touched.username && formik.errors.username ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md outline-none`} id='username' type="text" placeholder={`${formik.touched.username && formik.errors.username ? formik.errors.username : "نام کاربری "}`} />
              </div>

              <div className='flex justify-between items-center lg:w-[17rem] w-[16rem] mt-[2rem]'>
                <label htmlFor='password' className=' lg:text-[1rem] text-[0.9rem] font-v-light'> پسورد : </label>
                <input {...formik.getFieldProps('password')} className={`border-2 ${formik.touched.password && formik.errors.password ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.password && formik.errors.password ? formik.errors.password : "پسورد"}`} type="password" id='passeord' />
              </div>

              <div className='mt-[2rem] flex justify-center items-center flex-row'>
                <button type='submit' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] ml-[1rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'> ارسال</button>
                <button type='reset' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>حذف همه</button>
              </div>

            </form>
        }

      </div>
    </div>
  )

}

export default Regester_admin