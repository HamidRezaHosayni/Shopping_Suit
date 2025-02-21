
import { add_product_in_shopping_westbasket } from '@/public/js/introduce_save_product_heart'
import { show_popup_Element } from '@/public/js/popup_elment_form'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { BiSolidErrorAlt } from 'react-icons/bi'
import { FaCheckCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Shopping_basket_page = () => {
    const is_Login = useSelector((state: any) => state.is_Login.is_Login);
    const ID_user = useSelector((state: any) => state.is_Login.Token_Login)
    const [change_value_shopping_badket, set_change_value_shopping_badket] = useState(0)
    const [All_product_westbasket, set_All_product_westbasket] = useState<any>()
    const [All_price_product, set_All_price_product] = useState<number>(0)
    const [All_price_product1, set_All_price_product1] = useState<number>(0)
    const [message_popup_notif, set_message_popup_notif] = useState({ "Message_type": "", "message": "" })
    const [redirect_page, set_redirect_page] = useState<any>()
    const popup_element = useRef(null)


    const show_and_hidden_popup = () => {
        show_popup_Element(popup_element, redirect_page);
    }



    var price_pant_order_All: number = 0;
    if (window.localStorage.getItem("pant_order")) {
        var pant_order = JSON.parse(window.localStorage.getItem("pant_order")!)

        var pant_order_shoping: any = []
        pant_order.map((value: any) => {
            let value11: any = []
            pant_order_shoping.push(value11)
            value.map((value1: any) => {
                value11.push(value1[1])
                value1[0] === "noye_parcheh" ? price_pant_order_All += value1[1] : null
            })
        })


        var remove_pant_order = (value_filter_pant_order: any) => {
            const filter1 = pant_order.filter((value: any, index: any) => index !== value_filter_pant_order)
            window.localStorage.setItem("pant_order", JSON.stringify(filter1))
            set_change_value_shopping_badket(change_value_shopping_badket + 1)

        }

    }

    var price_suit_order_All: number = 0
    if (window.localStorage.getItem("suit_order")) {
        var suit_order = JSON.parse(window.localStorage.getItem("suit_order")!)

        var suit_order_shoping: any = []
        suit_order.map((value: any) => {
            let value22: any = []
            suit_order_shoping.push(value22)
            value.map((value1: any) => {
                value22.push(value1[1])
                value1[0] === "noye_parcheh" ? price_suit_order_All += value1[1] : null
            })
        })

        var remove_suit_order = (value_filter_pant_order: any) => {
            const filter1 = suit_order.filter((value: any, index: any) => index !== value_filter_pant_order)
            window.localStorage.setItem("suit_order", JSON.stringify(filter1))
            set_change_value_shopping_badket(change_value_shopping_badket + 1)

        }
    }

    var price_suit_and_pant_order: number = 0
    if (window.localStorage.getItem("suit_and_pant_order")) {
        var suit_and_pant_order = JSON.parse(window.localStorage.getItem("suit_and_pant_order")!)

        var suit_and_pant_order_shoping: any = []
        suit_and_pant_order.map((value: any) => {
            let value33: any = []
            suit_and_pant_order_shoping.push(value33)
            value.map((value1: any) => {
                value33.push(value1[1])
                value1[0] === "noye_parcheh" ? price_suit_and_pant_order += value1[1] : null
            })
        })

        var remove_suit_and_pant_order = (value_filter_pant_order: any) => {
            const filter1 = suit_and_pant_order.filter((value: any, index: any) => index !== value_filter_pant_order)
            window.localStorage.setItem("suit_and_pant_order", JSON.stringify(filter1))
            set_change_value_shopping_badket(change_value_shopping_badket + 1)

        }
    }



    useEffect(()=>{

        if (window.localStorage.getItem("shopping_westbasket")) {
                const shopping_westbasket = JSON.parse(window.localStorage.getItem("shopping_westbasket")!);
                
                set_All_product_westbasket(shopping_westbasket)

                const totalPrice = shopping_westbasket.reduce((total: any, product: any) => {
                    return total + Number(product.price_product);
                }, 0);
                set_All_price_product1(totalPrice);
            }
    },[])
    

        const remove_product=(value:any)=>{
            if (window.localStorage.getItem("shopping_westbasket")) {
                // دریافت لیست محصولات از localStorage
                let shopping_westbasket = JSON.parse(window.localStorage.getItem("shopping_westbasket")!);
        
                // پیدا کردن محصول موردنظر برای حذف
                const productToRemove = shopping_westbasket.find((item: any) => item.id === value);
         
                if (productToRemove) {
                    // کم کردن مقدار price_product از set_All_price_product1
                    set_All_price_product1(prevPrice => prevPrice - Number(productToRemove.price_product));
        
                    // حذف محصول از آرایه
                    shopping_westbasket = shopping_westbasket.filter((item: any) => item.id !== value);
        
                    // ذخیره لیست جدید در localStorage
                    window.localStorage.setItem("shopping_westbasket", JSON.stringify(shopping_westbasket));
                    set_All_product_westbasket(shopping_westbasket)
                    console.log("محصول حذف شد:", value);
                } else {
                    console.log("محصول موردنظر یافت نشد.");
                }
            }
        }


    useEffect(() => {
        console.log("shopping_westbacket 1")
        set_All_price_product(price_pant_order_All + price_suit_order_All + price_suit_and_pant_order);
    }, [change_value_shopping_badket,price_pant_order_All,price_suit_order_All,price_suit_and_pant_order]);


    const pyment_product = () => {

        axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/route_payment_product`, { ID_user }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": window.localStorage.getItem("Token_validation")
            }
        }).then((value) => {
            const value_data = value.data;
            set_message_popup_notif({ "Message_type": value_data.Message_type, "message": value_data.message })
            set_redirect_page(value_data.redirect)
            show_and_hidden_popup()

        }).catch((e) => {

            const value_data = e.response.data;
            if (value_data.Message_type === "error") {
                set_message_popup_notif({ "Message_type": value_data.Message_type, "message": value_data.message })
                window.localStorage.removeItem("Token_validation")
                show_and_hidden_popup()
            }

            console.log(e)
        })
    }

    return (
        <>

            <div className='container m-auto flex justify-center items-center fixed top-[50%] z-[100]'>
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
            </div>

            {is_Login ?
                <div className='container m-auto flex justify-start items-center flex-col lg:flex-row'>


                    {/* product saed and product information  */}
                    <div className=' lg:w-[80%] w-full min-h-[10rem] mt-[2rem] flex justify-center items-center flex-col'>

                        {/* show pand order if exists */}
                        {
                            pant_order_shoping ? pant_order_shoping.map((value: any, index: any) => ( //map array pant order

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
                                                <th>اندازه شلوار : </th>
                                                <td className='border-l-2 pl-[1rem]'>{value[0]}</td>
                                                <th className='pr-[1rem]'>اندازه کمر :</th>
                                                <td>{value[1]}</td>
                                            </tr>
                                            <tr>
                                                <th>  اندازه باسن : </th>
                                                <td className='border-l-2'>{value[2]}</td>
                                                <th>اندازه ران :</th>
                                                <td>{value[3]}</td>
                                            </tr>
                                            <tr>
                                                <th>اندازه زانو : </th>
                                                <td className='border-l-2'>{value[4]}</td>
                                                <th>اندازه دمپا  :</th>
                                                <td>{value[5]}</td>
                                            </tr>
                                            <tr>
                                                <th> اندازه فاق : </th>
                                                <td className='border-l-2'>{value[6]}</td>
                                                <th> رنگ پارچه : </th>
                                                <td className=''>{value[8]}</td>

                                            </tr>
                                            <tr>
                                                <th>  جنس پارچه : </th>
                                                <td className='border-l-2'>{value[7]}</td>


                                            </tr>

                                            <tr>
                                                <td>
                                                    <button onClick={() => remove_pant_order(index)} className='border shadow-lg lg:text-[1rem] text-[0.8rem] px-2 rounded-lg lg:mt-[2rem] bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>خرید محصول</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className='border-2 p-[1rem] text-center rounded-lg bg-[--them3] leading-7 whitespace-pre-wrap lg:w-[25rem] w-[17rem] mt-[2rem] lg:mt-[5rem] lg:mr-[3rem]'>
                                        <p className='lg:text-[1rem] text-[0.8rem]'>درصورتی که از صحت این اطلاعات اطمینان دارید بر روی دکمه خرید کلیک کنید</p>
                                        <p className='lg:text-[1rem] text-[0.8rem] mt-[0.2rem]'>درغیر اینصورت میتوانید در قسمت <Link href={"#"} className='text-blue-600'>آموزش ها</Link> نسبت به یادگیری آن  اقدام نمایید</p>
                                    </div>

                                </div>
                            ))
                                : null}

                        {/* show suit orders if exists  */}

                        {
                            suit_order_shoping ? suit_order_shoping.map((value: any, index: any) => ( //map array pant order

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
                                                <td className='border-l-2'>{value[4]}</td>
                                                <th className='pr-[1rem]'>اندازه سر شانه کت :</th>
                                                <td>{value[8]}</td>
                                            </tr>
                                            <tr>
                                                <th> قد آستین : </th>
                                                <td className='border-l-2'>{value[3]}</td>
                                                <th> دورشکم کت :</th>
                                                <td>{value[1]}</td>
                                            </tr>
                                            <tr>
                                                <th> دورسینه کت : </th>
                                                <td className='border-l-2'>{value[2]}</td>
                                                <th>چاک پشت :</th>
                                                <td>{value[0]}</td>
                                            </tr>
                                            <tr>
                                                <th> نوع یقه کت : </th>
                                                <td className='border-l-2 pl-[1rem]'>{value[5]}</td>
                                                <th> رنگ پارچه : </th>
                                                <td className=''>{value[7]}</td>

                                            </tr>
                                            <tr>
                                                <th> قیمت محصول : </th>
                                                <td className='border-l-2 pl-[1rem]'>{value[6]}</td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <button onClick={() => remove_suit_order(index)} className='border shadow-lg lg:text-[1rem] text-[0.8rem] px-2 rounded-lg lg:mt-[2rem] bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>خرید محصول</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className='border-2 p-[1rem] text-center rounded-lg bg-[--them3] leading-7 lg:w-[25rem] w-[17rem]  mt-[2rem] lg:mt-[5rem] lg:mr-[3rem]'>
                                        <p className='lg:text-[1rem] text-[0.8rem]'>درصورتی که از صحت این اطلاعات اطمینان دارید بر روی دکمه خرید کلیک کنید</p>
                                        <p className='lg:text-[1rem] text-[0.8rem] mt-[0.2rem]'>درغیر اینصورت میتوانید در قسمت <Link href={"#"} className='text-blue-600'>آموزش ها</Link> نسبت به یادگیری آن  اقدام نمایید</p>
                                    </div>

                                </div>
                            ))
                                : null
                        }

                        {/* show suit_and_pant orders if exists  */}

                        {
                            suit_and_pant_order_shoping ? suit_and_pant_order_shoping.map((value: any, index: any) => ( //map array pant order

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
                                                <td className='border-l-2'>{value[0]}</td>
                                                <th className='pr-[1rem]'>اندازه سر شانه کت :</th>
                                                <td>{value[1]}</td>
                                            </tr>
                                            <tr>
                                                <th> قد آستین : </th>
                                                <td className='border-l-2'>{value[2]}</td>
                                                <th> دورشکم کت :</th>
                                                <td>{value[3]}</td>
                                            </tr>
                                            <tr>
                                                <th> دورسینه کت : </th>
                                                <td className='border-l-2'>{value[4]}</td>
                                                <th>چاک پشت :</th>
                                                <td>{value[5]}</td>
                                            </tr>
                                            <tr>
                                                <th> نوع یقه کت : </th>
                                                <td className='border-l-2 pl-[1rem]'>{value[6]}</td>

                                            </tr>

                                            <tr>
                                                <th>اندازه شلوار : </th>
                                                <td className='border-l-2 pl-[1rem]'>{value[7]}</td>
                                                <th className='pr-[1rem]'>اندازه کمر :</th>
                                                <td>{value[8]}</td>
                                            </tr>
                                            <tr>
                                                <th>  اندازه باسن : </th>
                                                <td className='border-l-2'>{value[9]}</td>
                                                <th>اندازه ران :</th>
                                                <td>{value[10]}</td>
                                            </tr>
                                            <tr>
                                                <th>اندازه زانو : </th>
                                                <td className='border-l-2'>{value[11]}</td>
                                                <th>اندازه دمپا  :</th>
                                                <td>{value[12]}</td>
                                            </tr>
                                            <tr>
                                                <th> اندازه فاق : </th>
                                                <td className='border-l-2'>{value[13]}</td>
                                                <th> رنگ پارچه: </th>
                                                <td className=''>{value[14]}</td>
                                            </tr>
                                            <tr>
                                                <th> قیمت محصول: </th>
                                                <td className='border-l-2'>{value[15]}</td>
                                            </tr>


                                            <tr>
                                                <td>
                                                    <button onClick={() => remove_suit_and_pant_order(index)} className='border shadow-lg lg:text-[1rem] text-[0.8rem] px-2 rounded-lg lg:mt-[2rem] bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>خرید محصول</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className='border-2 p-[1rem] text-center  rounded-lg bg-[--them3] leading-7 whitespace-pre-wrap lg:w-[25rem] w-[17rem] mt-[2rem] lg:mt-[5rem] lg:mr-[3rem]'>
                                        <p className='lg:text-[1rem] text-[0.8rem]'>درصورتی که از صحت این اطلاعات اطمینان دارید بر روی دکمه خرید کلیک کنید</p>
                                        <p className='lg:text-[1rem] text-[0.8rem] mt-[0.2rem]'>درغیر اینصورت میتوانید در قسمت <Link href={"#"} className='text-blue-600'>آموزش ها</Link> نسبت به یادگیری آن  اقدام نمایید</p>
                                    </div>

                                </div>
                            ))
                                : null
                        }



                        <div className='mt-[5rem] grid  lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5 overflow-hidden'>
                            {
                                All_product_westbasket ? All_product_westbasket.map((value: any, index: any) => {


                                    return (
                                        <>
                                            <div key={index} className="shadow-lg rounded-xl">
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

                                                        <div className="flex justify-start items-center flex-row ">
                                                            <button onClick={()=>remove_product(value.id)} className='border shadow-lg lg:text-[0.8rem] text-[0.6rem] p-2 rounded-lg lg:mt-[1rem] lg:mr-[1rem] bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>حذف از سبد</button>

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


                    {/* price and button shopping  */}
                    <div className=' lg:w-[20%] w-full min-h-[10rem] mt-[2rem] lg:fixed left-0 top-16 flex justify-center items-center flex-row '>

                        <div className='w-[95%] p-[1rem] border flex justify-center items-center lg:flex-col shadow-lg rounded-lg whitespace-pre-wrap'>
                            <div className='flex justify-center items-center flex-row lg:text-[1rem] md:text-[0.9rem] text-[0.8rem] whitespace-nowrap'>
                                <span>جمع کل خرید :</span>
                                <span>{Number(All_price_product1 + All_price_product).toLocaleString('fa-IR')} تومان</span>
                            </div>
                            <button onClick={pyment_product} className='border shadow-lg lg:text-[0.9rem] text-[0.6rem] p-2 rounded-lg lg:mt-[2rem] mr-[1rem] bg-[--them4] text-[--them2] hover:bg-[--them2] hover:text-[--them4] transition-all duration-300 ease-in-out'>خرید محصول</button>
                        </div>

                    </div>

                </div >
                :
                <div className='container m-auto w-full flex justify-center items-center flex-col min-h-[10rem]'>
                    <h1 className='lg:text-[1rem] text-[0.8rem] font-v-light'>برای دیدن این صفحه ابتدا باید وارد شوید</h1>
                    <h1 className='lg:text-[1rem] text-[0.8rem] font-v-light'>برای ورورد <Link className='text-blue-600 font-v-bold mx-1' href={"/Login-user"}>اینجا</Link> کلیک کنید</h1>
                </div>
            }
        </>
    )
}

export default Shopping_basket_page