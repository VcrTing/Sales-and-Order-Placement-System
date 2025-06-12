<template>
    <view class="fx-r">
        <view v-if="v.__num > 0" class="pt-02rem pb-02rem" @tap="emt('min', v)">
            <view class="h5 btn-pri w-1em h-1em fx-c br-t">
                -
            </view>
        </view>
        <view v-if="v.__num > 0">
            <view class="px">
                {{ v.__num || 0 }}
            </view>
        </view>
        <view class="pt-02rem pb-02rem" @tap="emt('add', v)">
            <view class="h5 btn-pri w-1em h-1em fx-c br-t">
                +
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
defineProps<{
    v: Product
}>()

const emt = defineEmits([ 'add', 'min' ])
</script>