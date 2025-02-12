

export const dropdown = (valel: any) => {
    if (valel.current.classList.contains("h-[4vh]")) {
        valel.current.classList.remove("h-[4vh]")
        valel.current.classList.add("h-[20vh]")
    }
    else {
        valel.current.classList.remove("h-[20vh]")
        valel.current.classList.add("h-[4vh]")
    }
}

export const open_comment = (value: any) => {
    if (value.current.classList.contains("h-[0rem]") &&
        value.current.classList.contains("w-[0rem]") &&
        value.current.classList.contains("lg:w-[0rem]") &&
        value.current.classList.contains("lg:h-[0rem]")
    ) {
        value.current.classList.add("w-[23rem]")
        value.current.classList.add("lg:w-[40rem]")
        value.current.classList.add("h-[23rem]")
        value.current.classList.add("lg:h-[40rem]")

        value.current.classList.remove("w-[0rem]")
        value.current.classList.remove("lg:w-[0rem]")
        value.current.classList.remove("h-[0rem]")
        value.current.classList.remove("lg:h-[0rem]")
    }


}
export const close_comment = (value: any) => {
    if (value.current.classList.contains("h-[23rem]") &&
        value.current.classList.contains("w-[23rem]") &&
        value.current.classList.contains("lg:w-[40rem]") &&
        value.current.classList.contains("lg:h-[40rem]")
    ) {

        value.current.classList.add("w-[0rem]")
        value.current.classList.add("lg:w-[0rem]")
        value.current.classList.add("h-[0rem]")
        value.current.classList.add("lg:h-[0rem]")

        value.current.classList.remove("w-[23rem]")
        value.current.classList.remove("lg:w-[40rem]")
        value.current.classList.remove("h-[23rem]")
        value.current.classList.remove("lg:h-[40rem]")
    }
}