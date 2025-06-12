
import { business, master, small } from "@/tool/http/http"
import net_tool from "@/tool/http/net_tool"
import { netser } from "@/tool/http/netser"
import { netip } from "@/tool/uni/uni-global"
import { is_arr, is_str } from "@/tool/util/typed"
import { must_one } from "@/tool/util/valued"

const phone = async (data: ONE) => {
    const res: NET_RES = await small.pos('phone', null, data)
    console.log("PHONE RES =", res)
}

const hasuser = async (param: ONE): Promise<User> => {
    const src: NET_RES = await netser(small.pos('u-info', 'has', param))
    if (is_str(src)) return netip(src, <User>{ });
    const res: ONE | MANY = (src as HttpResult).data
    return net_tool.one<User>(res)
}
const backenduser = async (param: ONE): Promise<User> => {
    const src: NET_RES = await netser(small.pos('u-info', 'save_or_update', param))
    if (is_str(src)) return netip(src, <User>{ });
    const res: ONE | MANY = (src as HttpResult).data
    return net_tool.one<User>(res)
}
/*
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
*/
export default {
    phone,
    hasuser,
    backenduser
}