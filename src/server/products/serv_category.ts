import { DATA_TRUE } from "@/conf/conf-datas"
import aiert_tooi from "@/tool/app/aiert_tooi"
import { master } from "@/tool/http/http"
import net_tool from "@/tool/http/net_tool"
import { netser } from "@/tool/http/netser"
import { netip, tiperr, tipwarn } from "@/tool/uni/uni-global"
import { is_arr, is_str } from "@/tool/util/typed"

const relations = [ 'products' ]

const fetching = async (param: ONE = { }, pager: Pager): Promise<Category[]> => {
    const __pm: ONE = net_tool.build_param(param, pager, relations)
    const src: NET_RES = await netser(master.get('c', null, __pm))
    if (is_str(src)) return netip(src, [ ]);
    const res: ONE | MANY = (src as HttpResult).data
    return is_arr(res) ? (res as Category[]) : [ ]
}

// 为首页
const index = async (param: ONE = { }): Promise<Category[]> => {
    param['filter[dataStatus][$eq]'] = DATA_TRUE
    const p: Pager = net_tool.generate_pagination(9999)
    return await fetching(param, p)
}

// 全部
const all = async (): Promise<Category[]> => {
    return await fetching({ }, net_tool.generate_pagination(9999))
}

export default {
    index,
    all
}