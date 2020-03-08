import Vue from 'vue';
import Vuex from 'vuex';

// 将vuex挂载到vue上
Vue.use(Vuex);

// 实例化store
const store = new Vuex.Store({
	state: {
		todoList: {
			1:{
			finished: false, // 是否完成
			content: "任务内容",
			addTime: 1, // 新增的完整时间
			finishedTime: '', // 完成时间
			type: 1, // 任务等级 1 2 3 普通 重要 紧急
		},
			2:{
			finished: true, // 是否完成
			content: "任务内容",
			addTime: 2, // 新增的完整时间
			finishedTime: '', // 完成时间
			type: 1, // 任务等级 1 2 3 普通 重要 紧急
		}}, // 所有任务
	},
	mutations: {
		/** 
		 * 新增todo任务
		 * @param {Object} newTodo 一个新的任务对象
		 * */
		addNewTodo(state,newTodo) {
			Vue.set(state.todoList,newTodo.addTime,newTodo);
		},
		/** 
		 * 修改已有数据参数值
		 * @param {Object} newTodo 一个用于修改原始数据的新任务对象
		 * */
		changeTodoData(state,newTodo){
			// Vue.set(state.todoList,newTodo.addTime,newTodo);
			// state.todoList[newTodo.addTime] = newTodo;
			
			/* 当渲染数据已经和state中的数据绑定时，
			实际情况是渲染中的数据指向的是堆中固定的存储空间，
			这个指向不会因为我们将state中的数据替换为某个新
			对象发生改变，因为这会导致state下的该位置指向了
			一个新的存储空间，但是渲染中的数据还是指向的旧的
			数据空间
			 这就导致了上面的修改无法刷新视图
			 */
			for (let key in state.todoList[newTodo.addTime]) {
				// Vue.set(state.todoList[newTodo.addTime],key,newTodo[key]);
				state.todoList[newTodo.addTime][key] = newTodo[key];
			}
		}
	},
	getters: {}
})

export default store;
