import { createRouter, createWebHistory } from 'vue-router'

function cekToken(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    alert('Mohon login terlebih dahulu!')
    next('/login')
  }
};
function CekProfil(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    next('/')
  }
};



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: () => import('../views/Produk/ProductView.vue')
    },
    {
      path: '/product/create',
      name: 'CreateProduct',
      component: () => import('../views/Produk/createView.vue')
    },
  ]
});

export default router
