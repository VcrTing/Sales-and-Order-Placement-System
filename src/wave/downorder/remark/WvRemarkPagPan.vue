<template>
    <OPan :idx="idx">
        <OPanInnerY :h="'68.8vh'" :idx="idx" :orientation="'b'">
            <!--<view class="fx-s">
                <view></view>
                <view class="py"><text class="header-s">填写备注</text></view>
                <view class=""></view>
            </view>-->
            <view class="px-row">
                <view class="py">
                    <textarea v-model="form.remark" class="inp-app bg-def br-s py" 
                        placeholder="如需备注，请填写备注。"></textarea>
                </view>
            </view>
            <view class="px-row">
                <view class="py"><text>快捷输入</text></view>
            </view>
            <view class="px-row">
                <view class="row">
                    <view class="w-333 d-ib py-s px-s ta-c" v-for="(v, i) in fasts" :key="i">
                        <view @tap="funn.tabTxt(v)" class="btn-def br-t py tid" v-if="v.name">{{ v.name }}</view>
                        <view v-else></view>
                    </view>
                </view>
            </view>
            <template #bom>
                <view class="px-row">
                    <OButton @tap="funn.sure" clazz="btn-app" color="def">确定</OButton>
                </view>
            </template>
        </OPanInnerY>
    </OPan>
</template>

<script setup lang="ts">
import OButton from '@/cake/button/OButton.vue';
import CkSpace from '@/cake/content/CkSpace.vue';
import OPan from '@/cake/pan/OPan.vue';
import OPanInnerY from '@/cake/pan/OPanInnerY.vue';
import FeakPageLayout from '@/components/layout/feak/FeakPageLayout.vue';
import pan_tooi from '@/tool/app/pan_tooi';

const prp = defineProps<{
    idx: number, form: ONE
}>()

const funn = {
    tabTxt: (v: ONE) => {
        prp.form.remark = prp.form.remark + v.name + '，'
    },
    sure: () => {
        let src: string = prp.form.remark
        if (src && src.endsWith('，')) { src = src.substring(0, src.length - 1) + '。'; }
        prp.form.remark = src
        pan_tooi.close_pan(prp.idx)
    }
}

const fasts = [
    { name: '少甜' },
    { name: '正常甜' },
    { name: '' },
    { name: '少冰' },
    { name: '多冰' },
    { name: '正常冰' },
    { name: '无辣' },
    { name: '微辣' },
    { name: '正常辣' },
    { name: '多一根吸管' },
    { name: '无需电话通知' },
    { name: '敲门后放门口' },
    { name: '谢谢' }
]
</script>