
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

export default {
    group_order_data
}