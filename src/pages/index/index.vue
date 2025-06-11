<template>
	<page-meta :root-font-size="uiState.root_font_size_coefficient + 'px'" style="display: block;"/>
	<PageLayout>
		<UserCenterLayout :h="aii.h" :clazz_con="'bg-con'">
			<template #bg>
				<CkZzc>
					<CoImg :src="user.background" clazz="h-100"/>
				</CkZzc>
			</template>
			<template #top>
				<WvIndexTop />
			</template>
			<template #con>
				<WvIndexPag :h="aii.h" />
			</template>
		</UserCenterLayout>
	</PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/layout/page/PageLayout.vue';
import { authState, uiState } from '@/memory/global';
import UserCenterLayout from '@/components/layout/detail/UserCenterLayout.vue';
import { computed, reactive, ref } from 'vue';
import CoImg from '@/components/media/img/CoImg.vue';
import WvIndexTop from '@/wave/index/WvIndexTop.vue';
import WvIndexPag from '@/wave/index/WvIndexPag.vue';
import CkZzc from '@/cake/visual/zzc/CkZzc.vue';
import { future } from '@/tool/util/future';

const user = computed(() => authState.user)

const aii = reactive({
	h: 83.6
})

</script>

