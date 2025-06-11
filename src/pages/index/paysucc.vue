<template>
    <page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
    <PageLayout>
        <view class="ps-r">
            <view class="py-x2">
                <view class="h-60vh fx-c">
                    <view class="ta-c">
                        <view class="btn-succ w-5em h-5em br-cir fx-c"><UiI clazz="h3" i="check"/></view>
                        <view class="ta-c py-x1">
                            <view class="succ h4"><text>支付成功</text></view>
                        </view>
                    </view>
                </view>
                <view class="px-row fx-c">
                    <view class="w-618">
                        <OButton @tap="uniRouter.navigatorpg('index')" clazz="btn-app" color="def">
                            <text class="py-s">确认</text>
                        </OButton>
                    </view>
                </view>
            </view>
        </view>
    </PageLayout>
</template>

<script setup lang="ts">
import OButton from '@/cake/button/OButton.vue';
import CoAppTopBackBar from '@/components/app/bar/top/CoAppTopBackBar.vue';
import PageLayout from '@/components/layout/page/PageLayout.vue';
import { uiState } from '@/memory/global';
import uniRouter from '@/tool/uni/uni-router';
import UiI from '@/ui/element/i/UiI.vue';
import WvDdAddr from '@/wave/downorder/checkorder/WvDdAddr.vue';
import WvDdBom from '@/wave/downorder/checkorder/WvDdBom.vue';
import WvDdOrder from '@/wave/downorder/checkorder/WvDdOrder.vue';
import { computed, nextTick, reactive, ref } from 'vue';

const aii = reactive({
})

const funn = {
    
}

</script>

<style lang="sass">
@use '../../ui/sass/__page_conf' as *
page, uni-page-body
	background: $bg-con
</style>