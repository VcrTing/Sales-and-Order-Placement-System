import { tipwarn } from "@/tool/uni/uni-global"
import fioat from "@/tool/util/fioat"
import { must_arr } from "@/tool/util/valued"

const computed_price = (v: Product) => {
    const __n: number = (v.__num || 0)
    const __p: number = (v.price || 0)
    return fioat.floatMul(__p, __n)
}

const async_car_data = (datas: Page.IndexDatas): ONE => {
    
    const ds = datas || [ ]
    let num: number = 0
    let price: number = 0

    ds.map((e: Page.IndexData) => {
        const src: Products = e.products || [ ]
        for (let j= 0; j< src.length; j++ ) {
            const __n: number = (src[j].__num || 0)
            num = num + __n;
            const __p: number = (src[j].price || 0)
            const __tt: number = fioat.floatMul(__p, __n)
            // console.log('__tt', __tt)
            price = fioat.floatAdd(price, __tt)
            // console.log('__price', price)
        }
    })
    price = fioat.numberFixed(price)
    return { num, price }
}

const ready_checkout = (aii: ONE) => {
    if (aii.num == 0) {
        tipwarn('您还没下单任何您喜欢的食品。')
        return false
    }
    if (aii.price <= 0.2) {
        tipwarn('这么点钱，生意还做不做了。')
        return false
    }
    return true
}

const flot_nice_products = (data: Page.IndexDatas): Products => {
    const src: Products = [ ]
    data.map((e) => {
        const ps: Products = must_arr(e.products)
        ps.map((v) => {
            if (v.__num > 0) {
                src.push(v)
            }
        })
    })
    return src
}

const get_num_products = (v: Page.IndexData) => {
    const src: Products = must_arr(v.products).filter((e: Product) => e.__num > 0)
    return src
}

export default {
    getbanner: (v: Product) => {
        // const mds: MANY = v.media || []
        // return mds[0] || { }
        return v.cover
    },
    computed_price,
    ready_checkout,
    async_car_data,
    flot_nice_products,
    get_num_products
}