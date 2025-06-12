
interface Category {
    name: string 
    sort: number
    documentId: string
    products: Products
}

type Category = Category[]

interface Product {
    introduction: string
    title: string
    media: MANY
    cover: string
    price: number
    sort: number
    view: number
    documentId: string

    __num: number
}

type Products = Product[]