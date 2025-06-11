<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
	<PageLayout>
        <CoAppTopBackBar :clazz="'pb-s '" @back="uniRouter.back" :mat="true">
            <template #tit><view class="tit h7 ta-c">我的订单</view></template>
        </CoAppTopBackBar>
		<view>
			<OrderTabPag/>
		</view>
	</PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/layout/page/PageLayout.vue';
import { authState, uiState } from '@/memory/global';
import { computed, reactive, ref } from 'vue';
import CoAppTopBackBar from '@/components/app/bar/top/CoAppTopBackBar.vue';
import uniRouter from '@/tool/uni/uni-router';
import OrderTabPag from '@/wave/order/OrderTabPag.vue';
const user = computed(() => authState.user)

const aii = reactive({
	h: 83.6
})

</script>

<style lang="sass">
@use '../../ui/sass/__page_conf' as *
page, uni-page-body
	background: $bg-con
</style>
