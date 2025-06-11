<script setup lang="ts">
import AppMeta from '@/conf/AppMeta.vue';

</script>

<template>
    <AppMeta>
        <!-- 内容 -->
        <slot></slot>
        <!-- 全局
        <CakeGlobal/>
        -->
    </AppMeta>
</template>
