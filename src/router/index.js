import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard/index.vue";
import DashboardSingle from "../views/Dashboard/SingleUser.vue";
import Assessment from "../views/Assessment.vue";
import Questions from "../views/questions.vue";
import Successful from "../views/successful.vue";
// import SingleDashboard from "../views/SingleDashboard.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/singledashboard",
    name: "SingleDashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "SingleDashboard" */ "../views/SingleDashboard.vue"
      ),
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { guest: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/assessment",
    name: "Assessment",
    component: Assessment,
  },
  {
    path: "/questions",
    name: "Questions",
    component: Questions,
  },
  {
    path: "/successful",
    name: "Successful",
    component: Successful,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: ":id",
        name: "dashboard-single-user",
        component: DashboardSingle,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
// Handling Unauthorized Users
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});
// Authorised Users
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.guest)) {
//     if (store.getters.isAuthenticated) {
//       next(`${<router-link
//             to="{
//               name: 'dashboard-single-user',
//               params: { id: 'dashboard-single-user' },
//             }"
//           >{{User}}</router-link>}`);
//       return;
//     }
//     next();
//   } else {
//     next();
//   }
// });

export default router;
