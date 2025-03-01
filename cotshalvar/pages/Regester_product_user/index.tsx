import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

function regester_product() {
  const ID_user = useSelector((state: any) => state.is_Login.Token_Login)
  const is_Login = useSelector((state: any) => state.is_Login.is_Login);
  const [pant_order,set_pant_order]=useState([])
  const [suit_order,set_suit_order]=useState([])
  const [suit_and_pant_order,set_suit_and_pant_order]=useState([])
  const [shopping_westbasket,set_shopping_westbasket]=useState<any>()
  const [status,set_status]=useState("")


useEffect(()=>{

  axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/Regeste_pyment`, { ID_user}, {
    headers: {
        "Content-Type": "application/json",
        "Authorization": window.localStorage.getItem("Token_validation")
    }
    }).then((value) => {
      // console.log(value.data.payment_product)
      value.data.payment_product.map((value:any)=>{
        set_pant_order(JSON.parse(JSON.parse(value.pant_order)))
        set_suit_order(JSON.parse(JSON.parse(value.suit_order)))
        set_suit_and_pant_order(JSON.parse(JSON.parse(value.suit_and_pant_order)))
        set_shopping_westbasket(JSON.parse(JSON.parse(value.shopping_westbasket)))
        set_status(value.status)
      
      })
    }).catch((e) => {
      console.log(e)   
    })
  },[ID_user])
  
  console.log(shopping_westbasket)

  return (
    <>
    {is_Login ?
    
      <div className='container mr-auto ml-auto mb-auto mt-[5rem] border-2 min-h-10 p-[2rem]'>


        {
              pant_order ? pant_order.map((value: any, index: any) => ( //map array pant order

                  <div key={index} className='w-[100%] mt-5 p-[2rem] border flex justify-center items-center lg:justify-between lg:items-start flex-col lg:flex-row shadow-lg rounded-lg' >
                      <div className='flex justify-center items-center relative'>
                          <span className='absolute z-[2]'>
                              <p className='lg:text-[1rem] text-[0.8rem] text-center text-white'>این محصول فاقد تصویر میباشد</p>
                          </span>
                          <span className='blur-md'>
                              <Image className='lg:!w-[12rem] !w-[16rem] !h-[17rem] shadow-xl' src={"/img/article/11.jpg"} width={500} height={500} alt={""} />
                          </span>
                      </div>

                      <table className='lg:text-[1rem] text-[0.8rem] lg:mr-[2rem] leading-9 mt-[2rem] whitespace-nowrap '>
                          <tbody>

                              <tr>
                                  <th>اندازه باسن : </th>
                                  <td className='border-l-2 pl-[1rem]'>{value[0][1]}</td>
                                  <th className='pr-[1rem]'>اندازه دمپا :</th>
                                  <td>{value[1][1]}</td>
                              </tr>
                              <tr>
                                  <th>  اندازه فاق : </th>
                                  <td className='border-l-2'>{value[2][1]}</td>
                                  <th>اندازه ران :</th>
                                  <td>{value[3][1]}</td>
                              </tr>
                              <tr>
                                  <th>اندازه زانو : </th>
                                  <td className='border-l-2'>{value[4][1]}</td>
                                  <th>اندازه قد شلوار  :</th>
                                  <td>{value[5][1]}</td>
                              </tr>
                              <tr>
                                  <th> اندازه فاق : </th>
                                  <td className='border-l-2'>{value[6][1]}</td>
                                  <th> رنگ پارچه : </th>
                                  <td className=''>{value[8][1]}</td>

                              </tr>
                              <tr>
                                  <th>  قیمت محصول : </th>
                                  <td className='border-l-2'>{value[7][1]}</td>


                              </tr>

                            
                          </tbody>
                      </table>

                      <div className='border-2 p-[1rem] text-center rounded-lg bg-[--them3] leading-7 whitespace-pre-wrap lg:w-[25rem] w-[17rem] mt-[2rem] lg:mt-[5rem] lg:mr-[3rem]'>
                          <p><span>وضعیت ارسال : </span><span>{status}...</span></p>
                      </div>

                  </div>
              ))
                  : null
        }

        {
              suit_order ? suit_order.map((value: any, index: any) => ( //map array pant order

                  <div key={index} className='w-[100%] mt-5 p-[2rem] border flex  justify-center items-center lg:justify-between lg:items-start flex-col lg:flex-row shadow-lg rounded-lg' >
                      <div className='flex justify-center items-center relative'>
                          <span className='absolute z-[2]'>
                              <p className='lg:text-[1rem] text-[0.8rem] text-center text-white'>این محصول فاقد تصویر میباشد</p>
                          </span>
                          <span className='blur-md'>
                              <Image className='lg:!w-[12rem] !w-[16rem] !h-[17rem] shadow-xl' src={"/img/article/11.jpg"} width={500} height={500} alt={""} />
                          </span>
                      </div>

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

                      <div className='border-2 p-[1rem] text-center rounded-lg bg-[--them3] leading-7 whitespace-pre-wrap lg:w-[25rem] w-[17rem] mt-[2rem] lg:mt-[5rem] lg:mr-[3rem]'>
                          <p><span>وضعیت ارسال : </span><span>{status}...</span></p>
                      </div>

                  </div>
              ))
                  : null
        }

        {
              suit_and_pant_order ? suit_and_pant_order.map((value: any, index: any) => ( //map array pant order

                  <div key={index} className='w-[100%] mt-5 p-[2rem] border flex  justify-center items-center lg:justify-between lg:items-start flex-col lg:flex-row shadow-lg rounded-lg' >
                      <div className='flex justify-center items-center relative'>
                          <span className='absolute z-[2]'>
                              <p className='lg:text-[1rem] text-[0.8rem] text-center text-white'>این محصول فاقد تصویر میباشد</p>
                          </span>
                          <span className='blur-md'>
                              <Image className='lg:!w-[12rem] !w-[16rem] !h-[17rem] shadow-xl' src={"/img/article/11.jpg"} width={500} height={500} alt={""} />
                          </span>
                      </div>

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

                     
                      <div className='border-2 p-[1rem] text-center rounded-lg bg-[--them3] leading-7 whitespace-pre-wrap lg:w-[25rem] w-[17rem] mt-[2rem] lg:mt-[5rem] lg:mr-[3rem]'>
                          <p><span>وضعیت ارسال : </span><span>{status}...</span></p>
                      </div>

                  </div>
              ))
                  : null
        }

         <div className='mt-[5rem] grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5 overflow-hidden'>
                                    {
                                        shopping_westbasket ? shopping_westbasket.map((value: any, index: any) => {
        
        
                                            return (
                                                <>
                                                    <div key={index} className="shadow-lg rounded-xl lg:w-[15rem] w-[11rem] lg:h-[33rem]">
                                                        <div className="lg:w-[15rem] w-[11rem] lg:h-[33rem] border rounded-xl overflow-hidden">
        
        
                                                            <div className="w-full lg:h-[23.7rem] h-[16rem]">
                                                                <Image className="lg:!w-full !w-full lg:!h-[23.7rem] !h-[16rem]" src={`/img/upload_img/${value.uploadfile.split(",")[0]}`} width={100} height={100} alt="image product" />
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
                                                                    <span className="font-v-light lg:text-[1rem] text-[0.8rem]">اندازه محصول :</span>
                                                                    <span className="font-v-light lg:text-[1rem] text-[0.8rem] mr-[0.8rem]">{value.size}</span>
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


      :
      <div className='container m-auto w-full flex justify-center items-center flex-col min-h-[10rem]'>
          <h1 className='lg:text-[1rem] text-[0.8rem] font-v-light'>برای دیدن این صفحه ابتدا باید وارد شوید</h1>
          <h1 className='lg:text-[1rem] text-[0.8rem] font-v-light'>برای ورورد <Link className='text-blue-600 font-v-bold mx-1' href={"/Login-user"}>اینجا</Link> کلیک کنید</h1>
      </div>
  
  }
    
    </>
  )
}

export default regester_product