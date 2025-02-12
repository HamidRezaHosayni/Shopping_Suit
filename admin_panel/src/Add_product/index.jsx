import axios from 'axios'
import React, { useEffect } from 'react'
import * as yup from "yup";
import { useFormik, validateYupSchema } from 'formik';
import { useSelector, useDispatch } from 'react-redux'
import Login_slice from '../redux/Login_Slice_redux';
import { MdCloudUpload } from "react-icons/md";

function Add_product_page() {


  const is_Login = useSelector((state) => state.is_Login.is_Login)
  const dispatch = useDispatch()

  const Authorization_token = window.localStorage.getItem("Token_validation")
  useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_KEY}/varefiy_jwt`, Authorization_token, {
      headers: {
        "authorization": Authorization_token
      }
    }).then((value) => {
      console.log(value.data)
      if (window.localStorage.getItem("Token_validation")) {
        dispatch(Login_slice.actions.is_Login(window.localStorage.getItem("Token_validation")))
      }
      else {
        window.localStorage.removeItem("Token_validation")
        dispatch(Login_slice.actions.is_Login(null))
        window.location.replace(value.data.redirect)
      }
    }).catch((e) => {
      console.log(e.response.data)
      window.localStorage.removeItem("Token_validation")
      dispatch(Login_slice.actions.is_Login(null))
      window.location.replace(e.response.data.redirect)
    })
    console.log("Add_product_page")
  }, [dispatch])


  const formik = useFormik({
    initialValues: {
      name_product: "",
      price_product: "",
      color_suit: "",
      fabric_material: "",
      discription_product: "",
      uploadfile: []
    },
    onSubmit: async (value) => {
      try {
        const formData = new FormData();
        formData.append("name_product", value.name_product);
        formData.append("price_product", value.price_product);
        formData.append("color_suit", value.color_suit);
        formData.append("fabric_material", value.fabric_material);
        formData.append("discription_product", value.discription_product);
        value.uploadfile.forEach((value, index) => {
          formData.append("uploadfile" + index, value)
        })

        await fetch(`${process.env.REACT_APP_API_KEY}/add_product`, {
          method: "POST",
          'Content-Type': 'multipart/form-data',
          body: formData
        }).then((data) => {
          console.log(JSON.stringify(data));
          formik.resetForm()
        })
      } catch (e) { console.log(e) }



    },
    validationSchema: yup.object({
      name_product: yup.string().min(2, "نام کاربری نمیتواند کمتر از 2 کاراکتر باشد").required("پرکردن این فیلد اجباری است"),
      price_product: yup.string().min(5, "پسورد نمیتواند کمتر از 5 کاراکتر باشد").required("پرکردن این فیلد اجباری است"),
      color_suit: yup.string().min(5, "پسورد نمیتواند کمتر از 5 کاراکتر باشد").required("پرکردن این فیلد اجباری است"),
      fabric_material: yup.string().min(5, "پسورد نمیتواند کمتر از 5 کاراکتر باشد").required("پرکردن این فیلد اجباری است"),
      discription_product: yup.string().min(5, "پسورد نمیتواند کمتر از 5 کاراکتر باشد").required("پرکردن این فیلد اجباری است")
    })
  })

  const handel_send_file = (e) => {
    formik.setFieldValue("uploadfile", Array.from(e.target.files))
  }

  return (
    <div>
      <div className='flex justify-center items-center h-[100vh]'>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className='flex justify-center items-center flex-col'>

          <div className='flex justify-between items-center lg:w-[20rem] w-[16rem] mt-[2rem]'>
            <label htmlFor='name_product' className=' lg:text-[1rem] text-[0.9rem] font-v-light'>نام محصول  : </label>
            <input {...formik.getFieldProps('name_product')} className={`border-2 ${formik.touched.name_product && formik.errors.name_product ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md outline-none`} id='name_product' type="text" placeholder={`${formik.touched.name_product && formik.errors.name_product ? formik.errors.name_product : "نام محصول "}`} />
          </div>

          <div className='flex justify-between items-center lg:w-[20rem] w-[16rem] mt-[2rem]'>
            <label htmlFor='price_product' className=' lg:text-[1rem] text-[0.9rem] font-v-light'> قیمت محصول : </label>
            <input {...formik.getFieldProps('price_product')} className={`border-2 ${formik.touched.price_product && formik.errors.price_product ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.price_product && formik.errors.price_product ? formik.errors.price_product : "قیمت محصول"}`} type="text" id='price_product' />
          </div>

          <div className='flex justify-between items-center lg:w-[20rem] w-[16rem] mt-[2rem]'>
            <label htmlFor='color_suit' className=' lg:text-[1rem] text-[0.9rem] font-v-light'>  رنگ پارچه : </label>
            <input {...formik.getFieldProps('color_suit')} className={`border-2 ${formik.touched.color_suit && formik.errors.color_suit ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.color_suit && formik.errors.color_suit ? formik.errors.color_suit : "رنگ پارچه"}`} type="text" id='color_suit' />
          </div>

          <div className='flex justify-between items-center lg:w-[20rem] w-[16rem] mt-[2rem]'>
            <label htmlFor='fabric_material' className=' lg:text-[1rem] text-[0.9rem] font-v-light'>  جنس پارچه : </label>
            <input {...formik.getFieldProps('fabric_material')} className={`border-2 ${formik.touched.fabric_material && formik.errors.fabric_material ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.fabric_material && formik.errors.fabric_material ? formik.errors.fabric_material : "جنس پارچه"}`} type="text" id='passeord' />
          </div>


          <div className='flex justify-between flex-col lg:w-[20rem] w-[16rem] mt-[2rem]'>
            <label htmlFor='discription_product' className='lg:text-[1rem] text-[0.9rem] font-v-light'> توضیحات محصول : </label>
            <textarea  {...formik.getFieldProps('discription_product')} defaultValue="" {...formik.getFieldProps('discription_product')} className={`border-2 mt-2 ${formik.touched.discription_product && formik.errors.discription_product ? "border-red-600 placeholder:text-[--them5] placeholder:text-[0.7rem] indent-1" : "placeholder:text-[0.9rem] indent-1"} rounded-lg shadow-md outline-none`} placeholder={`${formik.touched.discription_product && formik.errors.discription_product ? formik.errors.discription_product : " توضیحات محصول"}`} id='discription_product'></textarea>
          </div>

          <div className="flex items-center justify-center mt-[1rem]" >
            <label htmlFor="fileselect" className="lg:w-[20rem] w-[16rem] relative flex flex-col items-center px-4 py-6 rounded-lg border shadow-lg cursor-pointer overflow-hidden  bg-gray-100">
              <MdCloudUpload className='w-[30px] h-[30px]' />
              <span className="mt-2 text-base leading-normal lg:text-[1rem] text-[0.8rem] font-v-light">فایل مورد نظر خود را وارد یا بکشید</span>

              <input id='fileselect' onChange={handel_send_file} name='uploadfile' type='file' className='mt-2 w-full h-full z-10 cursor-pointer lg:text-[1rem] text-[0.8rem] font-v-light' multiple />

            </label>
          </div>


          <div className='mt-[2rem] flex justify-center items-center flex-row'>
            <button type='submit' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] ml-[1rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'> ارسال</button>
            <button type='reset' className='border shadow-md lg:px-[0.5rem] px-[0.5rem] lg:py-[0.4rem] py-[0.3rem] rounded-xl lg:text-[1rem] text-[0.8rem] font-v-light bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>حذف همه</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Add_product_page