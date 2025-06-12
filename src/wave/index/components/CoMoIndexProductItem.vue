<template>
    
    <view>
        <view class="fx-s">
            <view class="w-382 pr">
                <view class="w-100 h-6em">
                    <CoImg clazz="h-100 br-s o-h ani-scaie-aii" v-if="product_tool.getbanner(v)" :src="product_tool.getbanner(v)"/>
                    <view v-else class="h-100 bg-def br-s ani-scaie-aii"></view>
                </view>
            </view>
            <view class="ta-i fx-1">
                <view class="pt-02rem">
                    <text class="h6 fw-550">{{ v.title }}</text>
                </view>
                <view class="pt-02rem">
                    <view class="tis" v-if="v.introduction"><text>{{ v.introduction }}</text></view>
                    <view v-else><view class="pt-02rem"></view></view>
                </view>
                <view class="fx-s">
                    <view class="fx-1">
                        <view class="err">
                            <text>￥</text>
                            <text class="h7 fw-700">{{ v.price }}</text>
                        </view>
                    </view>
                    <view class="fx-1 pt-02rem">
                        <view class="pt-10rem"></view>
                        <CoMoProductAddMinGroup :v="v"
                            @add="(k) => emt('add', k)"
                            @min="(k) => emt('min', k)"/>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import CoImg from '@/components/media/img/CoImg.vue';
import product_tool from '@/tool/modules/product/product_tool';
import CoMoProductAddMinGroup from './CoMoProductAddMinGroup.vue';

const prp = defineProps<{
    v: Product
}>()
const emt = defineEmits([ 'add', 'min' ])
</script>