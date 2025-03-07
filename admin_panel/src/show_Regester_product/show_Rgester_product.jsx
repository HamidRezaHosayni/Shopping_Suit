import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Login_slice from '../redux/Login_Slice_redux';
import axios from 'axios'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function Show_product() {


  const is_Login = useSelector((state) => state.is_Login.is_Login)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Authorization_token = window.localStorage.getItem("Token_validation")
  useEffect(() => {
      console.log("home_page")
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
  

      const location = useLocation();
      const { product } = location.state;
      const [pant_order,set_pant_order]=useState(JSON.parse(JSON.parse(product.pant_order)));
      const [shopping_westbasket,set_shopping_westbasket]=useState(JSON.parse(JSON.parse(product.shopping_westbasket)));
      const [suit_and_pant_order,set_suit_and_pant_order]=useState(JSON.parse(JSON.parse(product.suit_and_pant_order)));
      const [suit_order,set_suit_order]=useState(JSON.parse(JSON.parse(product.suit_order)));
        
    const handleBack = () => {
        navigate(-1); // بازگشت به صفحه قبلی
    }
console.log(shopping_westbasket)
  return (
    <div>
      {is_Login ?
        <div className='container m-auto flex justify-start items-center flex-col '>
            <span onClick={handleBack} className='cursor-pointer select-none border-2 rounded-lg p-3 flex justify-center items-center mt-4 '> 
                <span className='ml-2'>بازگشت</span>
                 <FaArrowLeft />
            </span>

          {/* product saed and product information  */}
          <div className=' lg:w-[80%] w-full min-h-[10rem] mt-[2rem] flex justify-center items-center flex-col'>


              {/* show pand order if exists */}
              {
                  pant_order ? pant_order.map((value, index) => ( //map array pant order

                      <div key={index} className='w-[100%] mt-5 p-[2rem] border flex justify-center items-center lg:justify-between lg:items-start flex-col lg:flex-row shadow-lg rounded-lg' >

                          <table className='lg:text-[1rem] text-[0.8rem] lg:mr-[2rem] leading-9 mt-[2rem] whitespace-nowrap '>
                              <tbody>

                                  <tr>
                                      <th>اندازه شلوار : </th>
                                      <td className='border-l-2 pl-[1rem]'>{value[5][1]}</td>
                                      <th className='pr-[1rem]'>اندازه کمر :</th>
                                      <td>{value[6][1]}</td>
                                  </tr>
                                  <tr>
                                      <th>  اندازه باسن : </th>
                                      <td className='border-l-2'>{value[0][1]}</td>
                                      <th>اندازه ران :</th>
                                      <td>{value[3][1]}</td>
                                  </tr>
                                  <tr>
                                      <th>اندازه زانو : </th>
                                      <td className='border-l-2'>{value[4][1]}</td>
                                      <th>اندازه دمپا  :</th>
                                      <td>{value[1][1]}</td>
                                  </tr>
                                  <tr>
                                      <th> اندازه فاق : </th>
                                      <td className='border-l-2'>{value[2][1]}</td>
                                      <th> رنگ پارچه : </th>
                                      <td className=''>{value[8][1]}</td>

                                  </tr>
                                  <tr>
                                      <th>  جنس پارچه : </th>
                                      <td className='border-l-2'>{value[7][1]}</td>


                                  </tr>

                              </tbody>
                          </table>
                      </div>
                  ))
                      : null}



              {/* show suit orders if exists  */}
              {
                  suit_order ? suit_order.map((value, index) => ( //map array pant order

                      <div key={index} className='w-[100%] mt-5 p-[2rem] border flex  justify-center items-center lg:justify-between lg:items-start flex-col lg:flex-row shadow-lg rounded-lg' >
                          

                          <table className='lg:text-[1rem] text-[0.8rem] lg:mr-[2rem] leading-9 mt-[2rem] whitespace-nowrap'>
                              <tbody>

                                  <tr>
                                      <th> اندازه قد کت : </th>
                                      <td className='border-l-2'>{value[4][1]}</td>
                                      <th className='pr-[1rem]'>اندازه سر شانه کت :</th>
                                      <td>{value[8][1]}</td>
                                  </tr>
                                  <tr>
                                      <th> قد آستین : </th>
                                      <td className='border-l-2'>{value[3][1]}</td>
                                      <th> دورشکم کت :</th>
                                      <td>{value[1][1]}</td>
                                  </tr>
                                  <tr>
                                      <th> دورسینه کت : </th>
                                      <td className='border-l-2'>{value[2][1]}</td>
                                      <th>چاک پشت :</th>
                                      <td>{value[0][1]}</td>
                                  </tr>
                                  <tr>
                                      <th> نوع یقه کت : </th>
                                      <td className='border-l-2 pl-[1rem]'>{value[5][1]}</td>
                                      <th> رنگ پارچه : </th>
                                      <td className=''>{value[7][1]}</td>

                                  </tr>
                                  <tr>
                                      <th> قیمت محصول : </th>
                                      <td className='border-l-2 pl-[1rem]'>{value[6][1]}</td>

                                  </tr>
                                 
                              </tbody>
                          </table>

                      </div>
                  ))
                      : null
              }



              {/* show suit_and_pant orders if exists  */}
              {
                  suit_and_pant_order ? suit_and_pant_order.map((value, index) => ( //map array pant order

                      <div key={index} className='w-[100%] mt-5 p-[2rem] border flex  justify-center items-center lg:justify-between lg:items-start flex-col lg:flex-row shadow-lg rounded-lg' >

                          <table className='lg:text-[1rem] text-[0.8rem] w-[20rem] lg:mr-[2rem] leading-9 mt-[2rem] whitespace-nowrap '>
                              <tbody>

                                  <tr>
                                      <th> اندازه قد کت : </th>
                                      <td className='border-l-2'>{value[0][1]}</td>
                                      <th className='pr-[1rem]'>اندازه سر شانه کت :</th>
                                      <td>{value[1][1]}</td>
                                  </tr>
                                  <tr>
                                      <th> قد آستین : </th>
                                      <td className='border-l-2'>{value[2][1]}</td>
                                      <th> دورشکم کت :</th>
                                      <td>{value[3][1]}</td>
                                  </tr>
                                  <tr>
                                      <th> دورسینه کت : </th>
                                      <td className='border-l-2'>{value[4][1]}</td>
                                      <th>چاک پشت :</th>
                                      <td>{value[5][1]}</td>
                                  </tr>
                                  <tr>
                                      <th> نوع یقه کت : </th>
                                      <td className='border-l-2 pl-[1rem]'>{value[6][1]}</td>

                                  </tr>

                                  <tr>
                                      <th>اندازه شلوار : </th>
                                      <td className='border-l-2 pl-[1rem]'>{value[7][1]}</td>
                                      <th className='pr-[1rem]'>اندازه کمر :</th>
                                      <td>{value[8][1]}</td>
                                  </tr>
                                  <tr>
                                      <th>  اندازه باسن : </th>
                                      <td className='border-l-2'>{value[9][1]}</td>
                                      <th>اندازه ران :</th>
                                      <td>{value[10][1]}</td>
                                  </tr>
                                  <tr>
                                      <th>اندازه زانو : </th>
                                      <td className='border-l-2'>{value[11][1]}</td>
                                      <th>اندازه دمپا  :</th>
                                      <td>{value[12][1]}</td>
                                  </tr>
                                  <tr>
                                      <th> اندازه فاق : </th>
                                      <td className='border-l-2'>{value[13][1]}</td>
                                      <th> رنگ پارچه: </th>
                                      <td className=''>{value[14][1]}</td>
                                  </tr>
                                  <tr>
                                      <th> قیمت محصول: </th>
                                      <td className='border-l-2'>{value[15][1]}</td>
                                  </tr>

                              </tbody>
                          </table>

                      </div>
                  ))
                      : null
              }



              <div className='mt-[5rem] grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5 overflow-hidden'>
                  {
                      shopping_westbasket ? shopping_westbasket.map((value, index) => {


                          return (
                              <>
                                  <div key={index} className="shadow-lg rounded-xl">
                                      <div className="lg:w-[15rem] w-[11rem] lg:h-[33rem] border rounded-xl overflow-hidden">


                                          <div className="w-full lg:h-[23.7rem] h-[16rem]">
                                              <img className="lg:!w-full !w-full lg:!h-[23.7rem] !h-[16rem]" src={`http://localhost:3000/img/upload_img//${value.uploadfile.split(",")[0]}`} width={100} height={100} alt="image product" />
                                          </div>

                                          <div className="w-full flex justify-center items-right flex-col px-[1rem] lg:mt-[2rem]">

                                              <div>
                                                  <p className="font-v-medium lg:text-[1rem] text-[0.8rem] whitespace-nowrap">{value.name_product}</p>
                                              </div>

                                              <div className="w-full flex justify-start items-center flex-row mt-[0.5rem]whitespace-nowrap">
                                                  <span className="font-v-light lg:text-[1rem] text-[0.8rem]">قیمت محصول :</span>
                                                  <span className="font-v-light lg:text-[1rem] text-[0.8rem] mr-[0.8rem]">{Number(value.price_product).toLocaleString('fa-IR')}</span>
                                              </div>
                                              <div className="w-full flex justify-start items-center flex-row mt-[0.5rem]whitespace-nowrap">
                                                  <span className="font-v-light lg:text-[1rem] text-[0.8rem]"> اندازه محصول :</span>
                                                  <span className="font-v-light lg:text-[1rem] text-[0.8rem] mr-[0.8rem]">{Number(value.size).toLocaleString('fa-IR')}</span>
                                              </div>

                                          </div>

                                      </div>
                                  </div>
                              </>
                          )
                      }) : null
                  }

              </div>



          </div>


        </div >
        :
        <div>
          <p>اعتبار ورود شما به اتمام رسیده لطفا مجدد وارد شوید</p>
        </div>
      }

    </div>
  )
}

export default Show_product