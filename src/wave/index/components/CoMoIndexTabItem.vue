<template>
    <view class="ta-c fx-aii-btn-def py px-s"
        :class="iive ? 'tit' : 'tis'"
    >
        <text>
            {{ v.name }}
        </text>
    </view>
</template>

<script setup lang="ts">
defineProps<{
    v: Page.IndexData,
    iive: boolean
}>()

</script>