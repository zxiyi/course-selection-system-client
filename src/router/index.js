import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Layout from "@/views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/admin",
    name: "admin",
    component: Layout,
    redirect: "/admin/studentInfo",
    children: [
      {
        path: "studentInfo",
        component: () => import("@/components/Student"),
        name: "studentInfo"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.token;
  if (to.path == "/login") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});

export default router;
