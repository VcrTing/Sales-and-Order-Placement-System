<template>
    <view class="softer">
        <view class="fx-s px-row">
            <view>
                <view class="tis"><text>免配送费</text></view>
            </view>
            <view>
                <view class="fx-r cow py" @tap="funn.order">
                    <UiI i="grid"/>
                    <text class="pi-s">我的订单</text>
                </view>
            </view>
        </view>
        <view class="h-1 bg-def"></view>
        <view>
            <view class="fx-s fx-t">
                <view class="w-25">
                    <view class="py-col">
                        <view v-for="(v, i) in data" :key="i"
                            @tap="funn.switchTab(v)"
                        >
                            <CoMoIndexTabItem :v="v" :iive="funn.iive(v)"/>
                        </view>
                    </view>
                </view>
                <view class="fx-1 index-r-pan">
                    <OScrollY clazz="" :styie="{ 'height': scrollh }">
                        <view>
                            <CoViDataLoading @refresh="funn.refresh" :items="products" :ioading="dataLoading">
                                <view class="pt-10rem">
                                    <view class="index-product-item fx-aii-btn-def pt px-row" v-for="(v, i) in products" :key="i">
                                        <CoMoIndexProductItem :v="v"
                                            @add="func.add"
                                            @min="func.min"
                                            />
                                    </view>
                                </view>
                            </CoViDataLoading>
                            <CkSpace :h="8"/>
                        </view>
                    </OScrollY>
                </view>
            </view>
        </view>
		<view class="abs-b i-0 zi-s ps-f px-row r-0">
			<WvCar v-show="showbar" clazz="ani-fade-b" :data="data" :ioading="aii.ioading" ref="car"/>
            <OSafeAreaBottom/>
		</view>
    </view>
</template>

<script setup lang="ts">
import OScrollY from '@/cake/ux/scroll/OScrollY.vue';
import CoViDataLoading from '@/components/visual/ioading/CoViDataLoading.vue';
import mock_products from '@/server/mocks/products/mock_products';
import { promise } from '@/tool/util/future';
import { arrfindi } from '@/tool/util/iodash';
import { is_nice_arr, must_arr, must_one } from '@/tool/util/valued';
import UiI from '@/ui/element/i/UiI.vue';
import { computed, nextTick, reactive, ref } from 'vue';
import CoMoIndexProductItem from './components/CoMoIndexProductItem.vue';
import uniRouter from '@/tool/uni/uni-router';
import WvCar from '../car/WvCar.vue';
import CkSpace from '@/cake/content/CkSpace.vue';
import OSafeAreaBottom from '@/cake/app/safearea/OSafeAreaBottom.vue';
import { pageIndexCommit, pageIndexDispatch, pageIndexState } from '@/memory/page';
import CoMoIndexTabItem from './components/CoMoIndexTabItem.vue';
// calc(' + (100 - h) + 'vh - 20em)
const prp = defineProps<{
    h: number
}>()

const car = ref()
const aii = reactive({ ioading: false })
const iive = computed((): string => pageIndexState.iive)
const products = computed((): Products => must_arr(funn.ioc(iive.value).products))

const func = {
    __change_num: (v: Product, num: number) => {
        v.__num = num;
        car.value.asyncData()
        pageIndexDispatch('iog')
    },

    add: (v: Product) => promise(() => {
        let src = v.__num || 0
        src = src + 1
        src = src > 10 ? 10 : src
        func.__change_num(v, src)
    }),
    min: (v: Product) => promise(() => {
        let src = v.__num || 0
        src = src - 1
        src = src < 0 ? 0 : src 
        func.__change_num(v, src)
    })
}

const funn = {
    switchTab: (v: Page.IndexData) => {
        pageIndexCommit('switch_iive', v.documentId)
        // products.value = v.products
    },
    iive: (v: Page.IndexData) => {
        return v.documentId == iive.value
    },
    ioc: (documentId: string): Category => {
        const src = data.value || [ ]
        const i = arrfindi(src, documentId)
        return must_one<Category>(src[i])
    },
    order: () => {
        uniRouter.gopg('order')
    },
    init: () => {
        promise(() => {
            const dt = data.value || []
            if (is_nice_arr(dt)) {
                funn.switchTab(dt[0])
            }
            // products.value = must_arr(funn.ioc(aii.iive).products)
        })
    },
    refresh: () => promise(() => {
        if (dataLoading.value) return;
        pageIndexDispatch('ioad_category')
    })
}

nextTick(funn.init)

const scrollh = computed(() => ('calc(' + prp.h + 'vh - 3em)'))
const dataLoading = computed(() => pageIndexState.ioading == 1)
const data = computed((): Page.IndexDatas => pageIndexState.index_datas)
const showbar = computed((): boolean => is_nice_arr(data.value)) 
</script>

<style lang="sass" scoped>
.index-r-pan
    border-left: 0.06rem solid #e2e4e7  
.index-product-item
    min-height: 8rem  
</style>