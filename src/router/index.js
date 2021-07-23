import Vue from 'vue';
import VueRouter from "vue-router";
// 路由懒加载
const Home = () => import('../views/home/Home')
const  Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)

	// 配置映射关系
const routes = [
	{
		path: '/',
		redirect: '/home'
		
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/category',
		name: 'category',
		// 懒加载写法
		component: () => import('../views/category/Category')
	},
	{
		path: '/cart',
		name : 'cart',
		component: () => import('../views/cart/Cart')
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile
	}
]


const router = new VueRouter({
	routes,
	model: 'history'
})

export default router
