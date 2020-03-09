<template>
	<div id="todolist_container">
		<ul class="todolist_list">
			<li class="todolist_list_item" v-for="(item, key) in getList" :key="key">
				<i 
				:class="[
					'todolist_list_item--icons',
					{
						todo_finished:item.finished,
						'uni-icons':item.finished
					}
				]"
				@click="todoFinished(key)"
				>
					{{item.finished?'':''}}
				</i>

				<span class="todolist_list_item--content">
					{{ item.content }}
				</span>

				<picker 
				@change="bindPickerChange($event,key)" 
				:value="index" 
				:range="array"
				class = "todo_type_selecter">
					<view :class="['picker',typeClass[item.type]]">
						{{ array[item.type-1] }}
					</view>
				</picker>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
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
		 * 根据用户选择的任务等级做出相应反应
		 * @param {Object} e 默认事件参数
		 * @param {Number} id 要修改的数据id
		 * */
		bindPickerChange(e,id) {
			this.index = e.detail.value;
			let newData = this.$copyObject(this.$store.state.todoList[id]);
			newData.type = this.index+1;
			this.$store.commit('changeTodoData',newData);
		},
		/** 
		 * 用户点击了完成任务的按钮，修改用户点击的任务状态为完成
		 * @param {Number} id 当前任务key值
		 * */
		todoFinished(id){
			let newData = this.$copyObject(this.$store.state.todoList[id]);
			newData.finished = true;
			newData.finishedTime = new Date().getTime();
			this.$store.commit('changeTodoData',newData);
		}
	},
	filters: {
	},
	computed: {
	  getList () {
	    return this.$store.getters.getUnfinishedTodo
	  }
	},
	mounted: function() {}
};
</script>

<style lang="scss" scoped>
#todolist_container {
	flex: 1;
	bottom: 170px;
	margin-top: 20px;
	overflow: auto;

	.todolist_list {
		margin: 0;
		padding: 0;

		display: flex;
		flex-direction: column;
	}
	.todolist_list_item {
		background-color: #fff;
		padding: 10px;
		margin-bottom: 2px;
		border-radius: 3px;
		display: flex;
		align-items: center;

		.todolist_list_item--content {
			flex: 1;
			margin-right: 10px;
			display: flex;
			flex-direction: column;
			font-size: 14px;
		}

		.todolist_list_item--type {
			font-size: 12px;
			margin-top: 5px;
		}
	}

	.todolist_list_item--icons {
		min-width: 20px;
		min-height: 20px;
		border: 2px solid #ccc;
		border-radius: 10px;
		margin-right: 10px;
	}
}


</style>
