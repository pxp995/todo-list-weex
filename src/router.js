/* global Vue */
import Router from 'vue-router';
import todoList from '@/components/views/todoList';
// import HelloWorld from '@/components/HelloWorld';
import editTodoItem from '@/components/views/editTodoItem';

Vue.use(Router);

module.exports = new Router({
	routes: [
		{
			path: '/',
			name: 'todoList',
			component: todoList
		},
		{
			path: '/editTodoItem',
			name: 'editTodoItem',
			component: editTodoItem
		}
	]
});
