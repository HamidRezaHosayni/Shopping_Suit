import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { TbCircleFilled } from 'react-icons/tb'
import { useFormik } from 'formik';
import * as yup from "yup"
import { useSelector } from 'react-redux';
import axios from 'axios';
import { show_popup_Element } from '@/public/js/popup_elment_form';
import { BiSolidErrorAlt } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import Pic_learnig_measurment_product from '@/public/component/suit_and_pant_order/pic_learnig_measurment_product';

function Suit_and_pants_order() {

    const is_Login = useSelector((state: any) => state.is_Login.is_Login)

    const [message_popup_notif, set_message_popup_notif] = useState({ "Message_type": "", "message": "" })
    const [Redirect_Logni, set_Redirect_Logni] = useState(null)
    const popup_element = useRef(null)
    const [price_product, set_price_product] = useState<any>(3000000)
    const [price_product1, set_price_product1] = useState<any>(3000000)
    const [show_and_close_info_fild,set_show_and_close_info_fild]=useState(false)
    const [text_content_info_fild,set_text_content_info_fild]=useState()
    const [image_content_info_fild,set_image_content_info_fild]=useState()

    const show_and_hidden_popup = () => {
        show_popup_Element(popup_element, Redirect_Logni);
    }


    const formik = useFormik({
        initialValues: {
            ghad_cot: "",
            sarshna_cot: "",
            ghad_astin: "",
            dorshakam_cot: "",
            dorsineh_cot: "",
            chakposht_cot: "",
            noea_yagha: "",


            ghad_shalvar: "",
            kamar_shalvar: "",
            andaza_basan: "",
            andaza_ran: "",
            andaza_zanoo: "",
            andaza_dampa: "",
            andaza_fagh: "",
            rang_parcheh: "",
            noye_parcheh: ""
        },
        onSubmit: (value) => {
            axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/suit_and_pant`, value, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": window.localStorage.getItem("Token_validation")
                }
            }).then((value1) => {

                const value_data = value1.data;
                if (value_data.Message_type === "successfully") {
                    const value_product = {
                        ghad_cot: value.ghad_cot,
                        sarshna_cot: value.sarshna_cot,
                        ghad_astin: value.ghad_astin,
                        dorshakam_cot: value.dorshakam_cot,
                        dorsineh_cot: value.dorsineh_cot,
                        chakposht_cot: value.chakposht_cot,
                        noea_yagha: value.noea_yagha,

                        ghad_shalvar: value.ghad_shalvar,
                        kamar_shalvar: value.kamar_shalvar,
                        andaza_basan: value.andaza_basan,
                        andaza_ran: value.andaza_ran,
                        andaza_zanoo: value.andaza_zanoo,
                        andaza_dampa: value.andaza_dampa,
                        andaza_fagh: value.andaza_fagh,
                        rang_parcheh: value.rang_parcheh,
                        noye_parcheh: price_product1
                    }
                    console.log(value_product)
                    if (window.localStorage.getItem("suit_and_pant_order")) {
                        const existingPantOrder = JSON.parse(window.localStorage.getItem("suit_and_pant_order")!);
                        const All_suit_order = [...existingPantOrder, Object.entries(value_product)]
                        window.localStorage.setItem("suit_and_pant_order", JSON.stringify(All_suit_order));
                    }
                    else {
                        window.localStorage.setItem("suit_and_pant_order", JSON.stringify([Object.entries(value_product)]));
                    }

                    set_message_popup_notif({ "Message_type": value_data.Message_type, "message": value_data.message })
                    set_Redirect_Logni(value_data.redirect)
                    show_and_hidden_popup()

                }

            }).catch((e) => {
                const value_data = e.response.data;
                console.log("errorvalidation : ", value_data.message)
                if (value_data.Message_type === "error") {
                    set_message_popup_notif({ "Message_type": value_data.Message_type, "message": value_data.message })
                    set_Redirect_Logni(value_data.redirect)
                    window.localStorage.removeItem("Token_validation")
                    show_and_hidden_popup()
                }
            })
        },
        validationSchema: yup.object({
            ghad_cot: yup.number().min(10, "قد کت نمیتواند یک عدد 1 رقمی باشد").required("این فیلد اجباری است."),
            sarshna_cot: yup.number().min(10, "سرشانه کت نمیتواند یک عدد1 رقمی باشد").required("این فیلد اجباری است."),
            ghad_astin: yup.number().min(10, "قد آستین کت نمیتواند یک عدد1 رقمی باشد").required("این فیلد اجباری است."),
            dorshakam_cot: yup.number().min(10, "دور شانه کت نمیتواند یک عدد1 رقمی باشد").required("این فیلد اجباری است."),
            dorsineh_cot: yup.number().min(10, "دور شکم کت نمیتواند یک عدد1 رقمی باشد").required("این فیلد اجباری است."),
            chakposht_cot: yup.string().required("این فیلد اجباری است."),
            noea_yagha: yup.string().required("این فیلد اجباری است."),


            ghad_shalvar: yup.number().min(10, "قد شلوار نمیتواند عدد یک رقمی باشد.").required("این فیلد اجباری است"),
            kamar_shalvar: yup.number().min(10, "کمر شلوار نمیتواند عدد یک رقمی باشد.").required("این فیلد اجباری است."),
            andaza_basan: yup.number().min(10, "اندازه باسن نمیتواند عددیک رقمی باشد.").required("این فیلد اجباری است."),
            andaza_ran: yup.number().min(10, "اندازه ران نمیتواند عدد یک رقمی باشد.").required("این فیلد اجباری است"),
            andaza_zanoo: yup.number().min(10, "اندازه زانو نمیتواند عدد یک رقمی باشد.").required("این فیلد اجباری است"),
            andaza_dampa: yup.number().min(10, "اندازه دم پانمیتواند عدد یک رقمی باشد.").required("این فیلد اجباری است."),
            andaza_fagh: yup.number().min(10, "اندازه فاق نمیتواند عدد یک رقمی باشد.").required("این فیلد اجباری است."),
            rang_parcheh: yup.string().required("این فیلد اجباری است."),
            noye_parcheh: yup.number().min(10, "اندازه فاق نمیتواند عدد یک رقمی باشد.").required("این فیلد اجباری است.")

        })
    })

    useEffect(() => {
        console.log("suit_and_pant_order")
        set_price_product(formik.values.noye_parcheh)
        set_price_product1(Number(3000000 + Number(price_product)))
    }, [formik.values.noye_parcheh, price_product]);


    const show_info_fild=(path_image:any,text_content:any)=>{
        set_image_content_info_fild(path_image)
        set_text_content_info_fild(text_content)
        set_show_and_close_info_fild(true)
    }
    const close_info_fild=()=>{
        set_show_and_close_info_fild(false)
    }


    return (
        <>
            {
                is_Login ?
                    <div className='container m-auto  flex justify-center items-center flex-col lg:p-[5rem]'>
                        <Pic_learnig_measurment_product isVisible={show_and_close_info_fild} onClose={close_info_fild} content={text_content_info_fild} pic_path={image_content_info_fild}></Pic_learnig_measurment_product>


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


                        <div>
                            <div className='lg:block hidden'>

                                <div className='flex justify-start flex-row whitespace-pre-wrap mt-[2rem]'>
                                    <span><TbCircleFilled className='text-[--them5]' /></span>
                                    <p className='text-[1rem] font-v-light mr-[10px] ml-[10px]'>توجه : در اندازه گیره محصول دقت فرمایید برای آموزش هر فیلد بر روی آیکون</p>
                                    <span><AiFillExclamationCircle /></span>
                                    <p className='text-[1rem] font-v-light mr-[10px]'>درکنار هر فیلد کلیک کنید.</p>
                                </div>


                                <div className='flex justify-start flex-row whitespace-pre-wrap mt-1'>
                                    <p className='text-[1rem] font-v-light'>شما همچنین میتوانید کلیپ آموزشی ما نسبت به این موضوع را در </p>
                                    <Link href={"/learning_measutment"} className='text-blue-600 font-v-bold'>اینجا </Link>
                                    <p className='text-[1rem] font-v-light'>مشاهده کنید.</p>
                                </div>

                                <div className=' mt-1'>
                                    <p className='text-[--them5]'>(در صورت بروز مشکل دراندازه گیری محصول مسئولیت آن با خود مشتری میباشد)</p>
                                </div>

                            </div>

                            <div className='lg:hidden block'>

                                <div className='mt-[2rem]'>

                                    <div className='flex justify-start items-center flex-row'>
                                        <TbCircleFilled className='text-[--them5]' />
                                        <p className='text-[0.68rem]'>توجه : در اندازه گیره محصول دقت فرمایید برای آموزش هر فیلد بر روی آیکون</p>
                                        <AiFillExclamationCircle className='mr-[5px]' />
                                    </div>
                                    <p className='text-[0.68rem]'>درکنار هر فیلد کلیک کنید.</p>

                                </div>


                                <div className='flex justify-start flex-row whitespace-pre-wrap mt-1 px-[2px]'>
                                    <p className='text-[0.67rem] font-v-light'>شما همچنین میتوانید کلیپ آموزشی ما نسبت به این موضوع را در </p>
                                    <Link href={""} className='text-blue-600 text-[0.68rem] font-v-bold'>اینجا </Link>
                                    <p className='text-[0.67rem] font-v-light'>مشاهده کنید.</p>
                                </div>

                                <div className=' mt-1'>
                                    <p className='text-[--them5] text-[0.67rem] '>(در صورت بروز مشکل دراندازه گیری محصول مسئولیت آن با خود مشتری میباشد)</p>
                                </div>

                            </div>
                        </div>

                        <h1 className=' lg:text-[2rem] text-[1.4rem] font-v-bold mt-[3rem]'>ثبت سفارش  کت وشلوار</h1>
                        <div className='relative border lg:w-[35rem] w-[23rem] h-[60rem] flex justify-center items-center flex-col mt-[2rem] rounded-xl bg-[--them3] shadow-lg'>
                            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className='flex justify-center items-center flex-col'>
                                {/* text suit  */}
                                <div className='flex justify-center items-center flex-row'>
                                    <hr className='w-[6rem] border border-[--them4] ml-[1rem]' />
                                    <h4 className='text-[1rem] font-v-light'>اندازه مربوط به کت</h4>
                                    <hr className='w-[6rem] border border-[--them4] mr-[1rem]' />
                                </div>

                                {/* start input suit  */}

                                <div className='flex justify-end items-center lg:w-[22rem] w-[20rem] mt-[2rem]'>
                                    <label htmlFor='ghad_cot' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> قد کت : </label>
                                    <input {...formik.getFieldProps("ghad_cot")} className={`border-2 ${formik.touched.ghad_cot && formik.errors.ghad_cot ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.ghad_cot && formik.errors.ghad_cot ? formik.errors.ghad_cot : "قد کت"}`} id='ghad_cot' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[22rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='sarshna_cot' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'>  سر شانه : </label>
                                    <input {...formik.getFieldProps("sarshna_cot")} className={`border-2 ${formik.touched.sarshna_cot && formik.errors.sarshna_cot ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.sarshna_cot && formik.errors.sarshna_cot ? formik.errors.sarshna_cot : "سرشانه"}`} id='sarshna_cot' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[22rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='ghad_astin' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> قد آستین : </label>
                                    <input {...formik.getFieldProps("ghad_astin")} className={`border-2 ${formik.touched.ghad_astin && formik.errors.ghad_astin ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.ghad_astin && formik.errors.ghad_astin ? formik.errors.ghad_astin : "قدآستین"}`} id='ghad_astin' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[22rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='dorshakam_cot' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> دور شکم : </label>
                                    <input {...formik.getFieldProps("dorshakam_cot")} className={`border-2 ${formik.touched.dorshakam_cot && formik.errors.dorshakam_cot ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.dorshakam_cot && formik.errors.dorshakam_cot ? formik.errors.dorshakam_cot : "دور شکم"}`} id='dorshakam_cot' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[22rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='dorsineh_cot' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> دور سینه : </label>
                                    <input {...formik.getFieldProps("dorsineh_cot")} className={`border-2 ${formik.touched.dorsineh_cot && formik.errors.dorsineh_cot ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.dorsineh_cot && formik.errors.dorsineh_cot ? formik.errors.dorsineh_cot : "دور سینه"}`} id='dorsineh_cot' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[22rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='chakposht_cot' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> چاک پشت : </label>
                                    <select  {...formik.getFieldProps("chakposht_cot")} className={`border-2 ${formik.touched.chakposht_cot && formik.errors.chakposht_cot ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} id='chakposht_cot'>
                                        <option value="" className=''>یک مورد را انتخاب کنید</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[22rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='noea_yagha' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> نوع یقه : </label>
                                    <select  {...formik.getFieldProps("noea_yagha")} className={`border-2  ${formik.touched.noea_yagha && formik.errors.noea_yagha ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} id='noea_yagha'>
                                        <option value="" className=''>یک مورد را انتخاب کنید</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                {/* end input suit  */}




                                {/* text pant  */}
                                <div className='flex justify-center items-center flex-row mt-[2rem]'>
                                    <hr className='w-[6rem] border border-[--them4] ml-[1rem]' />
                                    <h4 className='text-[1rem] font-v-light'>اندازه مربوط به شلوار</h4>
                                    <hr className='w-[6rem] border border-[--them4] mr-[1rem]' />
                                </div>

                                {/* start suit input  */}

                                <div className='flex justify-end items-center lg:w-[25rem] w-[20rem] mt-[2rem]'>
                                    <label htmlFor='ghad_shalvar' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> قد شلوار : </label>
                                    <input {...formik.getFieldProps("ghad_shalvar")} className={`border-2 ${formik.touched.ghad_shalvar && formik.errors.ghad_shalvar ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.ghad_shalvar && formik.errors.ghad_shalvar ? formik.errors.ghad_shalvar : "اندازه قد"}`} id='ghad_shalvar' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[25rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='kamar_shalvar' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> کمر شلوار : </label>
                                    <input {...formik.getFieldProps("kamar_shalvar")} className={`border-2 ${formik.touched.kamar_shalvar && formik.errors.kamar_shalvar ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.kamar_shalvar && formik.errors.kamar_shalvar ? formik.errors.kamar_shalvar : "اندازه کمر"}`} id='kamar_shalvar' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[25rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='andaza_basan' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'>  اندازه باسن : </label>
                                    <input {...formik.getFieldProps("andaza_basan")} className={`border-2 ${formik.touched.andaza_basan && formik.errors.andaza_basan ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.andaza_basan && formik.errors.andaza_basan ? formik.errors.andaza_basan : "اندازه باسن"}`} id='andaza_basan' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[25rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='andaza_ran' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> اندازه ران : </label>
                                    <input {...formik.getFieldProps("andaza_ran")} className={`border-2 ${formik.touched.andaza_ran && formik.errors.andaza_ran ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.andaza_ran && formik.errors.andaza_ran ? formik.errors.andaza_ran : "اندازه ران"}`} id='andaza_ran' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[25rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='andaza_zanoo' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'>  اندازه زانو : </label>
                                    <input {...formik.getFieldProps("andaza_zanoo")} className={`border-2 ${formik.touched.andaza_zanoo && formik.errors.andaza_zanoo ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.andaza_zanoo && formik.errors.andaza_zanoo ? formik.errors.andaza_zanoo : "اندازه زانو"}`} id='andaza_zanoo' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[25rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='andaza_dampa' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'>  اندازه دمپا : </label>
                                    <input {...formik.getFieldProps("andaza_dampa")} className={`border-2 ${formik.touched.andaza_dampa && formik.errors.andaza_dampa ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.andaza_dampa && formik.errors.andaza_dampa ? formik.errors.andaza_dampa : "اندازه دم پا"}`} id='andaza_dampa' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[25rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='andaza_fagh' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> اندزه فاق : </label>
                                    <input {...formik.getFieldProps("andaza_fagh")} className={`border-2 ${formik.touched.andaza_fagh && formik.errors.andaza_fagh ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.andaza_fagh && formik.errors.andaza_fagh ? formik.errors.andaza_fagh : "اندازه فاق"}`} id='andaza_fagh' type="text" />
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[25rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='rang_parcheh' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'> رنگ پارچه: </label>
                                    <select  {...formik.getFieldProps("rang_parcheh")} className={`border-2  ${formik.touched.rang_parcheh && formik.errors.rang_parcheh ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} id='rang_parcheh'>
                                        <option value="" className=''>یک مورد را انتخاب کنید</option>
                                        <option value="مشکی">مشکی</option>
                                        <option value="مشکی راه راه">مشکی راه راه </option>
                                        <option value="مشکی چهار خانه">مشکی چهارخانه</option>
                                    </select>
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>

                                <div className='flex justify-end items-center lg:w-[25rem] w-[20rem] mt-[1rem]'>
                                    <label htmlFor='noye_parcheh' className='ml-[1rem] lg:text-[1rem] text-[0.9rem] font-v-light'>جنس پارچه: </label>
                                    <select  {...formik.getFieldProps("noye_parcheh")} className={`border-2  ${formik.touched.noye_parcheh && formik.errors.noye_parcheh ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : ""} rounded-lg shadow-md outline-none`} id='noye_parcheh'>
                                        <option value="" className=''>یک مورد را انتخاب کنید</option>
                                        <option value="4500000">پارچه ترکی</option>
                                        <option value="2700000">پارچه مطهری</option>
                                        <option value="1500000">پارچه عالیجناب</option>
                                    </select>
                                    <span className='mr-[1rem]'><AiFillExclamationCircle onClick={()=>show_info_fild("/img/home_page/1.jpg","eeeeeeeeeeeeeeee")}/></span>
                                </div>


                                {/* end pant input  */}
                                <div className='mt-[2rem] flex justify-center items-center flex-row'>
                                    <button onClick={() => { console.log(formik.errors) }} type='submit' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] ml-[1rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>افزودن به سبد خرید</button>
                                    <button type='reset' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>حذف همه</button>
                                </div>
                            </form>

                        </div>


                        <div className='border bg-[--them3] lg:absolute lg:left-[5rem] mt-[3rem] shadow-lg py-[1rem] px-[2rem] rounded-lg'>
                            <p className='lg:text-[1rem] tex-[0.8rem] font-v-medium'>قیمت محصول:</p>
                            <p className='lg:text-[1rem] tex-[0.8rem] font-v-medium mt-[1rem]'>
                                <span>{Number(price_product1).toLocaleString("fa-IR")}</span>
                                <span className='mr-[0.4rem]'>تومان</span>
                            </p>
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

export default Suit_and_pants_order