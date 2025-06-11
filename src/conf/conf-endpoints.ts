

/**
 * master ====================================================================================================
 */

import { NET } from "./conf-net"

// 登录认证
const __AUTH = <ONE> {
    'login': 'app/auth/login' // 'sys/login'
}

// 用户
const __USER = <ONE>{
    
}

// 产品
const __PRODUCT = <ONE>{
    'c': 'categories',
    'p': 'products'
}

export const NET_ENDPOINTS_MASTER = <ONE> {
    ...__AUTH,
    ...__USER,
    ...__PRODUCT
}


export const NET_ENDPOINT_FILE = <ONE> {
    'upload': 'upload',
    'activity': 'activity-medias/upload/one'
}

export const __net_file_url = (k: string) => {
    const ink: string = NET_ENDPOINT_FILE[k]
    return NET.FILE.URI + '/' + NET.FILE.API + '/' + ink
}