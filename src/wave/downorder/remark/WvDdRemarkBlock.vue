<template>
    <view>
        <view class="fx-s btn-def py br-t" @tap="funn.open">
            <view class="px">备注</view>
            <view class="fx-1 py-s pi-s">
                <text v-if="aii.remark">{{ aii.remark }}</text>
                <text v-else class="tis">(选填)</text>
            </view>
            <view class="pi pr">
                <UiI clazz="tis" i="r"/>
            </view>
        </view>
        <WvRemarkPagPan :form="aii" :idx="pan.idx"/>
    </view>
</template>

<script setup lang="ts">
import UiI from '@/ui/element/i/UiI.vue';
import WvRemarkPagPan from './WvRemarkPagPan.vue';
import pan_tooi from '@/tool/app/pan_tooi';

const prp = defineProps<{
    aii: ONE
}>()

const funn = {
    open: () => {
        pan_tooi.open_def_b(pan.idx, pan.hui)
    }
}

const pan = { idx: 11, hui: <ElePanHui>{ opacity: 0.4 } }
</script>