import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Login_slice from '../redux/Login_Slice_redux';
import { useNavigate } from 'react-router-dom';


function Show_Regester_product() {


  const [Rgester_product,set_Rgester_product]=useState()
  

  const is_Login = useSelector((state) => state.is_Login.is_Login)
  const dispatch = useDispatch()
  const navigate = useNavigate();


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
      axios.post(`${process.env.REACT_APP_API_KEY}/show_Regester_product`, {
            headers: {
              "authorization": Authorization_token
            }
          }).then((value) => {
            set_Rgester_product(value.data.pyment_product)
          }).catch((e) => {
            console.log(e)
           })
    },[])


 const handleButtonClick = (product) => {
        navigate('/Show_product', { state: { product } });
    };

  const handleShowProfileUser=(id_product)=>{
    navigate("/Show_profile_user",{state:{id_product}})
  }
  const delete_Regester_product_user=(value)=>{
    axios.post(`${process.env.REACT_APP_API_KEY}/delete_Regester_product`,{value}, {
      headers: {
        "authorization": Authorization_token
      }
    }).then((value) => {
      console.log(value)
    }).catch((e) => {
      console.log(e)
     })

  }


    return (
    <div>
      {is_Login ?
        <div className='border min-w-[90%] mx-4 p-4 min-h-[5rem]'>
            {
              Rgester_product?.map((value,index)=>(   
                <div key={index} className='border rounded-lg shadow-lg my-4 px-4 w-[80%] h-[3rem] flex justify-between items-center'>
                      <div>
                            <span>سفارش شماره :</span>
                            <span>{index}</span>
                      </div>
                      <div>
                            <span>وضعیت محصول : </span>
                            <span>{value.status}</span>
                      </div>
                      <div>
                            <button className='border p-2 rounded-md bg-green-500' onClick={()=>handleShowProfileUser(value.id)}>اطلاعات مشتری</button>
                            <button className='border p-2 rounded-md bg-blue-500' onClick={() => handleButtonClick(value)}> نمایش سفارش</button>
                            <button className='border p-2 rounded-md bg-red-500' onClick={()=>delete_Regester_product_user(value.id)}>حذف محصول</button>

                      </div>
                </div>
              ))
            }

        </div>
        :
        <div>
          <p>اعتبار ورود شما به اتمام رسیده لطفا مجدد وارد شوید</p>
        </div>
      }

    </div>
  )
}

export default Show_Regester_product