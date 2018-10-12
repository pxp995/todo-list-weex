/* global Vue */
import Router from 'vue-router';
import app from '@/index.vue';
// import HelloWorld from '@/components/HelloWorld';
import topbar from '@/components/modules/topbar';

Vue.use(Router);

module.exports = new Router({
	routes: [
		{
			path: '/',
			name: 'app',
			component: app
		},
		{
			path: '/topbar',
			name: 'topbar',
			component: topbar
		}
	]
});
