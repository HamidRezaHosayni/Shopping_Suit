
export const openmenu = (listmenu:any,iconmenu:any,closeIcon:any) => { 
    if (listmenu.current.classList.contains("w-[0%]")) {

        listmenu.current.classList.remove("w-[0%]");
        listmenu.current.classList.add("w-[50%]");

        iconmenu.current.classList.remove("inline-block"); 
        iconmenu.current.classList.add("hidden");

        closeIcon.current.classList.remove("hidden");
        closeIcon.current.classList.add("inline-block");


    }
    else{
        listmenu.current.classList.remove("w-[50%]");
        listmenu.current.classList.add("w-[0%]");

        iconmenu.current.classList.remove("hidden");
        iconmenu.current.classList.add("inline-block");

        closeIcon.current.classList.remove("inline-block");
        closeIcon.current.classList.add("hidden");
    }
}
