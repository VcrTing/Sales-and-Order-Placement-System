<template>
    <view class="softer">
        <view class="w-100 px-row">
            
            <view class="fx-i">
                <view class="">
                    <CkAvatar @tap="funn.ck_avatar" :not_mainpage="true"
                        :clazz="'w-5em h-5em'" :src="user.avatar"/>
                </view>
                <view class="fx-1 pi-x2 c-fff">
                    <view @tap="funn.ck_name" class="h5 b pt-n">{{ APP_GENERATE_DETAIL.name }}</view>
                    <view @tap="funn.ck_name" class="pt fs-w">
                        {{ APP_GENERATE_DETAIL.desc }}
                    </view>
                </view>
            </view>

        </view>
    </view>
</template>

<script setup lang="ts">
import CkAvatar from '@/cake/visual/avatar/CkAvatar.vue';
import { APP_GENERATE_DETAIL } from '@/conf/conf-app';
import { authState, needLogin } from '@/memory/global';
import uniSmall from '@/tool/uni/uni-small';
import { computed } from 'vue';

// const prp = defineProps<{}>()

const user = computed(() => authState.user)

const funn = {
    login: async () => {
        uniSmall.gettoken((e: ONE, code: string) => {
            console.log('token e =', code)
        },
        (err: ONE) => {
            console.log('token fail =', err)
        })
    },
    userinfo: async () => {
        uniSmall.getuserinfo((e: ONE) => {
            console.log('userinfo e =', e)
        },
        (err: ONE) => {
            console.log('userinfo fail =', err)
        })
    },
    ck_avatar: async () => {
        if (await needLogin()) {
            console.log('需要登录')
        }
        funn.login()
    },
    ck_name: async () => {
        if (await needLogin()) {
            console.log('需要登录')
        }
        funn.userinfo()
    }
}
</script>