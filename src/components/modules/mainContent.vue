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
							@focus="setEditingItem(item)"
							@change="updateTodoItem" />
						<text class="item-info" @click="editItem(item)">i</text>
					</div>
				</cell>
			</template>
		</list>
		<!-- <text>{{todoListCon}}</text> -->
	</div>
</template>

<script>
// import { WxcPopup } from 'weex-ui';
const storage = weex.requireModule('storage');
// const modal = weex.requireModule('modal');
module.exports = {
	components: {
		// WxcPopup
	},
	props: ['addTodoItem'],
	data: () => ({
		assetsurl: 'http://192.168.185.122:8082',
		todoListCon: [],
		testInfo: null,
		editingItem: {}
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
		editItem (item) {
			// this.testInfo = item;
			this.$router.push('editTodoItem');
		},
		// 获取编辑中的item
		setEditingItem (item) {
			this.editingItem = item;
		},
		// 修改item
		updateTodoItem (e) {
			this.editingItem.name = e.value;
			this.setData();
		},
		setData () {
			storage.setItem('todoListCon', JSON.stringify(this.todoListCon));
		},
		getData () {
			storage.getItem('todoListCon', (res) => {
				if (res.data !== 'undefined') {
					this.todoListCon = JSON.parse(res.data);
				} else {
					storage.setItem('todoListCon', JSON.stringify([{ name: 'todoItem1' }]));
					this.todoListCon = [{ name: 'todoItem1' }];
				}
			});
		}
	},
	created () {
		this.getData();
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
