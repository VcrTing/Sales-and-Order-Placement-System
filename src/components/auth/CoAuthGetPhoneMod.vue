<template>
    <OPan :idx="pan.pan_idx">
        <OPanInnerY :h="'4em'" :clazz="'br-0-imp'" :idx="pan.pan_idx" :orientation="'b'">
            <view class="h-4em pt-n px-row fx-aii-btn-def">
                <view class="fx-c">
                    <view class="">
                        <!-- 微信小程序平台 -->
                        <view 
                            v-if="hasdoc">
                            <OButton @tap="funn.phone_number" clazz="btn-app" color="wht">浏览器获取手机号，授权登录。</OButton>
                        </view>
                        <button v-else
                            open-type="getPhoneNumber" 
                            @getphonenumber="funn.phone_number"
                        >
                            <OButton clazz="btn-app" color="wht">获取手机号，授权登录。</OButton>
                        </button>
                    </view>
                </view>
            </view>
        </OPanInnerY>
    </OPan>
</template>

<script setup lang="ts">
import OButton from '@/cake/button/OButton.vue';
import OPan from '@/cake/pan/OPan.vue';
import OPanInnerY from '@/cake/pan/OPanInnerY.vue';
import { TEST_LOGIN_USER } from '@/conf/conf';
import { appState, authDispatch, authState, needLogin } from '@/memory/global';
import serv_small from '@/server/auth/serv_small';
import pan_tooi from '@/tool/app/pan_tooi';
import xuser_tool from '@/tool/modules/user/xuser_tool';
import uniSmall from '@/tool/uni/uni-small';
import { future } from '@/tool/util/future';
import { computed, nextTick } from 'vue';

// const prp = defineProps<{}>()

const pan = computed(() => (authState.loginhouse))

const hasdoc = computed(() => appState.document)

const funn = {
    init: () => future(async () => {
        console.log('INIT.')
        await authDispatch('auto_login')
        needLogin()
    }),
    doiogin: async (code: string, phone: string, countryCode: string) => {
        const phonem: ONE = { code, phone, countryCode }
        const has: User = await serv_small.hasuser(phonem);
        console.log('has =', has)

        const info: ONE = hasdoc.value ? 
            TEST_LOGIN_USER.SMALL.info : 
            await uni.getUserProfile({ desc: '完善用户资料' })
        console.log('wx info =', info)

        if (has.id) {
            // 修改
        }
        else {
            // 新增
        }
        const xuser: User = await serv_small.backenduser(xuser_tool.convert_wx_to_xuser(info, phonem))
        console.log('sou xuser =', xuser)
        const __login: ONE = {
            token: xuser.phone,
            user: xuser,
        }
        if (xuser.documentId) {
            pan_tooi.close_pan(pan.value.pan_idx)
            await authDispatch('login', __login);
        }
        /*
        const u: User = await serv_small.backenduser({ code, phone, countryCode });
        console.log('user =', u)
        */
    },
    phone_number: (e: ONE) => future(async () => {

        if (hasdoc.value) {
            const res: ONE = TEST_LOGIN_USER['SMALL']
            return await funn.doiogin(res.code, res.phone, res.countryCode);
        }

        console.log('授权 e =', e)
        if (e.detail.errMsg !== 'getPhoneNumber:ok') {
            uni.showToast({
                title: '用户拒绝了授权',
                icon: 'none'
            })
            return
        }
        try {
            // 1. 获取微信登录code
            const src = await uni.login({
                provider: 'weixin'
            })
            console.log('src =', src)
            // 2. 发送到后端解密
            const res = await serv_small.phone({
                code: src.code,
                encryptedData: e.detail.encryptedData,
                iv: e.detail.iv
            })
            console.log('res =', res)
        } 
        catch (error) {
            console.error('获取手机号错误:', error)
        }
    })
}

nextTick(funn.init)
</script>