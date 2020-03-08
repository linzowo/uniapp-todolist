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
			addTime: '', // 新增的完整时间
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
			// state.todoList[newTodo.addTime] = newTodo;
			console.log(state);
		},
		/** 
		 * 修改已有数据参数值
		 * @param {Number} id 所属的todo任务的id 也就是addTime
		 * @param {String} newData 要修改的数据 id 及 newType
		 * */
		changeTodoDataType(state,newData){
			state.todoList[newData.id].type = newData.newType;
		}
	},
	getters: {}
})

export default store;
