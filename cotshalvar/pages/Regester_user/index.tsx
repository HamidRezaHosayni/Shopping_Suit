import Link from 'next/link'
import React, { useRef, useState } from 'react'
import axios from 'axios';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useFormik } from 'formik';
import * as yup from "yup";
import { BiSolidErrorAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import {show_popup_Element} from "@/public/js/popup_elment_form";



function Rgester() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    const [message_popup_notif,set_message_popup_notif]=useState({"Message_type":"","message":""})
    
    const popup_element=useRef(null)
    const show_and_hidden_popup=()=>{
        show_popup_Element(popup_element,null)
    }

    const formik = useFormik({

        initialValues: {

            username: "",
            password: "",
            phonenumber: "",
            email: "",

        },
        onSubmit: (value) => {
            axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/Regester`, value, {
                headers: { "Content-Type": "application/json" }
            }).then((value) => {
                console.log(value.data)
                set_message_popup_notif(value.data)
                show_and_hidden_popup()
                formik.resetForm()
            }).catch((value) => {
                console.log("this request was error : " + value)
            })

        },
        validationSchema: yup.object({
            username: yup.string().min(3, "طول این فیلد حداقل 2 کراکتر است").required("این فیلد اجباری است"),
            password: yup.string().min(5, "طول این فیلد حداقل 2 کراکتر است").required("این فیلد اجباری است"),
            phonenumber: yup.string().matches(phoneRegExp, 'شماره تلفن شما نامعتبر هست لطفا فقط از اعداد استفاده کنید.').min(10, "شماره تلفن نمیتواند کمتر از 10 کاراکتر باشد").max(16, "شماره تلفن نمیتواند بیشتر از 16 کاراکتر باشد").required("این فیلد اجباری است"),
            email: yup.string().min(5, "طول این فیلد حداقل 5 کراکتر است").required("این فیلد اجباری است").matches(emailRegex, "ایمل شما یک ایمیل نا معتبر هست لطفا اصلاح کنید")
        })
    })

    return (
        <div className='container m-auto relative flex justify-center items-center flex-col lg:p-[5rem]'>

            {/* popup in response value  */}
            <div ref={popup_element} className='lg:w-[0rem] w-[0rem] h-[0rem] absolute rounded-xl overflow-hidden bg-[--them1] border transition-all duration-300 ease-in-out'>
                <div className='w-full h-[2rem] text-[3rem] text-white mt-[3rem] flex justify-center items-center flex-row'>
                    {message_popup_notif.Message_type ==="error"? <BiSolidErrorAlt />:<FaCheckCircle />}
                </div>
                <div className='w-full h-[2rem] text-[2rem] text-white mt-[3rem] text-center flex justify-center items-center flex-row'>
                    <p className='lg:text-[1rem] text-[0.8rem] font-v-medium'>{message_popup_notif.message}</p>
                </div>
                <div onClick={show_and_hidden_popup} className='w-full h-[2rem] cursor-pointer border text-white hover:text-[--them4] hover:bg-[--them2] flex justify-center items-center mt-[3rem] font-v-medium text-[1rem]'>
                    <button className='boeder-2 border-white'>باشه</button>
                </div>
            </div>

            <h1 className=' lg:text-[2rem] text-[1.4rem] font-v-bold mt-[3rem]'>ثبت نام</h1>
            <div className='border lg:w-[35rem] w-[20rem] h-[25rem] flex justify-center items-center flex-col mt-[2rem] rounded-xl bg-[--them3] shadow-lg'>
                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className='flex justify-center items-center flex-col'>

                    <div className='flex justify-between items-center lg:w-[18rem] w-[16rem] mt-[2rem]'>
                        <label htmlFor='username' className=' lg:text-[1rem] text-[0.9rem] font-v-light'>نام کاربری : </label>
                        <input {...formik.getFieldProps("username")} className={`border-2 outline-none ${formik.touched.username && formik.errors.username ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} id='username' type="text" placeholder={`${formik.touched.username && formik.errors.username ? formik.errors.username : "نام کاربری "}`} />
                    </div>

                    <div className='flex justify-between items-center lg:w-[18rem] w-[16rem] mt-[2rem]'>
                        <label htmlFor='password' className=' lg:text-[1rem] text-[0.9rem] font-v-light'> پسورد : </label>
                        <input {...formik.getFieldProps("password")} className={`border-2 outline-none ${formik.touched.password && formik.errors.password ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} type="password" id='password' placeholder={`${formik.touched.password && formik.errors.password ? formik.errors.password : "پسورد"}`} />
                    </div>

                    <div className='flex justify-between items-center lg:w-[18rem] w-[16rem] mt-[2rem] whitespace-nowrap'>
                        <label htmlFor='phonenumber' className=' lg:text-[1rem] text-[0.9rem] font-v-light'> تلفن همراه : </label>
                        <input {...formik.getFieldProps("phonenumber")} className={`border-2 outline-none ${formik.touched.phonenumber && formik.errors.phonenumber ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} type="text" id='phonenumber' placeholder={`${formik.touched.phonenumber && formik.errors.phonenumber ? formik.errors.phonenumber : "تلفن همراه"}`} />
                    </div>

                    <div className='flex justify-between items-center lg:w-[18rem] w-[16rem] mt-[2rem]'>
                        <label htmlFor='email' className=' lg:text-[1rem] text-[0.9rem] font-v-light'> ایمیل :</label>
                        <input {...formik.getFieldProps("email")} className={`border-2 outline-none ${formik.touched.email && formik.errors.email ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} type="email" id='email' placeholder={`${formik.touched.email && formik.errors.email ? formik.errors.email : "ایمیل"}`} />
                    </div>

                    <div className='mt-[2rem] flex justify-center items-center flex-row'>
                        <button type='submit' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] ml-[1rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>ارسال</button>
                        <button type='reset' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>حذف همه</button>
                    </div>

                </form>

                {/* link login  */}
                <div className='w-full mt-[1.5rem] lg:mr-[5rem] mr-[2rem] flex justify-start items-center flex-row'>
                    <Link href={"/Login-user"} className=''>ورود کاربر</Link>
                    <span className='mr-[0.5rem]'><FaArrowLeftLong /></span>
                </div>
            </div>

        </div>
    )
}

export default Rgester