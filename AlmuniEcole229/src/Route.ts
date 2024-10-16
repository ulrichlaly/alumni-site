import { createRouter, createWebHistory  } from "vue-router";
import Apropos from './components/Apropos.vue'
import Acceuil from './components/Acceuil.vue'
import Promo1 from "./components/Promo1.vue";
import Promo2 from "./components/Promo2.vue";
import Promo3 from "./components/Promo3.vue";

const routes = [
  {
    path: '/',
    component: Acceuil
  },
  {
    path: '/Apropos',
    component: Apropos
  },
  {
    path: '/Promo1',
    component: Promo1
  },
  {
    path: '/Promo2',
    component: Promo2
  },
  {
    path: '/Promo3',
    component: Promo3
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
});