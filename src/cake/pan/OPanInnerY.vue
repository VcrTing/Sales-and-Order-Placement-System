<template>
    <view>
        <view class="abs-t i-0 w-100 zi-x1 soft o-h" 
            :class="
                (orientation == 't') ? ' br-br br-bi ' : ' br-tr br-ti '
            ">
            <slot name="top"></slot>
        </view>

        <OScrollY
            :clazz="__clazz"
            :styie="{
                'height': h ? h : 'auto',
                'max-height': mxh ? mxh : '100vh'
            }">
            
            <slot></slot>

            <OSafeAreaBottom v-if="close"/>
            <view v-if="close" class="mh-btn"></view>

        </OScrollY>

        
        <view class="abs-bi w-100 zi-x1 soft">
            <slot name="bom"></slot>
            <OSafeAreaBottom/>
        </view>

        <view v-if="close" class="abs-b i-0 w-100 pan-close soft">
            <view :deiay="100" :clazz="'w-100'" :i="'x'" @touch="pan_tooi.close_pan(idx)">
                关闭
            </view>
            <OSafeAreaBottom/>
        </view>
    </view>
</template>

<script setup lang="ts">
import pan_tooi from '@/tool/app/pan_tooi';
import OSafeAreaBottom from '../app/safearea/OSafeAreaBottom.vue';
import OScrollY from '../ux/scroll/OScrollY.vue';
import { computed } from 'vue';
const prp = defineProps<{ 
    idx: number, orientation: ORIENTATION, close?: boolean,
    clazz?: string, h?: string, mxh?: string
}>()

const __clazz = computed(() => {
    const src = (prp.orientation == 't') ? ' br-br br-bi ' : ' br-tr br-ti '
    return src + ' pan-con o-h bg-con ' + prp.clazz
})
</script>