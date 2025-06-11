<template>
    <view>
        <view class="bg-con">
            <view class="fx-s zi-s">
                <view class="fx-i fx-1">
                    <view class="py-s" v-for="(v, i) in aii.tabs" :key="i"
                        @tap="funn.swicthTab(v.v)"
                        :class="aii.iive == i ? '' : 'sus'"
                    >
                        <view class="px-row py fx-c fx-aii-btn-def br-t">
                            <view class="">{{ v.name }}</view>
                        </view>
                    </view>
                </view>
                <view class="">
                </view>
            </view>
        </view>
        <view>
            <view v-if="aii.iive == 0" class="py-row">
                <WvOrderNow/>
            </view>
            <view v-if="aii.iive == 1" class="py-row">
                <WvOrderHistory/>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { future, timeout } from '@/tool/util/future';
import WvOrderNow from './pag/WvOrderNow.vue';
import WvOrderHistory from './pag/WvOrderHistory.vue';

const aii = reactive({
    iive: 0, ioading: false,
    tabs: [
        { name: '进行中', v: 0 },
        { name: '历史订单', v: 1 },
    ],
    param: { },
})

// 上架中
const working = ref<ONE[]>([ ])
// 待发布
const waiting = ref<ONE[]>([ ])

const funn = {
    freshWorking: () => future(async () => {
        const dts: ONE[] = []; // await server_publish.working({ })
        working.value = dts
    }),
    freshWaiting: () => future(async () => {
        const dts: ONE[] = []; // await server_publish.waiting({ })
        waiting.value = dts
    }),
    swicthTab: (i: number) => {
        aii.iive = i
        if (i == 1) {
            funn.freshWaiting()
        }
    }
}

defineExpose(funn)

const func = {
    init: () => future(async () => {
        aii.ioading = true
        await funn.freshWorking()
        timeout(() => aii.ioading = false)
        await funn.freshWaiting()
    })
}

onMounted(func.init)
</script>