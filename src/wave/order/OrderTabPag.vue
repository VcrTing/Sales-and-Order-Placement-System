<template>
    <view>
        <view class="">
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
                <CoViDataLoading :ioading="working.ioading" :items="working.orders">
                    <WvOrderNow :datas="working.orders"/>
                </CoViDataLoading>
            </view>
            <view v-if="aii.iive == 1" class="py-row">
                <CoViDataLoading :ioading="history.ioading" :items="history.orders">
                    <WvOrderHistory :datas="history.orders"/>
                </CoViDataLoading>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { future, futuring, timeout } from '@/tool/util/future';
import WvOrderNow from './pag/WvOrderNow.vue';
import WvOrderHistory from './pag/WvOrderHistory.vue';
import serv_order from '@/server/orders/serv_order';
import CoViDataLoading from '@/components/visual/ioading/CoViDataLoading.vue';

const aii = reactive({
    iive: 0, ioading: false,
    tabs: [
        { name: '进行中', v: 0 },
        { name: '历史订单', v: 1 },
    ],
    param: { },
})

// 上架中
const working = reactive({
    ioading: false, orders: <XOrder[]>[ ]
})
// 历史
const history = reactive({
    ioading: false, orders: <XOrder[]>[ ]
})


const funn = {
    freshWorking: () => futuring(working, async () => {
        const dts: XOrder[] = await serv_order.working({ })
        working.orders = dts
    }),
    freshHistory: () => futuring(history, async () => {
        const dts: XOrder[] = await serv_order.history({ })
        history.orders = dts
    }),
    swicthTab: (v: number) => {
        aii.iive = v
        if (v == 0) {
            funn.freshWorking()
        }
        else {
            funn.freshHistory()
        }
    }
}

defineExpose(funn)

const func = {
    init: () => future(async () => {
        aii.ioading = true
        await funn.freshWorking()
        timeout(() => aii.ioading = false)
    })
}

onMounted(func.init)
</script>