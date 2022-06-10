import { createRouter, createWebHistory } from "vue-router";
import Beranda from "../views/Beranda.vue"
import About from "../views/TentangKami.vue"
import Karir from "../views/Karir.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {
      path: "/",
      name: "home",
      component: Beranda,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    {
      path: "/karir",
      name: "karir",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Karir,
    },
  ],
});

export default router;