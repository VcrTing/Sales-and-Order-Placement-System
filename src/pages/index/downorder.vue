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
import { uiState } from '@/memory/global';
import { pageIndexState } from '@/memory/page';
import product_tool from '@/tool/modules/product/product_tool';
import uniRouter from '@/tool/uni/uni-router';
import { future } from '@/tool/util/future';
import WvDdAddr from '@/wave/downorder/checkorder/WvDdAddr.vue';
import WvDdBom from '@/wave/downorder/checkorder/WvDdBom.vue';
import WvDdOrder from '@/wave/downorder/checkorder/WvDdOrder.vue';
import { computed, nextTick, reactive, ref } from 'vue';

const data = computed((): Page.IndexDatas => {
    return pageIndexState.index_datas
})

const aii = reactive({
    num: 0, price: 0, remark: '', ioading: false,
    addr: {
        address: '广东省深圳市宝安区西乡街道西乡街道办糖果公寓2-201（靠近机场东方向）',
        phone: '13576639986',
        name: '蔡徐坤'
    },
    viid: false
})

const funn = {
    submit: () => future(async () => {
        funn.asyncData()
        if (!aii.viid || product_tool.ready_checkout(aii)) {
            //
            uniRouter.gopg('paysucc')
            // 
            
        }
    }),
    asyncData: () => {
        const res: ONE = product_tool.async_car_data(data.value)
        aii.num = res.num || 0
        aii.price = res.price || 0
    },
}

const tit = computed(() => {
    return '确认订单';
})

nextTick(funn.asyncData)
</script>

<style lang="sass">
@use '../../ui/sass/theme/primary/__conf' as *
page, uni-page-body
	background: $pri-pag-bg
</style>