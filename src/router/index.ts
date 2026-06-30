import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("~/layouts/LandingLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("~/pages/HomePage.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("~/layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        component: () => import("~/pages/auth/LoginPage.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
