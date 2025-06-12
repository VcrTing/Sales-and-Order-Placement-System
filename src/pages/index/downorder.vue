<template>
    <page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <PageLayout>
        <CoAppTopBackBar :clazz="'pb-s bg-pag-pri'" @back="uniRouter.back" :mat="true">
            <template #tit><view class="tit h7 ta-c">{{ tit }}</view></template>
        </CoAppTopBackBar>
        <view class="ps-r">
            <view class="px-row pt-x1">
                <WvDdAddr :form="aii"/>
                <view class="py"></view>
                <WvDdOrder :data="data" :form="aii" />
            </view>
            <WvDdBom :form="aii" @submit="funn.submit"/>
        </view>
    </PageLayout>
</template>

<script setup lang="ts">
import CoAppTopBackBar from '@/components/app/bar/top/CoAppTopBackBar.vue';
import PageLayout from '@/components/layout/page/PageLayout.vue';
import { DATA_SEND_PRICE_DEF } from '@/conf/conf-datas';
import { authState, uiState } from '@/memory/global';
import { pageIndexState } from '@/memory/page';
import serv_orders from '@/server/orders/serv_orders';
import order_tool from '@/tool/modules/order/order_tool';
import product_tool from '@/tool/modules/product/product_tool';
import xuser_tool from '@/tool/modules/user/xuser_tool';
import appRouter from '@/tool/uni/app-router';
import uniRouter from '@/tool/uni/uni-router';
import { future, promise } from '@/tool/util/future';
import WvDdAddr from '@/wave/downorder/checkorder/WvDdAddr.vue';
import WvDdBom from '@/wave/downorder/checkorder/WvDdBom.vue';
import WvDdOrder from '@/wave/downorder/checkorder/WvDdOrder.vue';
import { computed, nextTick, reactive, ref } from 'vue';

const data = computed((): Page.IndexDatas => {
    return pageIndexState.index_datas
})

const user = computed(() => authState.user)

const aii = reactive({
    num: 0, price: 0, remark: '', ioading: false,
    sendType: 0, sendPrice: DATA_SEND_PRICE_DEF,
    addr: {
        address: '广东省深圳市宝安区西乡街道西乡街道办糖果公寓2-201（靠近机场东方向）',
        phone: '13576639986',
        name: '蔡徐坤',
        longitude: 0, latitude: 0,
    },
    viid: false
})

const funn = {

    submit: () => future(async () => {
        funn.check()
        if (product_tool.ready_checkout(aii)) {
            //
            const form: ONE = order_tool.group_order_data(
                aii, user.value, product_tool.flot_nice_products(data.value)
            );
            // uniRouter.gopg('paysucc')
            // 
            const order: XOrder = await serv_orders.plus(form)
            console.log('form =', order)
        }
    }),
    asyncData: () => {
        const res: ONE = product_tool.async_car_data(data.value)
        aii.num = res.num || 0
        aii.price = res.price || 0
    },

    check: () => {
        if (xuser_tool.is_nice_login_xuser()) {
            funn.asyncData()
            if (aii.num == 0) {
                appRouter.index()
            }
        }
        else {
            appRouter.index()
        }
    },
    init: () => promise(() => {
        funn.check()
    })
}

const tit = computed(() => {
    return '确认订单';
})

nextTick(funn.init)
</script>

<style lang="sass">
@use '../../ui/sass/theme/primary/__conf' as *
page, uni-page-body
	background: $pri-pag-bg
</style>