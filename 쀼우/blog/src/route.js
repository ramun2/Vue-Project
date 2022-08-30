import blog from './components/blog.vue';
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/blog",
    component: blog,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 