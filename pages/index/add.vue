<template>
	<div id="add_todo">
		<i :class="['add_icon', 'uni-icons', { touch_add_btn: touchAddBtn }]" @touchstart="addBtnTouchstart" @touchend="addBtnTouchend"></i>
		<input type="text" class="new_todo" id="add_todo_content" v-model="newTodoContent" value="" placeholder="添加任务" placeholder-style="color: #fff;" />

		<picker @change="bindPickerChange" :value="index" :range="array" class="todo_type_selecter">
			<view :class="['picker todo_type', typeClass[index + 1]]">{{ array[index] }}</view>
		</picker>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			touchAddBtn: false, // 是否点击了添加按钮
			newTodoContent: '', // 输入框中的内容
			windowHeight: '', // 屏幕的完整高度用于计算什么时候隐藏tabbar

			typeClass: {
				1: 'type-a',
				2: 'type-b',
				3: 'type-c'
			},
			typeText: {
				1: '普通',
				2: '重要',
				3: '紧急'
			},
			index: 0,
			array: ['普通', '重要', '紧急']
		};
	},
	methods: {
		/**
		 * 用户触摸了添加按钮，改变按钮颜色
		 * */
		addBtnTouchstart() {
			this.$data.touchAddBtn = true;
		},
		/**
		 * 用户结束点击添加按钮，恢复颜色
		 * 检测输入框中是否有数据，如果存在数据就将数据保存到store中
		 * */
		addBtnTouchend() {
			this.$data.touchAddBtn = false;

			if (this.newTodoContent == '') return;
			
			this.$store.commit('addNewTodo', {
				finished: false, // 是否完成
				content: this.newTodoContent,
				addTime: new Date().getTime(), // 新增的完整时间
				finishedTime: null, // 完成时间
				type: this.index + 1 // 任务等级 1 2 3 普通 重要 紧急
			});
			
			// 重置picker.index
			this.index = 0;
			this.newTodoContent = '';
		},
		
		/** 
		 * 根据用户选择的任务等级做出相应反应
		 * @param {Object} e 默认事件参数
		 * */
		bindPickerChange(e) {
			this.index = e.detail.value;
		}
	},
	filters: {},
	mounted: function() {
		/**
		 * 获取完整的屏幕高度
		 *
		 * */
		uni.getSystemInfo({
			success: res => {
				this.windowHeight = res.windowHeight;
			}
		});

		/**
		 *  监听屏幕尺寸变化在合适的时机隐藏tabbar
		 * */
		uni.onWindowResize(res => {
			if (res.size.windowHeight < this.windowHeight) {
				uni.hideTabBar({});
			} else {
				uni.showTabBar({});
			}
		});
	}
};
</script>

<style lang="scss" scoped>
#add_todo {
	display: flex;
	align-items: center;
	margin-top: 20px;
	background-color: #6f604f;
	border-radius: 3px;
	padding: 10px;
	padding-left: 40px;
	color: #fff;
	position: relative;

	.add_icon {
		position: absolute;
		left: 5px;
		width: 30px;
		height: 30px;
		margin-right: 10px;
		text-align: center;
		line-height: 30px;
	}

	.new_todo {
		font-size: 14px;
		flex: 1;
		margin-right: 10px;
	}
}

.touch_add_btn {
	color: #007aff;
}
</style>
