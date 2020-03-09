<template>
	<div id="finished-container" class="todolist_content">
		<header>
			<h1>已完成任务</h1>
			<p class="date">{{ date | dateFormat }}</p>
		</header>
		<todoList></todoList>
	</div>
</template>

<script>
// 任务列表
import todoList from './todolist.vue';
export default {
	data() {
		return {
			msg: 'Hello uniapp',
			date: new Date()
		};
	},
	onLoad() {},
	methods: {},
	components: { todoList }
};
</script>

<style>
.todolist_content {
	height: 100%;
}
</style>
