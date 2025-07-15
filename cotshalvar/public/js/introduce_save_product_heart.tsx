

export const introduce_save_product_heart = (value: any, id_product: any) => {

    if (window.localStorage.getItem("introduse_product")) {
        let All_introduce_product = JSON.parse(window.localStorage.getItem("introduse_product")!);
        const filter_introduse_product = All_introduce_product.find((value: any) => value === id_product)
        if (filter_introduse_product === undefined) {
            const Add_new_introduce_product = [...All_introduce_product, id_product]
            window.localStorage.setItem("introduse_product", JSON.stringify(Add_new_introduce_product))

        }
        else {
            const filter_remove_introduse_product = All_introduce_product.filter((value: any) => value !== filter_introduse_product)
            window.localStorage.setItem("introduse_product", JSON.stringify(filter_remove_introduse_product))
        }

    }
    else {
        window.localStorage.setItem("introduse_product", JSON.stringify([id_product]))
    }

    return JSON.parse(window.localStorage.getItem("introduse_product")!);

}

