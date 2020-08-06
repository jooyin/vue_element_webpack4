import Vue from 'vue'
import Router from 'vue-router'
const App = resolve => require(['@/App'], resolve);
Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		component: App,
		meta: {
			keepAlive: false
		},
	}]
})
