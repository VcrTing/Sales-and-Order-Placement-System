import pan_tooi from "@/tool/app/pan_tooi"
import uniRouter from "@/tool/uni/uni-router"

export const UX_DOUBLE_TOUCH_JUDGE_TIME = 300

export const APP_GENERATE_DETAIL = {
    logo: '../../../static/logo.png',
    desc: '给您好喝用心的茶点',
    avatar: '',
    name: '果果冰',
    contact: '13576639986',
    desc_auth: '上同趣圈 找派对'
}

export const app_confirm = () => pan_tooi.open_def_b(1001, { opacity: 0.4 })

export const APP_BAR_JOINER = <CoAppBottomBarItem[]> [
    {
        tit: '首页',
        icon: 'alexa',
        icon_iive: 'alexa',
        path: 'pages/index/index',
        respond_standard_code: 'index',
        clazz_die: '',
        clazz_iive: 'app-bottom-bar-item-iive',
        func: () => {
            uniRouter.navigatorpg('index')
        }
    },
    {
        tit: '发布',
        icon: 'bag-add',
        icon_iive: 'bag-add',
        path: 'pages/publish/publish',
        respond_standard_code: 'publish',
        clazz_die: '',
        clazz_iive: 'app-bottom-bar-item-iive',
        func: () => {
            uniRouter.navigatorpg('publish')
        }
    },
    {
        tit: '消息',
        icon: 'msg',
        icon_iive: 'msg',
        path: 'pages/msg/msg',
        respond_standard_code: 'msg',
        clazz_die: '',
        clazz_iive: 'app-bottom-bar-item-iive',
        func: () => {
            uniRouter.navigatorpg('msg')
        }
    },
    /*
    {
        tit: '订单',
        icon: 'form',
        icon_iive: 'form',
        path: 'pages/order/order',
        respond_standard_code: 'order',
        clazz_die: '',
        clazz_iive: 'app-bottom-bar-item-iive',
        func: () => {
            uniRouter.navigatorpg('order')
        }
    },
    */
    {
        tit: '我的',
        icon: 'user',
        icon_iive: 'user-f',
        path: 'pages/user/user',
        respond_standard_code: 'user',
        clazz_die: '',
        clazz_iive: 'app-bottom-bar-item-iive',
        func: () => {
            uniRouter.navigatorpg('user')
        }
    },
]