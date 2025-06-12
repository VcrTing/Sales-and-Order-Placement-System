<template>
    <view class="px-row">
        <view>
            <view v-for="(v, i) in datas" :key="i">
                <view class="card pt-col">
                    <view class="px-col sus">
                        <text class="fs-w">订单编号&nbsp;</text>
                        <text>{{ v.documentId }}</text>
                    </view>
                    <view class="py">
                        <view class="py-s" v-for="(p, n) in order_tool.get_show_products(v)" :key="n">
                            <view class="fx-s fx-aii-btn-def px-inp">
                                <view class="w-15 h-6vh ani-scaie-aii-x2">
                                    <CkAvatar v-if="p.cover" clazz="h-100 br-t o-h" :src="p.cover"/>
                                    <view v-else class="w-100 h-100 btn-def br-t"></view>
                                </view>
                                <view class="fx-1 px">
                                    <view><text class="h9">{{ p.title }}</text></view>
                                </view>
                                <view class="tis">
                                    <view><text>x</text><text>{{ p.__num }}</text></view>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="pt">
                        <CoMoOrderViewItem :tit="'合计'">
                            <view class="err">
                                <text>￥</text>
                                <text class="h7 fw-550">{{ v.price }}</text>
                            </view>
                        </CoMoOrderViewItem>
                        <CoMoOrderViewItem :tit="'下单时间'">
                            <text>{{ times.fmts(v.createdAt) }}</text>
                        </CoMoOrderViewItem>
                        <CoMoOrderViewItem :tit="'送货地址'">
                            <text>{{ v.address }}</text>
                        </CoMoOrderViewItem>
                        <CoMoOrderViewItem :tit="'备注'">
                            <text>{{ v.remark }}</text>
                        </CoMoOrderViewItem>
                    </view>
                    <view class="py-s bg-def"></view>
                    <view>
                        <CoMoOrderViewItem :tit="'接单状态'">
                            <text>接单中</text>
                        </CoMoOrderViewItem>
                        <CoMoOrderViewItem :tit="'配送状态'">
                            <text>等待配送</text>
                        </CoMoOrderViewItem>
                    </view>
                    <view>
                        <view class="px-inp ta-c py tis fs-n fx-aii-btn-def">
                            <text>如果有任何问题，请微信联系&nbsp;</text>
                            <text class="fs-w">{{ APP_GENERATE_DETAIL.contact }}</text>
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