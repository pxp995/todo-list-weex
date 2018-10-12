<template>
	<div class="main-content">
		<list>
			<template v-for="(item, cellIndex) in todoListCon">
				<cell :key="cellIndex">
					<div class="side-item">
						<input type="text"
							class="side-item-input"
							:value="item.name"
							placeholder="请输入"
							@input="inputTodoItem" />
						<!-- <image @click="editItem(item)"
							class="item-info"
							:src="assetsurl + '/icon/info.png'">
						</image> -->
						<text class="item-info" @click="editItem(item)">i</text>
					</div>
				</cell>
			</template>
		</list>
		<wxc-popup
			:show="isEditFrom"
			@wxcPopupOverlayClicked="hideEditFrom"
			pos="bottom"
			height="500">
			<div class="side-list">
				<div>优先级</div>
				<div>提醒频率</div>
				<div>提醒时间</div>
			</div>
		</wxc-popup>
		<text>{{testInfo}}</text>
	</div>
</template>

<script>
import { WxcPopup } from 'weex-ui';
module.exports = {
	components: {
		WxcPopup
	},
	props: ['addTodoItem'],
	data: () => ({
		inputVal: '',
		assetsurl: 'http://192.168.165.227:8082',
		todoListCon: [
			{
				id: 1,
				name: '111'
			},
			{
				id: 2,
				name: '222'
			},
			{
				id: 3,
				name: '333'
			}
		],
		testInfo: null,
		isEditFrom: false
	}),
	watch: {
		addTodoItem () {
			this.todoListCon.push({
				name: ''
			});
		}
	},
	methods: {
		// 主要内容
		inputTodoItem (e) {
			this.inputVal = e.value;
		},
		editItem (item) {
			this.testInfo = item;
			this.isEditFrom = true;
			console.log(this.$router);
			this.$router.push('topbar');
		},
		hideEditFrom () {
			this.isEditFrom = false;
		}
	}
};
</script>
<style scoped>
.main-content{
	background-color: #fff;
}
.side-item{
	height: 90px;
	padding: 0 10px;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-color: #cccccc;
	margin-bottom: 1px;
	/* flex-direction: row;
	justify-content: space-between; */
}
.side-item-input{
	width: calc(100% - 90px);
	height: 88px;
	position: absolute;
}
.item-info{
	position: absolute;
	width: 90px;
	height: 90px;
	right: 0;
	text-align: center;
	line-height: 90px;
	color: #666666;
}
.side-item-input:focus{
	outline: none;
}
</style>
