import { useSwiper } from 'swiper/react';
import { GrFormPrevious } from 'react-icons/gr';
function Btnprev(props: any) {
    const swiper = useSwiper();

    return (
        <>
            <div className='relative z-[100] bottom-0'>
                <button className={` flex justify-center items-center p-[5px] rounded-lg bg-[--them3] ${props.style}`} onClick={() => swiper.slidePrev()}>
                    <GrFormPrevious  className='text-[2.5rem]'/>
                </button>
            </div>

        </>
    )
}

export default Btnprev