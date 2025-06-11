<template>
    <Root>
        <slot></slot>
    </Root>
</template>

<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app';
import Root from '../_root/Root.vue';
import { onMounted } from 'vue';

// const prp = defineProps<{}>()
onMounted(() => { uni.hideTabBar({ success: () => { } }) });
onLaunch(() => { uni.hideTabBar({ success: () => { } }) });
</script>