import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import * as yup from "yup";


function Contact_me() {

    const formik = useFormik({
        initialValues: {
            phone_number: "",
            email: "",
            discription_contact_me: "",
        },
        onSubmit: (value) => {
            axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/route_contact_me`, value, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": window.localStorage.getItem("Token_validation")
                }
            }).then((value_request) => {
                console.log(value_request)
            }).catch((err) => {
                console.log(err)
            })
        },
        validationSchema: yup.object({

            phone_number: yup.string().min(5, "پسورد نمیتواند کمتر از 5 کاراکتر باشد").required("پرکردن این فیلد اجباری است"),
            email: yup.string().min(5, "پسورد نمیتواند کمتر از 5 کاراکتر باشد").required("پرکردن این فیلد اجباری است").email(),
            discription_contact_me: yup.string().min(5, "پسورد نمیتواند کمتر از 5 کاراکتر باشد").required("پرکردن این فیلد اجباری است")

        })

    })


    return (
        <>
            <div className='container m-auto flex justify-center items-center'>
                <h1 className=' lg:text-[2rem] text-[1.4rem] font-v-bold mt-[3rem]'>ارتباط با ما</h1>
            </div>
            <div className='container m-auto flex justify-center items-center'>
                <div className='relative lg:w-[35rem] w-[23rem] h-[28rem] flex justify-start items-center flex-col mt-[2rem] rounded-xl bg-[--them3] shadow-lg overflow-y-scroll'>
                    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className='flex justify-center items-start flex-col '>

                        <div className='flex justify-start items-start flex-col '>

                            <div className='flex justify-start items-center lg:w-[25rem] w-[20rem] mt-[2rem]'>
                                <label htmlFor='phone_number' className='ml-[2rem] lg:text-[1rem] text-[0.9rem] font-v-light'> شماره همراه : </label>
                                <input {...formik.getFieldProps("phone_number")} className={`border-2 ${formik.touched.phone_number && formik.errors.phone_number ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.phone_number && formik.errors.phone_number ? formik.errors.phone_number : "شماره همراه"}`} id='phone_number' type="text" />
                            </div>

                            <div className='flex justify-start items-center lg:w-[25rem] w-[20rem] mt-[1rem]'>
                                <label htmlFor='email' className='ml-[5rem] lg:text-[1rem] text-[0.9rem] font-v-light'> ایمیل: </label>
                                <input {...formik.getFieldProps("email")} className={`border-2 ${formik.touched.email && formik.errors.email ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.email && formik.errors.email ? formik.errors.email : "ایمیل"}`} id='email' type="text" />
                            </div>

                        </div>

                        <div className='flex justify-end items-end flex-col lg:w-[22rem] w-[20rem] mt-[2rem]'>
                            <label htmlFor='discription_contact_me' className='w-full text-right lg:text-[1rem] text-[0.9rem] font-v-light'> توضیحات : </label>
                            <textarea {...formik.getFieldProps('discription_contact_me')}  className='resize-y lg:w-[22rem] w-[20rem] lg:max-w-[22rem] max-w-[20rem] rounded-lg indent-2 mt-[1rem]' name="discription_contact_me" id="discription_contact_me"></textarea>
                        </div>

                        <button type='submit' className='border shadow-md mt-[2rem] lg:px-[1rem] px-[1rem] lg:py-[0.5rem] py-[0.3rem] rounded-xl lg:text-[1rem] text-[0.9rem] font-v-medium bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'> ارسال گزارش </button>
                    </form>

                </div>
            </div>


        </>
    )
}

export default Contact_me