
namespace Page {

    interface IndexData {
        name: string
        documentId: string
        products: Products
    }

    type IndexDatas = IndexData[] // { [k: string]: IndexDataActivityOption }
}