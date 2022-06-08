import { createRouter, createWebHistory } from "vue-router";

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
      component: () => import("../views/Beranda.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TentangKami.vue"),
    },
    {
      path: "/karir",
      name: "karir",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Karir.vue"),
    },
  ],
});

export default router;