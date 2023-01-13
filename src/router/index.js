import { createRouter, createWebHistory } from 'vue-router';
import { loadLayoutMiddleware } from './middleware/loadLayout.middelware';
import { AppLayoutsEnum } from '../layouts/types';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/menu',
			name: 'menu',
			component: () => import('../views/MenuView.vue'),
			meta: {
				layout: AppLayoutsEnum.admin,
			},
		},
	],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
