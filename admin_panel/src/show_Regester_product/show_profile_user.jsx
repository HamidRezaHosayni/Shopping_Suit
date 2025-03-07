import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import Login_slice from '../redux/Login_Slice_redux';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";



function Show_profile_user() {

  const location = useLocation();
  const { id_product } = location.state; // استفاده از مقدار پیش‌فرض برای جلوگیری از خطا
  const is_Login = useSelector((state) => state.is_Login.is_Login)
  const dispatch = useDispatch()
  const [profile,set_profile]=useState([])
  const navigate = useNavigate()
  

  const Authorization_token = window.localStorage.getItem("Token_validation")
  useEffect(() => {
      axios.post(`${process.env.REACT_APP_API_KEY}/varefiy_jwt`, Authorization_token, {
        headers: {
          "authorization": Authorization_token
        }
      }).then((value) => {
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
    }, [dispatch])
  
  useEffect(()=>{
    
    axios.post(`${process.env.REACT_APP_API_KEY}/show_info_user_product`,{id_product}, {
          headers: {
            "authorization": Authorization_token
          }
        }).then((value) => {
          // console.log(value.data.profile_user[0])
          set_profile(value.data.profile_user[0])
        }).catch((e) => {
          console.log(e)
         })

       },[id_product])    

       const handleBack = () => {
        navigate(-1); // بازگشت به صفحه قبلی
    }

  
  return (
    <>
      {
      is_Login ? 
      
      <div className='container mr-0 ml-auto my-auto'>
         <span onClick={handleBack} className='cursor-pointer select-none border-2 rounded-lg p-3 flex justify-center items-center '> 
                        <span className='ml-2'>بازگشت</span>
                         <FaArrowLeft />
                    </span>
           <table style={{}}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '5px' }}>نام کاربری</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>رمز عبور</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>ایمیل</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>شماره تلفن</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>آدرس</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>کد پستی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>{profile.username}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{profile.password}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{profile.email}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{profile.phonenumber}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{profile.Address}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{profile.Pstal_Address}</td>
              </tr>
            </tbody>
          </table>
      </div>
      
      :
      <p>لطفا دوباره وارد شوید .</p>
      }
    </>
  )
}

export default Show_profile_user