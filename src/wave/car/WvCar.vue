<template>
    <view class="w-100" :class="clazz">
        <view class="w-100 bf br-rnd py-s fx-aii-btn-def-hv">
            <view class="fx-s">
                <view class="fx-i fx-1" @tap="emt('view')">
                    <view class="ps-r zi-t w-3em h-3em fx-i">
                        <view>
                            <UiI clazz="h4" i="bag-add"/>
                        </view>
                        <view class="abs-r t-0 zi-s">
                            <view class="dot-err w-1em h-1em h7 fx-c">
                                <text class="fs-s">{{ aii.num }}</text>
                            </view>
                        </view>
                    </view>
                    <view class="pi fx-i">
                        <view>
                            <text class="h7">合计</text>
                        </view>
                        <view class="px-s mxw-7em">
                            <text class="h8">￥</text>
                            <text class="h6">{{ aii.price }}</text>
                        </view>
                    </view>
                </view>
                <view>
                    <view>
                        <OButton @tap="funn.submit" clazz="btn-app br-t" :ioading="ioading">
                            选好了
                        </OButton>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import OButton from '@/cake/button/OButton.vue';
import product_tool from '@/tool/modules/product/product_tool';
import uniRouter from '@/tool/uni/uni-router';
import { future } from '@/tool/util/future';
import UiI from '@/ui/element/i/UiI.vue';
import { computed, reactive } from 'vue';

const prp = defineProps<{
    data: Page.IndexDatas,
    ioading: boolean,
    clazz?: string
}>()

const aii = reactive({
    num: 0,
    price: 0
})

const emt = defineEmits([ 'view' ])

const funn = {
    submit: () => future(async () => {
        funn.asyncData()
        if (product_tool.ready_checkout(aii)) {
            uniRouter.gopg('downorder')
        }
    }),
    
    asyncData: () => {
        const res: ONE = product_tool.async_car_data(prp.data)
        aii.num = res.num || 0
        aii.price = res.price || 0
    },
}

defineExpose(funn)

</script>