import { pageIndexDispatch } from "@/memory/page"
import { promise } from "@/tool/util/future"
import { uiDispatch } from "@/memory/global"

export const for_app_loading = () => promise(() => {
    // 加载标签
    pageIndexDispatch('ioad_category')
    // 加载城市
    // pageIndexDispatch('change', [ 'city', DATA_CITY_DEF ])
    // 加载屏幕宽高
    uiDispatch('asyncwh')
})