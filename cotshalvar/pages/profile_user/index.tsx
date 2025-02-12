import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik';
import * as yup from "yup";
import { show_popup_Element } from "@/public/js/popup_elment_form";
import axios from 'axios';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';

function Profile_user() {

    const [profile_user_data, set_profile_user_data] = useState<any>()
    const [message_popup_notif, set_message_popup_notif] = useState({ "Message_type": "", "message": "" })

    const popup_element = useRef(null)
    const show_and_hidden_popup = () => {
        show_popup_Element(popup_element, null)
    }

    const id_user = useSelector((state: any) => state.is_Login.Token_Login)
    const is_Login = useSelector((state: any) => state.is_Login.is_Login)

    useEffect(() => {
        console.log("profile_user")
        axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/profile_user`, { "id_user": id_user }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": window.localStorage.getItem("Token_validation") ?? ""
            }
        }).then((value) => {
            set_profile_user_data(value.data.value)
            // console.log(value)
        }).catch((e) => {
            console.log(e)
            console.log(id_user)
        })
    }, [id_user])


    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

    const formik = useFormik({

        initialValues: {

            username: profile_user_data?.username ?? "",
            password: profile_user_data?.password ?? "",
            phonenumber: profile_user_data?.phonenumber ?? "",
            email: profile_user_data?.email ?? "",
            Address: profile_user_data?.Address ?? "",
            Postal_Address: profile_user_data?.Pstal_Address ?? "",

        },
        onSubmit: (value) => {

            const send_update_profile = {
                id: profile_user_data?.id,
                username: value.username === "" || value.username === null ? profile_user_data?.username : value.username,
                password: value.password === "" || value.password === null ? profile_user_data?.password : value.password,
                phonenumber: value.phonenumber === "" || value.phonenumber === null ? profile_user_data?.phonenumber : value.phonenumber,
                email: value.email === "" || value.email === null ? profile_user_data?.email : value.email,
                Address: value.Address === "" || value.Address === null ? profile_user_data?.Address : value.Address,
                Postal_Address: value.Postal_Address === "" || value.Postal_Address === null ? profile_user_data?.Pstal_Address : value.Postal_Address
            }
            
            axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/update_profile_user`, send_update_profile, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": window.localStorage.getItem("Token_validation") ?? ""
                }
            }).then((value) => {
                console.log(value.data)
                set_message_popup_notif(value.data)
                show_and_hidden_popup()
                formik.resetForm()
            }).catch((value) => {
                console.log("this request was error : " + value)
                console.log(value)
                return;
            })

        },
        validationSchema: yup.object({
            username: yup.string().min(3, "طول این فیلد حداقل 2 کراکتر است"),
            password: yup.string().min(5, "طول این فیلد حداقل 2 کراکتر است"),
            phonenumber: yup.string().matches(phoneRegExp, 'شماره تلفن شما نامعتبر هست لطفا فقط از اعداد استفاده کنید.').min(10, "شماره تلفن نمیتواند کمتر از 10 کاراکتر باشد").max(16, "شماره تلفن نمیتواند بیشتر از 16 کاراکتر باشد"),
            email: yup.string().min(5, "طول این فیلد حداقل 5 کراکتر است").matches(emailRegex, "ایمل شما یک ایمیل نا معتبر هست لطفا اصلاح کنید"),
            Address: yup.string().min(3, "طول این فیلد حداقل 2 کراکتر است"),
            Postal_Address: yup.string().min(3, "طول این فیلد حداقل 2 کراکتر است")
        })
    })

    return (
        <>
            {is_Login ?
                <div className='container m-auto relative flex justify-center items-center flex-col lg:p-[5rem]'>

                    {/* popup in response value  */}
                    <div ref={popup_element} className='lg:w-[0rem] w-[0rem] h-[0rem] z-[10] absolute rounded-xl overflow-hidden bg-[--them1] border transition-all duration-300 ease-in-out'>
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


                    <h1 className=' lg:text-[2rem] text-[1.4rem] font-v-bold mt-[3rem]'>اطلاعات کاربری</h1>
                    <div className='border lg:w-[35rem] w-[20rem] h-[30rem] flex justify-center items-center flex-col mt-[2rem] rounded-xl bg-[--them3] shadow-lg'>
                        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className='flex justify-center items-center flex-col'>

                            <div className='flex justify-between items-center lg:w-[17rem] w-[16rem] mt-[2rem]'>
                                <label htmlFor='username' className=' lg:text-[1rem] text-[0.9rem] font-v-light'>نام کاربری : </label>
                                <input readOnly {...formik.getFieldProps("username")} className={`border-2 outline-none ${formik.touched.username && formik.errors.username ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} id='username' type="text" placeholder={`${formik.touched.username && formik.errors.username ? formik.errors.username : profile_user_data?.username ?? "نام کاربری "}`} />
                            </div>

                            <div className='flex justify-between items-center lg:w-[17rem] w-[16rem] mt-[2rem]'>
                                <label htmlFor='password' className=' lg:text-[1rem] text-[0.9rem] font-v-light'> پسورد : </label>
                                <input readOnly {...formik.getFieldProps("password")} className={`border-2 outline-none ${formik.touched.password && formik.errors.password ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} type="password" id='password' placeholder={`${formik.touched.password && formik.errors.password ? formik.errors.password : "***********"}`} />
                            </div>

                            <div className='flex justify-between items-center lg:w-[17rem] w-[16rem] mt-[2rem]'>
                                <label htmlFor='phonenumber' className=' lg:text-[1rem] text-[0.9rem] font-v-light'> تلفن همراه : </label>
                                <input {...formik.getFieldProps("phonenumber")} className={`border-2 outline-none ${formik.touched.phonenumber && formik.errors.phonenumber ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} type="text" id='phonenumber' placeholder={`${formik.touched.phonenumber && formik.errors.phonenumber ? formik.errors.phonenumber : profile_user_data?.phonenumber ?? "تلفن همراه"}`} />
                            </div>

                            <div className='flex justify-between items-center lg:w-[17rem] w-[16rem] mt-[2rem]'>
                                <label htmlFor='email' className=' lg:text-[1rem] text-[0.9rem] font-v-light'> ایمیل :</label>
                                <input {...formik.getFieldProps("email")} className={`border-2 outline-none ${formik.touched.email && formik.errors.email ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} type="email" id='email' placeholder={`${formik.touched.email && formik.errors.email ? formik.errors.email : profile_user_data?.email ?? "ایمیل"}`} />
                            </div>

                            <div className='flex justify-between items-center lg:w-[17rem] w-[16rem] mt-[2rem]'>
                                <label htmlFor='Address' className=' lg:text-[1rem] text-[0.9rem] font-v-light'> آدرس :</label>
                                <input {...formik.getFieldProps("Address")} className={`border-2 outline-none ${formik.touched.Address && formik.errors.Address ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} type="Address" id='Address' placeholder={`${formik.touched.Address && formik.errors.Address ? formik.errors.Address : profile_user_data?.Address ?? "آدرس"}`} />
                            </div>

                            <div className='flex justify-between items-center lg:w-[17rem] w-[16rem] mt-[2rem]'>
                                <label htmlFor='Postal_Address' className=' lg:text-[1rem] text-[0.9rem] font-v-light'>  آدرس پستی:</label>
                                <input {...formik.getFieldProps("Postal_Address")} className={`border-2 outline-none ${formik.touched.Postal_Address && formik.errors.Postal_Address ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md`} type="Postal_Address" id='Postal_Address' placeholder={`${formik.touched.Postal_Address && formik.errors.Postal_Address ? formik.errors.Postal_Address : profile_user_data?.Pstal_Address ?? "آدرس پستی"}`} />
                            </div>

                            <div className='mt-[2rem] flex justify-center items-center flex-row'>
                                <button type='submit' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] ml-[1rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>ارسال</button>
                                <button type='reset' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>حذف همه</button>
                            </div>

                        </form>

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

export default Profile_user