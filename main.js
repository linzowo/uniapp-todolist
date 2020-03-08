import Vue from 'vue';
import App from './App';

// 引入vuex
import store from 'store/index.js';
Vue.prototype.$store = store;

// 引入时间格式化工具
import moment from 'moment';
// 引入uni-icons字体图标库
import uniIcons from '@/components/uni-icons/icons';

// 引入格式化css
import './css/normalize.scss';



// 注册一个全局的时间格式化过滤器
Vue.filter('dateFormat', (dateStr, pattern = "MM月DD日,dddd") => {
	moment.locale("zh-cn");
	return moment(dateStr).format(pattern);
})

// 新建一个全局方法，用于拷贝对象
/** 
 * 拷贝对象的方法
 * @param {Object} oldObject 要拷贝的对象
 * @return {Object} 新的对象 
 * */
Vue.prototype.$copyObject = function (oldObject){
	let oldObjectStr = JSON.stringify(oldObject);
	return JSON.parse(oldObjectStr);
}

// Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
