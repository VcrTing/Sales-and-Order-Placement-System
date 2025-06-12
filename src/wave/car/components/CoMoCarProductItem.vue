<template>
    <view class="fx-s">
        <view class="w-15">
            <view class="w-100 h-6vh">
                <CoImg v-if="product_tool.getbanner(v)" clazz="h-100 br-t o-h" :src="product_tool.getbanner(v)"/>
                <view v-else class="w-100 h-100 bg-def br-t"></view>
            </view>
        </view>
        <view class="fx-1 pi pr-s">
            <view class="h8 pt-s">{{ v.title }}</view>
            <view class="pt-s">
                <view class="fw-500">
                    <text>￥</text>
                    <text class="h6 fw-550">{{ product_tool.computed_price(v) }}</text>
                </view>
            </view>
        </view>
        <view class="fx-s">
            <slot></slot>
        </view>
    </view>
</template>

<script setup lang="ts">
import CoImg from '@/components/media/img/CoImg.vue';
import product_tool from '@/tool/modules/product/product_tool';

const prp = defineProps<{
    v: Product
}>()
</script>