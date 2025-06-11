<template>
    <view class="bar-b bg-con">
        <view class="px-row pt pb-s">
            <view class="fx-s">
                <view>
                    <text>合计</text>
                    <text class="fw-550">￥</text>
                    <text class="fw-550 h5">{{ form.price }}</text>
                </view>
                <view>
                    <OButton @tap="emt('submit')" clazz="btn-app br-t">
                        去支付
                    </OButton>
                </view>
            </view>
        </view>
        <OSafeAreaBottom/>
    </view>
</template>

<script setup lang="ts">
import OSafeAreaBottom from '@/cake/app/safearea/OSafeAreaBottom.vue';
import OButton from '@/cake/button/OButton.vue';

defineProps<{
    form: ONE
}>()

const emt = defineEmits([ 'submit' ])
</script>