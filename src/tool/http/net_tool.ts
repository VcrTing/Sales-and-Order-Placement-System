import { is_strapi_mode } from "@/conf/conf"
import strapi_param_tool from "../strapi/strapi_param_tool"
import { authGetters } from "@/memory/global"
import { is_nice_arr, must_arr, must_one } from "../util/valued"


const PAGER_SIZE_DEF = 10

// 生成返回结果
const generate_http_result = (data: any, code: number, message: string) => {
    return <HttpResult>{
        code, message, data
    }
}

// 生成分页
const generate_pagination = (pageSize: number = PAGER_SIZE_DEF): Pager => {
    return <Pager>{
        page: 1, pageSize
    }
}

// 构建参数
const build_param = (param: ONE, pager: Pager, relations: string[], istrapi: boolean = is_strapi_mode()): ONE => {
    if (istrapi) {
        return strapi_param_tool.build_param(param, pager, relations)
    }
    else {
        param['page'] = pager.page
        param['pageSize'] = pager.pageSize
        return param
    }
}

// 规定为我的
const limit_mine = (param: ONE, relation_name: string = 'user') => {
    if (is_strapi_mode()) {
        const id: string = authGetters.userid || ''
        param['filters[' + relation_name + '][documentId][$eq]'] = id
    }
    else {

    }
}

// 规定 param
const build_data = (data: ONE) => {
    if (is_strapi_mode()) {
        return {
            data
        }
    }
    return data
}

// 解析返回结果
const data = <T>(src: NET_RES) => {
    return (src as HttpResult).data as T
}

const ones = <T>(src: ONE | MANY | undefined): T[] => {
    return is_nice_arr(src) ? (must_arr(src) as T[]) : <T[]>[]
}
const one = <T>(src: ONE | MANY): T => {
    return !is_nice_arr(src) ? (must_one(src)) : <T>{ }
}

const group_document_id = (src: string, param: ONE = { }): ONE => {
    param['documentId'] = src
    return param
}

export default {
    generate_pagination,
    build_param,
    limit_mine,
    build_data,
    data,
    one, ones,
    group_document_id,

    generate_http_result
}