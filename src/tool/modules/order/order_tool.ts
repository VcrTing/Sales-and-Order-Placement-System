import { arrimit } from "@/tool/util/iodash"

const group_order_data = (form: ONE, xuser: User, products: Products) => {
    return {
        num: form.num,
        price: form.price,
        sendType: form.sendType,
        sendPrice: form.sendPrice,

        remark: form.remark,

        userCode: xuser.phone,
        userPhone: xuser.phone,
        userDocumentId: xuser.documentId,

        products: products,

        name: form.addr.name,
        phone: form.addr.phone,
        address: form.addr.address
    }
}

const get_show_products = (v: XOrder) => {
    let ps: Products = v.products || [ ]
    return ps
}

export default {
    group_order_data,
    get_show_products
}