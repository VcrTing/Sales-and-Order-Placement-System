<template>
    <view class="px-row">
        <view>
            <view v-for="(v, i) in datas" :key="i">
                <view class="card pt-col">
                    <view class="px-col sus">
                        <text class="fs-w">下单时间&nbsp;&nbsp;</text>
                        <text>{{ times.fmts(v.createdAt) }}</text>
                    </view>
                    <view class="pt px-inp">
                        <view class="pt-s row">
                            <view class="w-20 d-ib px-s mb-s" v-for="(p, n) in order_tool.get_show_products(v)" :key="n">
                                <view class="h-6vh ani-scaie-aii-x2">
                                    <CkAvatar v-if="p.cover" clazz="h-100 br-t o-h" :src="p.cover"/>
                                    <view v-else class="w-100 h-100 btn-def br-t"></view>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="py pi-inp">
                        <view class="fx-s">
                            <view class="err">
                                <text>￥</text>
                                <text class="h7 fw-550">{{ v.price }}</text>
                            </view>
                            <view>
                                <view class="pr-inp pi btn-def fx-i br-ti br-bi ani-scaie-aii-x2"><view class="fs-s py-t">已完成</view></view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import CkAvatar from '@/cake/visual/avatar/CkAvatar.vue';
import order_tool from '@/tool/modules/order/order_tool';
import times from '@/tool/web/times';
import CoMoOrderViewItem from '../components/CoMoOrderViewItem.vue';
import { APP_GENERATE_DETAIL } from '@/conf/conf-app';

const prp = defineProps<{
    datas: XOrder[]
}>()


</script>