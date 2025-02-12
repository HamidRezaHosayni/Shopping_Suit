import Image from 'next/image';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { GiRotaryPhone } from 'react-icons/gi';
import { IoLocation } from 'react-icons/io5';

// Define a functional component
const Article = () => {

    return (
        <div className='container m-auto lg:leading-9 leading-7 px-5'>
            <Image className='lg:!w-full lg:!h-[40rem]' src={"/img/about/1.jpg"} width={500} height={500} alt='first_picture_about_page' />
            <h1 className='lg:text-[1.5rem] text-[1rem] font-v-medium text-center mt-[5rem]'>Art Man Class: خیاطی سعید، پنجاه سال تجربه در خلق اصالت و ظرافت</h1>
            <p className='lg:text-[1rem] text-[0.8rem] font-v-light mt-[1rem] text-center'>
                در گذرگاه پرشتاب زمان که مد روز به سرعت دگرگون می‌شود، Art Man Class، برند شناخته شده خیاطی سعید،
                همچون نگینی درخشان در صنعت پوشاک مردانه می‌درخشد. با پشتوانه‌ای پنجاه ساله از تجربه و تخصص،
                در مسیر خلق آثاری فاخر و اصیل گام برمی‌دارد و به یاری هنر بی‌بدیل خیاطان چیره دست خود،
                جامه‌ای برازنده بر تن مردان خوش‌ذوق می‌آراید.
            </p>

            <div className='flex justify-center items-start flex-col lg:flex-row mt-[5rem]'>
                <div className='lg:w-[60%]'>
                    <h2 className='lg:text-[1.5rem] text-[1rem] font-v-medium text-center'>ما در Art Man Class به دنبال چه چیزی هستیم؟</h2>
                    <ul className='list-disc list-outside mt-[2rem]'>
                        <li className='lg:text-[1rem] text-[0.8rem] font-v-bold'>ارائه ی کت و شلوارهای سفارشی با کیفیتی مثال زدنی:</li>

                        <ul className='mt-[1rem] list-inside list-[circle]'>

                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                <strong className='lg:text-[1rem] text-[0.8rem] font-v-medium'>اندازه گیری دقیق:</strong> با ظرافت و وسواس تمام، گام اول را با اندازه‌گیری دقیق اندام شما آغاز می‌کنیم
                                تا برشی کاملاً متناسب با فرم بدنتان طراحی و دوخته شود.
                            </li>

                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                <strong className='lg:text-[1rem] text-[0.8rem] font-v-medium'>انتخاب پارچه:</strong> سفری در میان انبوهی از مرغوب‌ترین پارچه‌های داخلی و خارجی را آغاز می‌کنید و
                                با راهنمایی مشاوران مجرب ما، پارچه‌ای متناسب با سلیقه و بودجه خود را برای خلق کت و شلوار منحصر به فردتان برمی‌گزینید.
                            </li>

                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                <strong className='lg:text-[1rem] text-[0.8rem] font-v-medium'>طراحی:</strong> تیمی از طراحان ماهر با در نظر گرفتن فرم اندام و سلیقه شما، مدلی را خلق می‌کنند که
                                در عین حال که متناسب با مد روز است، اصالت و شخصیت شما را به بهترین نحو به نمایش می‌گذارد.
                            </li>

                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                <strong className='lg:text-[1rem] text-[0.8rem] font-v-medium'>دوخت:</strong> دستان هنرمند و باتجربه خیاطان ما، با ظرافت و دقت بی‌نظیر، الگو را بر روی پارچه جان می‌بخشند و
                                کت و شلواری بی‌بدیل را برای شما آماده می‌کنند.
                            </li>

                        </ul>

                        <li className='lg:text-[1rem] text-[0.8rem] font-v-bold mt-[1rem]'>ارائه ی مشاوره تخصصی در انتخاب مدل، پارچه و سایر جزئیات:</li>

                        <ul className='mt-[1rem] list-inside list-[circle]'>
                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                در Art Man Class همواره مشاوران مجرب در کنار شما هستند تا با ارائه راهنمایی‌های تخصصی، سفری لذت‌بخش و
                                رضایت‌بخش را برای شما رقم بزنند.
                            </li>
                        </ul>

                        <li className='lg:text-[1rem] text-[0.8rem] font-v-bold mt-[1rem]'>دوخت کت و شلوار سازمانی با کیفیتی مثال زدنی و ظاهری شیک:</li>

                        <ul className='mt-[1rem] list-inside list-[circle]'>
                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                با در نظر گرفتن نیازها و سلایق خاص مجموعه‌ها و سازمان‌ها، کت و شلوارهای سازمانی را با کیفیتی مثال‌زدنی و
                                ظاهری شیک طراحی و دوخت می‌کنیم تا در هر جمعی، نمادی از نظم، انسجام و اعتبار مجموعه شما باشند.
                            </li>
                        </ul>

                        <li className='lg:text-[1rem] text-[0.8rem] font-v-bold mt-[1rem]'>امکان سفارش آنلاین کت و شلوار:</li>

                        <ul className='mt-[1rem] list-inside list-[circle]'>
                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                برای اولین بار در ایران، Art Man Class امکان سفارش آنلاین کت و شلوارهای سفارشی را فراهم کرده است.
                                به آسانی از طریق وب سایت ما، بدون نیاز به حضور در شعبه، می‌توانید سفارشتان را ثبت کنید و در اسرع وقت،
                                آن را تحویل بگیرید.
                            </li>
                        </ul>

                        <li className='lg:text-[1rem] text-[0.8rem] font-v-bold mt-[1rem]'>ارسال سریع و به موقع:</li>

                        <ul className='mt-[1rem] list-inside list-[circle]'>
                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                ما در Art Man Class به تعهدات خود پایبندیم و کت و شلوار شما را در سریع‌ترین زمان ممکن و با دقت و ظرافت کامل به شما تحویل خواهیم داد.
                            </li>
                        </ul>

                        <li className='lg:text-[1rem] text-[0.8rem] font-v-bold mt-[1rem]'>ارائه ی قیمت های مناسب و رقابتی:</li>

                        <ul className='mt-[1rem] list-inside list-[circle]'>
                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                با ارائه ی قیمت های منصفانه و رقابتی، این امکان را فراهم کرده ایم تا هر مرد خوش‌ذوقی با هر بودجه‌ای،
                                صاحب کت و شلواری فاخر و درخور شان خود شود.
                            </li>
                        </ul>

                        <li className='lg:text-[1rem] text-[0.8rem] font-v-bold mt-[1rem]'>پشتیبانی و همراهی در تمام مراحل:</li>

                        <ul className='mt-[1rem] list-inside list-[circle]'>
                            <li className='lg:text-[1rem] text-[0.8rem] font-v-light'>
                                از لحظه ثبت سفارش تا پس از تحویل و حتی در گذر زمان، در کنار شما خواهیم بود تا از رضایت کامل شما از محصول و خدماتمان اطمینان حاصل کنیم.
                            </li>
                        </ul>

                    </ul>
                </div>
                <div className='lg:w-[40%] relative'>
                    <Image className='lg:hidden block mt-[2rem] lg:mt-[unset]' src={"/img/about/3.jpg"} width={500} height={500} alt='picture_about'/>
                    <Image className='lg:block hidden !h-[70rem]' src={"/img/about/4.jpg"} width={500} height={500} alt='picture_about'/>
                </div>

            </div>


            <h2 className='lg:text-[1.5rem] text-[1rem] font-v-medium text-center mt-[5rem]'>چرا Art Man Class را انتخاب کنید؟</h2>
            <ul className='list-disc list-outside mt-[3rem]'>
                <li className='lg:text-[1rem] text-[0.8rem] font-v-light'><strong className='lg:text-[1rem] text-[0.8rem] font-v-medium lg:ml-3'>سابقه و تجربه ی غنی:</strong>پنجاه سال سابقه ی درخشان در زمینه ی دوخت کت و شلوار</li>
                <li className='lg:text-[1rem] text-[0.8rem] font-v-light'><strong className='lg:text-[1rem] text-[0.8rem] font-v-medium lg:ml-3'>تیم مجرب و متعهد:</strong> استفاده از بهترین و مجرب ترین خیاطان کشور</li>
                <li className='lg:text-[1rem] text-[0.8rem] font-v-light'><strong className='lg:text-[1rem] text-[0.8rem] font-v-medium lg:ml-3'>مرغوب ترین پارچه ها:</strong> استفاده از پارچه های مرغوب و باکیفیت از بهترین برندهای داخلی و خارجی</li>
                <li className='lg:text-[1rem] text-[0.8rem] font-v-light'><strong className='lg:text-[1rem] text-[0.8rem] font-v-medium lg:ml-3'>قیمت مناسب:</strong>ارائه ی قیمت های مناسب و رقابتی</li>
                <li className='lg:text-[1rem] text-[0.8rem] font-v-light'><strong className='lg:text-[1rem] text-[0.8rem] font-v-medium lg:ml-3'>مشاوره رایگان:</strong>ارائه مشاوره رایگان در انتخاب مدل، پارچه و سایر جزئیات کت و شلوار</li>
                <li className='lg:text-[1rem] text-[0.8rem] font-v-light'><strong className='lg:text-[1rem] text-[0.8rem] font-v-medium lg:ml-3'>امکان سفارش آنلاین:</strong>امکان سفارش آنلاین کت و شلوار</li>
                <li className='lg:text-[1rem] text-[0.8rem] font-v-light'><strong className='lg:text-[1rem] text-[0.8rem] font-v-medium lg:ml-3'>ارسال سریع و به موقع:</strong>ارسال کت و شلوار در سریع ترین زمان ممکن</li>
                <li className='lg:text-[1rem] text-[0.8rem] font-v-light'><strong className='lg:text-[1rem] text-[0.8rem] font-v-medium lg:ml-3'>پشتیبانی و همراهی:</strong>از لحظه ثبت سفارش تا پس از تحویل و حتی در گذر زمان، در کنار شما خواهیم بود</li>
            </ul>

            <h2 className='lg:text-[1rem] text-[0.8rem] text-center font-v-medium mt-[5rem]'>Art Man Class، انتخابی برتر برای مردان شیک پوش</h2>
            <p className='lg:text-[1rem] text-[0.8rem] text-center font-v-medium'>
                <strong>همین امروز با ما تماس بگیرید و کت و شلوار منحصر به فرد خود را سفرش دهید .</strong>
            </p>
            <hr className='my-[2rem]'/>

            <div>

                <div className='flex justify-start items-center flex-row'>
                    <span className='ml-[1rem]'>
                    <IoLocation className='text-[1.5rem]'/>
                    </span>
                    <div className='flex justify-start items-center flex-row'>
                        <span className='lg:text-[1rem] text-[0.8rem] font-v-medium'>آدرس : </span>
                        <p className='lg:text-[1rem] text-[0.8rem] font-v-light'>قم _ نیروگاه توحید 33 پلاک 53</p>
                    </div>
                </div>

                <div className='flex justify-start items-center flex-row'>
                    <span className='ml-[1rem]'>
                    <GiRotaryPhone className='text-[1.5rem]'/>
                    </span>
                    <div className='flex justify-start items-center flex-row'>
                        <span className='lg:text-[1rem] text-[0.8rem] font-v-medium'>تلفن ثابت : </span>
                        <p className='lg:text-[1rem] text-[0.8rem] font-v-light'>38848587</p>
                         <span className='lg:text-[1rem] text-[0.8rem] font-v-light'>_025</span>
                    </div>
                </div>

                <div className='flex justify-start items-center flex-row'>
                    <span className='ml-[1rem]'>
                    <FaPhoneAlt  className='text-[1.5rem]'/>
                    </span>
                    <div className='flex justify-start items-center flex-row'>
                        <span className='lg:text-[1rem] text-[0.8rem] font-v-medium'>تلفن همراه : </span>
                        <p className='lg:text-[1rem] text-[0.8rem] font-v-light'>09391801680</p>
                    </div>
                </div>

            </div>

            
        </div>
    );

};

export default Article;
