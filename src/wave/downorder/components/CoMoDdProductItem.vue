<template>
    <view class="fx-s">
        <view class="w-15">
            <view class="w-100 h-6vh">
                <CkAvatar v-if="product_tool.getbanner(v).url" clazz="h-100" :src="product_tool.getbanner(v).url"/>
                <view v-else class="w-100 h-100 bg-def br-t"></view>
            </view>
        </view>
        <view class="fx-1 pi pr-s">
            <view>{{ v.title }}</view>
        </view>
        <view class="fx-s w-7em">
            <view class="tiw">x{{ v.__num || 0 }}</view>
            <view class="fw-500">
                <text>￥</text>
                <text class="h6 fw-550">{{ product_tool.computed_price(v) }}</text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import CkAvatar from '@/cake/visual/avatar/CkAvatar.vue';
import product_tool from '@/tool/modules/product/product_tool';

const prp = defineProps<{
    v: Product
}>()
</script>