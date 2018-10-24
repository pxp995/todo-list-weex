<template>
	<div class="edit-todo-item">
		<wxc-minibar title="详细信息"
			background-color="#009ff0"
			text-color="#FFFFFF"
			right-text="完成"
			@wxcMinibarRightButtonClicked="editDone">
			<div slot="left">
			</div>
		</wxc-minibar>
		<div class="side-list">
			<div>优先级</div>
			<div>提醒频率</div>
			<div>提醒时间</div>
		</div>
	</div>
</template>

<script>
import {
	WxcMinibar
} from 'weex-ui';
module.exports = {
	components: {
		WxcMinibar
	},
	data: () => ({
		assetsurl: 'http://192.168.169.125:8082'
	}),
	methods: {
		editDone () {
			this.$router.push('/');
		}
	}
};
</script>
<style scoped>
.edit-todo-item{
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #fff;
}
</style>
