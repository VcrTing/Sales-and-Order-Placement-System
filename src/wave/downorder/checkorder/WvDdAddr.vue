<template>
    <view>
        <view class="">
            <view class="fx-s">
                <view class="w-50" v-for="(v, i) in aii.tab" :key="i">
                    <view class="fx-c py-x2 br-ti-s br-tr-s fx-aii-btn-def"
                        :class="form.sendType == v.v ? 'err bg-con' : 'bg-def'"
                        @tap="form.sendType = v.v"
                    >
                        <view class="h6 fw-550">
                            <text>
                                {{ v.name }}
                            </text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="px-col py-col bg-con br-bi-s br-br-s">
                <view v-if="form.sendType == 0" class="py">
                    <view class="py-col">
                        <OButton color="def" clazz="br-t py" :weak="true">
                            <view class="fx-s py-col">
                                <view class="px-col">
                                    <text class="h9 tit">收货地址</text>
                                </view>
                                <view class="fx-1 fs-w">
                                    <view v-if="form.addr.address">
                                        <view class="ta-i">
                                            <text>{{ form.addr.address }}</text>
                                        </view>
                                        <view class="fx-i ta-i pt-t">
                                            <view><text>{{ form.addr.name }}&nbsp;</text></view>
                                            <view><text>{{ form.addr.phone }}</text></view>
                                        </view>
                                    </view>
                                    <view v-else>
                                        <text class="tiw">请选择地址</text>
                                    </view>
                                </view>
                                <view class="px-s">
                                    <view class="tis h7"><UiI i="r"/> </view>
                                </view>
                            </view>
                        </OButton>
                    </view>
                </view>
                <view v-if="form.sendType == 1">
                    <view class="h-12vh fx-c tid">
                        <view>
                            暂时不支持自提，请谅解。
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import OButton from '@/cake/button/OButton.vue';
import UiI from '@/ui/element/i/UiI.vue';
import { reactive } from 'vue';

const prp = defineProps<{
    form: ONE
}>()


const aii = reactive({
    tab: [
        { name: '外送', v: 0 },
        { name: '自提', v: 1 }
    ],
    ziti: {

    }
})
</script>