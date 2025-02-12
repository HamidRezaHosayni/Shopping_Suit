
// lg:w-[35rem] w-[20rem] h-[20rem] 
export const show_popup_Element = (value: any, redirect: any) => {
    if (
        value.current.classList.contains("h-[0rem]") &&
        value.current.classList.contains("w-[0rem]") &&
        value.current.classList.contains("lg:w-[0rem]")
    ) {
        value.current.classList.remove("h-[0rem]")
        value.current.classList.remove("w-[0rem]")
        value.current.classList.remove("lg:w-[0rem]")
        value.current.classList.add("lg:w-[35rem]")
        value.current.classList.add("w-[20rem]")
        value.current.classList.add("h-[15.5rem]")
    }
    else {
        value.current.classList.remove("lg:w-[35rem]")
        value.current.classList.remove("w-[20rem]")
        value.current.classList.remove("h-[15.5rem]")

        value.current.classList.add("w-[0rem]")
        value.current.classList.add("h-[0rem]")
        value.current.classList.add("lg:w-[0rem]")

        redirect !== null ? window.location.replace(redirect) : "";

    }
}