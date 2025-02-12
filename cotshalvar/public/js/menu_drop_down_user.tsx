

export const open_and_close_dropdown_menu = (value: any) => {

    if (value.current.classList.contains("w-[0rem]")) {

        value.current.classList.remove("w-[0rem]")
        value.current.classList.remove("h-[0rem]")

        value.current.classList.add("w-[7rem]")
        value.current.classList.add("h-[12rem]")

    }
    else {

        value.current.classList.remove("w-[7rem]")
        value.current.classList.remove("h-[12rem]")

        value.current.classList.add("w-[0rem]")
        value.current.classList.add("h-[0rem]")

    }

}