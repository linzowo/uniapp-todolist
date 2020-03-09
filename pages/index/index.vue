<template>
	<view class="todolist_content">
		<header>
			<h1>我的一天</h1>
			<p class="date">{{ date | dateFormat }}</p>
		</header>
		<todoList></todoList>
		<add></add>
	</view>
</template>

<script>
// 任务列表
import todoList from './todolist.vue';
// 新增任务输入框
import add from './add.vue';

export default {
	data() {
		return {
			date: new Date()
		};
	},
	onLoad() {},
	methods: {},
	components: { todoList, add }
};
</script>

<style lang="scss" scoped>
.todolist_content {
	
	display: flex;
	flex-direction: column;
}
</style>
