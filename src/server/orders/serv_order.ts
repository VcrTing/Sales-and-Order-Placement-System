import { authGetters } from "@/memory/global"
import { business } from "@/tool/http/http"
import net_tool from "@/tool/http/net_tool"
import strapi_param_tool from "@/tool/strapi/strapi_param_tool"
import { is_arr } from "@/tool/util/typed"

const relations: string[] = [ ]

const fetching = async (param: ONE, pager: Pager): Promise<XOrder[]> => {
    const __pm: ONE = net_tool.build_param(param, pager, relations, false)
    const src: NET_RES = await business.get('order', null, __pm)
    const res: ONE | MANY = (src as HttpResult).data
    return is_arr(res) ? (res as XOrder[]) : [ ]
}

// 个人
const mine = async (param: ONE, pager: Pager): Promise<XOrder[]> => {
    param['userDocumentId'] = authGetters.userid
    // 状态筛选
    //
    return await fetching(param, pager)
}

// 上架中
const working = async (param: ONE): Promise<XOrder[]> => {
    return await mine(param, net_tool.generate_pagination(20))
}

// 全部
const history = async (param: ONE): Promise<XOrder[]> => {
    return await mine(param, net_tool.generate_pagination(20))
}

export default {
    working,
    history
}