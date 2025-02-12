import React, {  useRef, useState } from 'react'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from 'axios';
import { show_popup_Element } from '@/public/js/popup_elment_form';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';

function Loginpage() {

    const [message_popup_notif, set_message_popup_notif] = useState({ "Message_type": "", "message": "" })
    const [Redirect_Logni, set_Redirect_Logni] = useState(null)

    const popup_element = useRef(null)

    const show_and_hidden_popup = () => {
        show_popup_Element(popup_element, Redirect_Logni);
    }


    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (value) => {
            axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/Login`, value, {
                headers: { "Content-Type": "application/json" }
            }).then((value_request) => {
                console.log(value_request.data)
                const token = value_request.data.vrify_Login?.jwt === undefined ? "token no exsist" : value_request.data.vrify_Login.jwt;
                localStorage.setItem("Token_validation", token)
                set_message_popup_notif(value_request.data)
                set_Redirect_Logni(value_request.data.vrify_Login?.redirect)
                show_and_hidden_popup()
            })
        },
        validationSchema: yup.object({
            username: yup.string().min(2, "نام کاربری نمیتواند کمتر از 2 کاراکتر باشد").required("پرکردن این فیلد اجباری است"),
            password: yup.string().min(5, "پسورد نمیتواند کمتر از 5 کاراکتر باشد").required("پرکردن این فیلد اجباری است")
        })
    })


    return (
        <>
            <div className='container m-auto  flex justify-center items-center flex-col lg:p-[5rem]'>


                {/* popup in response value  */}
                <div ref={popup_element} className='lg:w-[0rem] w-[0rem] h-[0rem] absolute rounded-xl overflow-hidden bg-[--them1] border transition-all duration-300 ease-in-out'>
                    <div className='w-full h-[2rem] text-[3rem] text-white mt-[3rem] flex justify-center items-center flex-row'>
                        {message_popup_notif.Message_type === "error" ? <BiSolidErrorAlt /> : <FaCheckCircle />}
                    </div>
                    <div className='w-full h-[2rem] text-[2rem] text-white mt-[3rem] flex justify-center items-center flex-row'>
                        <p className='lg:text-[1rem] text-[0.8rem] font-v-medium'>{message_popup_notif.message}</p>
                    </div>
                    <div onClick={show_and_hidden_popup} className='w-full h-[2rem] cursor-pointer border text-white hover:text-[--them4] hover:bg-[--them2] flex justify-center items-center mt-[3rem] font-v-medium text-[1rem]'>
                        <button className='boeder-2 border-white'>باشه</button>
                    </div>
                </div>


                <h1 className=' lg:text-[2rem] text-[1.4rem] font-v-bold mt-[3rem]'>ورود </h1>
                <div className='border lg:w-[30rem] w-[20rem] h-[20rem] flex justify-center items-center flex-col mt-[2rem] rounded-xl bg-[--them3] shadow-lg'>
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
                    <div className='w-full mt-[1.5rem] lg:mr-[5rem] mr-[2rem] flex justify-start items-center flex-row'>
                        <Link href={"/Regester_user"} className=''>ثبت نام کاربر</Link>
                        <span className='mr-[0.5rem]'><FaArrowLeftLong /></span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Loginpage