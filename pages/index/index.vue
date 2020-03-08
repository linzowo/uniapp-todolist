<template>
	<view class="content">
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
uni-page-body {
	height: 100%;
}
.content {
	padding: 20px;
	height: 95%;
	background: url(../../static/2560x1600.jpg) no-repeat;
	-webkit-background-size: auto 100%;
	background-size: auto 100%;
	
	display: flex;
	flex-direction: column;

	header {
		color: #fff;

		h1 {
			font-size: 30px;
			margin-bottom: 10px;
		}
		p {
			font-size: 13px;
		}
	}
}
</style>
