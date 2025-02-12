

export const dropdown = (valel: any) => {
    if (valel.current.classList.contains("h-[5vh]")) {
        valel.current.classList.remove("h-[5vh]")
        valel.current.classList.add("h-[20vh]")
        valel.current.childNodes[0].childNodes[1].classList.add("rotate-180")
    }
    else {
        valel.current.classList.remove("h-[20vh]")
        valel.current.classList.add("h-[5vh]")
        valel.current.childNodes[0].childNodes[1].classList.remove("rotate-180")

    }

}