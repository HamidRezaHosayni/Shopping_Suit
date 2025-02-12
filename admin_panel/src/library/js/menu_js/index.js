

export const get_menu_list = (value1, value2) => {
console.log(value1.current)
    value1.current.addEventListener('click', (e) => {

        value1.current.childNodes.forEach((value) => {
            value.classList.add("bg-slate-600")
            value.classList.add("text-white")
            value.classList.remove("rounded-tl-3xl")
            value.classList.remove("rounded-bl-3xl")
        });

        e.target.classList.remove("bg-slate-600")
        e.target.classList.remove("text-white")
        if(e.target.nextElementSibling){
            e.target.nextElementSibling.classList.add("rounded-tl-3xl");
        }
        if(e.target.previousElementSibling){
            e.target.previousElementSibling.classList.add("rounded-bl-3xl");
        }

    })

} 
