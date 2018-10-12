<template>
	<div>
		<div class="side-popup">
			<wxc-popup
				:show="isShowSideBar"
				@wxcPopupOverlayClicked="hideSideBar"
				pos="left"
				width="500">
				<div class="side-list">
					<div class="side-list-header">
						<text>todo-list</text>
						<text @click="editList" v-if="!isEditList">编辑</text>
						<text @click="editListDone" v-if="isEditList">完成</text>
					</div>
					<list>
						<template v-for="(item, cellIndex) in todoListList">
							<cell :key="cellIndex">
								<div class="side-item" @click="chooseList(item)">
									<text class="card-label">{{item.name}}</text>
								</div>
							</cell>
						</template>
					</list>
					<text v-if="!isEditList" class="add-list-btn" @click="newList">+ 新增列表</text>
				</div>
			</wxc-popup>
		</div>
	</div>
</template>

<script>
import {
	WxcPopup,
	WxcCell
} from 'weex-ui';
module.exports = {
	components: {
		WxcPopup,
		WxcCell
	},
	props: ['isShowSideBar'],
	data: () => ({
		todoListList: [
			{
				id: 1,
				name: '列表1'
			},
			{
				id: 2,
				name: '列表2'
			},
			{
				id: 3,
				name: '列表3'
			}
		],
		isEditList: false
	}),
	methods: {
		// 侧边
		hideSideBar () {
			this.$emit('hideSideBar');
		},
		chooseList (item) {
			console.log(item);
		},
		newList () {
		},
		editList () {
			this.isEditList = true;
		},
		editListDone () {
			this.isEditList = false;
		}
	}
};
</script>
<style scoped>
.side-popup {
  z-index: 2;
}
/* .side-list{
	margin-top: 40px;
} */
.side-list-header {
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 60px 20px 40px;
}
.add-list-btn {
  height: 90px;
  line-height: 90px;
  padding-left: 40px;
  z-index: 3;
}
.side-item {
  padding: 20px 40px;
}
</style>
