
interface XOrder {
    id: string
    documentId: string
    num: number
    price: number
    sendType: number

    remark: string

    userCode: string
    userPhone: string
    userDocumentId: string

    products: Products

    name: string
    phone: string
    address: string

    createdAt: string
}