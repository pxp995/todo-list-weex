<template>
	<div>
		<wxc-minibar title="todo-list-from-pxp"
			background-color="#009ff0"
			text-color="#FFFFFF"
			right-text="新建"
			@wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
			@wxcMinibarRightButtonClicked="newItem">
		</wxc-minibar>
		<div>
			<wxc-searchbar ref="wxc-searchbar"
				@wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
				@wxcSearchbarInputReturned="wxcSearchbarInputReturned"
				@wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
				@wxcSearchbarCloseClicked="wxcSearchbarCloseClicked"
				@wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
				@wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"
				placeholder="请输入">
			</wxc-searchbar>
		</div>
	</div>
</template>

<script>
import { WxcButton, WxcPopup, WxcMinibar, WxcCell, WxcSearchbar } from 'weex-ui';
const modal = weex.requireModule('modal');
module.exports = {
	components: { WxcButton, WxcPopup, WxcMinibar, WxcCell, WxcSearchbar },
	data: () => ({

	}),
	methods: {
		minibarLeftButtonClick () {
		},
		newItem () {
			modal.toast({
				message: 'click new btn!',
				duration: 1
			});
		},
		wxcCellClicked () {
		},
		wxcSearchbarInputOnFocus () {
		},
		wxcSearchbarInputOnBlur () {
		},
		wxcSearchbarInputReturned () {
		},
		wxcSearchbarCloseClicked () {
		},
		wxcSearchbarInputOnInput (e) {
			this.value = e.value;
		},
		wxcSearchbarCancelClicked () {
		}
	}
};
</script>
