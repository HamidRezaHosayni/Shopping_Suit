
export const open_box_element=(value:any)=>{
    if (value.current.classList.contains("hidden")){
        value.current.classList.remove("hidden")
    }
    
}
export const close_box_element=(value:any,value2:any)=>{
    value.current.classList.add("hidden")
    value2.current.pause()
}