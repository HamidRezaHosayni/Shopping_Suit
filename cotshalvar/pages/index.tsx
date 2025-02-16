// import Ferstslider from "@/public/component/home_page/ferst-slider"
import Image from "next/image"
import Link from "next/link"
import Neewproductslide from "@/public/component/home_page/neew-product-slide"
import { CiPlay1 } from "react-icons/ci"
import { useState,useRef } from "react"
import dynamic from "next/dynamic"


// import image 
import Image_video from "@/public/img/home_page/13.jpg"
import Image_article_1 from "@/public/img/article/2.jpg"
import Image_article_2 from "@/public/img/article/8.jpg"
import Image_article_3 from "@/public/img/article/10.jpg"


const VideoComponent = dynamic(() => import('../public/component/home_page/first_video'), {
  loading: () => <p className="text-center">در حال بارگذاری ویدیو...</p>, // نمایش متن لودینگ
  ssr: false // غیرفعال کردن SSR برای این کامپوننت (فقط در کلاینت اجرا شود)
});

const First_slider=dynamic(()=>import("@/public/component/home_page/ferst-slider"),{
  loading:()=><p className="text-center">در حال بارگذاری ویدیو...</p>, // نمایش متن لودینگ
  ssr:false
})

export default function HomePage() {


  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <First_slider />
      <div className="relative container ml-auto overflow-hidden mr-auto mb-auto -mt-[5rem] lg:mt-[10rem] ">
        {/* video and text section  */}
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row px-10">

          {/* text and button video  */}
          <div className="lg:w-[50%] -mt-[10rem] lg:mt-[unset] w-full leading-6 lg:leading-9 whitespace-pre-wrap">
            <h1 className="lg:text-[1.4rem] text-[1rem] font-v-bold">خیاطی سعید با برند Art man Class</h1>
            <p className="mt-[2rem] font-v-light lg:text-[1rem] text-[0.8rem] text-justify">خیاطی سعید یکی از معتبرترین فروشگاه های تولید کننده کت شلوار های سفارشی دوز ، سازمانی، شخصی دوز و … می باشد که بیش از 35 سال سابقه و با ارائه مشاوره رایگان و خیاطان مجرب میزبان هزاران مشتری از سراسر ایران می باشد و برای اولین بار سازکاری را ارئه داده است که کاربر به صورت انلاین کت شلوار شخصی متناسب با سایز خود را سفارش دهد. خیاطی سعید با ارسال سریع و به موقع، قیمت مناسب، مشاوره خرید و پشتیبانی در خدمت مشتریان از سراسر ایران است.</p>
            <p className="font-v-light lg:text-[1rem] text-[0.8rem] text-justify">خیاطی سعید تامین کننده و تولید کننده لباس و پوشاک رسمی مردانه، همگام با رقبای بزرگ صنعت پوشاک آقایان در عرضه مد و پوشاک جلو می رود تا مردان ایرانی به راحتی و بدون دغدغه از این فروشگاه معتبر کت و شلوار مورد نظر خود را تهیه نمایند. این برند با فراهم کردن عرضه کت و شلوار شخصی دوز، امکان خرید و سفارش را در سریع ترین زمان ممکن برای مشتریان فراهم کرده اند.</p>
            <div className="flex justify-center items-center mt-[2rem]">
              <Link href={"/select-unit-suit"} className="border transition-all duration-300 ease-in-out bg-black text-[--them2] hover:bg-[--them2] hover:text-black p-[8px] lg:text-[1rem] text-[0.8rem] rounded-lg ml-5">شخصی دوزی</Link>
              <Link href={"/product-page"}><button className="border transition-all duration-300 ease-in-out bg-black text-[--them2] hover:bg-[--them2] hover:text-black p-[8px] lg:text-[1rem] text-[0.8rem] rounded-lg">به فروشگاه ماسربزنید</button></Link>
            </div> 
          </div>

          {/* video section  */}
          <div className="lg:w-[50%] h-[720px] lg:mr-[10rem]">
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="absolute lg:w-[500px] w-[300px] lg:h-[500px]  bg-[--them3] rounded-2xl blur-sm -rotate-[8deg]"></div>
              <div className="absolute lg:w-[500px] w-[300px] lg:h-[500px]  bg-[--them3] rounded-2xl blur-sm -rotate-[25deg]"></div>
              <div className="absolute lg:w-[500px] w-[300px] h-auto bg-[--them3] rounded-2xl overflow-hidden flex justify-center items-center">
                <Image className="blur-[1.1px]" placeholder="blur" priority={false} src={Image_video} width={500} height={500} alt={"یک کت خاکستری روی مانکن باکروات قهوه ای کم رنگ"} title="خیاطی سعید با برند art_man_class بهترین کت وشلوار بازاری و شخصی دوزی"/>

                <div className="w-[4rem] h-[4rem] animate-ping rounded-[5rem] bg-[--them3] opacity-80 absolute flex justify-center items-center ">
                  <CiPlay1 className="text-[2rem] " />
                </div>

                <div className="w-[4rem] h-[4rem] rounded-[5rem] bg-[--them3] opacity-80 absolute flex justify-center items-center ">
                  <button >
                    <CiPlay1 onClick={() => setShowVideo(true)} className="text-[1.5rem] " />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>


      {/* نمایش ویدیو فقط زمانی که کاربر روی دکمه کلیک کند */}
      {showVideo && <VideoComponent closeVideo={() => setShowVideo(false)} />}


      </div>

      {/* image and text 1 */}
      <div className="container m-auto flex justify-center items-center mt-[10rem]">

        <div className="flex justify-start items-center flex-col lg:flex-row bg-[--them3] lg:w-[80rem] lg:h-[15rem] w-[20rem] rounded-lg overflow-hidden lg:pb-[unset] pb-[2rem]">

          {/* image section  */}
          <div className="">
            <Image className="lg:!w-[20rem] !w-[20rem] !h-[20rem] lg:!h-[15rem]" src={Image_article_1} priority={false} placeholder="blur" width={300} height={300} alt="یک کت وشلوار مشکی که روی مانکن هست و کنار ان یک گلدان با گل سفید هست" title="خیاطی سعید با برند art_man_class بهترین کت وشلوار بازاری وشخصی دوزی"/>
          </div>

          {/* text section  */}
          <div className="lg:w-[55rem] w-[20rem] lg:mr-[1rem] lg:mt-[unset] mt-[2rem] px-[1.1rem] whitespace-pre-wrap">
            <h1 className="font-v-medium lg:text-[1.4rem] text-[1rem]">تفاوت کت وشلوار شخصی دوز با کت وشلوار بازاری</h1>
            <p className="font-v-light lg:text-[1rem] text-[0.8rem] text-justify mt-5">با توجه به گستردگی و تنوع دنیای مد و پوشاک، استایل و پوشش های زیادی برای مردان نیز وجود دارد. با این تفاسیر کت و شلوار یک استایل رسمی مردانه بوده که دست خوش تغییراتی در طول سالیان مختلف شده اما هرگز از کمد لباس مردان حذف نشده است.</p>
            <p className="font-v-light lg:text-[1rem] text-[0.8rem] text-justify">خرید کت و شلوار نیز برای مردان همیشه یک چالش است، به این دلیل که باید کت و شلواری را انتخاب نمایند که علاوه بر ظاهر زیبا با ساختار و فرم بدنی فرد نیز سازگار باشد. در این مقاله قصد داریم تا به محبوبیت و دوست داشتنی بودن کت و شلوار شخصی دوز بپردازیم که متناسب با تمام سلایق و فرم های بدنی محصول برای عرضه دارند.</p>
            <p className="font-v-light lg:text-[1rem] text-[0.8rem] text-justify inline">علاقمند هستید تا درباره خرید کت و شلوار شخصی دوز و سفارشی دوزی کت شلوار مردانه از خیاطی سعید بیشتر بدانید، پیشنهاد ما این است که با ما همراه باشید و این مطلب را تا انتها بخوانید.</p>
            <Link href={"/article"} className="inline text-blue-600 mr-4">بیشتر بخوانید</Link>
          </div>

        </div>

      </div>

      {/* image and text 2 */}
      <div className="container m-auto flex justify-center items-center mt-[2rem]">

        <div className="flex justify-start items-center flex-col lg:flex-row-reverse bg-[--them3] lg:w-[80rem] w-[20rem] lg:h-[15rem] rounded-lg overflow-hidden lg:pb-[unset] pb-[2rem]">

          {/* image section  */}
          <div className="">
            <Image className="lg:!w-[25rem] ! w-[20rem] lg:!h-[15rem]" src={Image_article_2} priority={false} placeholder="blur" width={300} height={300} alt="یک عکس از مرد که فقط از گردن به پایین داخل عکس هست و یک کت وشلوار مشکی پوشیده وبادست خود لبه استن کت خود را گرفته است" title="خیاطی سعید با برند art_man_class بهترین کت وشلوار بازاری وشخصی دوزی"/>
          </div>

          {/* text section  */}
          <div className="lg:w-[55rem] w-[20rem] lg:mr-[1rem] lg:mt-[unset] mt-[2rem] px-[1.1rem] whitespace-pre-wrap">
            <h1 className="font-v-medium lg:text-[1.4rem] text-[1rem]">چند نکته در مورد کت و شلوار که هر مردی باید بداند</h1>
            <p className="font-v-light lg:text-[0.98rem] text-[0.8rem] text-justify mt-5">برای بسیاری از آقایان پوشیدن کت و شلوار و یا کت های تک ابهت خاصی در پی دارد. هم باعث می شود پخته تر به نظر برسند هم جدی تر. هنوز در سر تا سر جهان کت و شلوار به عنوان تنها یکه تاز لباس آقایان در مجالس رسمی با اختلاف در صدر انتخاب ها قرار دارد. </p>
            <p className="font-v-light lg:text-[0.98rem] text-[0.8rem] text-justify inline"> همین امر باعث شده استایل های مشابه نیز طرفداران زیادی داشته باشد. استفاده از کت تک و پالتو هایی که شاکله خود را از کت و های رسمی به عاریت گرفتند نیز همه جای دنیا طرفداران خاص خودش را دارد. در این مقاله به چند نکته خواهیم پرداخت که اگر در مورد کت و شلوار بدانید همه چیز خیلی جذاب تر پیش می رود.</p>
            <Link className=" inline mr-[1rem] text-blue-600 lg:text-[1rem] text-[0.8rem]" href={"/article/tow_Article"}>بیشتر بخوانید</Link>
          </div>

        </div>

      </div>

      {/* image and text 3 */}
      <div className="container m-auto flex justify-center items-center mt-[2rem]">

        <div className="flex justify-start items-center flex-col lg:flex-row bg-[--them3] lg:w-[80rem] w-[20rem] lg:h-[15rem] rounded-lg overflow-hidden lg:pb-[unset] pb-[2rem]">

          {/* image section  */}
          <div className="">
            <Image className="lg:!w-[20rem] ! w-[20rem] lg:!h-[15rem]" src={Image_article_3} priority={false} placeholder="blur" width={300} height={300} alt="سه مرد با کت وشلوار ابی که یک گل سرخ داخل جیت جلوی کت انها است" title="خیاطی سعید با برند art_man_class بهترین کت وشلوار بازاری وشخصی دوزی"/>
          </div>

          {/* text section  */}
          <div className="lg:w-[55rem] w-[20rem] lg:mr-[1rem] lg:mt-[unset] mt-[2rem] px-[1.1rem] whitespace-pre-wrap">
            <h1 className="font-v-medium lg:text-[1.4rem] text-[1rem]">همه چیز درباره کت شلوار مردانه </h1>
            <p className="font-v-light lg:text-[1rem] text-[0.8rem] text-justify mt-5">کت شلوار مردانه در زمان حضور آقایان در مجالس رسمی در اولویت انتخاب آنها قرار داشته و در سراسر دنیا طرفداران بسیار زیادی دارد. برخی افراد با تصورات اشتباه خود در این زمینه گمان می کنند که این نوع پوشش تنها در مکان های رسمی کاربرد دارد حال آن که آقایان می توانند با انتخاب مناسب در تمامی مکان ها و مجالس از این نوع پوشش استفاده نمایند.</p>
            <Link href={"/article/three_Article"} className="mt-[1rem] text-blue-600 inline-block">بیشتر بخوانید</Link>
          </div>

        </div>

      </div>


      {/* slider new product  */}
      <div className="container mr-auto ml-auto mb-auto mt-[10rem]">

        <div className="flex justify-between items-center flex-row lg:px-[unset] px-[1rem]">
          <div className="flex justify-start items-center flex-row">
            <div className="lg:w-[1.5rem] w-[1rem] lg:h-[1.5rem] h-[1rem] bg-[--them5] rounded-[1rem]"></div>
            <p className="font-v-medium text-[--them5] lg:text-[1.2rem] text-[1rem] mr-[0.5rem]">محصولات جدید</p>
          </div>

          <div>
            <Link href={"/product-page"}>
              <p className="text-[--them5] font-v-light lg:text-[1.2rem] text-[1rem]">مشاهده بیشتر</p>
            </Link>
          </div>

        </div>
        <br /><br />
        <Neewproductslide />
      </div>



      {/* text end website */}
      <div className="container m-auto flex justify-center items-center flex-col mt-[10rem] lg:leading-9 leading-6">
        <div>
          <h1 className="text-[1.4rem] font-v-medium">نحوه سفارش کت و شلوار شخصی</h1>
        </div>
        <div className="w-[80%] flex justify-center items-center flex-col">
          <p className="text-[1rem] text-center font-v-light mt-[1rem]">خیاطی سعید با نام برند Art man class  سال ها در زمنیه دوخت کت وشلوار با بیش از 35 سال سابقه کار در این زمینه اماده خدمت رسانی به شما مردم عزیز بوده است .  و برای اولین بار ساز کاری را ارئه داده است تا کاربر بتواند بدون مراجعه حضوری سفارش خود را با اندازه شخصی خود ثبت کند و از امکانات کت و شلوار شخصی دوز بدون مراجه به شعبه ای بهرمند شوند.</p>
          <p className="text-[1rem] text-center font-v-light">برای این امر اموزش هایی برای شما عزیزان اماده شده است تا شما بتوانید به صورت شخصی کت و شلوار خود را سفارش دهید . </p>
          <Link href={""} className="border mt-5 transition-all duration-300 ease-in-out bg-black text-[--them2] hover:bg-[--them2] hover:text-black p-[8px] lg:text-[1rem] text-[0.8rem] rounded-lg ml-5">اموزش برای اندازه گیری</Link>
        </div>
      </div>

    </>
  )
}