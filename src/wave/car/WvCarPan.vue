<template>
    <OPan :idx="idx">
        <OPanInnerY :idx="idx" :orientation="'b'" :mxh="'88vh'">
            <CoViDataLoading :ioading="ioading" :items="datas" class="">
                <view class="py-s"></view>
                <view v-for="(c, a) in datas" :key="a">
                    <view class="" v-for="(v, i) in product_tool.get_num_products(c)" :key="i">
                        <view class="pi-row pr-row fx-aii-btn-def py">
                            <CoMoCarProductItem :v="v">
                                <CoMoProductAddMinGroup :v="v"
                                    @add="(k) => emt('add', k)"
                                    @min="(k) => emt('min', k)"/>
                            </CoMoCarProductItem>
                        </view>
                    </view>
                </view>
            </CoViDataLoading>
            <CkSpace :h="3"/>
        </OPanInnerY>
    </OPan>
</template>

<script setup lang="ts">
import OPan from '@/cake/pan/OPan.vue';
import OPanInnerY from '@/cake/pan/OPanInnerY.vue';
import product_tool from '@/tool/modules/product/product_tool';
import CoMoCarProductItem from './components/CoMoCarProductItem.vue';
import CoViDataLoading from '@/components/visual/ioading/CoViDataLoading.vue';
import CoMoProductAddMinGroup from '../index/components/CoMoProductAddMinGroup.vue';
import CkSpace from '@/cake/content/CkSpace.vue';

const prp = defineProps<{
    idx: number,
    ioading: boolean,
    datas: Page.IndexDatas
}>()

const emt = defineEmits([ 'add', 'min' ])

</script>