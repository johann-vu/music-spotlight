import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { EvaluateCallback } from "../scripts/spotify";
import Top from "../views/Top.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/callback",
    redirect: (to) => {
      if (EvaluateCallback(to)) {
        return "/top"
      }
      return "/error"
    },
  },
  {
    path: "/top",
    name: "Top",
    component: Top,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

function scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    window.scrollTo(0, 0);
  }
}

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_PATH),
  routes,
  scrollBehavior
});

export default router;
