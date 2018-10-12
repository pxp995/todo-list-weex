<template>
	<div class="todo-list">
		<!-- 顶部导航栏 -->
		<topbar @showSideBar="showSideBar" @addItem="addItem"></topbar>
		<!-- 侧边弹出栏 -->
		<sidebar :isShowSideBar="isShowSideBar" @hideSideBar="hideSideBar"></sidebar>
		<!-- 内容 -->
		<main-content :addTodoItem="addTodoItem"></main-content>
	</div>
</template>

<script>
import topbar from '@/components/modules/topbar';
import sidebar from '@/components/modules/sidebar';
import mainContent from '@/components/modules/mainContent';
module.exports = {
	components: {
		topbar,
		sidebar,
		mainContent
	},
	data: () => ({
		assetsurl: 'http://192.168.190.209:8082',
		isShowSideBar: false,
		addTodoItem: false
	}),
	methods: {
		showSideBar () {
			this.isShowSideBar = true;
		},
		hideSideBar () {
			this.isShowSideBar = false;
		},
		addItem () {
			this.addTodoItem = !this.addTodoItem;
		}
	}
};
</script>
<style scoped>
.todo-list{}
</style>
