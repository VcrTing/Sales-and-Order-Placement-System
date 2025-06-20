

// 匿名访问
export const ROLE_ANON: string = 'ANON'

// 已授权
export const ROLE_AUTH: string = 'AUTH'

// ADMIN
export const ROLE_ADMIN: string = 'ADMIN'


// 里面的角色，都拥有 JWT 权限
export const ROLES_AUTHS: string[] = [
    ROLE_AUTH,
    ROLE_ADMIN
]

// 基础角色
export const USER_DEF = <User>{
    // id: 1,
    documentId: 'b2zdp5c17dem6rvmj8qo0m3u',
    nickname: '未登录用户',
    avatar: 'https://img2.baidu.com/it/u=465760855,3158087440&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    background: 
    'https://qcloud.dpfile.com/pc/ek2cSmmO3lpwiYLW7NL4-hBMCUPiPr_8DKYMa7M6Z-QID0bsu-SAtCe9N8iBmkY3.jpg',
    //'https://img1.baidu.com/it/u=467309576,3460257531&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1084', 
    age: 18,
    gender: 1,
    phone: '',
    introduction: '未登录用户，无法参加活动，请先登录。',
    // socialAccount: '无社交账号展示'
}

// 店家
export const BUSINESS_DEF = <User>{
    // id: 1,
    documentId: 'b2zdp5c17dem6rvmj8qo0m3u',
    nickname: '未登录用户',
    avatar: 'https://img2.baidu.com/it/u=465760855,3158087440&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    background: 
    'https://qcloud.dpfile.com/pc/ek2cSmmO3lpwiYLW7NL4-hBMCUPiPr_8DKYMa7M6Z-QID0bsu-SAtCe9N8iBmkY3.jpg',
    //'https://img1.baidu.com/it/u=467309576,3460257531&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1084', 
    age: 18,
    gender: 1,
    phone: '',
    introduction: '未登录用户，无法参加活动，请先登录。',
    // socialAccount: '无社交账号展示'
}