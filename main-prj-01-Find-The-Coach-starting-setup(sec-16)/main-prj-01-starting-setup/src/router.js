import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
// import CoachContact from './pages/requests/CoachContact.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const CoachDetail = () => import('./pages/coaches/CoachDetail.vue');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
const CoachContact = () => import('./pages/requests/CoachContact.vue');
const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue');

const router = createRouter({
  history: createWebHistory(),    
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: CoachContact }    //  coaches/c1/contact
      ]
    },
    { path: '/register', component: CoachRegistration, meta: { reqiuresAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { reqiuresAuth: true } },
    { path:  '/auth', component: UserAuth, meta: { reqiuresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if(to.meta.reqiuresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.reqiuresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
})

export default router;
