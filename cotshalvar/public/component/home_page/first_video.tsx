
import { useRef } from 'react'
import { IoMdClose } from "react-icons/io"
import { CiPlay1 } from 'react-icons/ci'

// مشخص کردن نوع تایپ `Props`
interface VideoComponentProps {
      closeVideo: () => void
  }

export default function VideoComponent({ closeVideo }: VideoComponentProps) {

    return (
        <div className="fixed top-[10rem] lg:left-[10rem] z-[100] rounded-xl bg-[--them3] container m-auto border lg:w-[50rem] lg:h-[29rem] w-[23rem] h-[13rem] overflow-hidden">
            <div className="flex justify-end items-center">
                <IoMdClose onClick={closeVideo} className="ml-2 mt-1 text-[1.5rem] cursor-pointer" />
            </div>
         
            <div>
                <video controls loop preload="metadata" autoPlay className="lg:w-[50rem] lg:h-[29rem] w-[23rem] h-[13rem]">
                    <source src="/img/home_page/vedio/1.mp4" />
                </video>
            </div>
        </div>
    )
}