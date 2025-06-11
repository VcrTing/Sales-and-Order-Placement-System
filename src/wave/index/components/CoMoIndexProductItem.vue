<template>
    
    <view>
        <view class="fx-s">
            <view class="w-382 pr">
                <view class="w-100 h-6em">
                    <CoImg clazz="h-100" v-if="product_tool.getbanner(v).url" :src="product_tool.getbanner(v).url"/>
                    <view v-else class="h-100 bg-def br-s"></view>
                </view>
            </view>
            <view class="ta-i fx-1">
                <view class="pt-02rem">
                    <text class="h6 fw-550">{{ v.title }}</text>
                </view>
                <view class="pt-02rem">
                    <view class="tis" v-if="v.introduction"><text>{{ v.introduction }}</text></view>
                    <view v-else>&nbsp;</view>
                </view>
                <view class="fx-s">
                    <view class="fx-1">
                        <view class="err">
                            <text>￥</text>
                            <text class="h7 fw-800">{{ v.price }}</text>
                        </view>
                    </view>
                    <view class="fx-1 pt-02rem">
                        <view class="pt-10rem"></view>
                        <view class="fx-r">
                            <view v-if="v.__num > 0" class="pt-02rem pb-02rem" @tap="emt('min', v)">
                                <view class="h5 btn-pri w-1em h-1em fx-c br-t">
                                    -
                                </view>
                            </view>
                            <view v-if="v.__num > 0">
                                <view class="px">
                                    {{ v.__num || 0 }}
                                </view>
                            </view>
                            <view class="pt-02rem pb-02rem" @tap="emt('add', v)">
                                <view class="h5 btn-pri w-1em h-1em fx-c br-t">
                                    +
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import CoImg from '@/components/media/img/CoImg.vue';
import product_tool from '@/tool/modules/product/product_tool';

const prp = defineProps<{
    v: Product
}>()
const emt = defineEmits([ 'add', 'min' ])
</script>