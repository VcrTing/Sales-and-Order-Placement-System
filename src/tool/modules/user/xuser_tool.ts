import { authGetters, authState } from "@/memory/global"


const convert_wx_to_xuser = (param: ONE, paramWx: ONE ) => {
    return <ONE>{
        nickname : param.nickName,
        gender : param.gender,
        phone: paramWx.phone,
        countryCode: paramWx.countryCode,
        code: paramWx.code,
        smallAppAvatar : param.avatarUrl,
        smallAppAuthCode : paramWx.code,
        smallAppIv : '',
        smallAppEncryptedData : '',
    }
}

const is_nice_login_xuser = () => {
    const u: User = authState.user;
    if (u && authGetters.is_login) {
        if (u.id && u.documentId && u.phone) {
            return true;
        }
    }
    return false;
}

export default {
    convert_wx_to_xuser,
    is_nice_login_xuser
}