<template>
    <view>
        <view class="py-col bg-con br-t">
            <view class="px-col h6 py tit fw-550">
                <text>共</text><text>&nbsp;{{ aii.num }}&nbsp;</text><text>件商品</text>
            </view>
            <view class="py-col">
                <view>
                    <view v-for="(c, a) in data" :key="a">
                        <view class="py" v-for="(v, i) in product_tool.get_num_products(c)" :key="i">
                            <view class="px-inp fx-aii-btn-def">
                                <CoMoDdProductItem :v="v"/>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="py px-inp">
                    <view class="fx-s pt">
                        <view></view>
                        <view>
                            <text class="">合计</text>
                            <text class="err">￥</text>
                            <text class="h5 fw-550 err">{{ aii.price }}</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="py px-col">
                <WvDdRemarkBlock :aii="aii"/>
            </view>
        </view>
        <CkSpace :h="17"/>
    </view>
</template>

<script setup lang="ts">
import CkSpace from '@/cake/content/CkSpace.vue';
import CoMoDdProductItem from '../components/CoMoDdProductItem.vue';
import WvDdRemarkBlock from '../remark/WvDdRemarkBlock.vue';
import product_tool from '@/tool/modules/product/product_tool';
import { must_arr } from '@/tool/util/valued';

const prp = defineProps<{
    data: Page.IndexDatas,
    form: ONE
}>()

const aii = prp.form

const emt = defineEmits([ 'submit' ])

const funn = {
    products: (pds: Products) => {
        const src: Products = must_arr(pds).filter((e: Product) => e.__num > 0)
        return src
    }
}

defineExpose(funn)
</script>