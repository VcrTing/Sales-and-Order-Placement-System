<script setup lang="ts">
import CoSmallGlobal from '@/components/global/CoSmallGlobal.vue';
import AppMeta from '@/conf/AppMeta.vue';

</script>

<template>
    <AppMeta>
        <!-- 内容 -->
        <slot></slot>
        <!-- 全局
        <CakeGlobal/>
        -->
        <CoSmallGlobal/>
    </AppMeta>
</template>
