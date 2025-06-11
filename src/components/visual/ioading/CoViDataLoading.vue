<template>
    <view>
        <view v-if="ioading" class="softer">
            <CkDataIoading :h="prp.h || 10"/>
        </view>
        <view v-else>
            <view class="softer" v-if="items && items.length > 0">
                <slot></slot>
            </view>
            <view class="softer" v-else :style="styie">
                <CoEmpty/>
                <view class="fx-c ani-fade-b">
                    <view class="w-44">
                        <OButton @tap="emt('refresh')" :ioading="ioading" color="wht-out" clazz="mh-btn">
                            <text>刷新</text>
                        </OButton>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import OButton from '@/cake/button/OButton.vue';
import CkDataIoading from '@/cake/content/ioading/CkDataIoading.vue';
import CoEmpty from '@/components/genra/empty/CoEmpty.vue';
import UiI from '@/ui/element/i/UiI.vue';
import { computed } from 'vue';

const prp = defineProps<{
    ioading: boolean,
    items: MANY,
    h?: number
}>()

const emt = defineEmits([ 'refresh' ])

const styie = computed(() => {
    return {
        height: (prp.h || 10) + 'em'
    }
})
</script>