<template>
	<div>
		<wxc-minibar title="todo-list-from-pxp"
			background-color="#009ff0"
			text-color="#FFFFFF"
			@wxcMinibarRightButtonClicked="newItem">
			<div slot="left" @click="handleShowSideBar">
				<image style="width: 50px; height: 50px;"
					class="topbar-icon"
					:src="assetsurl + '/icon/more.png'">
				</image>
			</div>
			<div slot="right">
				<wxc-icon name="add" @wxcIconClicked="newItem"></wxc-icon>
			</div>
		</wxc-minibar>
	</div>
</template>

<script>
import {
	WxcMinibar,
	WxcIcon
} from 'weex-ui';
module.exports = {
	components: {
		WxcMinibar,
		WxcIcon
	},
	data: () => ({
		assetsurl: 'http://192.168.165.227:8082'
	}),
	methods: {
		// 顶部
		handleShowSideBar () {
			this.$emit('showSideBar');
		},
		newItem () {
			this.$emit('addItem');
		}
	}
};
</script>
<style scoped>
</style>
