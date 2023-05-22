import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Memories from "./components/Memories.vue";
import Poetry from "./components/Poetry.vue";
import Plans from "./components/Plans.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/memories", component: Memories },
  { path: "/poetry", component: Poetry },
  { path: "/plans", component: Plans },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
