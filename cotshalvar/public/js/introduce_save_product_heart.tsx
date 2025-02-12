

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

export const add_product_in_shopping_westbasket = (id_product: any) => {

    if (window.localStorage.getItem("shopping_westbasket")) {
        let shopping_westbasket = JSON.parse(window.localStorage.getItem("shopping_westbasket")!);
        const filter_shopping_westbasket = shopping_westbasket.find((value: any) => value === id_product)
        if (filter_shopping_westbasket === undefined) {
            const All_shopping_westbasket = [...shopping_westbasket, id_product]
            window.localStorage.setItem("shopping_westbasket", JSON.stringify(All_shopping_westbasket))
        }
        else {
            const filter_remove_shopping_westbasket = shopping_westbasket.filter((value: any) => value !== id_product)
            window.localStorage.setItem("shopping_westbasket", JSON.stringify(filter_remove_shopping_westbasket))
        }

    }
    else {
        window.localStorage.setItem("shopping_westbasket", JSON.stringify([id_product]))
    }
    return JSON.parse(window.localStorage.getItem("shopping_westbasket")!);
}