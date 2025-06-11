<template>
    <view class="ps-r zi-m w-100 h-100">
        <view class="w-100 h-100">
            <slot></slot>
        </view>
        <view class="abs-t i-0 r-0 w-100 h-100 zzc z-s" :style="{
            'background-color': 'rgba(0, 0, 0, 0.1)',
            'backdrop-filter':' blur(3px)'
        }"></view>
    </view>
</template>

<script setup lang="ts">
// const prp = defineProps<{}>()

</script>