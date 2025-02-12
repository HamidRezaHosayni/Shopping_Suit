import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page_404() {
    return (
        <div className='container m-auto px-4'>
            <div className='w-full flex justify-center items-center flex-col mt-[1rem]'>
                <Image className='lg:!w-[25rem] lg:!h-[30rem] !w-[15rem]' src={"/img/404/1.jpg"} width={500} height={500} alt='logo 404 page' />

                <h1 className='lg:text-[5rem] text-[2rem] mt-[2rem]'>404</h1>
            </div>
            <div className='w-full flex justify-center items-center flex-col lg:flex-row mt-[1rem]'>
                <h1 className='lg:text-[1.5rem] text-[0.8rem] lg:inline'>صفحه مورد نظر یافت نشد برای بازگشت به صفحه اصلی </h1>
                <Link href={"/"} className='lg:text-[1.5rem] text-[0.8rem] lg:inline mx-1 lg:mx-2 my-2 lg:my-[unset] text-blue-700 '>اینجا</Link>
                <h1 className='lg:text-[1.5rem] text-[0.8rem] lg:inline'>کلیک کنید .</h1>
            </div>
        </div>
    )
}

export default Page_404